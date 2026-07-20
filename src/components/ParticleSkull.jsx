import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { PointsMaterial } from "three";
import { TorusKnotGeometry } from "three";

/**
 * 科技感粒子骷髅组件 (占位符为 TorusKnot)
 *
 * 若要替换为自己的 3D 模型：
 * 1. 使用 @react-three/drei 的 useGLTF 加载模型。
 * 2. 从模型中获取 geometry (traverse 或 scene.children)。
 * 3. 使用该 geometry 替换下方 useMemo 中的 TorusKnotGeometry。
 */
export default function ParticleSkull() {
  const pointsRef = useRef();

  const particlesGeometry = useMemo(() => {
    // 占位符：高密度环面纽结
    const geometry = new TorusKnotGeometry(1, 0.3, 256, 64);
    return geometry;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // 旋转惯性与呼吸感浮动
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(time / 4) * 0.2;
      pointsRef.current.rotation.x = Math.sin(time / 6) * 0.1;
      pointsRef.current.position.y = Math.sin(time / 2) * 0.05;
    }
  });

  return (
    <points ref={pointsRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.015}
        color="#f5f5dc"
        sizeAttenuation={true}
        transparent
        opacity={0.8}
        // 增加微弱的发光感 (需要配合 Bloom 后处理效果，此处简化实现)
      />
    </points>
  );
}
