"use client";
import { useRef } from "react";
import Abouts from "./_components/Abouts/pages";
import AboutsText from "./_components/AboutsText/pages";
import Exp from "./_components/Exp/pages";
import Portfolio from "./_components/Portfolio/pages";

// 導入多國語言套件
import "./i18n";

export default function HomePage() {
  const aboutTextRef = useRef(null);

  const scrollToAboutText = () => {
    aboutTextRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Abouts scrolling={scrollToAboutText} />

      <div ref={aboutTextRef}>
        <AboutsText />
      </div>

      <Exp />
      <Portfolio />
    </>
  );
}
