import { BeakerIcon, ShieldCheckIcon, TruckIcon } from "lucide-react";
import React from "react";

const features = [
  {
    icon: BeakerIcon,
    title: "High Purity",
    subtitle: "SSD Solutions",
  },
  {
    icon: TruckIcon,
    title: "Global Shipping",
    subtitle: "Worldwide delivery",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trusted & Secure",
    subtitle: "Certified handling",
  },
];

const InfoTab = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center md:justify-start gap-4"
            >
              <item.icon className="w-10 h-10 text-blue-700 flex-shrink-0" />

              <div>
                <h4 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoTab;
