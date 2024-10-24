"use client";
import { markdownify } from "@lib/utils/textConverter";

const SimpleTextSection = ({ content }) => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50">
      {/* SVG for a minimal futuristic touch */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute left-0 bottom-0 w-full h-64 text-blue-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            fillOpacity="1"
            d="M0,128L60,128C120,128,240,128,360,154.7C480,181,600,235,720,250.7C840,267,960,245,1080,213.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>

      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
        <div className="lg:w-1/2 flex items-center justify-center">
          <div className="prose max-w-full text-gray-800 leading-relaxed px-10">
            {markdownify(content.description, "p", "mt-4")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleTextSection;
