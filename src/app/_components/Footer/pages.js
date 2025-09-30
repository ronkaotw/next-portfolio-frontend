"use client";
import { useTranslation } from "react-i18next";

export default function FooterComponents() {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-400 flex items-center justify-center h-28 p-4">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <p>{t("footer.madeWith")}</p>
        <ul className="flex gap-6">
          <li>
            <a
              className="hover:text-blue-200 transition-colors"
              href="https://github.com/ronkaotw"
              target="_blank"
            >
              {t("footer.github")}
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200 transition-colors"
              href="https://www.linkedin.com/in/ronkaotw/"
              target="_blank"
            >
              {t("footer.linkedin")}
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-200 transition-colors"
              href="mailto:aaronkao88@gmail.com"
              target="_blank"
            >
              {t("footer.email")}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
