/* eslint-disable react/no-unescaped-entities */

import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Privacy Policy - SHRL',
  description:
    "Review the Privacy Policy for Smart Healthcare and Research Ltd.'s online consultation services, including data collection practices, security, cookies, and user rights.",
  keywords:
    'Smart Healthcare, SHRL, Privacy Policy, Data collection, Cookies, User rights, Online consultation, Healthcare services, SHRLBD, Data protection',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'privacy-policy',
});

// SEO End

const privacySections = [
  {
    title: 'Minors',
    content: [
      'Our platform is not intended for individuals under the age of 18. Registration must be completed by a parent or guardian if the user is a minor. We reserve the right to terminate accounts if it is found that registration was completed by a minor.',
    ],
  },
  {
    title: 'Information We Collect',
    list: [
      'Personal details such as name, address, email, contact number, and ID details.',
      'Financial information like bank account or credit card details (when applicable).',
      'Transaction and usage history on the website.',
      'Browser, IP address, and session activity data.',
      'Any messages or emails sent to us or between users.',
      'Third-party data via integrations (e.g., social media or partner sites).',
      'Cookies and behavioral data (explained below).',
    ],
  },
  {
    title: 'Use of Information',
    list: [
      'To process your orders and provide customer support.',
      'To personalize and improve your experience.',
      'To detect, prevent, and resolve issues or fraud.',
      'To send important service updates or marketing (with your consent).',
      'To comply with legal requirements.',
    ],
  },
  {
    title: 'Disclosure of Information',
    list: [
      'To vendors, service providers, and partners involved in delivering our services.',
      'To government or law enforcement when required by applicable law.',
      'To third parties with your explicit permission.',
      'In case of business merger, acquisition, or asset transfer.',
    ],
  },
  {
    title: 'Cookies',
    content: [
      'We use cookies to enhance your browsing experience, analyze traffic, and personalize content. You can control cookie preferences through your browser settings.',
    ],
  },
  {
    title: 'Security',
    content: [
      'We implement industry-standard security practices, including data encryption and access control. However, no system is entirely foolproof, and we cannot guarantee absolute security.',
    ],
  },
  {
    title: 'Access and Updates',
    content: [
      'You can review and update your personal information by logging into your account. We retain your data as needed for legal and business purposes.',
    ],
  },
  {
    title: 'Third-Party Links',
    content: [
      'Our site may contain links to external websites. We are not responsible for the privacy practices of these sites and encourage you to read their policies.',
    ],
  },
  {
    title: 'Changes to this Policy',
    content: [
      'We may update this Privacy Policy occasionally. Any changes will be posted on this page with the updated effective date.',
    ],
  },
  {
    title: 'Contact',
    content: ['If you have any questions or concerns regarding this policy, contact us at:'],
    list: ['Email: info@shrl.com', 'Phone: +880171185594'],
  },
];

const PrivacyPolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans">
      <h1 className="text-2xl font-bold text-center mb-6 dark:text-white">Privacy Policy</h1>

      <p className="mb-4 dark:text-white/80">
        This website is owned and operated by <strong>Smart Healthcare and Research Ltd.</strong>{' '}
        ("we", "us", "our"). We are committed to safeguarding the privacy of our website visitors.
        This policy sets out how we will treat your personal information.
      </p>

      <p className="mb-4 dark:text-white/80">
        This Privacy Policy applies to all visitors, users, and customers who access our services.
        By using our site or registering, you consent to the practices described in this policy.
      </p>

      {privacySections.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="font-semibold mb-1 dark:text-white">{section.title}</h2>

          {section.content?.map((para, i) => (
            <p key={i} className="mb-1 text-sm leading-relaxed dark:text-white/80">
              {para}
            </p>
          ))}

          {section.list && (
            <ul className="list-disc ps-5 space-y-2 text-sm dark:text-white/80">
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
