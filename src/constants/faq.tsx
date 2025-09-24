import Link from 'next/link';

// FAQ Data
export const faqData = [
  {
    question: 'Why join the SHRL?',
    answer: (
      <>
        <p>
          Scopes for medical professionals: SHRL provides a unique opportunity
          for networking and developing evidence-based knowledge and skills with
          proper tools. Check out{' '}
          <Link
            href="/services"
            className="font-semibold text-blue-600 underline"
          >
            Our Key Services
          </Link>{' '}
          to learn more.
        </p>
        <br />
        <p>
          Scopes for patients and aware citizens: You have the opportunity to
          empower yourself with knowledge to maintain maternal and child health
          in the most evidence-based approach.
        </p>
      </>
    ),
  },
  {
    question: 'How to join SHRL?',
    answer: (
      <>
        <p>Fill out the following form to join our team.</p>
        <p>
          <Link
            href="/join-team"
            className="font-semibold text-blue-600 underline"
          >
            Join Team
          </Link>
        </p>
        <br />
        <p>
          Your response form will be reviewed and we shall contact you for
          further procedures.
        </p>
      </>
    ),
  },
  {
    question: 'What services do we provide?',
    answer: (
      <p>
        Check out{' '}
        <Link
          href="/services"
          className="font-semibold text-blue-600 underline"
        >
          Our Key Services
        </Link>
      </p>
    ),
  },
  {
    question: 'Does SHRL have any certified training?',
    answer: (
      <p>
        Check{' '}
        <Link href="/events" className="font-semibold text-blue-600 underline">
          Events
        </Link>{' '}
        to learn about our upcoming training events.
      </p>
    ),
  },
  {
    question:
      'Do medical graduates and non-medical postgraduates have scopes to join SHRL?',
    answer: (
      <p>
        Yes. To join, fill out the{' '}
        <Link
          href="/join-team"
          className="font-semibold text-blue-600 underline"
        >
          Form
        </Link>{' '}
        and we’ll get back to you.
      </p>
    ),
  },
];
