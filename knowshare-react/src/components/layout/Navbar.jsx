import { useState } from "react";
import * as React from "react";

import Nav from "./Atoms/Nav";
import Logo from "./common/Logo";
import { HiMenuAlt2, HiOutlineUserCircle } from "react-icons/hi";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import ButtonSolid from "./Atoms/ButtonSolid";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import AuthService from "../../services/authService";
import { setSidenavOpen, setUserEmail } from "../../redux/auth";

const Navbar = () => {
  const { userEmail, sidenavOpen } = useSelector((state) => {
    const { userEmail, sidenavOpen } = state.auth;
    return { userEmail, sidenavOpen };
  }, shallowEqual);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

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

  const handleLogout = async () => {
    await AuthService.logout();
    dispatch(setUserEmail(null));
    // window.location.href = "/";
  };

  console.log("sidenavOpen", sidenavOpen);

  return (
    <div className={`${open ? " " : "shadow"} w-full z-50 `}>
      <div className="flex items-center lg:px-[5rem] p-1 justify-between xl:mx-auto xl:max-w-7xl max-w-full flex-wrap w-full">
        <div className="flex items-center">
          <div className="lg:hidden p-2 ">
            <AiOutlineMenuUnfold
              className="w-6 h-6 text-[#0f7173]"
              onClick={() => dispatch(setSidenavOpen(!sidenavOpen))}
            />
          </div>
          <a href="/">
            {" "}
            <div className="ml-16 lg:ml-10 flex justify-center w-[3rem] transition duration-500 ease-in-out delay-150 hover:scale-110 hover:translate-y-0.5">
              <Logo />
            </div>
          </a>
        </div>
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
            {userEmail ? (
              <div className="flex flex-col">
                <div className="p-1 flex flex-col justify-center items-center mx-4 rounded-full border border-black/50 w-8">
                  <CiUser
                    onClick={() => setToggle(!toggle)}
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
                {toggle && (
                  <div className="absolute lg:top-10 -bottom-[6rem] pl-1 pr-3 py-2 bg-white transition ease-in-out duration-300 max-w-[10rem]">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Nav label="Profile" />
                      <ButtonSolid onClick={handleLogout} label="Logout" />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login">
                {" "}
                <ButtonSolid label="Sign in" />
              </a>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
