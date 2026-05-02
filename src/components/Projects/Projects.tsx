import { useState } from 'react';
import './Projects.css';

interface Repo {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  language: string;
}

const staticRepos: Repo[] = [
  { name: 'Visual-Studio-Services-Auth-Library-Js', description: 'Angular module for Visual Studio Online authentication', url: 'https://github.com/DiogenesPolanco/Visual-Studio-Sevices-Auth-Library-Js', stars: 4, forks: 5, language: 'TypeScript' },
  { name: 'nopCommerce-cli', description: 'Command line interface for nopCommerce e-commerce platform', url: 'https://github.com/DiogenesPolanco/nopCommerce-cli', stars: 12, forks: 3, language: 'C#' },
  { name: 'RD.js', description: 'JavaScript utility library for Dominican Republic data', url: 'https://github.com/DiogenesPolanco/RD.js', stars: 8, forks: 2, language: 'JavaScript' },
  { name: 'EdgarJs', description: 'JavaScript library for parsing SEC EDGAR financial reports', url: 'https://github.com/DiogenesPolanco/EdgarJs', stars: 156, forks: 45, language: 'TypeScript' },
  { name: 'TSPoints', description: 'TypeScript points system for gamification', url: 'https://github.com/DiogenesPolanco/TSPoints', stars: 3, forks: 1, language: 'TypeScript' },
  { name: 'FamilyFinance', description: 'Family finance management app (Under construction)', url: 'https://github.com/DiogenesPolanco/FamilyFinance', stars: 0, forks: 0, language: 'TypeScript' },
];

const languageColors: Record<string, string> = {
  'C#': '#178600',
  'TypeScript': '#2b7489',
  'JavaScript': '#f1e05a',
  'Vue': '#41b883',
  'Rust': '#dea584',
  'Docker': '#384d54',
  'Python': '#3572A5',
  'Go': '#00ADD8',
};

export default function Projects() {
  const [repos] = useState<Repo[]>(staticRepos);

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <a href="https://github.com/DiogenesPolanco" target="_blank" rel="noopener noreferrer" className="view-all">
            View all repos <span>→</span>
          </a>
        </div>

        <div className="projects-grid">
          {repos.map((repo, i) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-header">
                <h3 className="project-name">{repo.name}</h3>
                <span className="project-lang" style={{ color: languageColors[repo.language] || '#888' }}>
                  <span className="lang-dot" style={{ background: languageColors[repo.language] || '#888' }}></span>
                  {repo.language}
                </span>
              </div>
              <p className="project-desc">{repo.description}</p>
              <div className="project-stats">
                <span className="stat">
                  <span className="stat-icon">★</span>
                  {repo.stars}
                </span>
                <span className="stat">
                  <span className="stat-icon">⑂</span>
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}