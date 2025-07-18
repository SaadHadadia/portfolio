export interface Certification {
    id: string;
    name: string;
    organization: string;
    issueDate: string;
    expiryDate?: string;
    credentialId?: string;
    credentialUrl?: string;
    skills?: string[];
    logo?: string;
}

export const certifications: Certification[] = [
    {
        id: '1',
        name: 'Introduction to Cybersecurity Tools & Cyberattacks',
        organization: 'IBM',
        issueDate: 'April 2025',
        credentialId: '6Q3HMDC1JQTJ',
        credentialUrl: 'https://www.coursera.org/account/accomplishments/records/6Q3HMDC1JQTJ',
        skills: [
            'Cybersecurity Controls',
            'Cybersecurity Threats',
            'Identity and Access Management (IAM)',
            'Physical Threats and Controls',
            'Social Engineering',
        ],
        logo: '🛡️'
    },
    {
        id: '2',
        name: 'CCNA: Switching, Routing, and Wireless Essentials',
        organization: 'Cisco',
        issueDate: 'Jun 2024',
        credentialId: '',
        credentialUrl: 'https://www.credly.com/badges/2876a14b-cd97-4e96-aa3f-279da027489c/linked_in_profile',
        skills: [
            'Access Connectivity',
            'Access Security',
            'First-hop Redundancy',
            'High Availability',
            '        IP services',
            'Routing',
            'Switching Protocols',
            'Wireless LAN Controllers',
        ],
        logo: '🌐'
    },
    {
        id: '3',
        name: 'Introduction to Cybersecurity',
        organization: 'Cisco',
        issueDate: 'Jun 2023',
        credentialUrl: 'https://www.credly.com/badges/4e3ba942-bf2c-47b6-b713-65ee526452f2',
        skills: [
            'Cyber Best Practices',
            'Cybersecurity',
            'Network Vulnerabilities',
            'Privacy And Data Confidentiality',
            'Threat Detection'
        ],
        logo: '🛡️'
    },
    {
        id: '4',
        name: 'Certificat de cryptage',
        organization: 'Internet Society',
        issueDate: 'May 2023',
        credentialId: '73589249',
        credentialUrl: 'https://certificates.isoc.org/674acf85-65c1-4e37-bf58-1001d6561ea8',
        skills: ['Cryptography'],
        logo: '🔐'
    },
    {
        id: '5',
        name: 'CCNA: Introduction to Networks',
        organization: 'Cisco',
        issueDate: 'Feb 2023',
        credentialUrl: 'https://www.credly.com/badges/f2a8fefa-4ec8-4674-b7e3-56a2420f9d19/linked_in_profile',
        skills: [
            'Ethernet',
            'IP connectivity',
            'IP services',
            'IP Subnetting',
            'IPv4 And IPv6 Addressing',
            'Network Fundamentals',
            'Security Fundamentals',
            'Switching'
        ],
        logo: '🌐'
    },
];