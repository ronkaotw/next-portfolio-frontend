const SOCIAL_LINKS = [
  {
    label: "Github",
    href: "https://github.com/ronkaotw",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ronkaotw/",
  },
  {
    label: "Email",
    href: "mailto:contact@ronkao.tw",
  },
];

export default function FooterComponents() {
  return (
    <footer className="bg-blue-400 flex items-center justify-center h-28 p-4">
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <p>Made With ❤️ Aaron</p>
        <ul className="flex gap-6">
          {SOCIAL_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className="hover:text-blue-200 transition-colors cursor-pointer"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
