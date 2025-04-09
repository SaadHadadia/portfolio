
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { experiences } from '@/data/experience';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-16 md:py-24 animated-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('experienceTitle')}
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:translate-x-px"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary transform -translate-x-2 md:-translate-x-2.5 translate-y-6"></div>
                
                {/* Content */}
                <div className="md:w-1/2 md:px-8 pl-8 pr-0">
                  <div className="bg-card border border-border rounded-xl p-6 card-hover">
                    <h3 className="text-xl font-semibold">{experience.role}</h3>
                    <h4 className="text-lg text-primary">{experience.company}</h4>
                    
                    <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>
                          {experience.startDate} - {experience.endDate || 'Present'}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <p className="mb-4">{experience.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <h5 className="font-medium">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Empty Space for Alternating Layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
