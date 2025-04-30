/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Smart Healthcare and Research Ltd.",
  description:
    "Learn how Smart Healthcare and Research Ltd. collects, uses, and protects your information.",
};

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 font-sans">
      <h2 className="text-4xl font-bold text-center mb-8">Privacy Policy</h2>

      <p className="mb-4">
        This website is owned and operated by{" "}
        <strong>Smart Healthcare and Research Ltd.</strong> ("we", "us", "our").
        We are committed to safeguarding the privacy of our website visitors.
        This policy sets out how we will treat your personal information.
      </p>

      <p className="mb-6">
        This Privacy Policy applies to all visitors, users, and customers who
        access our services. By using our site or registering, you consent to
        the practices described in this policy.
      </p>

      <SectionTitle>Minors</SectionTitle>
      <p className="mb-6">
        Our platform is not intended for individuals under the age of 18.
        Registration must be completed by a parent or guardian if the user is a
        minor. We reserve the right to terminate accounts if it is found that
        registration was completed by a minor.
      </p>

      <SectionTitle>Information We Collect</SectionTitle>
      <List
        items={[
          "Personal details such as name, address, email, contact number, and ID details.",
          "Financial information like bank account or credit card details (when applicable).",
          "Transaction and usage history on the website.",
          "Browser, IP address, and session activity data.",
          "Any messages or emails sent to us or between users.",
          "Third-party data via integrations (e.g., social media or partner sites).",
          "Cookies and behavioral data (explained below).",
        ]}
      />

      <SectionTitle>Use of Information</SectionTitle>
      <List
        items={[
          "To process your orders and provide customer support.",
          "To personalize and improve your experience.",
          "To detect, prevent, and resolve issues or fraud.",
          "To send important service updates or marketing (with your consent).",
          "To comply with legal requirements.",
        ]}
      />

      <SectionTitle>Disclosure of Information</SectionTitle>
      <List
        items={[
          "To vendors, service providers, and partners involved in delivering our services.",
          "To government or law enforcement when required by applicable law.",
          "To third parties with your explicit permission.",
          "In case of business merger, acquisition, or asset transfer.",
        ]}
      />

      <SectionTitle>Cookies</SectionTitle>
      <p className="mb-6">
        We use cookies to enhance your browsing experience, analyze traffic, and
        personalize content. You can control cookie preferences through your
        browser settings.
      </p>

      <SectionTitle>Security</SectionTitle>
      <p className="mb-6">
        We implement industry-standard security practices, including data
        encryption and access control. However, no system is entirely foolproof,
        and we cannot guarantee absolute security.
      </p>

      <SectionTitle>Access and Updates</SectionTitle>
      <p className="mb-6">
        You can review and update your personal information by logging into your
        account. We retain your data as needed for legal and business purposes.
      </p>

      <SectionTitle>Third-Party Links</SectionTitle>
      <p className="mb-6">
        Our site may contain links to external websites. We are not responsible
        for the privacy practices of these sites and encourage you to read their
        policies.
      </p>

      <SectionTitle>Changes to this Policy</SectionTitle>
      <p className="mb-6">
        We may update this Privacy Policy occasionally. Any changes will be
        posted on this page with the updated effective date.
      </p>

      <SectionTitle>Contact</SectionTitle>
      <p className="mb-2">
        If you have any questions or concerns regarding this policy, contact us
        at:
      </p>
      <ul className="list-disc ps-5">
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:info@shrl.com"
            className="text-blue-600 font-semibold hover:underline"
          >
            info@shrl.com
          </a>
        </li>
        <li>
          <strong>Phone:</strong> +880171185594
        </li>
      </ul>
    </div>
  );
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h4 className="text-xl font-bold mt-10 mb-4">{children}</h4>
);

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc ps-5 mb-6 space-y-2">
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

export default PrivacyPolicyPage;
