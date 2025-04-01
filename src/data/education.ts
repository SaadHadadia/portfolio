
export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear: number | null;
  gpa?: string;
  coursework: string[];
}

export const education: Education = {
  degree: 'Bachelor of Science',
  field: 'Information Systems',
  institution: 'University of Technology',
  location: 'Paris, France',
  startYear: 2021,
  endYear: 2024,
  gpa: '3.85/4.0',
  coursework: [
    'Database Management Systems',
    'Web Application Development',
    'Cybersecurity Fundamentals',
    'Enterprise Architecture',
    'Software Engineering',
    'Data Analytics',
    'Network Security',
    'Cloud Computing',
    'Information Systems Analysis',
    'Project Management',
  ],
};
