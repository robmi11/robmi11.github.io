import { Link, Outlet } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext.jsx";

const Layout = () => {
  const { dark, dispatch } = useContext(AppContext);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.querySelector("#dark").classList.add("hidden");
      document.querySelector("#light").classList.remove("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      document.querySelector("#dark").classList.remove("hidden");
      document.querySelector("#light").classList.add("hidden");
    }
  }, [dark]);

  const changeColorMode = () => {
    dispatch({ type: "CHANGE_COLOR_MODE" });
  };
  return (
    <>
      <nav>
        <div className="container md:w-2/3 mx-auto hidden md:flex md:justify-between py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-extralight mx-3 dark:text-yellow-200 dark:font-light">
              Robert Mizianty
            </h2>
            <div onClick={changeColorMode} className="flex">
              <MdDarkMode
                id="dark"
                className="hidden cursor-pointer dark:text-yellow-200"
                size={30}
              />
              <MdLightMode
                id="light"
                className="cursor-pointer dark:text-yellow-200"
                size={30}
              />
            </div>
          </div>
          <div className="w-fit flex justify-between">
            <Link className="nav__links" to="/">
              Home
            </Link>
            <Link className="nav__links" to="about">
              Bio
            </Link>
          </div>
        </div>
      </nav>
      <main className="container md:w-2/3 mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
