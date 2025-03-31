import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Network, Code, Database, Brain } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Moussa Kalla',
      role: 'CEO & Co-Founder',
      currentPosition: 'Data Scientist & Machine Learning Engineer at TotalEnergies, France',
      education: 'Degree in Applied Mathematics and Computer Science',
      expertise: ['Data Science', 'Machine Learning', 'AI', 'Predictive Modeling'],
      bio: "Moussa Kalla is an experienced Data Scientist and Machine Learning Engineer with a strong background in mathematics, AI, and data analytics. Currently working at TotalEnergies in France, he specializes in designing and implementing advanced AI-driven solutions. His expertise spans predictive modeling, deep learning, and data-driven decision-making, making him a key figure in the AI and data industry.",
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/in/moussa-kalla',
      github: 'https://github.com/Moussa-Kalla',
      icon: Brain
    },
    {
      name: 'Moustapha Maman Sani',
      role: 'Co-Founder',
      currentPosition: 'Network Supervisor Engineer at Camusat',
      education: 'Degree in Computer Science & Telecommunications',
      expertise: ['Web Development', 'Mobile Development', 'Network Engineering', 'Telecommunications'],
      bio: "Moustapha Maman Sani is a skilled Web & Mobile Developer as well as a Network & Telecommunications Engineer. With extensive experience in network architecture, system administration, and software development, he currently works as a Network Supervisor Engineer at Camusat. His dual expertise in software development and telecommunications infrastructure allows him to bridge the gap between digital platforms and network systems, ensuring scalable and efficient technological solutions.",
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      linkedin: 'https://linkedin.com/in/moustapha-maman-sani-abdou-19189aa1',
      icon: Network
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Notre Équipe Fondatrice
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Une équipe passionnée combinant expertise technique et vision innovante pour transformer le monde des données et de l'IA.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <member.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300 italic mb-4">{member.currentPosition}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.education}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
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

                <p className="text-gray-600 dark:text-gray-300 mb-6">{member.bio}</p>

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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Notre Histoire</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Fondée par Moussa Kalla et Moustapha Maman Sani, Data & AI Factory est née de leur vision commune : démocratiser l'accès à l'Intelligence Artificielle et aux solutions data-driven pour toutes les entreprises. Combinant leurs expertises complémentaires en Data Science, Machine Learning, développement web et infrastructure réseau, ils ont créé une entreprise capable d'offrir des solutions complètes et innovantes.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Aujourd'hui, Data & AI Factory s'est imposée comme un acteur majeur dans le domaine de l'IA et de la Data Science, accompagnant les entreprises dans leur transformation numérique avec des solutions sur mesure et une expertise pointue. Notre engagement envers l'innovation et l'excellence technique reste au cœur de notre mission.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;