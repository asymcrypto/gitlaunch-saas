import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default BackToTop;


"use client";

export default function Hero() {
  return (
    <section className="p-8 text-center bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to GitLaunch SaaS</h1>
      <p className="mt-4 text-lg">Manage your GitHub projects with ease!</p>
    </section>
  );
}
