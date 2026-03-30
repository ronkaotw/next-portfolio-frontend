"use client";
import { motion } from "motion/react";

export default function AboutsText() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:w-full h-screen flex flex-col md:flex-row items-center justify-center gap-10 mt-3"
    >
      <div className="col">
        <h2 className="section-title">About</h2>
        <hr className="hr-responsive" />
        <p className="section-subtitle">Aaron</p>
      </div>
      <div className="col">
        <p className="relative mt-5 w-full max-w-md sm:max-w-sm whitespace-normal">
          我是一名充滿熱忱的後端開發人員，對資訊技術有高度興趣。在實習期間，我在一家新創公司學習並實踐了後端技術（如 Node.js）和前端框架（如 Vue.js）。這段經歷讓我參與了多個專案開發，並與資深工程師合作，提升了技術能力與解決問題的技巧。
        </p>
      </div>
    </motion.section>
  );
}
