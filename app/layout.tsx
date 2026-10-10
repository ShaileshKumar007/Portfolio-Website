import type { Metadata } from "next";
import "./globals.css";
import { ThemeInit } from "./theme-init";

export const metadata: Metadata = {
  title: "Shailesh Kumar — Software Engineer",
  description: "Portfolio of Shailesh Kumar, a software engineer building reliable backend systems, developer tools, and thoughtful products.",
  keywords: ["Shailesh Kumar", "Software Engineer", "Backend Developer", "Java", "Spring Boot", "React"],
  openGraph: { title: "Shailesh Kumar — Software Engineer", description: "Building reliable systems and thoughtful software.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body><ThemeInit />{children}</body></html>;
}
