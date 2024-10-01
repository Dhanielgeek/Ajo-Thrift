import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Layout = () => {
  const Arrow = () => {
    const [scroll, setScroll] = useState(false);

    const onScroll = () => {
      if (window.scrollY >= 30) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <div
        className={`fix-arrow fixed bottom-24 z-20 right-12 w-[50px] h-[50px] rounded-lg flex justify-center items-center cursor-pointer ${
          scroll ? "bg-green-500" : "bg-yellow-500"
        } text-white animate-spin animate-color-change`}
      >
        {!scroll ? (
          <Link to="footer" smooth={true} duration={1000} onClick={onScroll}>
            <FaArrowDown />
          </Link>
        ) : (
          <Link to="header" smooth={true} duration={1000} onClick={onScroll}>
            <FaArrowUp />
          </Link>
        )}
      </div>
    );
  };

  return (
    <>
      <Arrow />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
