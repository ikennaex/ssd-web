import React from "react";

const products = [
  {
    name: "SSD Solution",
    description:
      "Our flagship cleaning agent for the effective removal of coatings and contaminants. Available in multiple concentrations.",
    image: "/images/ssd.jpg",
  },
  {
    name: "Activation Powder",
    description:
      "High-performance powder that activates and enhances the cleaning process. Use together with SSD Solution for best results.",
    image: "/images/activationpowder.jpg",
  },
  {
    name: "Mercury Powder",
    description:
      "A specialized compound for precision cleaning applications. Handle with appropriate safety precautions and SDS guidance.",
    image: "/images/mercuration.jpg",
  },
  {
    name: "Cleaning Machine",
    description:
      "Automated SSD cleaning equipment built with precision technology to ensure thorough and safe restoration.",
    image: "/images/cleaningmachine.jpg",
  },
];

const Products = () => {
  return (
    <section className="container mx-auto px-7 lg:px-20 py-24">
      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          Our Products
        </h2>
        <p className="text-gray-600 text-lg">
          Explore our{" "}
          <span className="text-customBlue font-medium">
            premium range of SSD chemical products
          </span>{" "}
          designed for exceptional cleaning performance, safety, and purity.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover mb-6"
            />

            <h3 className="text-xl font-semibold text-black mb-3">
              {product.name}
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              {product.description}
            </p>

            <a
              href="https://wa.me/258872243416"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-customBlue text-white px-6 py-2 rounded-md font-medium hover:bg-customBlue/90 transition"
            >
              Order Now
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
