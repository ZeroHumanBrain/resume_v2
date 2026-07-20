import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STRENGTHS = [
  {
    id: 1,
    title: "C/底层开发",
    desc: "精通 C 语言，具备扎实的底层功底，熟悉内存管理、多线程并发开发。",
  },
  {
    id: 2,
    title: "算法与数据结构",
    desc: "对二叉树、图论、动态规划、哈希表等有深刻理解，具备优秀的算法设计与复杂度优化能力。",
  },
  {
    id: 3,
    title: "数据挖掘与机器学习",
    desc: "熟悉网络爬虫、数据解析与挖掘，了解基础的机器学习模型及统计分析方法。",
  },
];

export default function StrengthCarousel() {
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => Math.min(prev + 1, STRENGTHS.length - 1));
  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="relative w-full flex flex-col items-center mt-12 perspective-[1000px]">
      {/* Carousel */}
      <div className="relative h-[350px] w-full flex justify-center items-center">
        {/* Controls */}
        <div className="group absolute inset-0 z-50 pointer-events-none">
          <button
            onClick={prev}
            className="pointer-events-auto absolute top-1/2 left-[calc(50%-240px)] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-white/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className="pointer-events-auto absolute top-1/2 right-[calc(50%-240px)] -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-white/20"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {STRENGTHS.map((s, i) => {
          const offset = i - index;
          return (
            <motion.div
              key={s.id}
              animate={{
                scale: 1 - Math.abs(offset) * 0.15,
                x: offset * 300,
                rotateY: offset * -20,
                zIndex: STRENGTHS.length - Math.abs(offset),
                opacity: 1 - Math.abs(offset) * 0.3,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-[400px] h-[300px] bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] text-white flex flex-col justify-center"
            >
              <h3 className="text-3xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-200 text-base leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
