import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353f] border-l-transparent border-r-transparent border-b-transparent  text-white">
      <div className="container p-12 sm:flex justify-between">
        <Link href="/">
          <span>Tochilex</span>
        </Link>

        <p className="text-slate-600 py-2 sm:py-0">
          Created with <span className="text-red-600 text-lg">♥</span> by
          Tochilex
        </p>
        <p className="text-slate-600 ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
