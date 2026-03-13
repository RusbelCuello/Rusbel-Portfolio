import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Proyectos
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>

              <p className="text-gray-400 mb-4">{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                Ver proyecto →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
