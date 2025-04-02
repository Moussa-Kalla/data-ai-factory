import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ImageLoader = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          />
        )}
      </AnimatePresence>

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
      />

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400 text-center p-4">
            Impossible de charger l'image
          </p>
        </div>
      )}
    </div>
  );
};

const CaseStudies = () => {
  const { t } = useTranslation();
  
  const cases = [
    {
      title: "Optimisation des Rendements Agricoles au Niger",
      client: "Ministère de l'Agriculture du Niger",
      description: "Mise en place d'un système d'analyse prédictive pour optimiser les rendements agricoles en utilisant des données sur les sols, la météo et les rendements historiques.",
      results: ["Augmentation de 20% des rendements agricoles", "Amélioration de la sécurité alimentaire"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/OptimisationAgricoleNiger.png?raw=true"
    },
    {
      title: "Apprentissage Personnalisé dans les Écoles",
      client: "Ministère de l'Éducation du Niger",
      description: "Développement d'un système d'apprentissage personnalisé basé sur l'IA pour adapter le contenu éducatif aux besoins individuels des étudiants.",
      results: ["Amélioration de 30% des résultats scolaires", "Engagement accru des étudiants"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ApprentissagePersonnaliséEcole.png?raw=true"
    },
    {
      title: "Télémédecine pour les Zones Rurales",
      client: "Ministère de la Santé du Niger",
      description: "Déploiement d'un système de télémédecine alimenté par l'IA pour connecter les patients des zones rurales avec des médecins à distance.",
      results: ["Amélioration de l'accès aux soins pour 50% des patients ruraux", "Réduction de la charge sur les établissements de santé"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ConsultationMédicaleVirtuelle.png?raw=true"
    },
    {
      title: "Optimisation de la Logistique Médicale",
      client: "Organisation Non Gouvernementale (ONG)",
      description: "Utilisation de l'analyse prédictive pour optimiser la livraison de médicaments et de fournitures médicales dans les zones reculées.",
      results: ["Réduction de 25% des délais de livraison", "Amélioration de la disponibilité des médicaments"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/OptimisationLogistiqueMédicale.png?raw=true"
    },
    {
      title: "Chatbots pour le Service Client",
      client: "Entreprise de Commerce Électronique",
      description: "Déploiement de chatbots intelligents pour améliorer l'expérience client et automatiser les requêtes courantes.",
      results: ["Traitement de 70% des requêtes clients", "Satisfaction client améliorée de 40%"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ChatbotspourleServiceClient.png?raw=true"
    },
    {
      title: "Analyse Prédictive pour l'Approvisionnement en Électricité (NIGELEC)",
      client: "Société Nigérienne d'Électricité (NIGELEC)",
      description: "Utilisation de l'analyse prédictive basée sur de l'intelligence artificielle pour optimiser la gestion de l'approvisionnement en énergie et prévenir les pannes.",
      results: ["Réduction de 25% des coupures d'électricité", "Amélioration de la fiabilité de l'approvisionnement en électricité"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/SociétéNigérienned'Électricité(NIGELEC).png?raw=true"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('caseStudies.title')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('caseStudies.subtitle')}
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((case_, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 relative">
                  <div className="h-64 md:h-[400px]">
                    <ImageLoader
                      src={case_.image}
                      alt={case_.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Mobile overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent md:hidden">
                    <div className="p-4 text-white">
                      <div className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-90">
                        {case_.client}
                      </div>
                      <h2 className="text-lg font-bold leading-tight">
                        {case_.title}
                      </h2>
                    </div>
                  </div>
                  {/* Desktop overlay */}
                  <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                    <div className="text-white">
                      <div className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                        {case_.client}
                      </div>
                      <h2 className="text-2xl font-bold">
                        {case_.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white dark:bg-gray-800">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-6">
                      {case_.description}
                    </p>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{t('caseStudies.results')}</h3>
                      <ul className="space-y-3">
                        {case_.results.map((result, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start text-gray-600 dark:text-gray-300"
                          >
                            <span className="text-green-500 mr-2 text-xl">•</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;