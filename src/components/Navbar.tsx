import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect, FC, useMemo, useCallback } from "react";
import { links } from "../data";
import { LogoIcon } from "../assets/icons";
import { Button } from "./Button";

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu]);

  const renderNavLinks = useMemo(
    () =>
      links.map(({ id, link, to }) => (
        <NavLink
          key={id}
          to={to}
          onClick={toggleMenu}
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          {link}
        </NavLink>
      )),
    [toggleMenu]
  );

  return (
    <header
      className={`bg-primary00 sticky z-20 top-0 ${scrolled ? "header" : ""}`}
    >
      <div className="py-6 lg:py-4 px-5 md:px-16 lg:px-16">
        <div className="flex items-center justify-between container">
          <Link to="/" className="flex items-center gap-2">
            <img src={LogoIcon} alt="logo" />
            <p className="text-[28px] font-Cinzel font-bold">FUSE VARSITY</p>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center text-base font-normal text-white gap-12`}
          >
            {renderNavLinks}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdO9m8qEs0v-Ty6JZaTdBzGoyozpxgMWlEzR5XFXJwHnlnNcg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button buttonName="Join TrybebyFUSE" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {showMenu ? (
              <FaTimes size={24} style={{ color: "#fff" }} />
            ) : (
              <FaBars size={24} style={{ color: "#fff" }} />
            )}
          </div>

          {showMenu && (
            <div className="lg:hidden absolute -z-[99] top-0 left-0 flex flex-col w-full nav-header pb-8 cursor-pointer">
              <nav
                className={`lg:hidden flex flex-col items-center gap-12 text-2xl font-normal text-white mt-24 mb-4 px-4 md:px-20`}
              >
                {renderNavLinks}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdO9m8qEs0v-Ty6JZaTdBzGoyozpxgMWlEzR5XFXJwHnlnNcg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button buttonName="Join TrybebyFUSE" onPress={toggleMenu} />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
