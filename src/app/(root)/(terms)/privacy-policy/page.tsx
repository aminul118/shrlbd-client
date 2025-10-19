/* eslint-disable react/no-unescaped-entities */

import { privacySections } from '@/constants/terms';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const PrivacyPolicyPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 font-sans text-gray-800">
      <h1 className="mb-6 text-center text-2xl font-bold dark:text-white">
        Privacy Policy
      </h1>

      <p className="mb-4 dark:text-white/80">
        This website is owned and operated by{' '}
        <strong>Smart Healthcare and Research Ltd.</strong> ("we", "us", "our").
        We are committed to safeguarding the privacy of our website visitors.
        This policy sets out how we will treat your personal information.
      </p>

      <p className="mb-4 dark:text-white/80">
        This Privacy Policy applies to all visitors, users, and customers who
        access our services. By using our site or registering, you consent to
        the practices described in this policy.
      </p>

      {privacySections.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="mb-1 font-semibold dark:text-white">
            {section.title}
          </h2>

          {section.content?.map((para, i) => (
            <p
              key={i}
              className="mb-1 text-sm leading-relaxed dark:text-white/80"
            >
              {para}
            </p>
          ))}

          {section.list && (
            <ul className="list-disc space-y-2 ps-5 text-sm dark:text-white/80">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default PrivacyPolicyPage;

// SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Privacy Policy | SHRL',
  description:
    "Review the Privacy Policy for Smart Healthcare and Research Ltd.'s online consultation services, including data collection practices, security, cookies, and user rights.",
  keywords:
    'Smart Healthcare, SHRL, Privacy Policy, Data collection, Cookies, User rights, Online consultation, Healthcare services, SHRLBD, Data protection',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'privacy-policy',
});

// SEO End
