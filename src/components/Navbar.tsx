import { NavLink } from "react-router-dom";
import { useState, FC, useMemo, useCallback } from "react";
import { links } from "../data";
import { Button } from "./Button";
import { TbBaselineDensityMedium, TbX } from "react-icons/tb";
import { Logo } from "./Logo";

export const Navbar: FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => setShowMenu(!showMenu), [showMenu]);

  const renderNavLinks = useMemo(
    () =>
      links.map(({ id, link, to }) => (
        <NavLink
          key={id}
          to={to}
          onClick={toggleMenu}
          className={({ isActive }) =>
            isActive ? "font-semibold text-pry9 border-b-2 border-pry9 " : ""
          }
        >
          {link}
        </NavLink>
      )),
    [toggleMenu]
  );

  return (
    <header className={`bg-pry1 sticky z-20 top-0 border-b border-grey6 `}>
      <div className="py-4 px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container">
        <div className="flex items-center justify-between">
          <Logo />
          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex items-center text-lg font-normal text-grey12 gap-6`}
          >
            {renderNavLinks}
          </nav>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdO9m8qEs0v-Ty6JZaTdBzGoyozpxgMWlEzR5XFXJwHnlnNcg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex"
          >
            <Button buttonName="Join Our Community" />
          </a>

          {/* Mobile Menu Toggle */}
          <div
            className="lg:hidden cursor-pointer text-pry9"
            onClick={toggleMenu}
          >
            {showMenu ? (
              <TbX size={24} />
            ) : (
              <TbBaselineDensityMedium size={24} />
            )}
          </div>

          {showMenu && (
            <div className="lg:hidden absolute -z-[99] top-0 left-0 flex flex-col w-full nav-header pb-8 cursor-pointer">
              <nav
                className={`lg:hidden flex flex-col items-center gap-10 text-xl font-normal text-grey12 mt-24 mb-4 px-4 md:px-20`}
              >
                {renderNavLinks}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdO9m8qEs0v-Ty6JZaTdBzGoyozpxgMWlEzR5XFXJwHnlnNcg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    buttonName="Join Our Community"
                    onPress={toggleMenu}
                  />
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
