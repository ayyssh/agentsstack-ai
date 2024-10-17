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
  const { email, phone, location } = config.contact_info;
  return (
    <footer className="bg-[#f8f9fa] w-full">
      <div className="container-xl mx-auto">
        <div className="row border-y border-border py-12 w-full">
          <div className="animate ">
            <h3 className="h5">Solutions</h3>
            <div className="flex mt-5 w-full">
              <ul className="mr-10 leading-10 w-full">
                {solutions.slice(0, Math.ceil(solutions.length / 4)).map((menu) => (
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
              <ul className="mr-10 leading-10 hidden xl:block w-full">
                {solutions.slice(
                  Math.ceil(solutions.length / 4),
                  Math.ceil(solutions.length / 2)
                ).map((menu) => (
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
              <ul className="mr-10 leading-10 hidden xl:block w-full">
                {solutions.slice(
                  Math.ceil(solutions.length / 2),
                  Math.ceil(solutions.length * (3 / 4))
                ).map((menu) => (
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
              <ul className="leading-10 hidden xl:block w-full">
                {solutions.slice(
                  Math.ceil(solutions.length * (3 / 4))
                ).map((menu) => (
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
        </div>
        <div className="row border-y border-border py-12">
          <div className="animate md:col-6 lg:col-3">
            <Logo />
            {markdownify(footer_content, "p", "mt-3")}
          </div>
          <div className="animate mt-8 md:col-6 lg:col-3 lg:mt-0">
            <h3 className="h5">Quick Links</h3>
            <ul className="mt-5 leading-10">
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

