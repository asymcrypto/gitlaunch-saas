"use client"; // ensures this is a client component

import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full p-6 bg-gray-900 text-white flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm">&copy; {year} GitLaunch SaaS. All rights reserved.</p>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}
