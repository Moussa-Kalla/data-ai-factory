import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  const isFrench = i18n.language === 'fr';

  const toggleLanguage = () => {
    const newLang = isFrench ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label={isFrench ? 'Switch to English' : 'Passer en français'}
    >
      <span className="text-sm font-medium">
        {isFrench ? 'FR' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageSwitch;