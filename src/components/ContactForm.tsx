import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xeoavawv");

  return (
    <div className="relative">
      <AnimatePresence>
        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 right-0 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-md mb-4"
          >
            {t('contact.form.success')}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.form.name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.form.email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.form.subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <ValidationError prefix="Subject" field="subject" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('contact.form.message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 dark:bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex justify-center items-center"
          disabled={state.submitting}
        >
          {state.submitting ? 'Envoi en cours...' : t('contact.form.submit')}
        </motion.button>

        {/* Champ caché pour le destinataire si nécessaire */}
        <input 
          type="hidden" 
          name="to_email" 
          value="contact.bayanai@gmail.com"
        />
      </form>
    </div>
  );
};

export default ContactForm;