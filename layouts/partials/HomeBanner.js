"use client";

import { useEffect } from "react";
import Link from "next/link";
import { gsap } from "@lib/gsap";
import { markdownify } from "@lib/utils/textConverter";

const HomeBanner = ({ banner }) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".banner-title",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
    )
      .fromTo(
        ".banner-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        ">-0.6"
      )
      .fromTo(
        ".banner-btn",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        ">-0.6"
      );
  }, []);

  return (
    <section className="relative h-[60vh] flex items-center justify-center  text-white text-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero_bg.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto pt-0">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            {markdownify(banner.title)}
          </h1>
          <p className="banner-subtitle text-lg lg:text-2xl mb-8 text-[#023047] opacity-90">
            {markdownify(banner.description)}
          </p>
          <div className="banner-btn">
            <Link
              href={banner.link.href}
              className="btn text-lg px-8 py-4 bg-white text-blue-900 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              {banner.link.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

