export default function Services() {
    const services = [
    { icon: '🖥️', title: 'Landing Pages', desc: 'Fast, modern, conversion-focused' },
    { icon: '🏢', title: 'Business Websites', desc: 'Clean and professional web presence' },
    { icon: '🤖', title: 'Telegram Bots', desc: 'Custom bots for any business need' },
    { icon: '🧠', title: 'AI Integrations', desc: 'GPT-powered features and automation' },
    { icon: '🔌', title: 'API Development', desc: 'Connect and build on top of any API' },
  ]

  return (
    <section className="section" id="services">
        <div className="section-header">
            <span className="section-num">// 02</span>
            <h2 className="section-title">SERVICES</h2>
            <div className="section-line" />
        </div>

        <div className="services-grid">
            {services.map(s => (
                <div className="service-card" key={s.title}>
                    <div className="service-icon">{s.icon}</div>
                    <div className="service-title">{s.title}</div>
                    <div className="service-desc">{s.desc}</div>
                </div>
            ))}
        </div>
    </section>
  )
}