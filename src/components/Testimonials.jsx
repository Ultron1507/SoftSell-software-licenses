import React from "react";

const testimonials = [
  {
    name: "Emily Carter",
    role: "IT Manager",
    company: "TechNova",
    quote:
      "SoftSell made it incredibly easy to monetize our unused licenses. The process was smooth, and the team was super responsive.",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "CloudAxis",
    quote:
      "Within 48 hours, we uploaded our licenses and got paid. Highly recommend SoftSell for any company with extra software assets.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-white text-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="border p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <div className="text-left">
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <p className="text-sm text-gray-500">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
