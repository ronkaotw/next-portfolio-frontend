import Link from 'next/link'

export default function Navbar() {
  const navLinks = [
    { text: "關於我", href: "/" },
    { text: "聯絡我", href: "/contact" }
  ];

  return (
    <nav className="bg-blue-400 flex flex-row items-center justify-center gap-96 h-16">
      <Link href="/">
        <img
          src="/Aaron_Logo.png"
          className="w-[150px]"
        />
      </Link>
      <ul className="flex gap-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="hover:text-blue-200 transition-colors"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
