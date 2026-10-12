"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene").then((module) => module.HeroScene), { ssr: false, loading: () => null });

class SceneBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error) { console.warn("Hero scene unavailable; using the static artwork fallback.", error.message); }
  render() { return this.state.failed ? this.props.fallback : this.props.children; }
}

function StaticArtwork() {
  return <div className="art-static" aria-hidden="true"><div className="art-orbit orbit-a" /><div className="art-orbit orbit-b" /><div className="art-orbit orbit-c" /><div className="art-core" /><i className="art-node node-a" /><i className="art-node node-b" /><i className="art-node node-c" /></div>;
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
  } catch { return false; }
}

export function HeroArtwork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadScene, setLoadScene] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !supportsWebGL()) return;
    const element = containerRef.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setLoadScene(true);
        observer.disconnect();
      }
    }, { rootMargin: "180px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div className="hero-art" ref={containerRef} role="img" aria-label="A luminous faceted crystal surrounded by orbital rings and nodes">
    {loadScene ? <div className="hero-canvas"><SceneBoundary fallback={<StaticArtwork />}><HeroScene /></SceneBoundary></div> : <StaticArtwork />}
  </div>;
}
