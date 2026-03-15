import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-6 text-center" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">{t("contact.title")}</h2>

      <p className="text-gray-400 mb-8">
        {t("contact.description")}
      </p>

      <div className="flex justify-center gap-8 text-3xl">
        <a
          href="https://github.com/RusbelCuello"
          target="_blank"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/___rusbel/"
          target="_blank"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.linkedin.com/in/rusbel-cuello-b7429b3b3/"
          target="_blank"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/18096770024"
          target="_blank"
          className="hover:text-green-400 transition"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}

export default Contact;
