import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';
import WhatsAppLogo from '../components/icons/WhatsAppLogo';

const Contact = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {t('contact.subtitle')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.title')}</h2>
            <ContactForm />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact.info.title')}</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.email')}</h3>
                    <a 
                      href="mailto:contact.bayanai@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      contact.bayanai@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.phone')}</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 dark:text-gray-300">
                        France: <a href="tel:+33695295580" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+33 6 95 29 55 80</a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Niger: <a href="tel:+22780068056" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+227 80 06 80 56</a>
                        Niger: <a href="tel:+22792879458" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+227 92 87 94 58</a>
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Niger: <a href="tel:+22792879458" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+227 92 87 94 58</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <WhatsAppLogo className="h-6 w-6 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h3>
                    <div className="space-y-1">
                      <a 
                        href="https://wa.me/33695295580"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        +33 6 95 29 55 80
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{t('contact.info.address')}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>France:</strong><br />
                        2 avenue Robert Schuman<br />
                        Paris, France
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>Niger:</strong><br />
                        Dar-es-Salam<br />
                        Niamey, Niger
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('contact.info.hours.title')}</h2>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>{t('contact.info.hours.weekdays')}</p>
                <p>{t('contact.info.hours.weekend')}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;