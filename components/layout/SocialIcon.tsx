import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function SocialIcon({ name, size = 17 }: { name: string; size?: number }) {
  if (name === "GitHub") return <Github size={size} aria-hidden="true"/>;
  if (name === "LinkedIn") return <Linkedin size={size} aria-hidden="true"/>;
  if (name === "Instagram") return <Instagram size={size} aria-hidden="true"/>;
  return <Twitter size={size} aria-hidden="true"/>;
}
