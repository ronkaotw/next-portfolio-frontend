export default function FriendLinks() {
  const friendlySites = [
    {
      name: "淳",
      href: "https://chuen666666.github.io/",
      description: "群除我佬，我是肺霧",
      avatarText: "https://chuen666666.github.io/img/avatar.jpg",
      featured: true,
    },
    {
      name: "匿名的貓貓",
      href: "https://qwo877.github.io/me/",
      description: "笨貓一隻",
      avatarText: "https://qwo877.github.io/me/images/image14841987481.png",
      featured: true,
    },
    {
      name: "皮蛋",
      href: "https://bruh0422.xyz/",
      description: "系邊",
      avatarText: "https://www.gravatar.com/avatar/973e7ddc08d7e07ce113d08ef3975ebd?s=256",
      featured: true,
    },
  ];

  return (
    <section className="min-h-[calc(100vh-176px)] max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 flex items-center justify-center">
      <ul className="w-full max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12 lg:gap-y-16 place-items-center">
        {friendlySites.map((site) => (
          <li key={site.href} className="w-full max-w-sm">
            <a
              href={site.href}
              target="_blank"
              rel="noreferrer"
              className={`w-full flex items-center gap-4 rounded-xl p-4 transition-colors ${
                site.featured
                  ? "bg-slate-600/55"
                  : "hover:bg-slate-700/35"
              }`}
            >
              <img src={site.avatarText} alt={`${site.name} avatar`} className="w-16 h-16 rounded-full object-cover" />
              <span className="min-w-0">
                <span className="block text-2xl sm:text-3xl font-semibold text-slate-100 leading-tight truncate">
                  {site.name}
                </span>
                <span className="block mt-1 text-lg sm:text-2xl text-slate-300 leading-tight truncate">
                  {site.description}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
