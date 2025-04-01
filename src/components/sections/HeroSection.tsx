
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import AnimatedAvatar from '@/components/AnimatedAvatar';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t, dir } = useLanguage();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 animated-bg">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center gap-8">
        {/* Avatar */}
        <AnimatedAvatar 
          section="hero" 
          className="w-32 h-32 md:w-40 md:h-40 mb-4" 
        />
        
        {/* Heading */}
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('title')} | {t('subtitle')}
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('intro')}
          </p>
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="neo-btn-primary"
          >
            {t('contactMe')}
          </a>
        </div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
            <span className="text-sm mb-2">{t('about')}</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
