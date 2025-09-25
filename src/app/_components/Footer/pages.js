export default async function FooterComponents() {
    const FooterText = {
        text: "Made With ❤️ Aaron",
        social: {
            textgit: "Github",
            linkgit: "https://github.com/ronkaotw",
            textIn: "LinkedIn",
            linkIn: "https://www.linkedin.com/in/ronkaotw/",
            textemail: "Email",
            link: "mailto: aaronkao88@gmail.com",
        }
    }

    return (
        <footer className="bg-blue-400 flex items-center justify-center h-28 p-4">
            <div className="lg: flex flex-col sm:flex-row items-center gap-10">
                <p>{FooterText.text}</p>
                <ul className="flex gap-6">
                <li><a className="hover:text-blue-200 transition-colors" href={FooterText.social.linkgit} target="_blank">{FooterText.social.textgit}</a></li>
                <li><a className="hover:text-blue-200 transition-colors" href={FooterText.social.linkIn} target="_blank">{FooterText.social.textIn}</a></li>
                <li><a className="hover:text-blue-200 transition-colors" href={FooterText.social.link} target="_blank">{FooterText.social.textemail}</a></li>
                </ul>
            </div>
        </footer>
    );
}
