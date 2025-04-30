/* eslint-disable react/no-unescaped-entities */
import termsData from "@/lib/constant/termsData";

const TermsPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-2">
        Terms and Conditions
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Effective Date: 1st May, 2025
      </p>

      <p className="mb-8 text-gray-700">
        Welcome to <strong>Smart Healthcare and Research Ltd.</strong> ("we,"
        "our," "us"). By accessing or using our services, including online video
        consultations, websites, and applications, you agree to be bound by
        these Terms and Conditions. Please read them carefully.
      </p>

      {termsData.map((section, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
          {Array.isArray(section.content) ? (
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {section.content.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-700">{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsPage;
