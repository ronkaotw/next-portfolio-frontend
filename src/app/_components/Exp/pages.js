"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Experience() {
  const [exps, setExps] = useState([]);

  useEffect(() => {
    async function fetchResume() {
      try {
        const res = await fetch("/api/Exp");
        const result = await res.json();
        const resumeArray = result?.data?.getResumes || [];
        setExps(resumeArray);
      } catch (err) {
        console.error("載入經驗資料錯誤：", err);
        setExps([]);
      }
    }

    fetchResume();
  }, []);

  const timelineItems = [
    { year: "2019～2023", content: "實習生｜新創公司" },
    { year: "2021～2023", content: "創作者剪輯師｜YTBR" },
    { year: "2023", content: "製播組｜COSCUP" },
    { year: "2024", content: "製播組｜SITCON" },
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
        <h2 className="text-[50px] font-bold mb-4">Experience</h2>
        <hr className="lg:h-px my-4 bg-white border-0 block md:hidden sm:hidden" />
        <p className="text-[15px]">經驗</p>
      </div>

      <div className="flex flex-col gap-8">
        {timelineItems.map((item, idx) => (
          <div className="flex gap-2" key={idx}>
            <h3 className="text-[30px]">{item.year}</h3>
            <p className="text-[15px]">{item.content}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
