'use client';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterHeading = () => {
  return (
    <h1 className="py-4 text-center text-2xl font-bold text-red-500 lg:text-4xl">
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
