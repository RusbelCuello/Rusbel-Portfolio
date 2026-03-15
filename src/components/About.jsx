import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        {t("about.title")}
      </h2>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
        <p>
          {t("about.p1")}
        </p>

        <p>
          {t("about.p2")}
        </p>
      </div>

      {/* Bloque destacado */}
      <div className="mt-12 p-6 md:p-8 rounded-xl bg-slate-900 border border-slate-700 text-center">
        <p className="text-lg md:text-xl text-gray-200 font-medium">
          {t("about.quote")}
        </p>
      </div>
    </section>
  );
}

export default About;
