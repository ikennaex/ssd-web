import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Integrate with email API (Resend, Formspree, or backend)
    console.log(formData);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSuccess(false), 5000); // Auto-hide success message
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 pt-32">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-center mb-8 text-gray-600">
          Have questions or need assistance? Fill out the form below and our
          specialists will get back to you within 24 hours.
        </p>

        {success && (
          <p className="text-green-600 mb-4 text-center">
            Your message has been sent successfully!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+1 234 567 890"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
              rows={5}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Optional Contact Info */}
        <div className="mt-12 text-center text-gray-700">
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:info@formular1chemicalsolution.com" className="underline hover:text-gray-900">
              info@formular1chemicalsolution.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+265985789042" className="underline hover:text-gray-900">
              +265 985 789 042
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
