import React from "react";

interface HeaderProps {
  title?: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = "GitLaunch SaaS",
  subtitle = "Build, Launch, and Scale SaaS Products",
}) => {
  return (
    <header className="w-full bg-blue-600 text-white py-6 shadow-md">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{subtitle}</p>
      </div>
    </header>
  );
};

export default Header;
