'use client';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterHeading = () => {
  return (
    <h1 className="text-2xl lg:text-4xl text-red-500 font-bold text-center py-4 ">
      <Typewriter
        words={['Upcoming Events']}
        loop
        cursor
        cursorStyle="_"
        typeSpeed={80}
        deleteSpeed={80}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default TypeWriterHeading;
