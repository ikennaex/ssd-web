import React from "react";
import { Link } from "react-router";
import FadeIn from "../fadein";

const About = () => {
  return (
    <section className="container mx-auto px-7 lg:px-20 py-24">
      <FadeIn duration={100}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="/images/aboutimg.jpg"
              alt="Global SSD Chemicals"
              className="w-full max-w-md rounded-md object-cover"
            />
          </div>

          {/* TEXT CONTENT */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              About Global SSD Chemicals
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              At Global SSD Chemicals, we specialize in providing
              professional-grade SSD chemical solutions, activation powders,
              and advanced cleaning equipment for currency restoration and
              industrial use. With years of experience in the chemical industry,
              we have built a reputation for delivering top-quality products
              with precision and reliability.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our commitment to innovation, safety, and customer satisfaction
              ensures that every client receives effective results and
              exceptional support. We proudly serve clients worldwide with
              discreet delivery and expert technical assistance.
            </p>

            <Link
              to="/about"
              className="inline-block bg-customBlue text-white px-6 py-3 rounded-md font-semibold hover:bg-customBlue/90 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default About;
