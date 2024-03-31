
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";

export function NavbarDefault({ setcategory }) {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = (category) => {
    setcategory(category);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setOpenNav(false);
    setActiveLink(category);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/business", text: "Business" },
    { to: "/entertainment", text: "Entertainment" },
    { to: "/general", text: "General" },
    { to: "/health", text: "Health" },
    { to: "/science", text: "Science" },
    { to: "/sports", text: "Sports" },
    { to: "/technology", text: "Technology" }
  ];

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 supports-backdrop-blur:bg-white/95">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-3xl hover:underline"
          onClick={() => handleNavLinkClick("Home")}
        >
          <Link to="/">
            <span className="flex">
              <img src="icon.png" width={40} alt="logo" /> NewsNine
            </span>
          </Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">
            <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navLinks.map(({ to, text }) => (
                <Typography
                  key={to}
                  onClick={() => handleNavLinkClick(text)}
                  as="li"
                  variant="small"
                  color="blue-gray"
                  className={`p-1 font-normal hover:underline ${activeLink === text ? 'font-bold underline' : ''}`}
                >
                  <Link to={to}>{text}</Link>
                </Typography>
              ))}
            </ul>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {navLinks.map(({ to, text }) => (
              <Typography
                key={to}
                onClick={() => handleNavLinkClick(text)}
                as="li"
                variant="small"
                color="blue-gray"
                className={`p-1 font-normal hover:underline ${activeLink === text ? 'font-bold underline' : ''}`}
              >
                <Link to={to}>{text}</Link>
              </Typography>
            ))}
          </ul>
        </div>
      </Collapse>
    </Navbar>
  );
}
