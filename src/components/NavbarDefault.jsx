import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";

export function NavbarDefault({ setcategory, setvalue }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        onClick={() => { setcategory("general") }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <Link to="/" className="flex items-center font-bold">
          All
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <Link to="/business" className="flex items-center">
          Business
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <Link to="/entertainment" className="flex items-center">
          Entertainment
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline "
      >
        <Link to="/general" className="flex items-center ">
          General
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <Link to="/health" className="flex items-center">
          Health
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <Link to="/science" className="flex items-center">
          Science
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
      >
        <Link to="/sports" className="flex items-center">
          Sports
        </Link>
      </Typography>
      <Typography
        onClick={(e) => { setcategory(e.target.innerHTML); setOpenNav(false) }}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hover:underline"
        
      >
        <Link to="/technology" className="flex items-center active:font-bold">
          Technology
        </Link>
      </Typography>

    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-3xl hover:underline"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
            setcategory("general")
          }}
        >
          <Link to="/">
            <span className="flex"> <img src="icon.png" width={40} alt="logo" /> NewsNine</span>
          </Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              id="input"
              type="search"
              color="black"
              label="Type here..."
              className="pr-6"
              containerProps={{
                className: "",

              }}
            />
            <Button
              onClick={() => {
                let a = document.getElementById("input").value;
                if( a=== undefined || a=== "" ||  a===null){
                  alert ("Enter somthing to search...")
                }
                else{
                  setvalue(a);
                }
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }}

              type="button"

              size="sm"
              color="black"
              className="!absolute right-1 top-1 rounded"
            >
              <Link to="/SearchedNews">
                Search
              </Link>
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </Collapse >
    </Navbar>
  );
}