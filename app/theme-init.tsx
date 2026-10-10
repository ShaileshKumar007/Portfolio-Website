import Script from "next/script";

export function ThemeInit() {
  return <Script id="theme-init" strategy="beforeInteractive">{`try { const saved = localStorage.getItem('theme'); const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.dataset.theme = dark ? 'dark' : 'light'; } catch {}`}</Script>;
}
