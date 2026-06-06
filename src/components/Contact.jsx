const links = [
  { icon: '✈', label: 'Telegram', value: '@pante11ey', href: 'https://t.me/pante11ey' },
  { icon: '◈', label: 'Upwork', value: 'Pavel Butin', href: 'https://www.upwork.com/freelancers/~0129315c4858d7fcee' },
  { icon: '◉', label: 'GitHub', value: '@yourusername', href: 'https://github.com/GetRuddy-DF' },
]

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section-header">
        <span className="section-num">// 04</span>
        <h2 className="section-title">CONTACT</h2>
        <div className="section-line" />
      </div>

      <div className="contact-wrapper">
        <div>
          <p className="contact-text">
            Available for freelance projects — websites, landing pages,
            Telegram bots with AI integrations. Fast communication,
            clean code, real attention to detail.
          </p>
          <p className="contact-response">// response time: &lt; 24h</p>
        </div>

        <div className="contact-links">
          {links.map(l => (
            <a className="contact-link" key={l.label} href={l.href} target="_blank" rel="noreferrer">
              <span className="contact-icon">{l.icon}</span>
              {l.label} — {l.value}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}