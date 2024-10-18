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
        <div className="border-y border-border py-12 w-full">
          <div className="animate">
            <h3 className="h5 mb-4">Solutions</h3>
            {/* Responsive grid layout for solutions */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-4">
              {solutions.map((menu) => (
                <div
                  key={menu.name}
                  className="leading-6 sm:leading-8 md:leading-9 lg:leading-8 py-1 sm:py-1.5 lg:py-2 border-b sm:border-b-0 lg:border-none"
                >
                  <Link
                    href={menu.url}
                    className="hover:text-primary hover:underline text-base"
                  >
                    • {menu.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            <ul className="mt-5 leading-8">
              {menu.footer.map((menu) => (
                <li key={menu.name}>
                  <Link
                    href={menu.url}
                    className="hover:text-primary hover:underline text-base"
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
