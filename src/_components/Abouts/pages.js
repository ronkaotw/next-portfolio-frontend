"use client"; 
import { motion } from "motion/react"

export default function AboutComponents({  }) {
  return (
     <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="lg:w-full h-screen flex flex-col md:flex-row items-center justify-center text-center gap-36">
      <img src="/Aaron_Logo.png" className="w-[150px]" />
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-4">
          這裡是 <p className="text-[50px]">Aaron</p>
        </h2>
        <p className="text-lg">所有的作品都會放在這</p>
        <div className="flex relative top-5 gap-6">
          <button className="bg-blue-700 w-[60px] h-10 rounded-md hover:bg-blue-600 transition-colors">
            簡歷
          </button>
          <button className="w-15 h-10 rounded-md bg-transparent text-white hover:bg-gray-100 hover:text-black transition-colors">
            English
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center absolute bottom-10">
        <img
          src="/Mouse_Scrolling.png"
          alt="滑鼠滾動動畫"
          className="w-[35px] sm:w-[35px] md:w-[40px] lg:w-[45px] cursor-pointer"
        />
      </div>
    </motion.section>
  );
}
