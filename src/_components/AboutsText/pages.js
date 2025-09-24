export default async function AboutsText() {
    const AboutText = {
        text: "我是一名充滿熱忱的後端開發人員，對資訊技術有高度興趣。在實習期間，我在一家新創公司學習並實踐了後端技術（如 Node.js）和前端框架（如 Vue.js）。這段經歷讓我參與了多個專案開發，並與資深工程師合作，提升了技術能力與解決問題的技巧。",
        linkRel: "Abouts",
        linkHref: "https://i.meee.com.tw/2YdNQpU.png",
        linkAction: "GET"
    }


    return (
    <section className="lg:w-full h-screen flex flex-col md:flex-row items-center justify-center gap-10  mt-3">
        <div className="col">
            <h2 className="text-3xl font-bold mb-4 text-[50px]">Abouts</h2>
            <hr className="relative h-px my-8 bg-white border-0 mt-5 md: hidden sm:hidden"/>
            <p className="text-[15px]">關於 Aaron</p>
        </div>
        <div className="col">
            <p className="relative w-md mt-5">
                {AboutText.text}
            </p>
        </div>
    </section>

    );
}
