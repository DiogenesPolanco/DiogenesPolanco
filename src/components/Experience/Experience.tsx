import { useEffect, useRef, useState } from 'react';
import './Experience.css';

interface Job {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  tech: string[];
}

const jobs: Job[] = [
  {
    company: 'APAP',
    role: 'Manager of Development, Projects and Innovation',
    period: '2023 - Present',
    highlights: [
      'Strategic planning and roadmapping',
      'Team leadership and talent development',
      'Solution architecture and technical direction',
      'Innovation initiatives and AI integration',
      'Project portfolio management',
      'Stakeholder coordination',
      'Budget and resource planning',
      'Process optimization',
      'Vendor management',
      'Risk management',
    ],
    tech: ['.NET', 'Angular', 'OpenShift', 'Kubernetes', 'Azure', 'Microservices', 'AI/LLMs', 'SQL Server', 'Jira', 'Azure DevOps', 'Power BI'],
  },
  {
    company: 'APAP',
    role: 'Technical Lead',
    period: '2022 - 2023',
    highlights: [
      'Microservices architecture and distributed systems',
      'OpenShift and Kubernetes orchestration',
      'Docker containerization and deployment',
      'Azure cloud infrastructure management',
      'Team mentoring and code reviews',
      'Technical decision making and architecture',
      'System integration patterns',
      'DevOps CI/CD pipeline implementation',
      'Performance optimization and monitoring',
      'Sprint planning and Scrum leadership',
    ],
    tech: ['C#', '.NET', 'ASP.NET Core', 'Angular', 'TypeScript', 'Docker', 'OpenShift', 'Kubernetes', 'Azure', 'SQL Server', 'REST APIs', 'Microservices', 'Scrum', 'DevOps', 'Git'],
  },
  {
    company: 'APAP',
    role: 'Senior Developer',
    period: '2021 - 2022',
    highlights: [
      'ASP.NET Core and .NET Core backend development',
      'AngularJS front-end development',
      'T-SQL stored procedures and queries',
      'Entity Framework and ORM implementation',
      'RESTful API design and development',
      'JSON data handling and integrations',
      'Unit testing with xUnit/NUnit',
      'Code review participation',
      'Git version control workflows',
      'Agile/Scrum sprint participation',
    ],
    tech: ['C#', 'ASP.NET Core', '.NET Core', 'AngularJS', 'TypeScript', 'T-SQL', 'SQL Server', 'Entity Framework', 'REST APIs', 'JSON', 'Azure', 'Unit Testing', 'Git', 'JavaScript'],
  },
  {
    company: 'Claro Dominicana',
    role: 'Software Developer',
    period: '2018 - 2021',
    highlights: [
      'ASP.NET MVC development', 
      'T-SQL database queries and stored procedures',
      'ASP.NET Core web applications',
      'Back-end web development', 
      'Scrum methodology',
      '.NET Core applications',   
      'Entity Framework ORM',
      'Unit testing implementation',
      'JSON API integrations',  
      'Git version control', 
      'E-commerce online store creation',
    ],
    tech: ['ASP.NET MVC', 'ASP.NET Core', '.NET', '.NET Core', 'HTML5', 'JavaScript', 'TypeScript', 'T-SQL', 'SQL Server', 'Entity Framework', 'Azure', 'Git', 'JSON', 'Unit Testing', 'Microservices', 'Scrum', 'DevOps', 'Design Patterns'],
  },
];

export default function Experience() {
  const [visibleJobs, setVisibleJobs] = useState<number[]>([]);
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleJobs((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    jobRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div
              key={`${job.company}-${job.role}`}
              ref={(el) => { jobRefs.current[i] = el; }}
              data-index={i}
              className={`timeline-item ${visibleJobs.includes(i) ? 'visible' : ''}`}
            >
              <div className="timeline-marker">
                <span className="marker-dot"></span>
                {i < jobs.length - 1 && <span className="marker-line"></span>}
              </div>
              <div className="timeline-content">
                <div className="job-header">
                  <h3 className="job-role">{job.role}</h3>
                  <span className="job-period">{job.period}</span>
                </div>
                <p className="job-company">{job.company}</p>
                <ul className="job-highlights">
                  {job.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
                <div className="job-tech">
                  {job.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}