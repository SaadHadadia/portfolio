
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Moon, Sun, Menu, X, Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t, dir } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#education", label: t("education") },
    { href: "#certifications", label: "certifications" },
    { href: "#contact", label: t("contact") },
  ];

  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    // { code: 'ar', label: 'العربية' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-bold">
          Saad HADADIA
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-foreground transition-colors font-bold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme & Language Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent transition-colors"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative group">
            <button
              className="p-2 rounded-full hover:bg-accent transition-colors"
              aria-label="Change language"
            >
              <Languages size={20} />
            </button>

            <div className="absolute top-full right-0 mt-1 bg-background border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-32">
              {languageOptions.map((option) => (
                <button
                  key={option.code}
                  onClick={() => setLanguage(option.code as any)}
                  className={cn(
                    "px-4 py-2 text-sm text-start w-full hover:bg-accent/50 transition-colors",
                    language === option.code ? "font-bold bg-accent/30" : ""
                  )}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 md:hidden rounded-full hover:bg-accent transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-background/95 z-40 pt-16">
          <nav className="container mx-auto px-4 py-8 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg py-2 border-b border-border"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
