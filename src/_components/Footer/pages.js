export default async function FooterComponents() {
    const FooterText = {
        text: "Made With ❤️ Aaron",
        social: {
            textgit: "Github",
            linkgit: "https://github.com/ronkaotw",
            textyt: "YouTube",
            linkyt: "https://www.youtube.com/playlist?list=PLfj9AELIIYJdFDqpXjyJf_GccS-myHJHv",
            textemail: "Email",
            link: "emailto: aaronkao88@gmail.com",
        }
    }

    return (
        <footer className="bg-blue-400 flex items-center justify-center h-28 p-4">
            <div className="flex items-center gap-72">
                <p>{FooterText.text}</p>
                <ul className="flex gap-6">
                <li><a className="hover:text-blue-200 transition-colors" href={FooterText.social.linkgit} target="_blank">{FooterText.social.textgit}</a></li>
                <li><a className="hover:text-blue-200 transition-colors" href={FooterText.social.linkyt} target="_blank">{FooterText.social.textyt}</a></li>
                <li><a className="hover:text-blue-200 transition-colors" href={FooterText.social.link} target="_blank">{FooterText.social.textemail}</a></li>
                </ul>
            </div>
        </footer>
    );
}
