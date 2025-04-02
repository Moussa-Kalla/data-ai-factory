import React from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts = [
    {
      title: "RAG (Génération Augmentée de Récupération) dans Recherche Azure AI",
      date: "05/09/2024",
      excerpt: "La RAG (Retrieval Augmented Generation) est une architecture qui augmente les fonctionnalités d'un grand modèle de langage (LLM) (comme ChatGPT) en ajoutant un système de récupération d'informations qui fournit les données. L'ajout d'un système de récupération d'informations vous permet de contrôler la fourniture de données utilisées par un LLM lorsqu'il formule une réponse.",
      image: "https://i0.wp.com/tech-lab.sios.jp/wp-content/uploads/2024/09/logo.png?w=1920&ssl=1",
      link: "https://learn.microsoft.com/fr-fr/azure/search/retrieval-augmented-generation-overview"
    },
    {
      title: "Devenir un Data Scientist",
      date: "01/03/2024",
      excerpt: "Spécialistes des données, les scientifiques des données contribuent à recueillir, analyser et interpréter de grands volumes de données afin de résoudre des problèmes d'entreprise complexes. Ils combinent les statistiques, les sciences informatiques et un sens aigu des opérations pour aider les organisations à approfondir leur analyse et à atteindre leurs objectifs.",
      image: "https://cdn.prod.website-files.com/614d804d8ff4f816c408fdd2/632b0a5aaf13b1f3aac23008_data-science.jpg",
      link: "https://learn.microsoft.com/fr-fr/training/career-paths/data-scientist"
    },
    {
      title: "Power BI : Au-delà des Tableaux de Bord",
      date: "28/02/2024",
      excerpt: "Transformez vos données en visuels grâce à des outils avancés d'analyse des données, des fonctionnalités d'IA et un outil de création de rapports convivial. Créez une culture basée sur les données avec le décisionnel pour tous.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "https://www.microsoft.com/fr-fr/power-platform/products/power-bi"
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Insights et actualités sur la Data Science, l'IA et les technologies émergentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 dark:text-blue-400 mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Lire la suite →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;