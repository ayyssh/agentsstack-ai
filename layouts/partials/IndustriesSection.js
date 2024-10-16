"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // For animations

const solutionsData = {
  Featured: [
    { title: "Production and Capacity Planning", description: "", icon: "📈", link: "/" },
    { title: "Supply Chain Management ", description: "", icon: "🚚", link: "/" },
    { title: "Industrial IOT", description: "", icon: "🤖", link: "/" },
    { title: "Digital Twin 2D/3D", description: "", icon: "📁", link: "/" },
    { title: "New Product Introduction (NPI)", description: "", icon: "💻", link: "/" },
    { title: "Anomaly detection (security and data privacy)", description: "", icon: "🔒", link: "/" },
    { title: "Data Integration and Analytics", description: "", icon: "📊", link: "/" },
    { title: "Safety and Audit", description: "", icon: "🛡️", link: "/" },
  ],
  "Manufacturing": [
    { title: "Digital Factory Operating System (DFOS)", description: "Digital Process, MES, IOT, Dashboard and Analytics, Knowledge Graph, Digital Twin, Vision AI", icon: "🏭", link: "/" },
    { title: "Supply Chain Management", description: "", icon: "🚚", link: "/" },
    { title: "New Product Introduction (NPI)", description: "", icon: "📦", link: "/" },
    { title: "Cybersecurity", description: "", icon: "🔒", link: "/" },
    { title: "Robotics/Machine Automation", description: "", icon: "🤖", link: "/" },
  ],
  "Energy & Mining": [
    { title: "Well Resource optimization", description: "", icon: "⛽️", link: "/" },
    { title: "Demand and Material Allocation", description: "", icon: "📦", link: "/" },
    { title: "Geospatial Maps for exploration", description: "", icon: "📍", link: "/" },
    { title: "Pricing Variation Optimization", description: "", icon: "💰", link: "/" },
    { title: "Data Management", description: "", icon: "📊", link: "/" },
    { title: "Safety and Audit validation", description: "", icon: "🛡️", link: "/" },
    { title: "Carbon credit platform", description: "", icon: "🌎", link: "/" },
    { title: "Cybersecurity", description: "", icon: "🔒", link: "/" },
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
                      ? ""
                      : tab === "Manufacturing"
                        ? "Operations,Supply Chain, Digital Labs"
                        : tab === "Energy & Mining"
                          ? "Production throughput"
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
