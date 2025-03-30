import React from 'react';
import { Brain, Database, LineChart, BarChart } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions innovantes en Data Science et Intelligence Artificielle pour transformer vos données en avantage concurrentiel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Brain className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Machine Learning</h2>
            <p className="text-gray-600 mb-4">
              Développement de solutions d'IA sur mesure pour optimiser vos processus métier et améliorer la prise de décision.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Analyse prédictive</li>
              <li>• Classification automatique</li>
              <li>• Détection d'anomalies</li>
              <li>• Systèmes de recommandation</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Database className="h-12 w-12 text-purple-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Data Engineering</h2>
            <p className="text-gray-600 mb-4">
              Architecture et intégration de données sur Azure pour créer des pipelines de données robustes et évolutifs.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• ETL et pipelines de données</li>
              <li>• Architecture cloud Azure</li>
              <li>• Data lakes et entrepôts</li>
              <li>• Optimisation des performances</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <LineChart className="h-12 w-12 text-green-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Large Language Models (LLM)</h2>
            <p className="text-gray-600 mb-4">
              Implémentation et personnalisation de modèles de langage avancés pour vos besoins spécifiques.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Chatbots intelligents</li>
              <li>• Analyse de texte</li>
              <li>• Génération de contenu</li>
              <li>• Fine-tuning de modèles</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <BarChart className="h-12 w-12 text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Power BI</h2>
            <p className="text-gray-600 mb-4">
              Création de tableaux de bord interactifs et de visualisations de données percutantes.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Dashboards personnalisés</li>
              <li>• KPIs en temps réel</li>
              <li>• Rapports automatisés</li>
              <li>• Intégration de données</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;