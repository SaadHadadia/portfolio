import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Github, Linkedin, Twitter, Send, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };
  
  const socialLinks = [
    { 
      icon: <Mail size={20} />, 
      label: 'Email', 
      href: 'mailto:your.email@example.com',
      color: 'bg-secondary'
    },
    { 
      icon: <Github size={20} />, 
      label: 'GitHub', 
      href: 'https://github.com/yourusername',
      color: 'bg-[#181717]/10 text-[#181717] dark:text-white dark:bg-[#181717]/20'
    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      href: 'https://linkedin.com/in/yourusername',
      color: 'bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#0A66C2]'
    },
    { 
      icon: <Twitter size={20} />, 
      label: 'Twitter/X', 
      href: 'https://twitter.com/yourusername',
      color: 'bg-[#1DA1F2]/10 text-[#1DA1F2] dark:text-[#1DA1F2]'
    },
  ];
  
  return (
    <section id="contact" className="py-16 md:py-24 animated-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t('contactTitle')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  {t('formName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  {t('formEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  {t('formMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`neo-btn-primary w-full ${(isSubmitting || isSubmitted) ? 'opacity-70' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <Check size={20} />
                    <span>Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{t('sendMessage')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <p className="text-lg mb-8">
              Feel free to reach out through the form or connect with me directly via social media or email.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors"
                >
                  <div className={`p-2 rounded-full ${link.color}`}>
                    {link.icon}
                  </div>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
