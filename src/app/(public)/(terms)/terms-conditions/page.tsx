/* eslint-disable react/no-unescaped-entities */
import { generateMetaTags } from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'Terms and Conditions - SHRL',
  description:
    "Review the Terms and Conditions for using Smart Healthcare and Research Ltd.'s online consultation services, payment policies, and user responsibilities.",
  keywords:
    'Smart Healthcare, SHRL, Terms and Conditions, SHRL policies, Healthcare services, Refund policy, Consultation rules, Online medical consultation, Bangladesh healthcare, SHRLBD',
  image: '/seo/shrl-hero-ss.png',
  path: 'terms-conditions',
});
// SEO End

const termsData = [
  {
    title: '1. Services',
    content: `Smart Healthcare and Research Ltd. provides online healthcare consultation services by licensed doctors through video calls, chats, and digital platforms. Our services are intended to support, not replace, in-person medical care when necessary.`,
  },
  {
    title: '2. Patient Responsibilities',
    content: [
      'You must provide accurate, complete, and up-to-date information during registration and consultation.',
      'You are responsible for maintaining the confidentiality of your account credentials.',
      'You agree to use the services only for lawful and personal healthcare purposes.',
    ],
  },
  {
    title: '3. Consultation Policy',
    content: [
      'Appointments must be booked through our official website or application.',
      "Consultation availability depends on the doctor's schedule.",
      'In case of technical failures or doctor unavailability, we will arrange rescheduling or offer a refund as per our Return and Refund Policy.',
    ],
  },
  {
    title: '4. Payments and Refunds',
    content: [
      'All consultations must be paid in advance at the time of booking.',
      'Refunds are processed only under the conditions stated in our Return and Refund Policy.',
      'No refunds will be provided for completed consultations unless service failure is proven.',
    ],
  },
  {
    title: '5. Privacy Policy',
    content:
      'We are committed to protecting your privacy. All personal data collected is handled according to our Privacy Policy, ensuring confidentiality, security, and lawful processing.',
  },
  {
    title: '6. Limitations of Service',
    content: [
      'Online consultations are based on the information you provide. Misleading or incomplete information may affect the quality of advice.',
      'Our services are not suitable for emergencies. For urgent medical needs, you must seek immediate in-person care.',
    ],
  },
  {
    title: '7. Limitation of Liability',
    content: [
      'Any medical complications arising from miscommunication during online consultations.',
      'Technical interruptions beyond our control, including internet issues.',
      'The effectiveness or outcomes of medical advice provided by doctors.',
    ],
  },
  {
    title: '8. Intellectual Property',
    content:
      'All content on our platform, including logos, text, graphics, and software, is the property of Smart Healthcare and Research Ltd. and protected by applicable laws. You may not reproduce, distribute, or use our content without written permission.',
  },
  {
    title: '9. Amendments',
    content:
      'We may update these Terms and Conditions from time to time. Changes will be effective once posted on our website. We encourage users to review the Terms periodically.',
  },
  {
    title: '10. Governing Law',
    content: 'These Terms are governed by and construed in accordance with the laws of Bangladesh.',
  },
  {
    title: '11. Contact Us',
    content: [
      'Company Name: Smart Healthcare and Research Ltd.',
      'Email: info@shrl.com',
      'Phone: +880171185594',
    ],
  },
];

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-bold text-center mb-2 text-2xl">Terms and Conditions</h1>
      <p className="text-center text-xs text-gray-500 dark:text-white/80 mb-8">
        Effective Date: 1st May, 2025
      </p>

      <p className="mb-8 text-gray-700 dark:text-white/80">
        Welcome to <strong>Smart Healthcare and Research Ltd.</strong> ("we," "our," "us"). By
        accessing or using our services, including online video consultations, websites, and
        applications, you agree to be bound by these Terms and Conditions. Please read them
        carefully.
      </p>

      {termsData.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="font-semibold mb-2 dark:text-white">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-white/80 text-sm">
              {section.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700 dark:text-white/80 className='text-sm'">
              {section.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsPage;
