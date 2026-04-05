import { useState, useEffect } from 'react';
import './Hero.css';

import profileImg from '../../../public/profile.png?url';

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('');
  const name = 'Diógenes Polanco';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < name.length) {
        setDisplayedName(name.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(v => !v);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const skills = ['.NET', 'TypeScript', 'Angular', 'Vue.js', 'Node.js', 'Docker', 'OpenShift', 'Microservices', 'IA/LLMs'];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/DiogenesPolanco', icon: '⌘' },
    { label: 'Twitter', href: 'https://twitter.com/diogenespolanco', icon: '𝕏' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/diogenespolanco', icon: '◈' },
    { label: 'Email', href: 'mailto:diogenes@polanco.com', icon: '✉' },
  ];

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <div className="avatar-glow"></div>
          <img src={profileImg} alt="Diogenes Polanco" className="avatar-img" />
        </div>

        <h1 className="hero-title">
          <span className="typing-text">{displayedName}</span>
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>_</span>
        </h1>

        <p className="hero-subtitle">
          Manager of Development, Projects and Innovation
        </p>

        <div className="hero-skills">
          <span className="skills-label">&gt;</span>
          {skills.map((skill, i) => (
            <span key={skill} className="skill-tag" style={{ animationDelay: `${0.5 + i * 0.1}s` }}>
              {skill}
            </span>
          ))}
        </div>

        <div className="hero-status">
          <span className="status-dot"></span>
          <span className="status-text">Available for consulting</span>
        </div>

        <div className="hero-socials">
          {socials.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ animationDelay: `${0.9 + i * 0.1}s` }}
            >
              <span className="social-icon">{social.icon}</span>
              <span className="social-label">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="hero-scroll">
          <span>↓ scroll</span>
        </div>
      </div>
    </section>
  );
}