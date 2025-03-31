import React from 'react';

const CaseStudies = () => {
  const cases = [
    {
      "title": "Analyse de Données via Power BI pour des Décisions Stratégiques",
      "client": "Entreprises de tous secteurs",
      "description": "Dashboard Power BI conçu pour l'analyse approfondie des données d'entreprise, fournissant des insights actionnables pour des prises de décisions stratégiques et éclairées, quel que soit le secteur d'activité.",
      "results": ["Prise de décision basée sur des données concrètes et pertinentes", "Amélioration de la performance globale de l'entreprise grâce à une meilleure compréhension des données"],
      image: "https://www.kanbanbox.com/wp-content/uploads/2022/07/KanbanBOX_ekanban_Business_Intelligence_Con_Power_BI_2.png"
    },
    {
      title: "Assistant Virtuel Intelligent",
      client: "Institution financière",
      description: "Développement d'un chatbot basé sur les LLM pour le service client.",
      results: ["Traitement de 70% des requêtes clients", "Satisfaction client améliorée de 40%"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Analyse Prédictive Maintenance",
      client: "Industrie manufacturière",
      description: "Système de maintenance prédictive basé sur l'IoT et le Machine Learning.",
      results: ["Réduction de 45% des pannes machines", "Économies de maintenance de 300k€/an"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Études de Cas</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous avons aidé nos clients à transformer leurs défis en opportunités grâce à l'IA et la Data Science.
          </p>
        </div>

        <div className="space-y-12">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={case_.image}
                    alt={case_.title}
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                    {case_.client}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold text-gray-900">
                    {case_.title}
                  </h2>
                  <p className="mt-4 text-gray-600">
                    {case_.description}
                  </p>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">Résultats :</h3>
                    <ul className="mt-2 space-y-1">
                      {case_.results.map((result, idx) => (
                        <li key={idx} className="text-gray-600">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;