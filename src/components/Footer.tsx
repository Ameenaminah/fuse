import { FC } from "react";
import { Logo } from "./Logo";
import { WhiteLogoIcon } from "../assets/icons";
import { links } from "../data";
import { NavLink } from "react-router-dom";
import { ContactInfo } from "./ContactInfo";
import { StyleConstants } from "../constants";

export const Footer: FC = () => {
  return (
    <footer className={`bg-pry9 relative font-dmSans text-white`}>
      <div className="px-4 md:px-16 lg:px-24 2xl:px-0 font-dmSans container py-4 md:py-10 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="flex flex-col gap-7">
            <Logo textColor="text-white" iconName={WhiteLogoIcon} />
            <div className="flex flex-col gap-2">
              <p className="text-base font-normal">
                Subscribe to Our Newsletter
              </p>
              <div className="flex gap-4 w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded border border-white bg-transparent focus:outline-none"
                />
                <button
                  className={`bg-white text-pry9 px-4 py-2 rounded-sm ${StyleConstants.hoverFade}`}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 text-base">
            {links
              .filter(({ link }) => link !== "Home")
              .map(({ id, link, to }) => (
                <NavLink key={id} to={to} className='text-base text-white font-normal'>
                  {link}
                </NavLink>
              ))}
          </div>
          <ContactInfo />
        </div>
      </div>
    </footer>
  );
};
