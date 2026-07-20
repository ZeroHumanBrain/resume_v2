import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import ParticleSkull from "./ParticleSkull";

/**
 * 粒子场景容器
 */
export default function ParticleScene() {
  return (
    <div style={{ width: "100%", height: "100%", background: "transparent" }}>
      <Canvas gl={{ alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          makeDefault
          // 轻微的旋转惯性
          enableDamping={true}
          dampingFactor={0.05}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <ParticleSkull />
      </Canvas>
    </div>
  );
}
