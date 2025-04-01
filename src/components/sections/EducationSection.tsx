
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { education } from '@/data/education';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const EducationSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="education" className="py-16 md:py-24 animated-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('educationTitle')}
        </h2>
        
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-xl p-8 card-hover">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{education.degree} in {education.field}</h3>
              <h4 className="text-xl">{education.institution}</h4>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar size={16} />
              <span>
                {education.startYear} - {education.endYear || 'Present'}
              </span>
            </div>
            
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{education.location}</span>
            </div>
            
            {education.gpa && (
              <div className="flex items-center gap-1">
                <BookOpen size={16} />
                <span>GPA: {education.gpa}</span>
              </div>
            )}
          </div>
          
          <div>
            <h5 className="font-medium text-lg mb-3">{t('coursework')}:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {education.coursework.map((course, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 py-1"
                >
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
