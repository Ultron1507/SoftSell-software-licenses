import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          Turn Unused Licenses Into Profit
        </h1>
        <p className="text-lg text-gray-300">
          SoftSell helps you securely resell software licenses and earn money effortlessly.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-full text-lg font-medium">
          <i className="ri-exchange-dollar-line mr-2"></i> Sell My Licenses
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
