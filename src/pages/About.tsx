import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Network, Code, Database, Brain } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Moussa Kalla',
      role: 'PDG & Co-Fondateur',
      currentPosition: 'Data Scientist & Ingénieur en Machine Learning chez TotalEnergies, France',
      education: 'Diplôme en Mathématiques Appliquées et Informatique',
      expertise: ['Data Science', 'Machine Learning', 'IA', 'Modélisation Prédictive'],
      bio: "Moussa Kalla est un Data Scientist et Ingénieur en Machine Learning expérimenté avec une solide formation en mathématiques, IA et analyse de données. Actuellement en poste chez TotalEnergies en France, il est spécialisé dans la conception et la mise en œuvre de solutions avancées basées sur l'IA. Son expertise couvre la modélisation prédictive, l'apprentissage profond et la prise de décision basée sur les données, faisant de lui une figure clé dans l'industrie de l'IA et des données.",
      image: 'https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/Moussa.png?raw=true',
      linkedin: 'https://linkedin.com/in/moussa-kalla',
      github: 'https://github.com/Moussa-Kalla',
      icon: Brain
    },
    {
      name: 'Moustapha Maman Sani',
      role: 'Co-Fondateur',
      currentPosition: 'Ingénieur Superviseur Réseau chez Camusat',
      education: 'Diplôme en Informatique & Télécommunications',
      expertise: ['Développement Web', 'Développement Mobile', 'Ingénierie Réseau', 'Télécommunications'],
      bio: "Moustapha Maman Sani est un développeur Web & Mobile qualifié ainsi qu'un ingénieur en Réseau & Télécommunications. Fort d'une vaste expérience en architecture réseau, administration système et développement logiciel, il occupe actuellement le poste d'Ingénieur Superviseur Réseau chez Camusat. Sa double expertise en développement logiciel et en infrastructure de télécommunications lui permet de faire le pont entre les plateformes numériques et les systèmes réseau, assurant des solutions technologiques évolutives et efficaces.",
      image: 'https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/Moustapha.jpeg?raw=true',
      linkedin: 'https://linkedin.com/in/moustapha-maman-sani-abdou-19189aa1',
      icon: Network
    }
  ];

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Notre Équipe Fondatrice
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une équipe passionnée combinant expertise technique et vision innovante pour transformer le monde des données et de l'IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {team.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-blue-500 dark:border-blue-400"
                  />
                  <div className="absolute bottom-0 right-0 bg-white dark:bg-gray-800 rounded-full p-2 border-2 border-blue-500 dark:border-blue-400">
                    <member.icon className="h-6 w-6 text-blue-500 dark:text-blue-400" />
                  </div>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">{member.currentPosition}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.education}</p>
                </div>

                <div className="mb-6 w-full">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">{member.bio}</p>

                <div className="flex space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notre Histoire</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Fondée par Moussa Kalla et Moustapha Maman Sani, BayanAI est née de leur vision commune : démocratiser l'accès à l'Intelligence Artificielle et aux solutions data-driven pour toutes les entreprises. Combinant leurs expertises complémentaires en Data Science, Machine Learning, développement web et infrastructure réseau, ils ont créé une entreprise capable d'offrir des solutions complètes et innovantes.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Aujourd'hui, BayanAI s'est imposée comme un acteur majeur dans le domaine de l'IA et de la Data Science, accompagnant les entreprises dans leur transformation numérique avec des solutions sur mesure et une expertise pointue. Notre engagement envers l'innovation et l'excellence technique reste au cœur de notre mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;