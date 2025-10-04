"use client";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { t } = useTranslation(); // 預設 translation.json

  const timelineKeys = [
    { year: "2019～2023", key: "experience.items.intern" },
    { year: "2021～2023", key: "experience.items.editor" },
    { year: "2023", key: "experience.items.coscup" },
    { year: "2024", key: "experience.items.sitcon2024" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:w-full h-screen gap-36 p-10 flex flex-col md:flex-row justify-center items-center"
    >
      <div className="flex flex-col">
        <h2 className="text-[50px] font-bold mb-4">{t("experience.title")}</h2>
        <hr className="lg:block h-px my-4 bg-white border-0 block md:hidden sm:hidden" />
        <p className="text-[15px]">{t("experience.title")}</p>
      </div>

      <div className="flex flex-col gap-8">
        {timelineKeys.map((item, idx) => (
          <div className="flex gap-5" key={idx}>
            <h3 className="text-[30px]">{item.year}</h3>
            <p className="text-[15px]">{t(item.key)}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
