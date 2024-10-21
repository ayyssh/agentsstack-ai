"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // For animations
import { markdownify } from "@lib/utils/textConverter";

const solutionsData = {
  "Manufacturing": [
    { title: "Carbon Credit Platform", description: "", icon: "💚", link: "/" },
    { title: "New Product Introduction (NPI)", description: "", icon: "💻", link: "/" },
    { title: "Cybersecurity", description: "", icon: "🔒", link: "/" },
    { title: "Plant Asset Management", description: "", icon: "🏗️", link: "/" },
    { title: "Digital Twin 2D/3D Knowledge Graph", description: "", icon: "📁", link: "/" },
    { title: "Supply Chain Planning", description: "", icon: "🚚", link: "/" },
    { title: "Data Integration & Analytics", description: "", icon: "📊", link: "/" },
    { title: "Production Scheduling", description: "", icon: "🕒", link: "/" },
    { title: "Digital Factory Operating System (DFOS)", description: "Process Automation/MES/MOM, IIOT, Dashboard and Analytics, Safety and Audit, Vision AI", icon: "🏭", link: "/", columnSpan: 4 }
  ],
  "Energy and Materials": [
    { title: "Well Resource optimization", description: "", icon: "⛽️", link: "/" },
    { title: "Demand and Material Allocation", description: "", icon: "📦", link: "/" },
    { title: "Geospatial Maps for exploration", description: "", icon: "📍", link: "/" },
    { title: "Pricing Variation Optimization", description: "", icon: "💰", link: "/" },
    { title: "Exploration Data Management", description: "", icon: "📊", link: "/" },
    { title: "Safety and Audit validation", description: "", icon: "🛡️", link: "/" },
    { title: "Carbon credit platform", description: "", icon: "🌎", link: "/" },
    { title: "Cybersecurity", description: "", icon: "🔒", link: "/" },
  ],
  "Retail": [
  ],
};

const SolutionsSection = () => {
  const [activeTab, setActiveTab] = useState("Manufacturing");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <section className="section pt-0 mt-10">
      <div className="container-xl">
        <div className="relative px-4 py-[10px]">
          <div className="text-center">
            <div className="animate">
              {/* <p>{intro.subtitle}</p> */}
              {markdownify("Talk to Industry Experts", "h2", "mt-4 section-title")}
            </div>
            {/* <div className="mx-auto mt-10 h-full max-h-[394px] w-full max-w-[716px]">
              <VideoPopup id={intro.video_id} thumbnail={intro.thumbnail} />
            </div> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden bg-white">
          {/* Tabs */}
          <div className="md:w-1/4 bg-[#eff6fe]">
            <div className="flex flex-col divide-y">
              {Object.keys(solutionsData).map((tab) => (
                <button
                  key={tab}
                  className={`py-6 px-6 text-left transition-all font-semibold ${activeTab === tab
                    ? "bg-[#023047] text-[#8ecae6] border-l-4 border-[#001D4A]"
                    : "text-[#eb6565] hover:bg-gray-100"
                    }`}
                  onClick={() => handleTabClick(tab)}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg text-[#fff]">
                      {activeTab === tab ? (
                        <span className="text-[#fff]">{tab}</span>
                      ) : (
                        <span className="text-[#113241]">{tab}</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {tab === "Featured"
                        ? ""
                        : tab === "Manufacturing"
                          ? "Factory of the future: High efficiency, Optimal cost"
                          : tab === "Energy and Materials"
                            ? "Exploration, Battery mining and innovation"
                            : ""}
                    </p>
                  </motion.div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="md:w-3/4 p-8 bg-[#dbeafe]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4"
            >
              {solutionsData[activeTab].map((solution, index) => (
                <a
                  key={index}
                  href={solution.link}
                  className={`
                    flex items-center justify-center p-4 bg-white shadow-md hover:shadow-lg rounded-lg transition-all
                    ${solution.columnSpan === 1 ? "sm:col-span-1 md:col-span-1 lg:col-span-1" : ""}
                    ${solution.columnSpan === 2 ? "sm:col-span-2 md:col-span-2 lg:col-span-2" : ""}
                    ${solution.columnSpan === 3 ? "sm:col-span-3 md:col-span-3 lg:col-span-3" : ""}
                    ${solution.columnSpan === 4 ? "sm:col-span-4 md:col-span-4 lg:col-span-4" : ""}
                  `}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">{solution.icon}</span>
                    <div className="flex flex-col items-start justify-center">
                      <h5 className="font-semibold text-gray-900 text-sm">
                        {solution.title}
                      </h5>
                      <p className="text-gray-700 text-xs">{solution.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section >

  );
};

export default SolutionsSection;
