import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Expert Care?",
      answer:
        "Expert Care is a service-based company that connects you with reliable professionals to meet your everyday needs, from home maintenance to personal services.",
    },
    {
      question: "How do I book a service?",
      answer:
        "Booking a service is easy! Simply sign up on our platform, browse available services, and schedule an appointment at your convenience.",
    },
    {
      question: "Are the professionals verified?",
      answer:
        "Yes, all professionals listed on our platform go through a thorough verification process to ensure quality and safety.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit/debit cards, online wallets, and UPI payments for your convenience.",
    },
    {
      question: "Can I reschedule or cancel a booking?",
      answer:
        "Yes, you can reschedule or cancel a booking through your account dashboard, provided it meets our cancellation and rescheduling policy.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 md:px-32 md:py-48 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <button
                className="w-full text-left focus:outline-none focus:ring focus:ring-blue-300 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-700">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
