"use client"; 
import { motion } from "motion/react"


export default function Experience() {
  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="lg:w-full h-screen gap-36 p-10 flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col">
        <h2 className="text-[50px] font-bold mb-4">Experience</h2>
        <hr className="lg:h-px my-4 bg-white border-0 block md:hidden sm:hidden" />
        <p className="text-[15px]">經驗</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-[30px]">2019～2023</h3>
          <p className="text-[15px]">實習生｜新創公司</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[30px]">2021～2023</h3>
          <p className="text-[15px]">創作者剪輯師｜YTBR</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[30px]">2023 - 製播組</h3>
          <p className="text-[15px]">COSCUP</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[30px]">2023 - 製播組</h3>
          <p className="text-[15px]">SITCON</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[30px]">2024 - 製播組</h3>
          <p className="text-[15px]">SITCON</p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="text-[30px]">2024 - 場務組</h3>
          <p className="text-[15px]">SITCON Hackathon</p>
        </div>
      </div>
    </motion.section>
  );
}
