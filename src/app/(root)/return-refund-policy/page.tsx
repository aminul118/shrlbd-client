import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return and Refund Policy - Smart Healthcare and Research Ltd.",
  description:
    "Read the return and refund policy of Smart Healthcare and Research Ltd. regarding video consultations and refund eligibility.",
};

export default function ReturnRefundPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10 text-gray-800 font-sans">
      <h2 className="text-4xl font-bold text-center mb-6">
        Return and Refund Policy
      </h2>

      <p className="mb-4">
        <strong>Smart Healthcare and Research Ltd.</strong> strives to provide
        high-quality online video consultation services by licensed doctors. We
        are committed to ensuring a satisfactory experience for all our
        patients. Please read our Return and Refund Policy carefully before
        making a booking.
      </p>

      <section className="mt-8">
        <h4 className="text-2xl font-semibold mt-6 mb-2">
          Valid Reasons to Request a Refund
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            If your scheduled consultation did not occur due to a system error
            or failure on our part (e.g., technical issue, doctor no-show).
          </li>
          <li>
            If you were assigned the wrong doctor or specialty, different from
            what was booked.
          </li>
          <li>
            Refund requests based on change of mind, dissatisfaction with the
            consultation outcome, or personal reasons are not accepted once the
            consultation has started or been completed.
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-2xl font-semibold mt-6 mb-2">
          Terms & Conditions for Refund Requests
        </h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Refund requests must be submitted within 24 hours of the scheduled
            consultation time.
          </li>
          <li>
            Consultation sessions must not have been completed or partially
            availed to be eligible for a refund (except in cases of technical
            failure or doctor absence).
          </li>
          <li>
            You must provide valid proof (e.g., screenshots, communication
            records) if claiming issues like technical failure or wrong doctor
            assignment.
          </li>
          <li>
            All refund claims are subject to verification and approval by Smart
            Healthcare and Research Ltd.
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-2xl font-semibold mt-6 mb-2">Refund Policy</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            If your refund request is approved, the paid amount will be refunded
            within 7 working days via the original payment method.
          </li>
          <li>
            If your consultation is canceled by Smart Healthcare and Research
            Ltd. and rescheduling is not possible, you may claim a full refund.
          </li>
          <li>
            Refunds are not applicable if the patient fails to attend the
            scheduled consultation without prior notice (at least 6 hours before
            appointment time).
          </li>
        </ul>
      </section>

      <section>
        <h4 className="text-2xl font-semibold mt-6 mb-2">Service Policy</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Technical support will be available for patients facing issues in
            joining or during an ongoing consultation session.
          </li>
          <li>
            If any doctor or service-related complaint arises, Smart Healthcare
            and Research Ltd. will facilitate appropriate corrective action,
            including rescheduling or refund as applicable.
          </li>
          <li>
            All consultations are subject to availability and the professional
            judgment of the assigned doctor.
          </li>
          <li>
            Smart Healthcare and Research Ltd. is not responsible for the
            effectiveness of the medical advice provided during consultations.
          </li>
        </ul>
      </section>
    </main>
  );
}
