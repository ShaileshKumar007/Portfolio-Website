export const siteConfig = {
  name: "Shailesh Kumar",
  monogram: "SK",
  role: "Software Development Engineer I",
  company: "JPMorgan Chase & Co.",
  description: "Software engineer focused on backend systems, release reliability, operational tooling, and useful products.",
  email: "shailesh1429k@gmail.com",
  phone: "+91 75896 18612",
  location: "India",
  resumePath: "/resume.pdf",
  resumeFilename: "Shailesh_Kumar_Resume.pdf",
  canonicalBaseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", href: "/contact" },
  ],
  socials: [
    { name: "GitHub", href: "https://github.com/ShaileshKumar007", display: "github.com/ShaileshKumar007" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/shailesh88/", display: "linkedin.com/in/shailesh88" },
    { name: "X / Twitter", href: "https://x.com/shailesh2002k", display: "x.com/shailesh2002k" },
    { name: "Instagram", href: "https://www.instagram.com/shailesh_8322", display: "instagram.com/shailesh_8322" },
  ],
} as const;

export type SocialLink = (typeof siteConfig.socials)[number];
