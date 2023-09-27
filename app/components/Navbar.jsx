"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";

import { AiOutlineMenu } from "react-icons/ai"
import { FaTimes } from "react-icons/fa"
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed mx-auto border border-[#33353f] border-l-transparent top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="container lg:py-4 flex flex-wrap items-center justify-between mx-auto p-8">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          Tochilex
        </Link>

        {/* mobile navigation menu button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <AiOutlineMenu className="h-5 w-5" />
            </button>
          ) : (
            <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <FaTimes className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* main navigation menu */}
        <div id="navbar" className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* mobile navigation Menu */}
      {navbarOpen ? <MenuOverlay links={navLinks} onClick={handleLinkClick} /> : null}
  
    </nav>
  );
};

export default Navbar;
