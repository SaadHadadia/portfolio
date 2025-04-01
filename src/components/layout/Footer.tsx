
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="flex items-center gap-1">
              &copy; {currentYear} Portfolio. {t('copyright')}.
            </p>
          </div>
          
          <div className="flex gap-x-6">
            <a href="#home" className="text-sm hover:underline">
              {t('home')}
            </a>
            <a href="#about" className="text-sm hover:underline">
              {t('about')}
            </a>
            <a href="#projects" className="text-sm hover:underline">
              {t('projects')}
            </a>
            <a href="#contact" className="text-sm hover:underline">
              {t('contact')}
            </a>
          </div>
          
          <div>
            <p className="flex items-center gap-1 text-sm">
              {t('builtWith')} <Heart size={14} className="text-red-500" /> & Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
