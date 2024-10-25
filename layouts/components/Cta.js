import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import ImageFallback from "./ImageFallback";
import IndustriesSection from "@layouts/partials/IndustriesSection";

function Cta() {
  const { title, content, button, enable, image } = config.call_to_action;
  if (!enable) return;

  return (
    <section
      className="cta section bg-[#023047] mx-auto max-w-[92%] px-[10%] rounded-lg mt-6"
      style={{ backgroundImage: "linear-gradient(rgba(2, 48, 71, 1), rgba(2, 48, 71, 1))" }}
    >
      <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="order-2 lg:order-1 justify-center relative z-10">
          <div className="absolute inset-0  rounded-lg" style={{ zIndex: -1 }}></div>
          <ImageFallback
            src={image}
            width={500}
            height={800}
            className="object-cover border-4 border-solid border-white rounded-lg"
            alt={title}
          />
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-right">
          <div className="text-white flex items-center justify-center h-full">
            <div className="text-center">
              {markdownify(title, "h2", "section-title text-white")}
              {markdownify(content, "p", "mt-6 text-xl font-regular text-white")}
            </div>
          </div>
        </div>
      </div>
      <IndustriesSection/>
    </section>
    
  );
}

export default Cta;

