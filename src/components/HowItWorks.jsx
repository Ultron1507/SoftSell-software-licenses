import React from "react";

const steps = [
  {
    icon: "ri-upload-cloud-2-line",
    title: "Upload License",
    desc: "Easily upload your unused software license in a few clicks.",
  },
  {
    icon: "ri-search-eye-line",
    title: "Get Valuation",
    desc: "We evaluate your license and provide a fair market quote.",
  },
  {
    icon: "ri-money-dollar-circle-line",
    title: "Get Paid",
    desc: "Accept the offer and receive payment quickly and securely.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 shadow-md rounded-lg border hover:shadow-lg transition-all"
            >
              <div className="text-blue-600 text-5xl mb-4">
                <i className={step.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
