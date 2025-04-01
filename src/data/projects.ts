
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Learning Platform',
    description: 'A comprehensive e-learning platform with courses, quizzes, and progress tracking.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1674&auto=format&fit=crop',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'WebSockets'],
    liveUrl: 'https://example.com/project1',
    githubUrl: 'https://github.com/username/project1',
  },
  {
    id: 'project-2',
    title: 'Inventory Management System',
    description: 'An enterprise inventory tracking system with real-time updates and analytics.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1740&auto=format&fit=crop',
    technologies: ['Spring Boot', 'React', 'MySQL', 'AWS', 'Docker'],
    liveUrl: 'https://example.com/project2',
    githubUrl: 'https://github.com/username/project2',
  },
  {
    id: 'project-3',
    title: 'Cybersecurity Dashboard',
    description: 'A dashboard for monitoring network security threats and vulnerabilities in real-time.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1740&auto=format&fit=crop',
    technologies: ['Python', 'Django', 'D3.js', 'Redis', 'Docker'],
    liveUrl: 'https://example.com/project3',
    githubUrl: 'https://github.com/username/project3',
  },
  {
    id: 'project-4',
    title: 'SAP Integration Service',
    description: 'A middleware service to integrate SAP with modern web applications.',
    image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=1738&auto=format&fit=crop',
    technologies: ['ABAP', 'Node.js', 'AWS Lambda', 'API Gateway'],
    githubUrl: 'https://github.com/username/project4',
  },
  {
    id: 'project-5',
    title: 'Smart Home IoT Hub',
    description: 'A central hub for connecting and managing IoT devices in a smart home ecosystem.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1740&auto=format&fit=crop',
    technologies: ['React Native', 'MQTT', 'Node.js', 'MongoDB'],
    liveUrl: 'https://example.com/project5',
    githubUrl: 'https://github.com/username/project5',
  },
  {
    id: 'project-6',
    title: 'Finance Analytics Tool',
    description: 'A financial analytics dashboard with real-time data visualization and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1742&auto=format&fit=crop',
    technologies: ['Next.js', 'TailwindCSS', 'D3.js', 'Python ML', 'GraphQL'],
    githubUrl: 'https://github.com/username/project6',
  },
];
