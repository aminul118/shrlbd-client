import { Button } from '@/components/ui/button';
import getScrollingText from '@/lib/data/getScrollingText';
import Marquee from 'react-fast-marquee';

interface Scroll {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
}

const ScrollingText = async () => {
  const scrolls = await getScrollingText();

  const texts = scrolls?.data?.map((s: Scroll) => s?.text?.trim())?.filter(Boolean) || [];

  if (texts.length === 0) return null;

  return (
    <div className="bg-slate-200 dark:bg-slate-900  p-2 rounded-lg container mx-auto text-black dark:text-white">
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
