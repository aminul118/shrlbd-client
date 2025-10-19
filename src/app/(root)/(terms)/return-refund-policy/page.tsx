import { policySections } from '@/constants/terms';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

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
