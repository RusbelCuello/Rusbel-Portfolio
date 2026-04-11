import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiFirebase,
  SiTailwindcss,
  SiVite,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { useTranslation } from "react-i18next";

function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="py-24 px-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        {t("skills.title")}
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 max-w-5xl mx-auto text-center">
        {/* React */}
        <div className="flex flex-col items-center gap-2 text-blue-400">
          <FaReact className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">React</span>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center gap-2 text-yellow-400">
          <FaJs className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">JavaScript</span>
        </div>

        {/* HTML */}
        <div className="flex flex-col items-center gap-2 text-orange-500">
          <FaHtml5 className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">HTML</span>
        </div>

        {/* CSS */}
        <div className="flex flex-col items-center gap-2 text-blue-500">
          <FaCss3Alt className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">CSS</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center gap-2 text-red-400">
          <FaGit className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">Git</span>
        </div>

        {/* Node */}
        <div className="flex flex-col items-center gap-2 text-green-500">
          <FaNodeJs className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">Node.js</span>
        </div>

        {/* Firebase */}
        <div className="flex flex-col items-center gap-2 text-yellow-500">
          <SiFirebase className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">Firebase</span>
        </div>

        {/* Tailwind */}
        <div className="flex flex-col items-center gap-2 text-cyan-400">
          <SiTailwindcss className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">Tailwind</span>
        </div>

        {/* Vite */}
        <div className="flex flex-col items-center gap-2 text-purple-400">
          <SiVite className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">Vite</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center gap-2 text-white">
          <SiNextdotjs className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">Next.js</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center gap-2 text-blue-600">
          <SiTypescript className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">TypeScript</span>
        </div>
        <div className="flex flex-col items-center gap-2 text-green-600">
          <SiMongodb className="text-4xl md:text-6xl hover:scale-110 transition" />
          <span className="text-gray-300 text-sm">MongoDB</span>
        </div>
      </div>
    </section>
  );
}

export default Skills;
