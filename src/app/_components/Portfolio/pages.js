"use client";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  // 這裡直接用 JSON key 陣列表示要顯示的作品
  const portfolioKeys = ["backend", "editor"];

  // 假設你的作品連結對應每個 key
  const portfolioLinks = {
    backend: "https://github.com/ronkaotw",
    editor:
      "https://www.youtube.com/playlist?list=PLfj9AELIIYJdFDqpXjyJf_GccS-myHJHv",
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:w-full h-screen relative flex flex-col justify-start items-center gap-10 p-10"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[50px] font-bold mb-4">{t("portfolio.title")}</h2>
        <hr className="h-px my-4 bg-white border-0 w-1/2" />
        <p className="text-[15px]">{t("portfolio.title")}</p>
      </div>

      <div className="w-full flex flex-wrap relative justify-center gap-8">
        {portfolioKeys.map((key) => (
          <a
            key={key}
            href={portfolioLinks[key]}
            rel="noopener noreferrer"
            target="_blank"
            className="group w-full sm:w-[280px] md:w-[300px] lg:w-[320px] transition-transform duration-300 ease-in-out hover:scale-105 flex justify-center"
          >
            <div className="w-full max-w-[320px] h-[220px] bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl shadow-md p-4 flex flex-col justify-between transition-shadow duration-300 group-hover:shadow-xl text-center">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">
                  {t(`portfolio.${key}.title`)}
                </h2>
                <p className="text-sm text-gray-700">
                  {t(`portfolio.${key}.year`)}
                </p>
                <p className="text-sm text-gray-700">
                  {t(`portfolio.${key}.role`)}
                </p>
                <p className="text-sm text-gray-700">
                  {t(`portfolio.${key}.skills`)}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
