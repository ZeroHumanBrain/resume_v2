import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "闪电电商数据分析",
    desc: "基于 MySQL 的电商数据分析项目...",
  },
  {
    id: 2,
    title: "3D 粒子简历网站",
    desc: "使用 Three.js 构建的交互式个人简历...",
  },
  { id: 3, title: "待开发项目", desc: "更多项目即将上线..." },
];

export default function ProjectStack() {
  const [index, setIndex] = useState(0);

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY > 0) setIndex((i) => Math.min(i + 1, PROJECTS.length - 1));
    else setIndex((i) => Math.max(i - 1, 0));
  };

  return (
    <div
      className="h-[600px] w-full perspective-[2000px] relative overflow-hidden"
      onMouseEnter={() => (document.body.style.overflow = "hidden")}
      onMouseLeave={() => (document.body.style.overflow = "auto")}
      onWheel={handleWheel}
    >
      <AnimatePresence>
        {PROJECTS.map((p, i) => {
          const isActive = i === index;
          const isBehind = i > index;

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{
                opacity: 1,
                scale: 1 - Math.abs(i - index) * 0.1,
                rotateY: (i - index) * 10,
                x: (i - index) * 50,
                y: (i - index) * 30,
                zIndex: PROJECTS.length - Math.abs(i - index),
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="absolute w-96 h-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-3xl text-white shadow-2xl flex flex-col justify-end"
            >
              <h3 className="text-4xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-200 text-lg leading-relaxed">{p.desc}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
