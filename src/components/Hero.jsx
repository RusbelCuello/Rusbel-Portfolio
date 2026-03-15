import rusbel from "../assets/rusbel.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-start pt-44 text-center px-6"
      data-aos="fade-in" data-aos-duration="1000"
    >
      {/* Foto */}
      <div className="mb-8">
        <img
          src={rusbel}
          alt="Rusbel Cuello"
          className="w-44 h-44 md:w-52 md:h-52 rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/30 mb-8 object-cover object-[50%_20%] transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Titulo */}
      <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        {t("hero.greeting")}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t("hero.name")}
        </span>
      </h1>

      {/* Subtitulo */}
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        {t("hero.description")}
      </p>

      {/* Botones */}
      <div className="flex gap-4 mt-10" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg font-medium shadow-lg"
        >
          {t("hero.btn_projects")}
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-gray-400 hover:border-white transition rounded-lg font-medium"
        >
          {t("hero.btn_contact")}
        </a>
      </div>

      {/* Flecha para bajar */}
      <div className="mt-20 animate-bounce text-gray-400 text-2xl">↓</div>
    </section>
  );
}

export default Hero;
