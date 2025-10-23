import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Build in Public",
    description: "Start your SaaS and let contributors help you improve it in real-time.",
    emoji: "🛠️",
  },
  {
    title: "AI-Assisted",
    description: "Leverage AI to speed up development, code, and documentation.",
    emoji: "🤖",
  },
  {
    title: "Community Powered",
    description: "Grow your project with open-source contributors and collaborators.",
    emoji: "🌐",
  },
  {
    title: "Supabase Backend",
    description: "Instant database, authentication, and storage integration.",
    emoji: "💾",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">🚀 Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-2">
                {feature.emoji} {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
