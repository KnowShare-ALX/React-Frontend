import { useState } from "react";
import * as React from "react";

import Nav from "./Atoms/Nav";
import Logo from "./common/Logo";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ButtonSolid from "./Atoms/ButtonSolid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      item: "About",
      link: `/about`,
    },
    {
      id: 2,
      item: "Pricing",
      link: `/pricing`,
    },
    {
      id: 3,
      item: "Blog",
      link: `/blog/home`,
    },
    {
      id: 4,
      item: "Contact",
      link: `/contact`,
    },
  ];

  return (
    // <>
    //   <div className="flex justify-between items-center h-12 border py-2 w-screen px-4 lg:px-16 shadow-sm">
    //     <Logo />
    //     {/* <HiMenuAlt2 className="md:hidden" /> */}
    //     <HiMenuAlt2
    //       className={`${
    //         open ? "rotate-180 delay-150 ring-1" : ""
    //       }  ring-[#0f7173] transition ease-in-out active:ring-[#0f7173] text-[#0f7173] ring-offset-0 md:hidden block h-6 w-6 cursor-pointer rounded mr-3`}
    //       onClick={() => setOpen(!open)}
    //     />
    //   </div>
    //   <div
    //     className={`${
    //       open ? "flex flex-col items-end" : "hidden"
    //     } px-4 py-2 transition ease-in-out duration-500  md:flex-row md:items-center text-sm gap-4 md:gap-8 md:flex`}
    //   >
    //     {/* <Link>Teach on KnowShare</Link> */}
    //     <Nav label="Teach on KnowShare" />
    //     <Nav label="Log In" />
    //     <Nav label="Sign Up" />
    //   </div>
    // </>

    <div className={`${open ? " " : "shadow"} w-full z-50 `}>
      <div className="flex items-center lg:px-[5rem] p-1 justify-between xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <a href="/">
          {" "}
          <div className="ml-16 lg:ml-10 flex justify-center w-[3rem] transition duration-500 ease-in-out delay-150 hover:scale-110 hover:translate-y-0.5">
            <Logo />
          </div>
        </a>
        <HiMenuAlt2
          className={`${
            open ? "rotate-90 ease-in delay-150" : ""
          } ring-2 ring-[#0f7173] active:ring-[#54b2b4] text-[#0f7173] ring-offset-0 lg:hidden block h-6 w-6 cursor-pointer rounded mr-3 transition ease-in-out duration-100`}
          onClick={() => setOpen(!open)}
        />
        <nav
          className={`${
            open ? "block w-full ease-in delay-150" : "hidden"
          } lg:flex lg:items-center lg:w-auto `}
        >
          <ul
            className={`${
              open ? "shadow px-8" : ""
            } lg:flex lg:justify-between md:pb-[0.2rem] items-center text-md lg:text-base fixed md:relative w-full md:w-auto bg-gray-100 md:bg-inherit mt-2`}
          >
            {navItems.map((nav) => (
              <li
                key={nav.id}
                className="p-3 block text-start border-b-[0.5px] lg:border-0"
              >
                <Nav label={nav.item} navLink={nav.link} />
              </li>
            ))}
            <a href="/login">
              {" "}
              <ButtonSolid label="Sign in" />
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
