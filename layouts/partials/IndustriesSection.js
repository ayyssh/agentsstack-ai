"use client";
import { useState } from "react";

const solutionsData = {
  Featured: [
    { title: "Live", description: "Manual cross-browser testing", icon: "🖥️", link: "/live" },
    { title: "Automate", description: "Browser automation grid", icon: "⚙️", link: "/automate" },
    { title: "Percy", description: "Automated visual testing & review", icon: "👁️", link: "/percy" },
    { title: "Accessibility Testing", description: "Test WCAG & ADA compliance", icon: "🧑‍🦽", link: "/accessibility" },
  ],
  "Web Testing": [
    { title: "Test Management", description: "Unify & track all test cases", icon: "📋", link: "/test-management" },
    { title: "Test Observability", description: "Test debugging & insights", icon: "📊", link: "/observability" },
  ],
  "App Testing": [
    { title: "Live App", description: "Manual real device testing", icon: "📱", link: "/live-app" },
    { title: "App Automate", description: "Real device automation cloud", icon: "☁️", link: "/app-automate" },
  ],
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Test your websites and mobile apps
      </h2>
      <div className="flex">
        {/* Tabs */}
        <div className="w-1/4">
          <div className="flex flex-col border-r">
            {Object.keys(solutionsData).map((tab) => (
              <button
                key={tab}
                className={`py-4 px-6 text-left ${
                  activeTab === tab
                    ? "bg-blue-100 text-blue-700 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <h3 className="font-semibold">{tab}</h3>
                <p className="text-sm text-gray-500">
                  {tab === "Featured"
                    ? "Explore our popular products"
                    : `Test ${tab.toLowerCase()} tools and solutions`}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="w-3/4 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsData[activeTab].map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                className="block p-6 bg-white shadow hover:shadow-lg rounded transition"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{solution.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
