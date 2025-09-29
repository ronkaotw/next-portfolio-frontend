"use client";
import { motion } from "motion/react";

export default function AboutComponents({ scrolling }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 md:gap-20 px-6 lg:px-24 relative"
    >
      <img
        src="/Aaron_Logo.png"
        className="w-[120px] sm:w-[150px] md:w-[180px] mb-6 md:mb-0"
      />

      <div className="flex flex-col items-center md:items-start max-w-md">
        <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-4">
          這裡是
          <span className="block text-[50px] sm:text-[60px] md:text-[70px]">
            Aaron
          </span>
        </h2>
        <p className="text-lg sm:text-xl mb-6">所有的作品都會放在這</p>
        <div className="flex gap-4 sm:gap-6">
          <button className="bg-blue-700 w-[80px] sm:w-[100px] h-10 rounded-md hover:bg-blue-600 transition-colors">
            簡歷
          </button>
          <button className="w-[80px] sm:w-[100px] h-10 rounded-md bg-transparent text-white hover:bg-gray-100 hover:text-black transition-colors">
            English
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center absolute bottom-5 md:bottom-20">
        <img
          onClick={scrolling}
          src="/Mouse_Scrolling.png"
          alt="滑鼠滾動動畫"
          className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px] cursor-pointer"
        />
      </div>
    </motion.section>
  );
}
