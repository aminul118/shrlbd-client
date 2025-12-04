/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import 'highlight.js/styles/github.css'; // or 'atom-one-dark.css'
import 'katex/dist/katex.min.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils'; // optional helper if you have it
import { Bot, Copy, Link as LinkIcon, Loader2, Send, User } from 'lucide-react';

// ---- Types ----
export type ChatMessage = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

// ---- Small utilities ----
function copyToClipboard(text: string) {
  if (!navigator?.clipboard) return;
  navigator.clipboard.writeText(text).catch(() => {});
}

// ---- CodeBlock with copy button & syntax highlight ----
const CodeBlock: React.FC<
  { language?: string; value: string } & React.HTMLAttributes<HTMLPreElement>
> = ({ language, value, ...rest }) => {
  return (
    <div className="group relative">
      <pre
        className="overflow-x-auto rounded-xl bg-zinc-900 p-4 text-sm text-zinc-50"
        {...rest}
      >
        <code className={`language-${language ?? ''}`}>{value}</code>
      </pre>
      <button
        type="button"
        onClick={() => copyToClipboard(value)}
        className="absolute top-2 right-2 inline-flex items-center gap-2 rounded-md border bg-zinc-800 px-2 py-1 text-xs text-zinc-100 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-zinc-700"
        aria-label="Copy code"
      >
        <Copy className="h-3.5 w-3.5" /> Copy
      </button>
    </div>
  );
};

// ---- Markdown Components (ChatGPT-like) ----
const mdComponents = {
  h1: (props: any) => (
    <h1 className="mt-4 mb-2 text-2xl font-bold" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="mt-4 mb-2 text-xl font-semibold" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="mt-3 mb-2 text-lg font-semibold" {...props} />
  ),
  p: (props: any) => <p className="mb-3 leading-7" {...props} />,
  ul: (props: any) => (
    <ul className="mb-3 ml-6 list-disc space-y-1" {...props} />
  ),
  ol: (props: any) => (
    <ol className="mb-3 ml-6 list-decimal space-y-1" {...props} />
  ),
  li: (props: any) => <li className="mb-0.5" {...props} />,
  table: (props: any) => (
    <div className="mb-4 overflow-x-auto rounded-lg border">
      <table className="w-full border-collapse text-left" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="border-b bg-zinc-50 p-2 font-medium" {...props} />
  ),
  td: (props: any) => <td className="border-b p-2 align-top" {...props} />,
  a: ({ node, ...props }: any) => (
    <a
      className="inline-flex items-center gap-1 text-blue-600 underline underline-offset-4 hover:text-blue-700"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      <LinkIcon className="h-4 w-4" />
      {props.children}
    </a>
  ),
  img: ({ src = '', alt = '' }: any) => {
    // Next/Image requires allowed domains in next.config.js
    return (
      <span className="my-3 block">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="max-h-[420px] w-auto rounded-xl" />
      </span>
    );
  },
  code({ inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    const value = String(children).replace(/\n$/, '');
    if (inline) {
      return (
        <code
          className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-[13px]"
          {...props}
        >
          {children}
        </code>
      );
    }
    return <CodeBlock language={match?.[1]} value={value} />;
  },
};

// ---- Bubble component ----
const Bubble: React.FC<{
  role: ChatMessage['role'];
  children: React.ReactNode;
}> = ({ role, children }) => {
  const isUser = role === 'user';
  return (
    <div
      className={cn(
        'flex w-full gap-3',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      {!isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-zinc-100">
          <Bot className="h-5 w-5 text-zinc-700" />
        </div>
      )}
      <div
        className={cn(
          'max-w-[85%] rounded-2xl px-4 py-3 leading-6 shadow-sm',
          isUser ? 'bg-blue-600 text-white' : 'border dark:bg-slate-900',
        )}
      >
        {children}
      </div>
      {isUser && (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
          <User className="h-5 w-5" />
        </div>
      )}
    </div>
  );
};

// ---- Streaming helper (optional). If your backend supports text/event-stream, plug it in. ----
async function* streamFetch(url: string, payload: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok || !res.body) throw new Error('Network error');
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    yield decoder.decode(value, { stream: true });
  }
}

// ---- Main component ----
export default function ChatForm() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setInput('');
    setLoading(true);

    // OPTION A: simple JSON response (your current API)
    try {
      const res = await fetch(`https://server.shrlbd.com/api/v1/ai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text }),
      });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      const content =
        typeof data?.data === 'string' ? data.data : JSON.stringify(data);
      setMessages((prev) => [...prev, { role: 'assistant', content }]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Oops! Something went wrong.' },
      ]);
    } finally {
      setLoading(false);
    }

    // OPTION B: Uncomment this to use streaming when your backend supports it
    // setMessages((prev) => [...prev, { role: "assistant", content: "" }]);
    // try {
    //   let acc = "";
    //   for await (const chunk of streamFetch("http://localhost:5000/api/v1/ai/chat/stream", { message: text })) {
    //     acc += chunk;
    //     setMessages((prev) => {
    //       const next = [...prev];
    //       next[next.length - 1] = { role: "assistant", content: acc };
    //       return next;
    //     });
    //   }
    // } catch (e) {
    //   setMessages((prev) => [...prev, { role: "assistant", content: "Oops! Something went wrong." }]);
    // } finally {
    //   setLoading(false);
    // }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!loading) sendMessage();
    }
  };

  return (
    <div className="mx-auto flex min-h-[500px] w-full max-w-4xl flex-col rounded-2xl border p-4">
      {/* Messages */}
      <div ref={listRef} className="flex-1 space-y-4 overflow-y-auto pr-1">
        {messages.length === 0 && (
          <div className="mt-16 text-center text-zinc-500">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border">
              <Bot className="h-6 w-6 text-zinc-700" />
            </div>
            Ask me anything. I can return text, links, tables, images, code,
            math, and more!
          </div>
        )}
        {messages.map((m, i) => (
          <Bubble key={i} role={m.role}>
            {m.role === 'assistant' ? (
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[
                  rehypeSlug,
                  rehypeKatex,
                  rehypeHighlight,
                  rehypeRaw,
                  rehypeSanitize,
                ]}
                components={mdComponents as any}
              >
                {m.content}
              </ReactMarkdown>
            ) : (
              <div className="break-words whitespace-pre-wrap">{m.content}</div>
            )}
          </Bubble>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            Generating…
          </div>
        )}
      </div>

      {/* Composer */}
      <div className="mt-3 flex gap-2">
        <Input
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="flex-1"
        />
        <Button
          onClick={sendMessage}
          disabled={loading || !input.trim()}
          className="inline-flex items-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending
            </>
          ) : (
            <>
              <Send className="h-4 w-4" /> Send
            </>
          )}
        </Button>
      </div>

      {/* Hints */}
      <div className="mx-auto mt-2 max-w-lg py-4 text-center text-xs text-zinc-500">
        Tip: The assistant supports Markdown, math (LaTeX), tables, and
        syntax-highlighted code. Paste image URLs to show images.
      </div>
    </div>
  );
}

/*
NEXT STEPS / NOTES
1) Allow remote images in next.config.js:

// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' },
    ],
  },
};

2) If your backend returns markdown with images/links/code, this UI will render them nicely.
3) For streaming, implement a text/event-stream endpoint (see OPTION B) and update the URL.
4) Security: rehype-raw + rehype-sanitize lets safe inline HTML. Keep sanitize enabled.
*/
