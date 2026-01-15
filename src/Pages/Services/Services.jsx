import React from "react";
import { Box, Phone } from "lucide-react";
import { Link } from "react-router";

const Services = () => {
  const services = [
    {
      title: "SSD Chemical Cleaning Service",
      desc: "Our flagship service restores stained or coated notes through state-of-the-art SSD chemical formulations. We use lab-tested solutions that gently dissolve chemical coatings without damaging the substrate of the currency. Every process is conducted under ISO-standard laboratory protocols for maximum safety and effectiveness.",
      ref: "ISO 9001 Quality Management Standards",
      img: "/images/labtech4.jpg",
    },
    {
      title: "Activation & Mercury Powder Application",
      desc: "Our team applies premium activation and mercury powders to restore blackened notes, removing all traces of contamination and stains. Each treatment follows precise mixing ratios verified by our in-house chemists to guarantee optimal results. All chemical processes are non-corrosive and completely safe for different currencies.",
      img: "/images/labtech5.jpg"
    },
    {
      title: "Anti-Breeze Powder Removal",
      desc: "We effectively remove the sticky, protective anti-breeze coating that often covers treated banknotes. Our proprietary solution neutralizes the coating, restoring the natural texture and color of the notes. Client confidentiality and safety remain our top priorities.",
    },
    {
      title: "Machine-Assisted Cleaning Solutions",
      desc: "Using automated SSD cleaning machines, we handle large-scale cleaning with precision and speed. Our equipment uses calibrated dosing and controlled temperature settings to ensure uniform cleaning results. These machines are ideal for bulk restoration projects and international lab requests.",
      ref: "Technical Cleaning Equipment Certifications",
    },
    {
      title: "Worldwide Delivery & On-Site Service",
      desc: "FORMULAR 1 CHEMICAL SOLUTION provides safe international shipping of SSD solutions and on-site technician deployment. We maintain strict confidentiality, ensuring that all products and services are delivered securely and on schedule. Our customer support team coordinates every step—from packaging to customs clearance—to guarantee satisfaction.",
      img: "/images/lab.jpg"
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-900 mt-24">
      {/* Hero Section */}
      <section className="bg-customBlue text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            FORMULAR 1 CHEMICAL SOLUTION — Our Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-3">
            At FORMULAR 1 CHEMICAL SOLUTION, we specialize in the advanced restoration
            of defaced, coated, or blackened currencies using cutting-edge SSD chemical
            cleaning solutions.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-3">
            With years of laboratory expertise and a global client base, our certified
            technicians ensure precise, confidential, and results-driven service.
            We combine chemistry, innovation, and professionalism to recover your assets
            safely and effectively.
          </p>
          <Link to={"/about"} className="text-sm sm:text-base md:text-lg mt-4 underline hover:text-gray-300">
            Learn more about our mission and values on our About Us page.
          </Link>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 text-center flex items-center justify-center gap-2">
            <Box size={28} /> Our Core Services
          </h2>

          {/* Service Items */}
          {services.map((service, i) => (
            <div key={i} className="mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3">
                {i + 1}. {service.title.replace(/^\d+\.\s/, "")}
              </h3>
              <p className="text-sm sm:text-base md:text-lg mb-2">{service.desc}</p>


              {service.img && (
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-xl shadow mb-6 overflow-hidden">
                  {/* Make image fit container with object-cover */}
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}

          {/* CTA */}
          <div className="text-center py-12 px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Ready to restore your blackened or defaced notes?
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-4">
              Contact FORMULAR 1 CHEMICAL SOLUTION today for secure, professional SSD chemical cleaning services.
              Our specialists are available 24/7 to provide assistance, guidance, and a free consultation.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-2 flex flex-col sm:flex-row justify-center items-center gap-2">
              <Phone size={20} />{" "}
              <a href="mailto:info@formular1chemicalsolution.com" className="underline hover:text-gray-700">
                Contact Us Now
              </a>{" "}
              |{" "}
              <a
                href="https://wa.me/258872243416"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-700"
              >
                Chat on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
