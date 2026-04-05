import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    setSending(false);
    setSent(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 3000);
  };

  const socials = [
    { label: 'Email', href: 'mailto:diogenes@polanco.com', icon: '✉' },
    { label: 'GitHub', href: 'https://github.com/DiogenesPolanco', icon: '⌘' },
    { label: 'Twitter', href: 'https://twitter.com/diogenespolanco', icon: '𝕏' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/diogenespolanco', icon: '◈' },
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-text">
            <p className="contact-intro">
              Let's build something together.
              <br />
              I'm always open to discussing new projects or opportunities.
            </p>
            <div className="contact-socials">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social">
                  <span className="social-icon">{s.icon}</span>
                  <span>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your name"
              className="form-input"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="form-input"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Your message... (or just say hi!)"
              className="form-input form-textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit" className="submit-btn" disabled={sending}>
              {sending ? 'Sending...' : sent ? '✓ Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}