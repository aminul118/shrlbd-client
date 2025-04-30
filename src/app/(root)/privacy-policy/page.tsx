/* eslint-disable react/no-unescaped-entities */
import privacySections from "@/lib/constant/policy";
import { generateMetaTags } from "@/lib/seo/genarateMetaTags";
import { Metadata } from "next";
export const metadata: Metadata = generateMetaTags({
  title: "Privacy Policy - SHRL",
  description:
    "Review the Privacy Policy for Smart Healthcare and Research Ltd.'s online consultation services, including data collection practices, security, cookies, and user rights.",
  keywords:
    "Smart Healthcare, SHRL, Privacy Policy, Data collection, Cookies, User rights, Online consultation, Healthcare services, SHRLBD, Data protection",
  image: "/seo/shrl-hero-ss.png",
  url: "https://www.shrlbd.com/privacy-policy",
});

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This website is owned and operated by{" "}
        <strong>Smart Healthcare and Research Ltd.</strong> ("we", "us", "our").
        We are committed to safeguarding the privacy of our website visitors.
        This policy sets out how we will treat your personal information.
      </p>

      <p className="mb-4">
        This Privacy Policy applies to all visitors, users, and customers who
        access our services. By using our site or registering, you consent to
        the practices described in this policy.
      </p>

      {privacySections.map((section, index) => (
        <div key={index} className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>

          {section.content?.map((para, i) => (
            <p key={i} className="mb-4 text-sm leading-relaxed">
              {para}
            </p>
          ))}

          {section.list && (
            <ul className="list-disc ps-5 space-y-2 text-sm">
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
