import Abouts from "./_components/Abouts/pages"
import AboutsText from './_components/AboutsText/pages';
import Exp from './_components/Exp/pages';
import Portfolio from './_components/Portfolio/pages'

export default function RootLayout({}) {
  return (
    <html lang="en">
      <body>
        <Abouts/>
        <AboutsText/>
        <Exp/>
        <Portfolio/>
      </body>
    </html>
  );
}