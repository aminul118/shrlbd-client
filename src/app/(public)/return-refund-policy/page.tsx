import { Metadata } from 'next';
import policySections from '@/lib/constant/refund';
import { generateMetaTags } from '@/Seo/generateMetaTags';

// SEO stats
export const metadata: Metadata = generateMetaTags({
  title: 'Return and Refund Policy - SHRL',
  description:
    "Review the Return and Refund Policy for Smart Healthcare and Research Ltd.'s online consultation services, including valid refund reasons, terms, and conditions.",
  keywords:
    'Smart Healthcare, SHRL, Return Policy, Refund Policy, Healthcare services, Online consultation, Medical services, SHRLBD',
  image: '/seo/shrl-hero-ss.png',
  path: 'https://www.shrlbd.com/return-refund-policy',
});
// SEO End

const ReturnRefundPolicyPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 text-gray-800 dark:text-white/90 font-sans">
      <h1 className="text-4xl font-bold text-center mb-4">Return and Refund Policy</h1>

      <p className="mb-6">
        <strong>Smart Healthcare and Research Ltd.</strong> strives to provide high-quality online
        video consultation services by licensed doctors. We are committed to ensuring a satisfactory
        experience for all our patients. Please read our Return and Refund Policy carefully before
        making a booking.
      </p>

      {policySections.map((section, idx) => (
        <div key={idx} className="mt-8">
          <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
          <ul className="list-disc pl-5 space-y-2">
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
