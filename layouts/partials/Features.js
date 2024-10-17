"use client";

import { markdownify } from "@lib/utils/textConverter";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useRef } from "react";

const Features = ({ features }) => {
  return (
    <section className="section">
      <div className="container text-center">
        <div className="animate">
          <p className="uppercase">{features.sub_title}</p>
          {markdownify(features.title, "h2", "mt-4 section-title")}
          {markdownify(features.description, "p", "mt-10")}
        </div>
        <div className="animate from-right relative mt-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.list.map((item, index) => (
              <div key={"feature-" + index} className="feature-card m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300 hover:border-[#ffece4] hover:shadow-none">
                <div className="feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] text-primary">
                  <FeatherIcon icon={item.icon} />
                </div>
                <h3 className="h4 mb-5 mt-6">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

