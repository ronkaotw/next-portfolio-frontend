import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { text: "關於我", href: "/About" },
    { text: "簡歷", href: "/Resume" },
    { text: "聯絡我", href: "/Contact" },
  ];

  return (
    <nav className="bg-blue-400 flex flex-row items-center justify-center gap-96 h-16">
      <a href="/">
        <img
          src="/Aaron_Logo.png"
          className="w-[150px]"
        />
      </a>
      <ul className="flex gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="hover:text-blue-200 transition-colors"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
