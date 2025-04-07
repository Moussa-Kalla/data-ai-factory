import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Brain, 
  Database, 
  LineChart, 
  BarChart, 
  MessageSquareCode, 
  Smartphone, 
  Code2, 
  Palette, 
  Megaphone, 
  Cloud, 
  Shield 
} from 'lucide-react';

const Services = () => {
  const { t } = useTranslation();

  const primaryServices = [
    {
      icon: Brain,
      title: "Data Science & Intelligence Artificielle",
      description: "Solutions avancées d'IA pour optimiser vos processus métier et améliorer la prise de décision.",
      features: [
        "Analyse prédictive",
        "Classification automatique",
        "Détection d'anomalies",
        "Systèmes de recommandation"
      ]
    },
    {
      icon: MessageSquareCode,
      title: "Machine Learning & LLMs",
      description: "Développement et déploiement de modèles de Machine Learning et Large Language Models personnalisés.",
      features: [
        "Chatbots intelligents",
        "Analyse de texte",
        "Génération de contenu",
        "Fine-tuning de modèles"
      ]
    },
    {
      icon: Database,
      title: "Data Engineering & Cloud Computing",
      description: "Architecture et intégration de données sur Azure pour des pipelines robustes et évolutifs.",
      features: [
        "ETL et pipelines de données",
        "Architecture cloud Azure",
        "Data lakes et entrepôts",
        "QPython integration"
      ]
    },
    {
      icon: BarChart,
      title: "Power BI & Business Intelligence",
      description: "Création de tableaux de bord interactifs et visualisations de données percutantes.",
      features: [
        "Dashboards personnalisés",
        "KPIs en temps réel",
        "Rapports automatisés",
        "Intégration de données"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Solutions web modernes et performantes."
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Apps natives et cross-platform."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces utilisateur intuitives."
    },
    {
      icon: Megaphone,
      title: "Marketing Digital & SEO",
      description: "Optimisation pour les moteurs de recherche."
    },
    {
      icon: Cloud,
      title: "Solutions Cloud",
      description: "Infrastructure cloud scalable."
    },
    {
      icon: Shield,
      title: "Cybersécurité",
      description: "Protection des données et systèmes."
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des solutions innovantes en Data Science et Intelligence Artificielle pour transformer vos données en avantage concurrentiel.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Expertise Principale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
              >
                <service.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Services Complémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Prêt à Transformer Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Contactez-nous pour discuter de vos besoins en Data Science et IA.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 dark:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            onClick={() => window.location.href = '/contact'}
          >
            Démarrer Votre Projet
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Services;