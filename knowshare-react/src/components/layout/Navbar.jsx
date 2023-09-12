import { useState } from "react";
import * as React from "react";

import Nav from "./Atoms/Nav";
import Logo from "./common/Logo";
import { HiMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-12 border py-2 w-screen px-4 lg:px-16 shadow-sm">
        <Logo />
        {/* <HiMenuAlt2 className="md:hidden" /> */}
        <HiMenuAlt2
          className={`${
            open ? "rotate-180 delay-150 ring-1" : ""
          }  ring-[#0f7173] transition ease-in-out active:ring-[#0f7173] text-[#0f7173] ring-offset-0 md:hidden block h-6 w-6 cursor-pointer rounded mr-3`}
          onClick={() => setOpen(!open)}
        />
      </div>
      <div
        className={`${
          open ? "flex flex-col items-end" : "hidden"
        } px-4 py-2 transition ease-in-out duration-500  md:flex-row md:items-center text-sm gap-4 md:gap-8 md:flex`}
      >
        {/* <Link>Teach on KnowShare</Link> */}
        <Nav label="Teach on KnowShare" />
        <Nav label="Log In" />
        <Nav label="Sign Up" />
      </div>
    </>
  );
};

export default Navbar;
