import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BayanAILogo from './icons/BayanAILogo';

const Footer = () => {
  const { t } = useTranslation();

  const handleCookiePreferences = () => {
    // Réinitialiser le consentement pour permettre à l'utilisateur de rechoisir
    document.cookie = "cookie_consent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <BayanAILogo className="w-12 h-12 mr-2" />
              <h3 className="text-xl font-bold">BayanAI</h3>
            </div>
            <p className="text-gray-400 dark:text-gray-300">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 dark:text-gray-300 hover:text-white">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="text-gray-400 dark:text-gray-300 hover:text-white">{t('nav.services')}</Link></li>
              <li><Link to="/etudes-de-cas" className="text-gray-400 dark:text-gray-300 hover:text-white">{t('nav.caseStudies')}</Link></li>
              <li><Link to="/blog" className="text-gray-400 dark:text-gray-300 hover:text-white">{t('nav.blog')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 dark:text-gray-300 hover:text-white">{t('nav.contact')}</Link></li>
              <li><Link to="/politique-de-confidentialite" className="text-gray-400 dark:text-gray-300 hover:text-white">Politique de confidentialité</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h4>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/company/BayanAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-300 hover:text-white"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Moussa-Kalla/BayanAI"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-300 hover:text-white"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:data.ai.factory@gmail.com"
                className="text-gray-400 dark:text-gray-300 hover:text-white"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>

            {/* Ajout bouton gestion cookies */}
            <button
              onClick={handleCookiePreferences}
              className="text-sm text-gray-400 dark:text-gray-300 hover:text-white underline"
            >
              Gérer mes cookies
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 dark:text-gray-300">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;