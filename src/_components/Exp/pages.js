export default async function Experience() {
    const Experience = {
        "education": [
            {
            "school": "台北市影視音實驗教育機構",
            "years": "2018-2021",
            "program": null
            },
            {
            "school": "非學校型態實驗教育 - 自學生",
            "years": "2023-2024",
            "program": null
            }
        ],
        "experience": [
            {
            "title": "YTBR 創作者剪輯師",
            "years": "2021-2024",
            "companyIcon": {
                "rel": "Company Icon",
                "href": "https://sitcon.org/branding/assets/logos/logo.svg",
                "action": "GET"
            }
            },
            {
            "title": "新創公司實習生",
            "years": "2019-2023"
            }
        ],
        "projects": [
            {
            "title": "COSCUP - 制播組",
            "year": "2023",
            "icon": {
                "rel": "Company Icon",
                "href": "https://coscup.org/2024/assets/og-c82e3e8a.png",
                "action": "GET"
            }
            },
            {
            "title": "SITCON - 制播組",
            "year": "2024"
            }
        ]
    }


    return (
    <section className="w-full h-screen flex col-auto justify-center gap-36">
        <div className="col">
            <h2 className="text-3xl font-bold mb-4 text-[50px]">Experience</h2>
            <hr className="relative h-px my-8 bg-white border-0 mt-5"/>
            <p className="text-[15px]">經驗</p>
        </div>
        <div className="col">
            <p className="relative w-md mt-5">
                
            </p>
        </div>
    </section>

    );
}
