import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLaptopCode,
  FaShoppingCart,
  FaCogs,
  FaEllipsisH,
  FaBolt,
  FaCalendarAlt,
  FaFeatherAlt,
  FaComments,
} from "react-icons/fa";

const PROJECT_TYPES = [
  { key: "landing", icon: FaLaptopCode, color: "text-blue-400" },
  { key: "ecommerce", icon: FaShoppingCart, color: "text-emerald-400" },
  { key: "custom", icon: FaCogs, color: "text-purple-400" },
  { key: "other", icon: FaEllipsisH, color: "text-amber-400" },
];

const TIMELINES = [
  { key: "urgent", icon: FaBolt, color: "text-red-400" },
  { key: "medium", icon: FaCalendarAlt, color: "text-sky-400" },
  { key: "flexible", icon: FaFeatherAlt, color: "text-green-400" },
];

const WHATSAPP_NUMBER = "18096770024";

function ProjectCTA() {
  const { t } = useTranslation();
  const [selectedType, setSelectedType] = useState(null);
  const [selectedTimeline, setSelectedTimeline] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const buildMessage = () => {
    const type = selectedType
      ? t(`project_cta.types.${selectedType}`)
      : "—";
    const timeline = selectedTimeline
      ? t(`project_cta.timeline.${selectedTimeline}`)
      : "—";
    const clientName = name.trim() || "—";
    const idea = description.trim() || "—";

    return t("project_cta.whatsapp_template", {
      type,
      timeline,
      name: clientName,
      description: idea,
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(
      selectedType
        ? `${t(`project_cta.types.${selectedType}`)} — ${name.trim() || t("project_cta.placeholder_name")}`
        : "Nuevo proyecto"
    );
    const body = encodeURIComponent(buildMessage());
    window.open(`mailto:rusbelcuello@gmail.com?subject=${subject}&body=${body}`);
  };

  const handleDirectChat = () => {
    const message = encodeURIComponent(
      t("project_cta.whatsapp_template", {
        type: "—",
        timeline: "—",
        name: "—",
        description: t("project_cta.btn_direct_chat"),
      })
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const isFormReady = selectedType && selectedTimeline;

  return (
    <section
      id="project-cta"
      className="py-24 px-4 sm:px-6"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("project_cta.title")}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            {t("project_cta.subtitle")}
          </p>
        </div>

        {/* Card container */}
        <div className="relative rounded-2xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-lg p-6 sm:p-10 shadow-2xl shadow-blue-500/5">
          {/* Decorative glow */}
          <div className="absolute -top-px left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          {/* Step 1 — Project type */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
              {t("project_cta.select_type")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PROJECT_TYPES.map(({ key, icon: Icon, color }) => {
                const isActive = selectedType === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedType(key)}
                    className={`
                      group relative flex flex-col items-center gap-2 py-5 px-3 rounded-xl
                      border transition-all duration-300 cursor-pointer text-center
                      ${
                        isActive
                          ? "border-blue-500/70 bg-blue-500/10 shadow-lg shadow-blue-500/10 scale-[1.03]"
                          : "border-slate-700/50 bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/70"
                      }
                    `}
                  >
                    <Icon
                      className={`text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? color : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`text-xs sm:text-sm font-medium leading-tight ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {t(`project_cta.types.${key}`)}
                    </span>
                    {isActive && (
                      <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 — Timeline */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
              {t("project_cta.select_timeline")}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {TIMELINES.map(({ key, icon: Icon, color }) => {
                const isActive = selectedTimeline === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedTimeline(key)}
                    className={`
                      group flex flex-col items-center gap-2 py-5 px-3 rounded-xl
                      border transition-all duration-300 cursor-pointer
                      ${
                        isActive
                          ? "border-blue-500/70 bg-blue-500/10 shadow-lg shadow-blue-500/10 scale-[1.03]"
                          : "border-slate-700/50 bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/70"
                      }
                    `}
                  >
                    <Icon
                      className={`text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110 ${
                        isActive ? color : "text-gray-500"
                      }`}
                    />
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {t(`project_cta.timeline.${key}`)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 3 — Details */}
          <div className="mb-10">
            <p className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
              {t("project_cta.your_details")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("project_cta.placeholder_name")}
                className="flex-1 bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition"
              />
            </div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("project_cta.placeholder_description")}
              rows={3}
              className="w-full bg-slate-800/60 border border-slate-700/50 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleWhatsApp}
              disabled={!isFormReady}
              className={`
                flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl
                font-semibold text-sm transition-all duration-300
                ${
                  isFormReady
                    ? "bg-green-600 hover:bg-green-500 text-white shadow-lg shadow-green-600/20 hover:shadow-green-500/30 cursor-pointer"
                    : "bg-slate-800 text-gray-600 cursor-not-allowed"
                }
              `}
            >
              <FaWhatsapp className="text-lg" />
              {t("project_cta.btn_whatsapp")}
            </button>

            <button
              onClick={handleEmail}
              disabled={!isFormReady}
              className={`
                flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl
                font-semibold text-sm transition-all duration-300
                ${
                  isFormReady
                    ? "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500 cursor-pointer"
                    : "bg-slate-800/50 text-gray-600 border border-slate-700/30 cursor-not-allowed"
                }
              `}
            >
              <FaEnvelope className="text-lg" />
              {t("project_cta.btn_email")}
            </button>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-slate-700/50" />
            <span className="text-xs text-gray-600 uppercase tracking-wider">o</span>
            <div className="flex-1 h-px bg-slate-700/50" />
          </div>

          {/* Direct chat */}
          <button
            onClick={handleDirectChat}
            className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-medium text-gray-400 border border-slate-700/40 hover:border-green-500/40 hover:text-green-400 hover:bg-green-500/5 transition-all duration-300 cursor-pointer group"
          >
            <FaComments className="text-base group-hover:animate-bounce" />
            {t("project_cta.btn_direct_chat")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProjectCTA;
