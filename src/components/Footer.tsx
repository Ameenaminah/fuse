import { FC } from "react";
import { BoxBlueImage } from "../assets/images";

export const Footer: FC = () => {
  return (
    <footer className="bg-white relative">
      <div className="pt-8 md:pt-16 xl:pt-20 px-5 md:px-16 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between container">
          <div className="flex flex-col justify-center px-10 lg:px-20 py-20 gap-5 bg-primary55 lg:h-[372px] lg:w-[45%]">
            <p className="text-5xl text-primary00 font-Cinzel font-bold">
              We Would Love To Hear From You
            </p>
            <p className="text-lg text-primary20">
              Get in touch with us at FUSE Varsity!
            </p>
          </div>

          <div className="flex flex-col justify-center px-10 lg:px-20 py-20 gap-5 lg:w-[45%]">
            <p className="text-lg text-primary20">
              Whether you have a question, need support, want to partner with us
              or just want to say hello, we're here and ready to hear from you.
              Reach out to us through the form below or via email at xxxxxxxx.
            </p>
            <p className="text-lg text-primary20">
              We look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
      <div className="hidden absolute bottom-0 right-0 lg:flex justify-end w-[150px] h-[150px] ml-auto">
        <img src={BoxBlueImage} alt="" />
      </div>
    </footer>
  );
};
