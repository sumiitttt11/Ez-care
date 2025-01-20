import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 md:px-32 md:py-32 lg:px-24">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
        <p className="text-gray-600 mb-4">Effective Date: [Insert Date]</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using the ExpertCare platform, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Services Provided</h2>
          <p className="text-gray-600">
            ExpertCare connects users with service providers for various personal and professional needs. While we strive to ensure quality, we do not guarantee the performance of any service provider.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide accurate and complete information when using our platform.</li>
            <li>Ensure timely payment for services booked through ExpertCare.</li>
            <li>Comply with applicable laws and regulations when using our services.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Service Provider Responsibilities</h2>
          <p className="text-gray-600">
            Service providers listed on ExpertCare must ensure professionalism, timely service delivery, and compliance with all relevant laws and regulations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Payment and Refunds</h2>
          <ul className="list-disc pl-6 text-gray-600">
            <li>All payments for services are processed through our secure platform.</li>
            <li>Refunds, if applicable, are subject to our refund policy and must be requested within the stipulated time frame.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="text-gray-600">
            ExpertCare is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or the services provided by third-party service providers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to terminate or suspend access to our platform for users or service providers who violate these terms or engage in fraudulent, abusive, or unlawful activities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
          <p className="text-gray-600">
            We may update these Terms of Service from time to time. Changes will be effective upon posting the updated terms on our platform. Continued use of our services signifies your acceptance of the revised terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <p className="text-gray-600">
            If you have any questions about these Terms of Service, please contact us at [Insert Contact Email].
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
