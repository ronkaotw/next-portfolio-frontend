import Image from "next/image";

export default function Navbar() {
  const navLinks = [
    { text: "關於我", href: "/About" },
    { text: "簡歷", href: "/Resume" },
    { text: "聯絡我", href: "/Contact" },
  ];

  return (
    <nav className="bg-blue-400 p-4">
      <div className="flex relative flex-row items-center justify-center gap-5 top-2">
        <a href="/">
          <img
            src="/Aaron_Logo.jpg"
            className="w-[50px]"
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
      </div>
    </nav>
  );
}
