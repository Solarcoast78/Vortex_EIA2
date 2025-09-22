import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50 theme-transition backdrop-blur-md bg-opacity-90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white cursor-pointer underline-hover scale-hover">
                Vortex
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => scrollToSection('team')} 
              className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 underline-hover scale-hover focus-ring rounded-md px-2 py-1"
            >
              {t('nav.team')}
            </button>
            <button 
              onClick={() => scrollToSection('challenges')} 
              className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 underline-hover scale-hover focus-ring rounded-md px-2 py-1"
            >
              {t('nav.challenges')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 underline-hover scale-hover focus-ring rounded-md px-2 py-1"
            >
              Contacto
            </button>
            <div className="flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t dark:border-gray-700 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('team')} 
                className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-left py-2 underline-hover scale-hover focus-ring rounded-md px-2"
              >
                {t('nav.team')}
              </button>
              <button 
                onClick={() => scrollToSection('challenges')} 
                className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-left py-2 underline-hover scale-hover focus-ring rounded-md px-2"
              >
                {t('nav.challenges')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-left py-2 underline-hover scale-hover focus-ring rounded-md px-2"
              >
                Contacto
              </button>
              <div className="flex items-center justify-between pt-2 border-t dark:border-gray-700 border-gray-300">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
