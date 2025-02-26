import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav className="container mx-auto max-w-2xl py-6 flex justify-between px-4">
        <Link
          href="/"
          className="router-link-active router-link-exact-active title hover:opacity-50"
          aria-current="page"
        >
          Kiran Dash
        </Link>
        <div className="flex gap-6">
          <Link href="/portfolio" className="hover:opacity-50">
            Portfolio
          </Link>
          {/* <a
            href="https://bgwebagency.in/kiran-dash/activities/"
            rel="noopener noreferrer"
            
            className="hover:opacity-50"
          >
            Activities
          </a> */}
          <a href="/Kiran-Dash-Resume.pdf" className="hover:opacity-50">
            CV
          </a>
          <a href="http://bgwebagency.in/" className="hover:opacity-50">
            Blog
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
