"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function AboutsText() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    async function fetchAbouts() {
      try {
        const res = await fetch("/api/about");
        const result = await res.json();
        const aboutsArray = result?.data?.getAbouts || [];
        setAbouts(aboutsArray);
      } catch (err) {
        console.error("載入關於我的資料錯誤：", err);
        setAbouts([]);
      }
    }

    fetchAbouts();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:w-full h-screen flex flex-col md:flex-row items-center justify-center gap-10 mt-3"
    >
      <div className="col">
        <h2 className="text-3xl font-bold mb-4 text-[50px]">Abouts</h2>
        <hr className="lg:block relative h-px my-8 bg-white border-0 mt-5 md:hidden sm:hidden" />
        <p className="text-[15px]">關於 Aaron</p>
      </div>

      {abouts.map((about, index) => (
        <div className="col" key={index}>
          <p className="relative mt-5 w-full max-w-md sm:max-w-sm break-words">
            {about.text}
          </p>
        </div>
      ))}
    </motion.section>
  );
}
