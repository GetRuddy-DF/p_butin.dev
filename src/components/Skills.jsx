import { useLang } from "../LanguageContext"

export default function Skills() {
    const { t } = useLang()


const skills = [
    {label: t.skills.frontend, tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TailWind'] },
    {label: t.skills.aiBots, tags: ['Python', 'aiogram', 'OpenAI API', 'GPT-4o', 'Telegram Bots']},
    {label: t.skills.apisTools, tags: ['REST APIs', 'TMDB', 'Git', 'GitHub', 'Figma']},
    {label: t.skills.deploy, tags: ['Railway', 'Vercel', 'Render', 'GitHub Pages']},
]


    return (
        <section className=" section" id="skills">
            <div className="section-header">
                <span className="section-num">// 01</span>
                <h2 className="section-title">{t.skills.title}</h2>
                <div className="section-line" />
            </div>
            <div className="section-grid">
                {skills.map(s => (
                    <div className="skill-card" key={s.label}>
                        <div className="skill-card-label">{s.label}</div>
                        <div className="skill-tags-wrap">
                            {s.tags.map(tag => (
                                <span className="skill-tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}