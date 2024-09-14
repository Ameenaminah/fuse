import { Outlet } from "react-router-dom";
import { FC } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout: FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
