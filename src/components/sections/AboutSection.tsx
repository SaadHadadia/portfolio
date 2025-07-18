
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedAvatar from '@/components/AnimatedAvatar';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 md:py-24 animated-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('aboutTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <AnimatedAvatar 
              section="about" 
              className="w-48 h-48 md:w-64 md:h-64" 
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              {t('aboutText')}
            </p>
            
            <p className="text-lg">
              From database management to frontend development, I enjoy exploring the entire technology stack. 
              I'm particularly interested in how information systems can improve efficiency and user experience.
            </p>
            
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, participating in hackathons, or contributing to open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
