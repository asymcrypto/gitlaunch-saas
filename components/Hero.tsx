import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.div
      className="w-full py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">🚀 Launch Your SaaS Instantly</h1>
      <p className="text-lg max-w-2xl mx-auto">
        GitLaunch SaaS combines AI, community, and GitHub to help you build, launch, and scale projects faster than ever.
      </p>
    </motion.div>
  );
};

export default Hero;

"use client";

export default function Hero() {
  return (
    <section className="p-8 text-center bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to GitLaunch SaaS</h1>
      <p className="mt-4 text-lg">Manage your GitHub projects with ease!</p>
    </section>
  );
}
