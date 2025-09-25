"use client"; 
import { motion } from "motion/react"

export default async function ContactPage() {
  const ContactMe = {
    textGit: "GitHub",
    linkRelGit: "GithubLink",
    linkHrefGit: "https://github.com/ronkaotw",
    linkActionGit: "GET",

    linkActionIn: "GET",
    textIn: "Linkedin",
    linkRelIn: "LinkedinLink",
    linkHrefIn: "https://www.linkedin.com/in/ronkaotw/",
    linkActionIn: "GET",
      
    textEmail: "Email",
    linkRelEmail: "Email",
    linkHrefEmail: "aaronkao88@gmail.com",
    linkActionEmail: "GET",
  }
    return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full h-screen flex items-center justify-center text-center">
      <div className="w-[500px] rounded-3xl flex flex-col items-center gap-6 p-6">
        <h2 className="text-2xl">聯絡我</h2>

        <a
          href={ContactMe.linkHrefGit}
          rel={ContactMe.linkRelGit}
          target="_blank"
          className="w-full py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors text-white text-lg"
        >
          {ContactMe.textGit}
        </a>

        <a
          href={ContactMe.linkHrefIn}
          rel={ContactMe.linkRelIn}
          target="_blank"
          className="w-full py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors text-white text-lg"
        >
          {ContactMe.textIn}
        </a>

        <a
          href={ContactMe.linkHrefEmail}
          rel={ContactMe.linkRelEmail}
          target="_blank"
          className="w-full py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors text-white text-lg"
        >
          {ContactMe.textEmail}
        </a>
      </div>
    </motion.section>
    );
}
