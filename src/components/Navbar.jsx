import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
      {" "}
      <div className="w-full flex justify-between items-center px-6 md:px-12 py-5">
        <div className="flex items-center gap-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">
            <span className="text-blue-400">&lt;</span>
            Rusbel
            <span className="text-blue-400">/&gt;</span>
          </h1>

          <button
            onClick={toggleLanguage}
            className="ml-4 px-3 py-1 bg-gray-800 text-sm rounded-md hover:bg-gray-700 transition font-semibold"
          >
            {i18n.language === "es" ? "EN" : "ES"}
          </button>
        </div>

        {/* MENU DESKTOP */}

        <ul className="hidden md:flex gap-8 text-gray-300">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              {t("nav.home")}
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              {t("nav.about")}
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              {t("nav.skills")}
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              {t("nav.projects")}
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              {t("nav.contact")}
            </a>
          </li>
        </ul>

        {/* BOTON HAMBURGUESA */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>

          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>
      {/* MENU MOVIL */}
      <div
        className={`md:hidden bg-slate-950/90 backdrop-blur-md border-b border-slate-800 overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-8 py-10 text-lg text-gray-100">
          {" "}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {t("nav.home")}
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {t("nav.about")}
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {t("nav.skills")}
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="hover:text-blue-400 transition"
          >
            {t("nav.contact")}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
