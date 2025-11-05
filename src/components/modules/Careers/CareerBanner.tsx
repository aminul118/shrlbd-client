'use client';
import { motion } from 'framer-motion';

const CareerBanner = () => {
  return (
    <section className="bg-blue-100 py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 1 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-blue-900 md:text-5xl"
      >
        Careers at Smart Healthcare and Research Limited
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, x: -40 }} // start left side
        animate={{ opacity: 1, x: 0 }} // move to normal position
        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        className="mx-auto mt-4 max-w-2xl text-lg text-gray-700"
      >
        Join our mission to revolutionize healthcare through innovation,
        compassion, and research excellence.
      </motion.p>
    </section>
  );
};

export default CareerBanner;
