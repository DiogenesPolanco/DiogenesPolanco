import { useEffect, useRef, useState } from 'react';
import './Skills.css';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['.NET', 'C#', 'TypeScript', 'JavaScript', 'Rust', 'SQL', 'Go', 'Python'],
  },
  {
    name: 'Frameworks',
    skills: ['Angular', 'Vue.js', 'React', 'ASP.NET Core', 'Node.js', 'Express'],
  },
  {
    name: 'Cloud & Platform',
    skills: ['Azure', 'AWS', 'OpenShift', 'Kubernetes', 'Docker', 'Windows Server', 'Linux (Arch/Debian/RHEL)', 'Office 365'],
  },
  {
    name: 'Architecture',
    skills: ['Microservices', 'Event-Driven', 'DDD', 'Clean Architecture', 'System Design'],
  },
  {
    name: 'AI & Innovation',
    skills: ['LLMs', 'AI Integration', 'ChatGPT', 'Generative AI', 'RAG'],
  },
  {
    name: 'DevOps & Security',
    skills: ['DevOps', 'Security Testing', 'CI/CD', 'OpenShift', 'Azure DevOps'],
  },
  {
    name: 'Leadership & Management',
    skills: ['Team Leadership', 'Scrum', 'Project Management', 'Agile', 'Technical Strategy', 'Mentoring', 'Stakeholder Management'],
  },
  {
    name: 'Project Management',
    skills: ['Jira', 'Azure DevOps', 'Agile Boards', 'Sprint Planning', 'Backlog Management', 'Release Management'],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="skills-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tools & Technologies</h2>
        </div>

        <div className={`skills-grid ${visible ? 'visible' : ''}`}>
          {skillsData.map((category, catIdx) => (
            <div
              key={category.name}
              className="skill-category"
              style={{ animationDelay: `${catIdx * 0.15}s` }}
            >
              <h3 className="category-name">{category.name}</h3>
              <div className="skill-pills">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{ animationDelay: `${catIdx * 0.15 + skillIdx * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}