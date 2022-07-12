import { Link } from "@remix-run/react";
import React, { useState } from "react";

export const Navbar: React.FC = () => {
  const [sidebar, setSidebar] = useState<{ open: boolean }>({ open: false });

  const openSidebar = () => setSidebar(() => ({ open: true }));
  const closeSidebar = () => setSidebar(() => ({ open: false }));

  return (
    <nav className="mt-10 p-container flex justify-between items-center laptop:mt-12 laptop:pb-1.5">
      <Link to="/" aria-label="Homepage">
        <img src="/assets/logo-bookmark.svg" alt="" />
      </Link>
      <button
        className="laptop:hidden"
        aria-label="open sidebar menu"
        onClick={openSidebar}
      >
        <img src="/assets/icon-hamburger.svg" alt="" />
      </button>
      <div
        className={`fixed top-0 w-full h-screen px-[8.5333333%] py-10 bg-dark-opaque [transition:left_.25s]        
          laptop:static laptop:w-auto laptop:h-auto laptop:bg-inherit laptop:flex laptop:gap-11 laptop:p-0
        ${sidebar.open ? "left-0" : "left-full"}
        `}
      >
        <div className="flex justify-between items-center laptop:hidden">
          <Link to="/" aria-label="homepage">
            <img src="/assets/white-logo.svg" alt="" />
          </Link>
          <button aria-label="close sidebar menu" onClick={closeSidebar}>
            <img src="/assets/icon-close.svg" alt="" />
          </button>
        </div>
        <ul className="mt-10 w-full flex flex-col items-center laptop:mt-0 laptop:flex-row laptop:gap-11">
          <Navlink href="/">FEATURES</Navlink>
          <Navlink href="/">PRICING</Navlink>
          <Navlink href="/">CONTACT</Navlink>
        </ul>
        <Link
          to="/"
          className={`mt-6 h-12 max-w-sm mx-auto grid place-items-center rounded-md border-2
            border-white font-sans font-medium text-white text-xl tracking-widest  
            laptop:mt-0 laptop:border-red laptop:bg-red laptop:px-8 laptop:h-10 shadow-[0px_8px_8px_-4px_rgba(73,93,207,.20012)]
            laptop:text-sm laptop:hover:bg-white laptop:hover:text-red laptop:hover:border-red
          `}
        >
          LOGIN
        </Link>
        <div className="w-full left-0 absolute bottom-12 flex justify-center items-center gap-10 laptop:hidden">
          <SocialLink
            href="http://wwww.facebook.com"
            ariaLabel="facebook"
            icon="/assets/icon-facebook.svg"
          />
          <SocialLink
            href="http://wwww.twitter.com"
            ariaLabel="twitter"
            icon="/assets/icon-twitter.svg"
          />
        </div>
      </div>
    </nav>
  );
};

const Navlink: React.FC<{ children: React.ReactNode; href: string }> = (props) => {
  return (
    <li
      className={`w-full h-16 grid place-items-center first:border-y border-b border-[rgb(256,256,256,.15)] 
        laptop:h-auto laptop:w-auto laptop:border-0
      `}
    >
      <Link
        to={props.href}
        className={`font-sans text-white text-xl tracking-widest 
          laptop:text-sm laptop:text-dark laptop:hover:text-red
        `}
      >
        {props.children}
      </Link>
    </li>
  );
};

const SocialLink: React.FC<{ href: string; icon: string; ariaLabel: string }> = (props) => {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.ariaLabel}
    >
      <img src={props.icon} alt="" />
    </a>
  );
};
