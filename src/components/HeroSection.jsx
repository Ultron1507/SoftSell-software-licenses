import React, { useEffect, useState } from "react";
import { RiBarChartFill, RiArrowDownSLine, RiExchangeDollarLine } from "react-icons/ri";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowScroll(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#1e293b] to-[#0f172a] dark:from-gray-900 dark:to-black text-white min-h-screen px-6 py-6 relative">
      {/* Logo top-left */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <RiBarChartFill className="text-blue-500 text-3xl" />
        <span className="text-2xl font-bold">
          <span className="text-blue-500 font-extrabold">Soft</span>
          <span className="text-gray-200 font-semibold dark:text-white">Sell</span>
        </span>
      </div>

      {/* Main content with animation */}
      <div className="max-w-5xl mx-auto text-center space-y-6 flex items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Turn Unused Licenses Into Profit
          </h1>
          <p className="text-lg text-gray-300 mt-4">
            SoftSell helps you securely resell software licenses and earn money effortlessly.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 transition-all text-white px-6 py-3 rounded-full text-lg font-medium inline-flex items-center gap-2">
            <RiExchangeDollarLine />
            Sell My Licenses
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {showScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 right-6 animate-bounce text-gray-300 flex items-center gap-1"
        >
          <span className="text-sm">Scroll down</span>
          <RiArrowDownSLine className="text-xl" />
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
