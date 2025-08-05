import getScrollingText from "@/lib/data/getScrollingText";
import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";

type TScrool = {
  _id: string;
  text: string;
};

const ScrollingText = async () => {
  const scrolls: TScrool[] = await getScrollingText();

  return (
    <>
      {scrolls?.map((scroll: TScrool) => (
        <div
          className="bg-slate-200 p-2 rounded-lg container mx-auto text-black"
          key={scroll._id}
        >
          <div className="flex items-center gap-4">
            <Button>Latest</Button>
            <Marquee pauseOnHover gradient={false} speed={50}>
              {scroll?.text}
            </Marquee>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScrollingText;
