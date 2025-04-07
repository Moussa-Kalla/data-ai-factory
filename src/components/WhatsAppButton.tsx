import React from 'react';
import { motion } from 'framer-motion';
import WhatsAppLogo from './icons/WhatsAppLogo';

const WhatsAppButton = () => {
  const phoneNumber = '+33695295580';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      title="Contactez-nous sur WhatsApp"
    >
      <WhatsAppLogo className="h-8 w-8 text-white" />
    </motion.a>
  );
};

export default WhatsAppButton;