
import React, { createContext, useState, useEffect, useContext } from 'react';

export type Language = 'en' | 'fr' | 'ar';

export interface TranslationKeys {
  // Navigation
  home: string;
  about: string;
  skills: string;
  projects: string;
  experience: string;
  education: string;
  contact: string;
  
  // Hero Section
  title: string;
  subtitle: string;
  intro: string;
  contactMe: string;
  
  // About Section
  aboutTitle: string;
  aboutText: string;
  
  // Skills Section
  skillsTitle: string;
  languages: string;
  frameworks: string;
  technologies: string;
  
  // Projects Section
  projectsTitle: string;
  viewLive: string;
  viewGithub: string;
  
  // Experience Section
  experienceTitle: string;
  
  // Education Section
  educationTitle: string;
  coursework: string;
  
  // Contact Section
  contactTitle: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  sendMessage: string;
  
  // Footer
  copyright: string;
  builtWith: string;
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
  dir: 'ltr' | 'rtl';
}

const translations: Record<Language, TranslationKeys> = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
    
    // Hero Section
    title: 'Information Systems Student',
    subtitle: 'Web & Security Enthusiast',
    intro: 'Passionate about creating secure, user-friendly web applications. Exploring the intersection of information systems, web development, and cybersecurity.',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutText: 'I am an Information Systems student with a passion for web development, cybersecurity, and emerging technologies. My goal is to build secure, scalable, and user-friendly applications that solve real-world problems.',
    
    // Skills Section
    skillsTitle: 'My Skills',
    languages: 'Languages',
    frameworks: 'Frameworks',
    technologies: 'Technologies',
    
    // Projects Section
    projectsTitle: 'My Projects',
    viewLive: 'View Live',
    viewGithub: 'GitHub',
    
    // Experience Section
    experienceTitle: 'My Experience',
    
    // Education Section
    educationTitle: 'My Education',
    coursework: 'Relevant Coursework',
    
    // Contact Section
    contactTitle: 'Get In Touch',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    copyright: 'All rights reserved',
    builtWith: 'Built with React',
  },
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    experience: 'Expérience',
    education: 'Formation',
    contact: 'Contact',
    
    // Hero Section
    title: 'Étudiant en Systèmes d\'Information',
    subtitle: 'Passionné de Web & Sécurité',
    intro: 'Passionné par la création d\'applications web sécurisées et conviviales. J\'explore l\'intersection des systèmes d\'information, du développement web et de la cybersécurité.',
    contactMe: 'Me Contacter',
    
    // About Section
    aboutTitle: 'À Propos de Moi',
    aboutText: 'Je suis un étudiant en Systèmes d\'Information passionné par le développement web, la cybersécurité et les technologies émergentes. Mon objectif est de construire des applications sécurisées, évolutives et conviviales qui résolvent des problèmes concrets.',
    
    // Skills Section
    skillsTitle: 'Mes Compétences',
    languages: 'Langages',
    frameworks: 'Frameworks',
    technologies: 'Technologies',
    
    // Projects Section
    projectsTitle: 'Mes Projets',
    viewLive: 'Voir en Direct',
    viewGithub: 'GitHub',
    
    // Experience Section
    experienceTitle: 'Mon Expérience',
    
    // Education Section
    educationTitle: 'Ma Formation',
    coursework: 'Cours Pertinents',
    
    // Contact Section
    contactTitle: 'Me Contacter',
    formName: 'Nom',
    formEmail: 'Email',
    formMessage: 'Message',
    sendMessage: 'Envoyer',
    
    // Footer
    copyright: 'Tous droits réservés',
    builtWith: 'Développé avec React',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    skills: 'المهارات',
    projects: 'المشاريع',
    experience: 'الخبرات',
    education: 'التعليم',
    contact: 'اتصل بي',
    
    // Hero Section
    title: 'طالب نظم معلومات',
    subtitle: 'مهتم بالويب والأمن',
    intro: 'شغوف بإنشاء تطبيقات ويب آمنة وسهلة الاستخدام. أستكشف نقطة التقاطع بين نظم المعلومات وتطوير الويب والأمن السيبراني.',
    contactMe: 'اتصل بي',
    
    // About Section
    aboutTitle: 'نبذة عني',
    aboutText: 'أنا طالب نظم معلومات شغوف بتطوير الويب والأمن السيبراني والتقنيات الناشئة. هدفي هو بناء تطبيقات آمنة وقابلة للتطوير وسهلة الاستخدام تحل مشاكل العالم الحقيقي.',
    
    // Skills Section
    skillsTitle: 'مهاراتي',
    languages: 'لغات البرمجة',
    frameworks: 'أطر العمل',
    technologies: 'التقنيات',
    
    // Projects Section
    projectsTitle: 'مشاريعي',
    viewLive: 'عرض المشروع',
    viewGithub: 'GitHub',
    
    // Experience Section
    experienceTitle: 'خبراتي',
    
    // Education Section
    educationTitle: 'تعليمي',
    coursework: 'المواد ذات الصلة',
    
    // Contact Section
    contactTitle: 'تواصل معي',
    formName: 'الاسم',
    formEmail: 'البريد الإلكتروني',
    formMessage: 'الرسالة',
    sendMessage: 'إرسال',
    
    // Footer
    copyright: 'جميع الحقوق محفوظة',
    builtWith: 'تم البناء باستخدام React',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [dir, setDir] = useState<'ltr' | 'rtl'>('ltr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
      setDir(savedLanguage === 'ar' ? 'rtl' : 'ltr');
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    setDir(lang === 'ar' ? 'rtl' : 'ltr');
  };

  const t = (key: keyof TranslationKeys) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
