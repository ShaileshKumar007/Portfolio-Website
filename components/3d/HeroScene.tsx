"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";
import * as THREE from "three";

function OrbitalRing({ radius, color, tilt, speed }: { radius: number; color: string; tilt: [number, number, number]; speed: number }) {
  const ring = useRef<Group>(null);
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * speed;
  });

  return <group ref={ring} rotation={tilt}>
    <mesh>
      <torusGeometry args={[radius, 0.006, 8, 180]} />
      <meshBasicMaterial color={color} transparent opacity={0.68} />
    </mesh>
    <mesh position={[radius, 0, 0]}>
      <sphereGeometry args={[0.045, 20, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.8} toneMapped={false} />
    </mesh>
    <mesh position={[-radius, 0, 0]}>
      <sphereGeometry args={[0.018, 12, 10]} />
      <meshBasicMaterial color={color} />
    </mesh>
  </group>;
}

function CrystalSystem() {
  const assembly = useRef<Group>(null);
  useFrame(({ pointer, clock }, delta) => {
    if (!assembly.current) return;
    assembly.current.rotation.y = clock.elapsedTime * 0.075 + pointer.x * 0.1;
    assembly.current.rotation.x = THREE.MathUtils.damp(assembly.current.rotation.x, pointer.y * 0.12, 2.2, delta);
    assembly.current.position.x = THREE.MathUtils.damp(assembly.current.position.x, pointer.x * 0.07, 2, delta);
  });

  return <group ref={assembly}>
    <Float speed={0.42} rotationIntensity={0.12} floatIntensity={0.12}>
      <mesh rotation={[0.16, 0.24, 0.08]}>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshPhysicalMaterial color="#99eaff" metalness={0.24} roughness={0.16} transmission={0.38} thickness={1.1} ior={1.25} clearcoat={0.95} clearcoatRoughness={0.12} emissive="#0b5d76" emissiveIntensity={0.2} flatShading />
      </mesh>
      <mesh scale={0.99} rotation={[0.16, 0.24, 0.08]}>
        <icosahedronGeometry args={[0.83, 1]} />
        <meshBasicMaterial color="#a9f3ff" wireframe transparent opacity={0.16} />
      </mesh>
      <mesh scale={0.43} rotation={[0.3, 0.2, 0.6]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshPhysicalMaterial color="#b7a9ff" metalness={0.55} roughness={0.2} clearcoat={1} emissive="#6651d8" emissiveIntensity={0.42} />
      </mesh>
    </Float>
    <OrbitalRing radius={1.22} color="#85eaff" tilt={[0.74, 0.22, 0.42]} speed={0.12} />
    <OrbitalRing radius={1.48} color="#a999ff" tilt={[-0.86, 0.5, -0.32]} speed={-0.085} />
    <OrbitalRing radius={1.05} color="#d5f8ff" tilt={[1.18, -0.78, 0.04]} speed={0.06} />
  </group>;
}

export function HeroScene() {
  return <Canvas camera={{ position: [0, 0, 4.7], fov: 35 }} dpr={[1, 1.35]} gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}>
    <ambientLight intensity={0.62} />
    <directionalLight position={[3, 4, 5]} intensity={2.1} color="#eafaff" />
    <pointLight position={[-2, -1, 2]} intensity={13} color="#29c9ec" distance={6} />
    <pointLight position={[2, -2, -1]} intensity={9} color="#7b63e9" distance={5} />
    <CrystalSystem />
    <Sparkles count={38} scale={4.2} size={1.25} speed={0.13} opacity={0.42} color="#b4f3ff" />
  </Canvas>;
}
