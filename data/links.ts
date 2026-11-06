export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string | null;
  username?: string;
  isVerified: boolean;
  statusText?: string;
}

export interface ContactLinks {
  email: string | null;
  isVerified: boolean;
  statusText: string;
}

export interface SiteLinks {
  github: SocialLink;
  linkedin: SocialLink;
  email: ContactLinks;
  portfolio: {
    home: string;
    resume: string;
    projects: string;
    about: string;
    contact: string;
  };
  cvPdfPath: string;
}

export const navigationLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export const siteLinks: SiteLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/abdulkader02",
    username: "abdulkader02",
    isVerified: true,
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdul-kader-46b3a4420",
    isVerified: true,
    statusText: "Verified",
  },
  email: {
    email: "muhammadkaderkhan0@gmail.com",
    isVerified: true,
    statusText: "Verified",
  },
  portfolio: {
    home: "/",
    about: "/about",
    projects: "/projects",
    resume: "/resume",
    contact: "/contact",
  },
  cvPdfPath: "/Abdul-Kader-CV.pdf",
};
