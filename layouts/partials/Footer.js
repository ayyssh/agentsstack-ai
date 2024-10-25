import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import Logo from "@layouts/components/Logo";
import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const solutions = config.solutions;
  const { copyright, footer_content } = config.params;

  return (
    <footer className="bg-[#f8f9fa] w-full">
      <div className="container-xl mx-auto">
        <div className="border-y border-border py-10 w-full">
          <div className="animate">
            <h3 className="h5 mb-4">Solutions</h3>
            {/* Responsive grid layout for solutions */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-3">
              {solutions.map((menu) => (
                <div
                  key={menu.name}
                  className="leading-6 sm:leading-7 text-sm md:text-base lg:text-sm py-0.5 sm:py-1 lg:py-1"
                >
                  <Link
                    href={menu.url}
                    className="hover:text-primary hover:underline"
                  >
                    • {menu.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row border-y border-border py-10">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            <ul className="mt-5 leading-7 text-sm">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className="hover:text-primary hover:underline"
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 text-center">
          {markdownify(copyright, "p", "footer-copy-write")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
