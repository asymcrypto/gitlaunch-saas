import BackToTop from "../components/BackToTop"; import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Auth from "../components/Auth";
import Features from "../components/Features";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <Hero />

      {/* Header */}
      <Header
        title="🚀 Welcome to GitLaunch SaaS"
        subtitle="Build, Launch, and Scale SaaS Products directly from GitHub with AI + Community"
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 space-y-6">
        <h2 className="text-4xl font-bold text-blue-600 text-center">
          Build SaaS in Public. Launch Fast. Grow with Community.
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
          GitLaunch SaaS helps you start, contribute, and scale open-source SaaS projects directly from GitHub. Everything is ready for AI-assisted development and contributor workflows.
        </p>

        {/* Get Started Button */}
        <div className="mt-6">
          <Button onClick={() => alert("🚀 Let's Launch!")}>
            Get Started
          </Button>
        </div>

        {/* Supabase Authentication */}
        <Auth />

        {/* Features Section */}
        <Features />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
{/* Back to Top Button */}
<BackToTop />

"use client"; // Page uses client components

import Header from "./components/Header";
import Hero from "./components/Hero";
import Auth from "./components/Auth";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Auth />
      <BackToTop />
      <Footer />
    </>
  );
}
