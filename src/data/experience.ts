
export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Information Systems Intern',
    company: 'TechCorp',
    location: 'Paris, France',
    startDate: 'May 2023',
    endDate: 'August 2023',
    description: 'Worked on enterprise data management solutions and web application development.',
    achievements: [
      'Developed a dashboard for monitoring system performance',
      'Implemented security improvements reducing vulnerabilities by 30%',
      'Automated reporting processes saving 5 hours of manual work weekly',
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'Docker', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Web Development Assistant',
    company: 'University IT Department',
    location: 'Remote',
    startDate: 'September 2022',
    endDate: 'April 2023',
    description: 'Assisted in maintaining and improving university web applications.',
    achievements: [
      'Redesigned the student portal improving user satisfaction by 25%',
      'Developed a mobile-responsive interface for the campus map',
      'Collaborated with staff to implement new features based on user feedback',
    ],
    technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'Git'],
  },
  {
    id: 'exp-3',
    role: 'Student Researcher',
    company: 'Cybersecurity Research Lab',
    location: 'Remote',
    startDate: 'January 2022',
    endDate: 'June 2022',
    description: 'Conducted research on web application security vulnerabilities.',
    achievements: [
      'Identified critical vulnerabilities in web authentication systems',
      'Developed secure coding guidelines adopted by the department',
      'Presented findings at a university security symposium',
    ],
    technologies: ['Python', 'OWASP Tools', 'Web Security', 'Penetration Testing'],
  },
];
