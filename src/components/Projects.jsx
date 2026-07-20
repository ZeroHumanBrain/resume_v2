import ProjectStack from "./ProjectStack";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 container mx-auto px-4 max-w-[1700px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <ProjectStack />
        <div>
          <h2 className="text-6xl font-bold mb-8 text-white tracking-tighter">
            Selected Projects
          </h2>
          <p className="text-gray-400 text-lg ">
            Discover my featured projects, showcasing a blend of 3D technology,
            data analysis, and modern web design.
          </p>
        </div>
      </div>
    </section>
  );
}
