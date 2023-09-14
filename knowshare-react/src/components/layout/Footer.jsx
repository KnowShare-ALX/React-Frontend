import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";
import Heading from "./Atoms/Heading";
import Nav from "./Atoms/Nav";

const Footer = () => {
  const company = [
    {
      id: 0,
      name: "Home",
      link: "/",
    },
    {
      id: 1,
      name: "About us",
      link: "/about",
    },
    {
      id: 2,
      name: "Contact",
      link: "/contact",
    },
    {
      id: 3,
      name: "Log In",
      link: "/login",
    },
    {
      id: 4,
      name: "Sign Up",
      link: "register",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog/home",
    },
  ];

  const support = [
    {
      id: 0,
      name: "Information",
      link: "/subscribe",
    },
    {
      id: 1,
      name: "Privacy Policy",
      link: "/info",
    },
    {
      id: 2,
      name: "FAQs",
      link: "/info",
    },
    {
      id: 3,
      name: "Community",
      link: "/info",
    },
  ];

  return (
    <div className="absolute bottom-0 shadow border w-full">
      <div className="md:flex grid-cols-1 justify-between mx-50 w-full py-8 px-4 lg:gap-[5rem] bg-primary">
        <div className="w-full lg:w-4/12 lg:pl-[8rem]">
          <div className="flex flex-col text-left items-center">
            <div className="my-1"></div>
            <div className="flex flex-col px-2 py-4 mx-auto justify-between text-center">
              <div className="flex gap-5 pt-4 text-2xl text-[#0f7173]">
                <a
                  className="hover:text-slate-300 active:text-slate-400"
                  href="/"
                  target="blank"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-slate-300 active:text-slate-400"
                  href="/"
                  target="blank"
                >
                  <FaFacebook />
                </a>
                <a
                  className="hover:text-slate-300 active:text-slate-400"
                  href="/"
                  target="blank"
                >
                  <FaInstagram />
                </a>
                <a
                  className="hover:text-slate-300 active:text-slate-400"
                  href="/"
                  target="blank"
                >
                  <FaTiktok />
                </a>
                <a
                  className="hover:text-slate-300 active:text-slate-400"
                  href="/"
                  target="blank"
                >
                  <FaTwitter />
                </a>
                <a
                  disabled
                  className="hover:text-slate-300 active:text-slate-400"
                  href="/"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:w-8/12 w-full p-4 md:p-0">
          <div className="flex flex-col items-center w-6/12 ">
            <div className="flex flex-col text-left">
              <Heading label="Quick Links" />
              {company.map((item) => (
                <h2 key={item.id} className="my-1">
                  <Nav label={item.name} navLink={item.link} />
                </h2>
              ))}
            </div>
          </div>
          <div className="w-6/12">
            <div className="px-[2rem] flex-col text-left ">
              <Heading label="Support" />
              {support.map((item) => (
                <h2 key={item.id} className="my-1">
                  <Nav label={item.name} navLink={item.link} />
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
