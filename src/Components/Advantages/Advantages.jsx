import React, { useState } from "react";

const faqs = [
  {
    question: "Are your products safe to use?",
    answer:
      "All products are formulated with safety in mind. Detailed SDS and handling instructions are provided with each order. Follow local laws and regulations when using chemical products.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. We deliver worldwide through trusted logistics partners, with discreet packaging and tracking.",
  },
  {
    question: "How long does it take to deliver?",
    answer:
      "Delivery time depends on your location — typically 3–7 business days for international orders, subject to customs processing.",
  },
  {
    question: "Which payment methods do you accept?",
    answer:
      "We accept major payment options including bank transfers and secure digital methods. Contact sales for specific payment arrangements.",
  },
];

const Advantages = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-customBlue">
    <section className="container mx-auto px-7 lg:px-20 py-24">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-white text-lg">
          Clear answers to common questions about our products and process.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-200 rounded-lg"
          >
            {/* QUESTION */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left px-6 py-4 font-medium text-black focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* ANSWER */}
            {openIndex === index && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Advantages;
