import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          Have a question or need a custom quote? Email us or use the quick
          information below — we typically respond in 24 hours.
        </p>
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:info@example.com"
            className="underline hover:text-gray-300"
          >
            info@formular1chemicalsolution.com
          </a>
        </p>
        <p className="mb-4">
          Phone:{" "}
          <a href="tel:+1234567890" className="underline hover:text-gray-300">
            +265 985 789 042
          </a>
        </p>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} FORMULAR 1 CHEMICAL SOLUTION. All rights reserved.
        </p>
      </div>
    </footer>

          {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/258872243416"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <BsWhatsapp className="w-6 h-6" />
      </a>

      </>
  );
};

export default Footer;
