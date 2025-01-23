import { FC } from "react";

interface SocialLink {
  icon: string;
  url: string;
}

interface Props {
  links: SocialLink[];
}

export const SocialLinks: FC<Props> = ({ links }) => (
  <div className="flex gap-4 items-center">
    {links.map((link, idx) => (
      <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
        <img src={link.icon} alt="social-icon" />
      </a>
    ))}
  </div>
);
