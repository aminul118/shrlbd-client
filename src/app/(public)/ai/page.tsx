import ChatForm from '@/components/modules/Public/ai/ChatForm';
import Container from '@/components/ui/Container';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const AIPage = () => {
  return (
    <Container>
      <div className="mx-auto text-center">
        <h1 className="mb-5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
          Chatting with AI
        </h1>
        <p className="mb-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Know about Epidemiological Surveillance on maternal and child health
          related information
        </p>
      </div>
      <ChatForm />
    </Container>
  );
};

export default AIPage;

// SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'AI | SHRL',
  description:
    'Know about Epidemiological Surveillance on maternal and child health related information',
  keywords:
    'Smart Healthcare, SHRL, about Epidemiological, Data collection, Online consultation, Healthcare services, SHRLBD',
  websitePath: 'about',
});
// SEO End
