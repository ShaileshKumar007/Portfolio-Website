import Script from "next/script";

export function ThemeInit() {
  return <Script id="theme-init" strategy="beforeInteractive">{`try { const value = localStorage.getItem('theme'); document.documentElement.dataset.theme = value === 'light' ? 'light' : 'dark'; } catch { document.documentElement.dataset.theme = 'dark'; }`}</Script>;
}
