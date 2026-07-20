import ParticleScene from "./ParticleScene";

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen w-full flex flex-col relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-30 p-8 flex justify-between items-center text-white">
        <div className="text-xl font-bold tracking-tighter">RESUME</div>
        <div className="flex gap-1 bg-[#1A1A1A] p-1 rounded-full text-sm">
          {["Home", "Experience", "Projects", "Strengths"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 rounded-full hover:bg-[#2A2A2A] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#footer"
          className="px-6 py-2 bg-transparent border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all"
        >
          Get in Touch
        </a>
      </nav>

      <div className="flex-1 flex items-center container mx-auto px-4 z-20 relative">
        <div className="w-1/2">
          <h1 className="text-8xl font-bold text-white mb-6 tracking-tighter leading-none">
            ZHANG <br /> H B
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
          Welcome to my personal homepage, where you will 
          gain a comprehensive understanding of me.
          </p>
          <p className="text-xs text-gray-400 mb-4 max-w-lg">
          Want to understand more quickly? ↓
          </p>
          <a
            href="#footer"
            className="inline-block px-10 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Contact me
          </a>
        </div>
        <div className="w-1/2 h-full">
          <ParticleScene />
        </div>
      </div>

      {/* Services Row */}
      <div className="container mx-auto px-4 pb-8 z-20 grid grid-cols-6 gap-4">
        {[
          "Male",
          "Tall",
          "Strong",
          "Hot",
          "Greek Statue",
          "Tiger",
        ].map((item) => (
          <div
            key={item}
            className="bg-[#1A1A1A] p-4 rounded-xl text-white text-sm border border-gray-800"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
