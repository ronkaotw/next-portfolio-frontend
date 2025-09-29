import "./global.css";

// import components
import NavBar from "./_components/NavBar/pages";
import FooterComponents from "./_components/Footer/pages";

export const metadata = {
  title: "Aaron",
  description:
    "我是一名充滿熱忱的後端開發人員，對資訊技術有高度興趣。在實習期間，我在一家新創公司學習並實踐了後端技術（如 Node.js）和前端框架（如 Vue.js）。這段經歷讓我參與了多個專案開發，並與資深工程師合作，提升了技術能力與解決問題的技巧。",
  image: "https://i.meee.com.tw/2YdNQpU.png",
  icons: {
    icon: "/favicon.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <FooterComponents />
      </body>
    </html>
  );
}
