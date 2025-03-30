import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Database, LineChart, BarChart } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Libérez le Potentiel de vos Données
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Experts en Data Science et Intelligence Artificielle, nous transformons vos données en solutions innovantes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Démarrer votre Projet
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Expertises</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <Brain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Solutions d'IA avancées pour optimiser vos processus métier.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <Database className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Engineering</h3>
              <p className="text-gray-600">Architecture et intégration de données sur Azure.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <LineChart className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">LLM</h3>
              <p className="text-gray-600">Modèles de langage avancés pour vos besoins spécifiques.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <BarChart className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Power BI</h3>
              <p className="text-gray-600">Dashboards intelligents pour visualiser vos données.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Transformer votre Entreprise ?
          </h2>
          <p className="text-xl text-white mb-8">
            Découvrez comment nos solutions en Data Science et IA peuvent révolutionner votre activité.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;