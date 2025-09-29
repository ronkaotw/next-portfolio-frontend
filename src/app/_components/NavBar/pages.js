"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: "關於我", href: "/" },
    { text: "聯絡我", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 1 }}
      className="bg-blue-400 flex flex-col items-center h-16"
    >
      <div className="flex items-center justify-center gap-36 w-full h-16">
        <Link href="/">
          <Image
            src="/Aaron_Logo.png"
            alt="Logo"
            width={150} // 必須指定寬度
            height={50} // 必須指定高度
          />
        </Link>

        <ul className="hidden lg:flex flex-row gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-white hover:text-blue-200 transition-colors"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="lg:hidden text-5xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-center gap-4 mt-2 lg:hidden w-full bg-blue-300 py-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-white hover:text-blue-200 transition-colors"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </motion.nav>
  );
}
