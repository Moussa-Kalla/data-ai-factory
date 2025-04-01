import React from 'react';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const cases = [
    {
      "title": "Optimisation des Rendements Agricoles au Niger",
      "client": "Ministère de l'Agriculture du Niger",
      "description": "Mise en place d'un système d'analyse prédictive pour optimiser les rendements agricoles en utilisant des données sur les sols, la météo et les rendements historiques.",
      "results": ["Augmentation de 20% des rendements agricoles", "Amélioration de la sécurité alimentaire"],
      "image": "https://images.unsplash.com/photo-1566843972142-a7fcb2c1680b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Détection des Maladies des Cultures",
      "client": "Coopérative Agricole de Maradi",
      "description": "Utilisation de la classification d'images et de l'apprentissage automatique pour détecter les maladies des cultures et optimiser les interventions.",
      "results": ["Réduction de 30% des pertes de récoltes", "Identification précoce des maladies"],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Télémédecine pour les Zones Rurales",
      "client": "Ministère de la Santé du Niger",
      "description": "Déploiement d'un système de télémédecine alimenté par l'IA pour connecter les patients des zones rurales avec des médecins à distance.",
      "results": ["Amélioration de l'accès aux soins pour 50% des patients ruraux", "Réduction de la charge sur les établissements de santé"],
      "image": "https://images.unsplash.com/photo-1566843972142-a7fcb2c1680b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Optimisation de la Logistique Médicale",
      "client": "Organisation Non Gouvernementale",
      "description": "Utilisation de l'analyse prédictive pour optimiser la livraison de médicaments et de fournitures médicales dans les zones reculées.",
      "results": ["Réduction de 25% des délais de livraison", "Amélioration de la disponibilité des médicaments"],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Apprentissage Personnalisé dans les Écoles",
      "client": "Ministère de l'Éducation du Niger",
      "description": "Développement d'un système d'apprentissage personnalisé basé sur l'IA pour adapter le contenu éducatif aux besoins individuels des étudiants.",
      "results": ["Amélioration de 30% des résultats scolaires", "Engagement accru des étudiants"],
      "image": "https://images.unsplash.com/photo-1566843972142-a7fcb2c1680b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Chatbots pour le Service Client",
      "client": "Entreprise de Commerce Électronique",
      "description": "Déploiement de chatbots intelligents pour améliorer l'expérience client et automatiser les requêtes courantes.",
      "results": ["Traitement de 70% des requêtes clients", "Satisfaction client améliorée de 40%"],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Système de Recommandation pour l'Assurance Santé",
      "client": "Compagnie d'Assurance",
      "description": "Développement d'un système de recommandation basé sur l'IA pour aider les Nigérians à choisir une assurance santé appropriée.",
      "results": ["Amélioration de 25% de l'accès à l'information", "Augmentation de 20% des souscriptions"],
      "image": "https://images.unsplash.com/photo-1566843972142-a7fcb2c1680b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Détection d'Anomalies dans les Pipelines",
      "client": "Société Pétrolière",
      "description": "Utilisation de la détection d'anomalies en temps réel pour prévenir les incidents et protéger les actifs critiques dans les pipelines.",
      "results": ["Réduction de 30% des incidents", "Amélioration de la sécurité des infrastructures"],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Optimisation de la Gestion des Ressources Agricoles",
      "client": "Agence de Développement Agricole",
      "description": "Mise en place d'un système d'apprentissage automatique pour optimiser l'utilisation des ressources agricoles et améliorer la durabilité.",
      "results": ["Réduction de 20% du gaspillage d'eau et d'engrais", "Amélioration de la productivité agricole"],
      "image": "https://images.unsplash.com/photo-1566843972142-a7fcb2c1680b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      "title": "Analyse Prédictive pour l'Approvisionnement en Énergie",
      "client": "Société de Distribution d'Énergie",
      "description": "Utilisation de l'analyse prédictive pour optimiser la gestion de l'approvisionnement en énergie et prévenir les pannes.",
      "results": ["Réduction de 25% des pannes", "Amélioration de la fiabilité de l'approvisionnement en énergie"],
      "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Études de Cas</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à transformer leurs défis en opportunités grâce à l'IA et la Data Science.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((case_, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={case_.image}
                    alt={case_.title}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">
                    {case_.client}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                    {case_.title}
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {case_.description}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Résultats :</h3>
                    <ul className="mt-2 space-y-1">
                      {case_.results.map((result, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300">• {result}</li>
                      ))}
                    </ul>
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