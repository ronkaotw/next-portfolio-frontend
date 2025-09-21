export default async function FooterComponents() {
    const FooterText = {
        text: "Copyright © 2025 ｜ Aaron",
        social: {
            textgit: "Github",
            linkgit: "https://github.com/ronkaotw",
            textyt: "YouTube",
            linkyt: "https://www.youtube.com/playlist?list=PLfj9AELIIYJdFDqpXjyJf_GccS-myHJHv",
            textemail: "Email",
            link: "emailto: aaronkao88@gmail.com"
        }
    }

    return (
        <footer>
            <div className="bg-blue-400 flex flex-col items-center justify-center p-4 space-y-4">
            <p>{FooterText.text}</p>
                <ul className="flex gap-6">
                    <li><a href={FooterText.social.linkgit} target="_blank">{FooterText.social.textgit}</a></li>
                    <li><a href={FooterText.social.linkyt} target="_blank">{FooterText.social.textyt}</a></li>
                    <li><a href={FooterText.social.link} target="_blank">{FooterText.social.textemail}</a></li>
                </ul>
            </div>
        </footer>
    );
}
