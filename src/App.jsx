import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  });

 useEffect(() => {
  document.body.classList.toggle("dark-mode", darkMode);
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);


  return (
    <div className="font-sans">
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />

      {/* Theme Toggle Button - Fixed at bottom right */}
      <button
        className="theme-toggle-btn"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle Theme"
        title="Toggle Theme"
      >
        <i className={darkMode ? "ri-sun-line" : "ri-moon-line"}></i>
      </button>
    </div>
  );
}

export default App;
