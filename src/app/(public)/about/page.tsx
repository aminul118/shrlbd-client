import generateMetaTags from '@/Seo/generateMetaTags';
import { Metadata } from 'next';

// SEO Starts
export const metadata: Metadata = generateMetaTags({
  title: 'About | SHRL',
  description:
    "Review the About for Smart Healthcare and Research Ltd.'s online consultation services, including data collection practices, security, cookies, and user rights.",
  keywords:
    'Smart Healthcare, SHRL, Privacy Policy, Data collection, Cookies, User rights, Online consultation, Healthcare services, SHRLBD, Data protection',
  websitePath: '/about',
});
// SEO End

const AboutPage = () => {
  return (
    <div className="px-6 md:px-20 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-primary">About Us</h1>
      <p className="mb-4">
        At <strong>Smart Healthcare and Research Ltd. (SHRL)</strong>, we are committed to advancing
        maternal and child health through innovative, accessible, and research-driven healthcare
        solutions. Our mission is to bridge the gap in healthcare services for women and children,
        especially in underserved communities.
      </p>
      <p className="mb-4">
        Our flagship online consultation platform, <strong>BAN-GDM</strong>, offers secure, private,
        and expert medical support— particularly for diabetes during pregnancy—right from the
        comfort of home. This platform uniquely empowers mothers with diabetes to actively manage
        their condition.
      </p>
      <p className="mb-4">
        Patient empowerment is at the heart of what we do. While central to GDM care, our approach
        also benefits those facing other health challenges like infertility, weight management, and
        PCOS.
      </p>
      <p className="mb-4">
        In addition to virtual care, we conduct high-quality research, deliver hands-on training for
        healthcare professionals, and lead community outreach initiatives to expand healthcare
        access. We help people understand why and how lifestyle modifications can lead to a
        healthier life.
      </p>
      <p>
        Through education, empowerment, and collaboration with government bodies, NGOs, and academic
        institutions, SHRL is shaping a healthier future—
        <strong>one woman, one child, one community at a time</strong>.
      </p>
    </div>
  );
};

export default AboutPage;
