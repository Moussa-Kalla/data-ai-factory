import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const ImageLoader = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
      )}

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
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      // Petit délai pour laisser le temps au DOM de se mettre à jour
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 4);
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const cases = [
    {
      id: "ecommerce-artisanat",
      title: "Plateforme de E-commerce Personnalisée pour l'Artisanat Local",
      client: "PME artisanales",
      description: "Création d'une plateforme e-commerce utilisant le machine learning pour recommander des produits aux clients en fonction de leurs préférences, augmentant ainsi les ventes des artisans locaux.",
      results: ["Augmentation de 25% des ventes en ligne", "Amélioration de l'engagement client"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/EcommerceArtisanatNiger.png?raw=true"
    },
    {
      id: "gestion-stocks",
      title: "Système de Gestion des Stocks Intelligent pour les Commerçants",
      client: "Petits commerces de détail",
      description: "Mise en place d'un système basé sur l'IA pour prévoir la demande de produits, optimiser les niveaux de stock et réduire les ruptures ou les surplus.",
      results: ["Réduction de 30% des ruptures de stock", "Diminution de 20% des coûts liés au surstockage"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/GestionStockNiger.png?raw=true"
    },
    {
      id: "gestion-financiere",
      title: "Application Mobile pour la Gestion Financière des PME",
      client: "PME locales",
      description: "Développement d'une application mobile permettant aux PME de suivre leurs finances en temps réel, avec des tableaux de bord interactifs et des analyses prédictives pour une meilleure prise de décision.",
      results: ["Amélioration de 40% de la visibilité financière", "Prise de décision accélérée pour les investissements"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/GestionFinancierePME.png?raw=true"
    },
    {
      id: "optimisation-livraison",
      title: "Optimisation des Opérations pour les Services de Livraison",
      client: "Start-ups de livraison locales",
      description: "Développement d'une application mobile intégrant des algorithmes d'IA pour optimiser les itinéraires de livraison en temps réel, réduire les délais et améliorer la satisfaction client.",
      results: ["Réduction de 20% des temps de livraison", "Augmentation de 15% de la satisfaction client"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/OptimisationLivraisonNiger.png?raw=true"
    },
    {
      id: "gestion-tontines",
      title: "Plateforme Numérique pour la Gestion des Tontines (Adaché)",
      client: "Associations de tontines locales",
      description: "Développement d'une application mobile sécurisée permettant aux membres des tontines de gérer leurs contributions, suivre les cycles de collecte et de distribution des fonds, et recevoir des notifications automatisées. L'IA est utilisée pour analyser les habitudes de contribution et proposer des conseils financiers personnalisés.",
      results: [
        "Augmentation de 30% de la transparence dans la gestion des fonds",
        "Amélioration de l'engagement des membres grâce à des rappels automatisés",
        "Optimisation des cycles de collecte basés sur les données historiques"
      ],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/PlateformeTontineNiger.png?raw=true"
    },
    {
      id: "optimisation-agricole",
      title: "Optimisation des Rendements Agricoles au Niger",
      client: "Ministère de l'Agriculture du Niger",
      description: "Mise en place d'un système d'analyse prédictive pour optimiser les rendements agricoles en utilisant des données sur les sols, la météo et les rendements historiques.",
      results: ["Augmentation de 20% des rendements agricoles", "Amélioration de la sécurité alimentaire"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/OptimisationAgricoleNiger.png?raw=true"
    },
    {
      id: "apprentissage-personnalise",
      title: "Apprentissage Personnalisé dans les Écoles",
      client: "Ministère de l'Éducation du Niger",
      description: "Développement d'un système d'apprentissage personnalisé basé sur l'IA pour adapter le contenu éducatif aux besoins individuels des étudiants.",
      results: ["Amélioration de 30% des résultats scolaires", "Engagement accru des étudiants"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ApprentissagePersonnaliséEcole.png?raw=true"
    },
    {
      id: "telemedecine",
      title: "Télémédecine pour les Zones Rurales",
      client: "Ministère de la Santé du Niger",
      description: "Déploiement d'un système de télémédecine alimenté par l'IA pour connecter les patients des zones rurales avec des médecins à distance.",
      results: ["Amélioration de l'accès aux soins pour 50% des patients ruraux", "Réduction de la charge sur les établissements de santé"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ConsultationMédicaleVirtuelle.png?raw=true"
    },
    {
      id: "logistique-medicale",
      title: "Optimisation de la Logistique Médicale",
      client: "Organisation Non Gouvernementale (ONG)",
      description: "Utilisation de l'analyse prédictive pour optimiser la livraison de médicaments et de fournitures médicales dans les zones reculées.",
      results: ["Réduction de 25% des délais de livraison", "Amélioration de la disponibilité des médicaments"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/OptimisationLogistiqueMédicale.png?raw=true"
    },
    {
      id: "chatbots-service-client",
      title: "Chatbots pour le Service Client",
      client: "Entreprise de Commerce Électronique",
      description: "Déploiement de chatbots intelligents pour améliorer l'expérience client et automatiser les requêtes courantes.",
      results: ["Traitement de 70% des requêtes clients", "Satisfaction client améliorée de 40%"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ChatbotspourleServiceClient.png?raw=true"
    },
    {
      id: "analyse-predictive-nigelec",
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
              id={case_.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden scroll-mt-32"
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