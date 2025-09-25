"use client"; 
import { motion } from "motion/react"

export default function Experience() {
  const Portfolio = {
    title: "Aviation_AI",
    years: "2024",
    role: "Product Designer",
    item: "Figma",
    linkRel: "Porfolio",
    linkHref: "https://api.ronkao.tw",
    linkAction: "POST"
  }

  return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="lg:w-full h-screen relative flex flex-col md:flex-row sm:flex-row justify-center items-center gap-36 p-10">
      <div className="flex flex-col">
        <h2 className="text-[50px] font-bold mb-4">Portfolio</h2>
        <hr className="h-px my-4 bg-white border-0" />
        <p className="text-[15px]">作品集</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="relative flex flex-col">
          <div className="w-[150px] h-[50px]  bg-gray-200 rounded-lg flex flex-row items-center justify-center gap-5 top-5 md:top-0 relative">
                <button className="bg-blue-700 w-[60px] h-10 rounded-md hover:bg-blue-600 transition-colors">Pinned</button>
                <button className="w-15 h-10 rounded-md bg-transparent text-black hover:bg-gray-500 hover:text-white transition-colors">All</button>
          </div> 
        </div>
      </div>
    </motion.section>
  );
}
