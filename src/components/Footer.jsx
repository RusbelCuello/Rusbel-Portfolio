import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-6 text-center text-gray-400 bg-slate-900">
      {t("footer.text")}
    </footer>
  );
}

export default Footer;
