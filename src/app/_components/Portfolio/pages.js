"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Experience() {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        const res = await fetch("/api/portfolio");
        const result = await res.json();
        const portfolioArray = result?.data?.getPortfolios || [];
        setPortfolios(portfolioArray);
      } catch (err) {
        console.error("載入關於我的資料錯誤：", err);
        setPortfolios([]);
      }
    }

    fetchPortfolio();
  }, []);
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:w-full h-screen relative flex flex-col justify-start items-center gap-10 p-10"
    >
      <div className="flex flex-col items-center text-center">
        <h2 className="text-[50px] font-bold mb-4">Portfolio</h2>
        <hr className="h-px my-4 bg-white border-0 w-1/2" />
        <p className="text-[15px]">作品集</p>
      </div>

      <div className="w-full flex flex-wrap relative justify-center gap-8">
        {portfolios.map((portfolio, index) => (
          <a
            key={index}
            href={portfolio.linkHref}
            rel={portfolio.linkRel}
            target="_blank"
            className="group w-full sm:w-[280px] md:w-[300px] lg:w-[320px] 
           transition-transform duration-300 ease-in-out 
           hover:scale-105 flex justify-center"
          >
            <div
              className="w-full max-w-[320px] h-[220px] 
             bg-gradient-to-br from-blue-200 to-blue-300 
             rounded-xl shadow-md p-4 flex flex-col justify-between 
             transition-shadow duration-300 group-hover:shadow-xl text-center"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 truncate">
                  {portfolio.title}
                </h2>
                <p className="text-sm text-gray-700">{portfolio.years}</p>
                <p className="text-sm text-gray-700">{portfolio.role}</p>
                <p className="text-sm text-gray-700">{portfolio.item}</p>
              </div>

              {portfolio.link && (
                <span className="text-sm text-blue-800 font-semibold underline underline-offset-2 mt-2">
                  {portfolio.link}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
