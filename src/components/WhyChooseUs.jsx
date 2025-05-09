import React from "react";

const features = [
  {
    icon: "ri-shield-check-line",
    title: "Secure Transactions",
    desc: "Your data and licenses are handled with top-level security.",
  },
  {
    icon: "ri-speed-up-line",
    title: "Fast Payouts",
    desc: "Get paid quickly after we verify your license.",
  },
  {
    icon: "ri-customer-service-2-line",
    title: "Expert Support",
    desc: "Our support team is ready to assist you anytime.",
  },
  {
    icon: "ri-global-line",
    title: "Global Marketplace",
    desc: "Reach verified buyers from around the world.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-50 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-blue-600 text-4xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
