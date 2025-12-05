/* eslint-disable react/no-unescaped-entities */
import { termsData } from '@/constants/terms';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const TermsPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-2 text-center text-2xl font-bold">
        Terms and Conditions
      </h1>
      <p className="mb-8 text-center text-xs text-gray-500 dark:text-white/80">
        Effective Date: 1st May, 2025
      </p>

      <p className="mb-8 text-gray-700 dark:text-white/80">
        Welcome to <strong>Smart Healthcare and Research Ltd.</strong> ("we,"
        "our," "us"). By accessing or using our services, including online video
        consultations, websites, and applications, you agree to be bound by
        these Terms and Conditions. Please read them carefully.
      </p>

      {termsData.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="mb-2 font-semibold dark:text-white">
            {section.title}
          </h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 dark:text-white/80">
              {section.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="className='text-sm' text-gray-700 dark:text-white/80">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsPage;

// SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Terms and Conditions - SHRL',
  description:
    "Review the Terms and Conditions for using Smart Healthcare and Research Ltd.'s online consultation services, payment policies, and user responsibilities.",
  keywords:
    'Smart Healthcare, SHRL, Terms and Conditions, SHRL policies, Healthcare services, Refund policy, Consultation rules, Online medical consultation, Bangladesh healthcare, SHRLBD',
  image: '/seo/shrl-hero-ss.png',
  websitePath: '/terms-conditions',
});
// SEO End
