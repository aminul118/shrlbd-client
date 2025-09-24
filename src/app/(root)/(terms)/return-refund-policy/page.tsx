import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

// SEO stats
export const metadata: Metadata = generateMetaTags({
  title: 'Return and Refund Policy - SHRL',
  description:
    "Review the Return and Refund Policy for Smart Healthcare and Research Ltd.'s online consultation services, including valid refund reasons, terms, and conditions.",
  keywords:
    'Smart Healthcare, SHRL, Return Policy, Refund Policy, Healthcare services, Online consultation, Medical services, SHRLBD',
  image: '/seo/shrl-hero-ss.png',
  websitePath: 'return-refund-policy',
});
// SEO End

const policySections = [
  {
    title: 'Valid Reasons to Request a Refund',
    content: [
      'If your scheduled consultation did not occur due to a system error or failure on our part (e.g., technical issue, doctor no-show).',
      'If you were assigned the wrong doctor or specialty, different from what was booked.',
      'Refund requests based on change of mind, dissatisfaction with the consultation outcome, or personal reasons are not accepted once the consultation has started or been completed.',
    ],
  },
  {
    title: 'Terms & Conditions for Refund Requests',
    content: [
      'Refund requests must be submitted within 24 hours of the scheduled consultation time.',
      'Consultation sessions must not have been completed or partially availed to be eligible for a refund (except in cases of technical failure or doctor absence).',
      'You must provide valid proof (e.g., screenshots, communication records) if claiming issues like technical failure or wrong doctor assignment.',
      'All refund claims are subject to verification and approval by Smart Healthcare and Research Ltd.',
    ],
  },
  {
    title: 'Refund Policy',
    content: [
      'If your refund request is approved, the paid amount will be refunded within 7 working days via the original payment method.',
      'If your consultation is canceled by Smart Healthcare and Research Ltd. and rescheduling is not possible, you may claim a full refund.',
      'Refunds are not applicable if the patient fails to attend the scheduled consultation without prior notice (at least 6 hours before appointment time).',
    ],
  },
  {
    title: 'Service Policy',
    content: [
      'Technical support will be available for patients facing issues in joining or during an ongoing consultation session.',
      'If any doctor or service-related complaint arises, Smart Healthcare and Research Ltd. will facilitate appropriate corrective action, including rescheduling or refund as applicable.',
      'All consultations are subject to availability and the professional judgment of the assigned doctor.',
      'Smart Healthcare and Research Ltd. is not responsible for the effectiveness of the medical advice provided during consultations.',
    ],
  },
];

const ReturnRefundPolicyPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 font-sans text-gray-800 dark:text-white/90">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Return and Refund Policy
      </h1>

      <p className="mb-6 text-sm">
        <strong>Smart Healthcare and Research Ltd.</strong> strives to provide
        high-quality online video consultation services by licensed doctors. We
        are committed to ensuring a satisfactory experience for all our
        patients. Please read our Return and Refund Policy carefully before
        making a booking.
      </p>

      {policySections.map((section, idx) => (
        <div key={idx} className="mt-8">
          <h2 className="mb-2 font-semibold">{section.title}</h2>
          <ul className="list-disc space-y-2 pl-5">
            {section.content.map((item, i) => (
              <li key={i} className="text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReturnRefundPolicyPage;
