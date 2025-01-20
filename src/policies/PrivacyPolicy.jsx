import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 md:px-32 md:py-32 lg:px-24">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-600 mb-4">Effective Date: [Insert Date]</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="mb-2">
            To provide and enhance our services, we collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Personal Information: Name, email address, phone number, home address, and payment details for transactions.</li>
            <li>Service-Related Information: Details of bookings, such as date, time, location, and communication with service providers.</li>
            <li>Device and Usage Information: IP address, browser type, operating system, pages visited, and app version details.</li>
            <li>Location Data: Real-time location data to match you with nearby service providers (collected with your consent).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-2">The information collected is used to:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Facilitate and manage bookings and services.</li>
            <li>Process payments and send receipts.</li>
            <li>Communicate with you about your bookings, updates, and promotional offers.</li>
            <li>Improve and personalize our platform and services.</li>
            <li>Ensure security and prevent fraudulent activities.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Sharing Your Information</h2>
          <p className="mb-2">We may share your information in the following ways:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Service Providers: To fulfill your booking requests.</li>
            <li>Third-Party Vendors: Payment processors, analytics providers, and marketing partners.</li>
            <li>Legal and Regulatory Authorities: When required to comply with laws or respond to legal processes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Privacy Choices</h2>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of receiving promotional communications.</li>
            <li>Restrict or object to certain data processing activities.</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at [Insert Contact Email].</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="text-gray-600">
            We prioritize the security of your data and implement robust measures, such as encryption, regular security audits, and restricted access to sensitive information. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute protection.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking Technologies</h2>
          <p className="text-gray-600">
            We use cookies and similar technologies to enhance user experience, analyze platform usage, and deliver personalized advertisements. You can manage your cookie preferences through your browser settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our platform may contain links to third-party websites or services. We are not responsible for their privacy practices and encourage you to review their policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children’s Privacy</h2>
          <p className="text-gray-600">
            ExpertCare is not intended for individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Changes to This Privacy Policy</h2>
          <p className="text-gray-600">
            We may update this Privacy Policy periodically. Changes will be effective upon posting the updated policy on our platform. We encourage you to review this policy regularly.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
