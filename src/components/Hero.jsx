import rusbel from "../assets/rusbel.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40"
      data-aos="fade-in"
      data-aos-duration="1000"
    >
      {/* Foto */}
      <div className="mb-6 sm:mb-8">
        <img
          src={rusbel}
          alt="Rusbel Cuello"
          className="
            w-32 h-32 
            sm:w-40 sm:h-40 
            md:w-52 md:h-52 
            rounded-full border-4 border-blue-500 
            shadow-xl shadow-blue-500/30 
            object-cover object-[50%_20%] 
            transition-transform duration-500 hover:scale-105
          "
        />
      </div>

      {/* Titulo */}
      <h1
        className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          lg:text-6xl 
          font-bold leading-tight
        "
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {t("hero.greeting")}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {t("hero.name")}
        </span>
      </h1>

      {/* Subtitulo */}
      <p
        className="
          mt-4 sm:mt-6 
          text-base sm:text-lg md:text-xl 
          text-gray-300 
          max-w-xs sm:max-w-md md:max-w-xl
        "
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {t("hero.description")}
      </p>

      {/* Botones */}
      <div
        className="
          flex flex-col sm:flex-row 
          gap-3 sm:gap-4 
          mt-8 sm:mt-10
        "
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="#projects"
          className="
            w-full sm:w-auto
            px-6 py-3 
            bg-blue-500 hover:bg-blue-600 
            transition rounded-lg font-medium shadow-lg
          "
        >
          {t("hero.btn_projects")}
        </a>

        <a
          href="#contact"
          className="
            w-full sm:w-auto
            px-6 py-3 
            border border-gray-400 hover:border-white 
            transition rounded-lg font-medium
          "
        >
          {t("hero.btn_contact")}
        </a>
      </div>

      {/* Flecha */}
      <div className="mt-12 sm:mt-16 md:mt-20 animate-bounce text-gray-400 text-xl sm:text-2xl">
        ↓
      </div>
    </section>
  );
}

export default Hero;
