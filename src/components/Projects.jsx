import projects from "../data/projects";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-20 px-6" data-aos="fade-up" data-aos-duration="1000">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t("projects.title")}
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{t(`projects.list.${index + 1}.title`, project.title)}</h3>

              <p className="text-gray-400 mb-4">{t(`projects.list.${index + 1}.description`, project.description)}</p>

              <a
                href={project.link}
                target="_blank"
                className="text-blue-400 hover:text-blue-300"
              >
                {t("projects.view_project")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
