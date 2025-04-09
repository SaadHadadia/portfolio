import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { educations } from '@/data/education';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            {t('educationTitle')}
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {educations.map((education, index) => (
            <div 
              key={index}
              className="relative pl-8 md:pl-10 pb-10 last:pb-0"
            >
              {/* Timeline elements */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full flex items-center justify-center transform -translate-x-2.5"/>
              
              {/* Content */}
              <div className="mb-2">
                <h3 className="text-xl font-bold">{education.degree}</h3>
                <h4 className="text-primary font-medium">{education.field}</h4>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 text-muted-foreground">
                <div className="flex items-center">
                  <Calendar size={14} className="mr-1" />
                  <span className="text-sm">
                    {education.ongoing
                      ? 'Ongoing'
                      : `${education.startYear} - ${education.endYear || 'Present'}`}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  <span className="text-sm">{education.institution} • {education.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;