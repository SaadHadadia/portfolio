
export interface Skill {
  name: string;
  image: string;
  category: 'language' | 'framework' | 'technology';
  color?: string;
}

export const skills: Skill[] = [
  // Languages
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    category: 'language',
    color: 'rgba(247, 223, 30, 0.1)'
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'language',
    color: 'rgba(49, 120, 198, 0.1)'
  },
  {
    name: 'Python',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    category: 'language',
    color: 'rgba(53, 114, 165, 0.1)'
  },
  {
    name: 'Java',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    category: 'language',
    color: 'rgba(225, 30, 70, 0.1)'
  },
  {
    name: 'PHP',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    category: 'language',
    color: 'rgba(119, 123, 179, 0.1)'
  },
  {
    name: 'ABAP',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sap/sap-original.svg',
    category: 'language',
    color: 'rgba(0, 120, 214, 0.1)'
  },
  {
    name: 'HTML',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    category: 'language',
    color: 'rgba(227, 79, 38, 0.1)'
  },
  {
    name: 'CSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    category: 'language',
    color: 'rgba(38, 77, 228, 0.1)'
  },
  
  // Frameworks
  {
    name: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    category: 'framework',
    color: 'rgba(97, 219, 251, 0.1)'
  },
  {
    name: 'Next.js',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    category: 'framework',
    color: 'rgba(0, 0, 0, 0.1)'
  },
  {
    name: 'Spring Boot',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    category: 'framework',
    color: 'rgba(109, 179, 63, 0.1)'
  },
  {
    name: 'TailwindCSS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
    category: 'framework',
    color: 'rgba(56, 189, 248, 0.1)'
  },
  {
    name: 'Bootstrap',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
    category: 'framework',
    color: 'rgba(121, 82, 179, 0.1)'
  },
  {
    name: 'Express',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    category: 'framework',
    color: 'rgba(60, 60, 60, 0.1)'
  },
  
  // Technologies
  {
    name: 'Docker',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    category: 'technology',
    color: 'rgba(13, 150, 237, 0.1)'
  },
  {
    name: 'AWS',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
    category: 'technology',
    color: 'rgba(255, 153, 0, 0.1)'
  },
  {
    name: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    category: 'technology',
    color: 'rgba(240, 80, 50, 0.1)'
  },
  {
    name: 'Linux',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    category: 'technology',
    color: 'rgba(52, 52, 52, 0.1)'
  },
  {
    name: 'MySQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    category: 'technology',
    color: 'rgba(68, 121, 161, 0.1)'
  },
  {
    name: 'MongoDB',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    category: 'technology',
    color: 'rgba(77, 179, 61, 0.1)'
  },
  {
    name: 'GraphQL',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    category: 'technology',
    color: 'rgba(225, 0, 152, 0.1)'
  },
  {
    name: 'Redis',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    category: 'technology',
    color: 'rgba(194, 0, 22, 0.1)'
  },
  {
    name: 'SAP',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sap/sap-original.svg',
    category: 'technology',
    color: 'rgba(0, 120, 214, 0.1)'
  },
];
