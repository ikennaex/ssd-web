import React from "react";

const steps = [
  {
    step: "01",
    title: "Send Your Inquiry",
    description:
      "Contact our team to discuss your needs and receive expert guidance tailored to your application.",
  },
  {
    step: "02",
    title: "Product Selection",
    description:
      "We recommend the right solution and concentration based on your specific requirements.",
  },
  {
    step: "03",
    title: "Secure Delivery",
    description:
      "Your order is shipped with discreet packaging and reliable logistics to your region.",
  },
  {
    step: "04",
    title: "Application & Support",
    description:
      "Follow our SDS and usage instructions, with expert support available at every step.",
  },
];

const HowItWorks = () => {
  return (
    <section className="container mx-auto px-7 lg:px-20 py-24 ">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg">
          Simple, secure, and fully supported, here’s how to get started.
        </p>
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {steps.map((item, index) => (
          <div key={index} className="text-center">
            {/* STEP NUMBER */}
            <div className="mx-auto w-14 h-14 flex items-center justify-center rounded-full border-2 border-customBlue text-customBlue font-bold text-lg mb-6">
              {item.step}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold text-black mb-3">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
