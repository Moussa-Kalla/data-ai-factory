import React from 'react';

const Blog = () => {
  const posts = [
    {
      title: "L'Impact des LLM sur le Service Client",
      date: "15 Mars 2024",
      excerpt: "Comment les modèles de langage transforment l'expérience client et optimisent les processus de support.",
      image: "https://images.unsplash.com/photo-1596720426673-e4e14290f0cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Engineering sur Azure : Bonnes Pratiques",
      date: "10 Mars 2024",
      excerpt: "Guide complet pour construire des architectures de données robustes et évolutives sur Azure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Power BI : Au-delà des Tableaux de Bord",
      date: "5 Mars 2024",
      excerpt: "Techniques avancées pour créer des visualisations de données impactantes avec Power BI.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights et actualités sur la Data Science, l'IA et les technologies émergentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <div className="text-sm text-blue-600 mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;