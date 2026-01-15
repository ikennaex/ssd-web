import React from "react";
import {
  CheckCircle,
  Globe,
  Activity,
  Users,
  FlaskConical,
  Phone,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 text-gray-900 mt-24">
      {/* Hero Section */}
      <section className="bg-customBlue text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            About Us – FORMULAR 1 CHEMICAL SOLUTION
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-3">
            Excellence in Science. Precision in Purity. Trust Worldwide.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-3">
            At FORMULAR 1 CHEMICAL SOLUTION, we are more than a chemical company
            — pioneers in SSD chemical cleaning solutions and activation
            powders, trusted globally.
          </p>
          <p className="text-sm sm:text-base md:text-lg mt-4">
            With decades of laboratory expertise and a passion for scientific
            innovation, we ensure every drop, every formulation, and every
            product reflects purity, reliability, and performance.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-semibold mb-6">Our Mission</h2>
            <p>
              To deliver safe, high-quality, and effective SSD chemical
              solutions that restore, protect, and preserve with unmatched
              purity and precision.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-6">Our Vision</h2>
            <p>
              To lead the global chemical restoration industry through
              innovation, sustainability, and scientific excellence, making SSD
              technology accessible, efficient, and environmentally responsible.
            </p>
            <p className="mt-4">
              At FORMULAR 1 CHEMICAL SOLUTION, our vision extends beyond
              chemistry — it’s about building trust, transparency, and long-term
              relationships with our clients.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="text-blue-600 font-medium hover:text-blue-800 underline"
          >
            → Explore Our Services
          </a>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Our Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-4">
                Behind every solution is a team of experienced chemical
                engineers, laboratory technicians, and research scientists
                dedicated to pushing the limits of quality and performance.
              </p>
              <p className="mb-4">
                From activation powders to automated SSD cleaning machines, our
                products are the result of continuous innovation, stringent
                testing, and cutting-edge technology. Every batch is produced in
                modern, ISO-certified laboratories, following strict global
                safety and quality standards.
              </p>
              <p>
                We blend science with purpose — ensuring our clients receive
                pure, effective, and professionally formulated solutions for all
                SSD and chemical restoration needs.
              </p>
              <p className="text-gray-500 mt-4">
                Reference ISO certification standards → ISO 9001: Quality
                Management.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/labtech1.jpg"
                alt="Lab Technician"
                className="rounded-xl shadow-lg w-full object-cover max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold mb-6">Our Global Reach</h2>
          <p className="mb-4">
            FORMULAR 1 CHEMICAL SOLUTION proudly serves clients in Africa,
            Europe, Asia, and the Americas. Our logistics and export team
            ensures safe packaging, timely delivery, and expert guidance from
            order to final application.
          </p>
          <p className="mb-4">
            We are recognized as a trusted partner by industries, institutions,
            and restoration professionals who depend on our commitment to
            quality, consistency, and compliance.
          </p>
          <a
            href="/contact"
            className="text-blue-600 font-medium hover:text-blue-800 underline"
          >
            → Contact Our Global Team
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-12 text-center">
            Why Choose FORMULAR 1 CHEMICAL SOLUTION
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-600 mt-1" size={28} />
              <p>
                Certified Quality – All products tested and verified for purity
                and safety.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="text-blue-500 mt-1" size={28} />
              <p>
                Global Supply Network – Reliable worldwide shipping and
                distribution.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <FlaskConical className="text-purple-500 mt-1" size={28} />
              <p>
                Expert Team – Professional chemists and technicians behind every
                solution.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Activity className="text-orange-500 mt-1" size={28} />
              <p>
                Innovative Technology – Precision-engineered formulations for
                top results.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Users className="text-indigo-500 mt-1" size={28} />
              <p>
                Trusted Support – Dedicated assistance before and after your
                purchase.
              </p>
            </div>
          </div>
          <p className="text-center mt-8 text-gray-700">
            Your satisfaction is not just a goal — it’s our guarantee.
          </p>
          <div className="flex justify-center mt-12">
            <img
              src="/images/labtech2.jpg"
              alt="Technician working"
              className="rounded-xl shadow-lg max-h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Innovation & Safety */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Commitment to Innovation and Safety
            </h2>
            <p className="mb-4">
              At FORMULAR 1 CHEMICAL SOLUTION, we never compromise on safety,
              purity, or ethics. Each formulation is backed by scientific
              research, developed to meet international laboratory standards,
              and handled by certified professionals.
            </p>
            <p className="mb-4">
              We continually invest in R&D, upgrading our systems and
              technologies to ensure our clients benefit from the latest
              chemical innovations in the SSD industry.
            </p>
            <p className="text-gray-500">
              Cite chemical research or safety regulation → OECD Chemical Safety
              Standards.
            </p>
          </div>
          <div>
            <img
              src="/images/labtech3.jpg"
              alt="Lab innovation"
              className="rounded-xl shadow-lg w-full object-cover max-h-96"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-24 text-center px-4">
        <h2 className="text-4xl font-semibold mb-6">
          Join the FORMULAR 1 CHEMICAL SOLUTION Family
        </h2>
        <p className="mb-4">
          Partner with a team that blends science, integrity, and customer care.
          Whether you need SSD Solution, Activation Powder, or Automated
          Cleaning Systems — we are here to serve you with precision and
          professionalism.
        </p>
        <p className="flex items-center justify-center gap-2 mb-4 text-lg">
          <Phone size={24} /> Contact Us Today
        </p>
        <p className="mb-4">
          Start your partnership with the world’s trusted leader in SSD chemical
          technology.
        </p>
        <p className="mb-6 font-bold text-xl">
          FORMULAR 1 CHEMICAL SOLUTION — Purity You Can Trust.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          → Get in Touch with Our Experts
        </a>
      </section>
    </div>
  );
};

export default About;
