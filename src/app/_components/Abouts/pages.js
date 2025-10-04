"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function AboutComponents({ scrolling }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-10 md:gap-20 px-6 lg:px-24 relative"
    >
      <Image
        src="/Aaron_Logo.png"
        alt="Aaron Logo"
        width={180}
        height={180}
        className="w-[120px] sm:w-[150px] md:w-[180px] mb-6 md:mb-0"
      />

      <div className="flex flex-col items-center max-w-md">
        <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold mb-4">
          這裡是
          <span className="block text-[50px] sm:text-[60px] md:text-[70px]">
            Aaron
          </span>
        </h2>
        <p className="text-lg sm:text-xl mb-6">所有的作品集都會在這</p>

        {/* 簡歷按鈕置中 */}
        <div className="flex justify-center mt-4">
          <a
            href="https://drive.google.com/file/d/1hKNFN9-o9lk9ecr0-hqPB1hvi9iUjIrS/view?usp=sharing"
            target="_blank"
            rel="Resume"
          >
            <button className="bg-blue-700 w-[80px] sm:w-[100px] h-10 rounded-md hover:bg-blue-600 transition-colors cursor-pointer">
              簡歷
            </button>
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center absolute bottom-5 md:bottom-20">
        <Image
          src="/Mouse_Scrolling.png"
          alt="Scroll Animation"
          width={45}
          height={45}
          onClick={scrolling}
          className="w-[30px] sm:w-[35px] md:w-[40px] lg:w-[45px] cursor-pointer"
        />
      </div>
    </motion.section>
  );
}
