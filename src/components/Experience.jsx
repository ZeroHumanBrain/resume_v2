const EXPERIENCES = [
  {
    year: "2025",
    title: "独立数据分析师",
    desc: "主导多个电商数据分析项目，构建指标体系并挖掘高价值用户。",
  },
  {
    year: "2024",
    title: "前端开发",
    desc: "负责个人作品集及交互式 3D 展示项目开发。",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 container mx-auto px-4 max-w-[1200px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        {/* Left: Text */}
        <div>
          <h2 className="text-6xl font-bold mb-8 text-white tracking-tighter ">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey is a blend of data analysis and web
            development, focused on creating insightful and interactive digital
            experiences.
          </p>
        </div>

        {/* Right: Timeline */}
        <div className="relative border-l border-gray-700 ml-4">
          {EXPERIENCES.map((exp, i) => (
            <div key={i} className="mb-12 ml-8 relative">
              {/* Time Scale (Dot) */}
              <div className="absolute left-[-41px] top-0 w-6 h-6 rounded-full bg-white border-4 border-gray-900" />

              {/* Year */}
              <div className="text-sm text-white font-bold mb-2">
                {exp.year}
              </div>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-accent transition-all duration-300">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {exp.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
