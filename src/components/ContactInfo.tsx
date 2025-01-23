import { FC } from "react";
import { SocialLinks } from "./SocialLinks";
import { InstagramIcon, LinkedInIcon, TwitterIcon } from "../assets/icons";

export const ContactInfo: FC = () => (
  <div className="flex flex-col gap-4">
    <SocialLinks
      links={[
        { icon: TwitterIcon, url: "https://twitter.com" },
        { icon: LinkedInIcon, url: "https://linkedin.com" },
        { icon: InstagramIcon, url: "https://instagram.com" },
      ]}
    />
    <p>
      <a href="mailto:team@fusevarsity.com" className="text-white">
        team@fusevarsity.com
      </a>
    </p>
    <p>
      <a href="tel:+2348105567788" className="text-white">
        +234 810 556 7788
      </a>
    </p>
  </div>
);
