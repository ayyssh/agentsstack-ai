"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // For animations

const solutionsData = {
  Featured: [
    { title: "Digital Twin", description: "New infrastructure planning", icon: "🖥️", link: "/live" },
    { title: "Production and Capacity Planning", description: "For 10x efficient manufacturing", icon: "⚙️", link: "/automate" },
    { title: "AI Safety System validation", description: "For mining, oil & gas", icon: "👁️", link: "/percy" },
    { title: "Open Source Data Universe (OSDU)", description: "Data Management", icon: "🧑‍🦽", link: "/accessibility" },
  ],
  "Manufacturing": [
    { title: "Production and Capacity Planning", description: "Unify & track all test cases", icon: "📋", link: "/test-management" },
    { title: "Quality", description: "Test debugging & insights", icon: "📊", link: "/observability" },
  ],
  "Mining, Oil & Gas": [
    { title: "Live App", description: "Manual real device testing", icon: "📱", link: "/live-app" },
    { title: "App Automate", description: "Real device automation cloud", icon: "☁️", link: "/app-automate" },
  ],
  "Retail & Ecommerce": [
    { title: "Live App", description: "Manual real device testing", icon: "📱", link: "/live-app" },
    { title: "App Automate", description: "Real device automation cloud", icon: "☁️", link: "/app-automate" },
  ],
  "Data Centers": [
    { title: "Digital Twin", description: "Manual real device testing", icon: "📱", link: "/live-app" },
    { title: "Commercial Centers", description: "Real device automation cloud", icon: "☁️", link: "/app-automate" },
  ],
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("Featured");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Cutting-edge Solutions for a sustainable future 
      </h2>
      <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white">
        {/* Tabs */}
        <div className="md:w-1/4 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="flex flex-col divide-y">
            {Object.keys(solutionsData).map((tab) => (
              <button
                key={tab}
                className={`py-6 px-6 text-left transition-all font-semibold ${
                  activeTab === tab
                    ? "bg-blue-200 text-blue-700 border-l-4 border-blue-600"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg">{tab}</h3>
                  <p className="text-sm text-gray-500">
                    {tab === "Featured"
                      ? "The game changing innovations"
                      : tab === "Manufacturing"
                        ? "Factories of the future with 10x efficiency and 50% cost reduction"
                        : tab === "Mining, Oil & Gas"
                          ? "Enhance safety, optimize operations, and drive sustainability"
                          : tab === "Retail & Ecommerce"
                            ? "Eliminate waste and embrace digital-first strategies"
                            : tab === "Data Centers"
                              ? "Optimize infrastructure planning and operations"
                              : ""}
                  </p>
                </motion.div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="md:w-3/4 p-8 bg-gradient-to-b from-white to-blue-50">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {solutionsData[activeTab].map((solution, index) => (
              <a
                key={index}
                href={solution.link}
                className="block p-6 bg-white shadow-md hover:shadow-lg rounded-lg transition-all"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-5xl">{solution.icon}</span>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {solution.title}
                    </h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
