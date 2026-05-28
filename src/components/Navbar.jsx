import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import {
  FaHome,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

const NAV_LINKS = [
  { id: "home", icon: FaHome },
  { id: "about", icon: FaUser },
  { id: "skills", icon: FaCode },
  { id: "projects", icon: FaFolderOpen },
  { id: "contact", icon: FaEnvelope },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.resolvedLanguage || "es";
    const nextLang = currentLang === "es" ? "en" : "es";
    i18n.changeLanguage(nextLang);
  };

  // Track scroll position for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = useCallback((id) => {
    setMenuOpen(false);
    setActiveSection(id);
  }, []);

  return (
    <>
      <nav
        className={`
          fixed w-full z-50 transition-all duration-500
          ${
            scrolled
              ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
              : "bg-transparent backdrop-blur-sm border-b border-transparent py-5"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-8 lg:px-12">
          {/* ─── Logo ─── */}
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            className="group flex items-center gap-1 select-none"
          >
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              <span className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                &lt;
              </span>
              <span className="text-white transition-colors duration-300 group-hover:text-gray-200">
                Rusbel
              </span>
              <span className="text-blue-400 transition-colors duration-300 group-hover:text-blue-300">
                /&gt;
              </span>
            </h1>
          </a>

          {/* ─── Desktop Menu ─── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ id }) => {
              const isActive = activeSection === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => handleNavClick(id)}
                    className={`
                      relative px-4 py-2 rounded-lg text-sm font-medium
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-blue-400"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }
                    `}
                  >
                    {t(`nav.${id}`)}
                    {/* Animated underline */}
                    <span
                      className={`
                        absolute bottom-0 left-1/2 -translate-x-1/2
                        h-[2px] rounded-full bg-gradient-to-r from-blue-400 to-cyan-400
                        transition-all duration-300
                        ${isActive ? "w-4/5 opacity-100" : "w-0 opacity-0"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ─── Right side: Language + Hamburger ─── */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="
                relative overflow-hidden
                px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider
                border border-slate-700/60 bg-slate-800/50
                text-gray-300 hover:text-white
                hover:border-blue-500/40 hover:bg-blue-500/10
                transition-all duration-300
                cursor-pointer
              "
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span className="text-[10px]">🌐</span>
                {(i18n.resolvedLanguage || "es") === "es" ? "EN" : "ES"}
              </span>
            </button>

            {/* ─── Hamburger Button (Mobile) ─── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                md:hidden relative w-10 h-10 rounded-lg
                border border-slate-700/50 bg-slate-800/40
                hover:border-slate-600 hover:bg-slate-800/70
                flex flex-col justify-center items-center gap-[5px]
                transition-all duration-300 cursor-pointer
              "
              aria-label="Toggle menu"
            >
              <span
                className={`
                  block h-[2px] w-5 rounded-full bg-gray-300
                  transition-all duration-400 origin-center
                  ${menuOpen ? "rotate-45 translate-y-[7px] bg-blue-400" : ""}
                `}
              />
              <span
                className={`
                  block h-[2px] w-5 rounded-full bg-gray-300
                  transition-all duration-400
                  ${menuOpen ? "opacity-0 scale-0" : ""}
                `}
              />
              <span
                className={`
                  block h-[2px] w-5 rounded-full bg-gray-300
                  transition-all duration-400 origin-center
                  ${menuOpen ? "-rotate-45 -translate-y-[7px] bg-blue-400" : ""}
                `}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={`
          fixed inset-0 z-40 md:hidden
          transition-all duration-500
          ${menuOpen ? "visible" : "invisible"}
        `}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`
            absolute inset-0 bg-slate-950/90 backdrop-blur-xl
            transition-opacity duration-500
            ${menuOpen ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Menu Content */}
        <div
          className={`
            relative h-full flex flex-col items-center justify-center
            transition-all duration-500
            ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >
          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-2 w-full px-8 max-w-xs">
            {NAV_LINKS.map(({ id, icon: Icon }, index) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => handleNavClick(id)}
                  className={`
                    group w-full flex items-center gap-4 px-6 py-4 rounded-xl
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-blue-500/10 border border-blue-500/30 text-blue-400"
                        : "bg-slate-800/30 border border-slate-700/30 text-gray-300 hover:bg-slate-800/60 hover:border-slate-600/50 hover:text-white"
                    }
                  `}
                  style={{
                    transitionDelay: menuOpen ? `${index * 60}ms` : "0ms",
                    transform: menuOpen
                      ? "translateY(0) scale(1)"
                      : "translateY(20px) scale(0.95)",
                    opacity: menuOpen ? 1 : 0,
                  }}
                >
                  <Icon
                    className={`text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400"
                        : "text-gray-500 group-hover:text-blue-400"
                    }`}
                  />
                  <span className="text-lg font-medium">{t(`nav.${id}`)}</span>
                  {isActive && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Bottom decorative line */}
          <div className="mt-10 w-32 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
