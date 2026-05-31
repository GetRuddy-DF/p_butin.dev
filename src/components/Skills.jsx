const skills = [
    {label: 'Frontend', tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TeilWind'] },
    {label: 'AI & Bots', tags: ['Python', 'aiogram', 'OnepAI API', 'GPT-4o', 'Telegram Bots']},
    {label: 'APIs & Tools', tags: ['REST APIs', 'TMDB', 'Git', 'GitHub', 'Figma']},
    {label: 'Deploy', tags: ['Raiway', 'Vercel', 'Render', 'GitHubPages']},
]


export default function Skills() {
    return (
        <section className=" section" id="skills">
            <div className="section-header">
                <span className="section-num">// 01</span>
                <h2 className="section-title">SKILLS</h2>
                <div className="section-line" />
            </div>
            <div className="section-grid">
                {skills.map(s => (
                    <div className="skill-card" key={s.label}>
                        <div className="skill-card-label">{s.label}</div>
                        <div className="skill-tags-wrap">
                            {s.tags.map(t => (
                                <span className="skill-tag" key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}