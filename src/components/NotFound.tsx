import { Link } from "react-router-dom";
import { NotFoundImage } from "../assets/images";
import { Button } from "./Button";


export const NotFound = () => {
  return (
    <section className="bg-primary00 w-full h-screen  overflow-hidden ">
      <div className="py-8 md:py-16 xl:py-20 px-5 md:px-16 lg:px-16  ">
        <div className="container flex flex-col justify-center items-center w-full h-screen">
          <div className="w-[40%] flex justify-center items-center">
            <img
              src={NotFoundImage}
              className="notFound"
              alt="Not Found Image"
            />
          </div>
          <p className="text-base md:text-2xl text-center mb-2 p-6 font-Chivo">
            Sorry, the page you are looking for could not be found or has been
            removed.
          </p>
          <Link to={"/"} className="">
            <Button buttonName=" Back to Home" />
          </Link>
        </div>
      </div>
    </section>
  );
};
