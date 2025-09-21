import api from '@/api';
import { Button } from '@/components/ui/button';
import Marquee from 'react-fast-marquee';

const ScrollingText = async () => {
  const scrolls = await api.scrollingText.getScrollingText();

  const texts =
    scrolls?.data?.map((s) => s?.text?.trim())?.filter(Boolean) || [];

  if (texts.length === 0) return null;

  return (
    <div className="container mx-auto rounded-lg bg-slate-200 p-2 text-black dark:bg-slate-900 dark:text-white">
      <div className="flex items-center gap-4">
        <Button variant="destructive">Latest</Button>

        <Marquee pauseOnHover gradient={false} speed={50}>
          {/* Flex row with a 40px gap between items */}
          <div className="flex items-center gap-10">
            {texts.map((t: string, i: number) => (
              <span key={i} className="whitespace-nowrap">
                {t}
              </span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ScrollingText;
