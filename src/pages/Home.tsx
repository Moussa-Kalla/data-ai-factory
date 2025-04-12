import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
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
  Shield,
  Bot,
  Network,
  Cpu,
  BookOpen,
  PieChart,
  Microscope,
  ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 50]);

  const expertise = [
    {
      category: "Intelligence Artificielle & Machine Learning",
      items: [
        {
          icon: Brain,
          title: "Machine Learning Avancé",
          description: "Développement de modèles prédictifs sophistiqués pour l'analyse de données complexes et l'automatisation des processus décisionnels.",
          color: "text-orange-600 dark:text-orange-400",
          features: ["Apprentissage supervisé/non supervisé", "Deep Learning", "Réseaux de neurones", "Computer Vision"]
        },
        {
          icon: Bot,
          title: "Large Language Models (LLMs)",
          description: "Implémentation et fine-tuning de modèles de langage pour des applications spécifiques à votre secteur d'activité.",
          color: "text-green-600 dark:text-green-400",
          features: ["Chatbots intelligents", "Traitement du langage naturel", "Génération de contenu", "Analyse sémantique"]
        },
        {
          icon: Microscope,
          title: "Recherche & Innovation en IA",
          description: "Exploration des dernières avancées en IA pour développer des solutions innovantes adaptées à vos besoins.",
          color: "text-blue-600 dark:text-blue-400",
          features: ["IA explicable (XAI)", "IA éthique", "IA embarquée", "IA fédérée"]
        }
      ]
    },
    {
      category: "Data Engineering & Analytics",
      items: [
        {
          icon: Database,
          title: "Ingénierie des Données",
          description: "Conception et mise en œuvre d'architectures de données robustes pour le traitement et l'analyse à grande échelle.",
          color: "text-purple-600 dark:text-purple-400",
          features: ["ETL/ELT", "Data Lakes", "Data Warehousing", "Streaming de données"]
        },
        {
          icon: Network,
          title: "Big Data Processing",
          description: "Solutions de traitement de données massives pour extraire des insights pertinents et actionables.",
          color: "text-red-600 dark:text-red-400",
          features: ["Apache Spark", "Hadoop", "Kafka", "NoSQL"]
        },
        {
          icon: Cloud,
          title: "Cloud Computing",
          description: "Déploiement et gestion d'infrastructures cloud scalables pour vos projets data.",
          color: "text-cyan-600 dark:text-cyan-400",
          features: ["Azure", "AWS", "GCP", "Multi-cloud"]
        }
      ]
    },
    {
      category: "Business Intelligence & Visualisation",
      items: [
        {
          icon: PieChart,
          title: "Business Intelligence",
          description: "Création de tableaux de bord interactifs et visualisations de données percutantes.",
          color: "text-yellow-600 dark:text-yellow-400",
          features: ["Power BI", "Tableau", "Qlik", "Looker"]
        },
        {
          icon: LineChart,
          title: "Data Visualization",
          description: "Conception de visualisations de données percutantes pour communiquer efficacement vos insights.",
          color: "text-indigo-600 dark:text-indigo-400",
          features: ["D3.js", "Plotly", "Highcharts", "Custom viz"]
        },
        {
          icon: BookOpen,
          title: "Data Storytelling",
          description: "Transformation de données complexes en narratifs compréhensibles et actionnables.",
          color: "text-pink-600 dark:text-pink-400",
          features: ["Narration de données", "Rapports interactifs", "Présentations dynamiques", "Dashboards narratifs"]
        }
      ]
    },
    {
      category: "Services Complémentaires",
      items: [
        {
          icon: Code2,
          title: "Développement Web & Mobile",
          description: "Création d'applications web et mobiles modernes intégrant vos solutions data et IA.",
          color: "text-emerald-600 dark:text-emerald-400",
          features: ["React/Next.js", "React Native", "Node.js", "Python"]
        },
        {
          icon: Shield,
          title: "Sécurité & Conformité",
          description: "Protection de vos données et systèmes avec les meilleures pratiques de sécurité.",
          color: "text-rose-600 dark:text-rose-400",
          features: ["RGPD", "Encryption", "IAM", "Audit de sécurité"]
        },
        {
          icon: Cpu,
          title: "MLOps & DevOps",
          description: "Automatisation et optimisation de vos pipelines de ML et de déploiement.",
          color: "text-amber-600 dark:text-amber-400",
          features: ["CI/CD", "Monitoring", "Versioning", "Containerization"]
        }
      ]
    }
  ];

  const featuredCases = [
    {
      title: "Plateforme de E-commerce Personnalisée pour l'Artisanat Local",
      client: "PME artisanales",
      description: "Création d'une plateforme e-commerce utilisant le machine learning pour recommander des produits aux clients en fonction de leurs préférences, augmentant ainsi les ventes des artisans locaux.",
      results: ["Augmentation de 25% des ventes en ligne", "Amélioration de l'engagement client"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/EcommerceArtisanatNiger.png?raw=true",
      category: "Commerce",
      id: "ecommerce-artisanat"
    },
    {
      title: "Système de Gestion des Stocks Intelligent pour les Commerçants",
      client: "Petits commerces de détail",
      description: "Mise en place d'un système basé sur l'IA pour prévoir la demande de produits, optimiser les niveaux de stock et réduire les ruptures ou les surplus.",
      results: ["Réduction de 30% des ruptures de stock", "Diminution de 20% des coûts liés au surstockage"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/GestionStockNiger.png?raw=true",
      category: "Commerce",
      id: "gestion-stocks"
    },
    {
      title: "Application Mobile pour la Gestion Financière des PME",
      client: "PME locales",
      description: "Développement d'une application mobile permettant aux PME de suivre leurs finances en temps réel, avec des tableaux de bord interactifs et des analyses prédictives pour une meilleure prise de décision.",
      results: ["Amélioration de 40% de la visibilité financière", "Prise de décision accélérée pour les investissements"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/GestionFinancierePME.png?raw=true",
      category: "Finance",
      id: "gestion-financiere"
    },
    {
      title: "Optimisation des Opérations pour les Services de Livraison",
      client: "Start-ups de livraison locales",
      description: "Développement d'une application mobile intégrant des algorithmes d'IA pour optimiser les itinéraires de livraison en temps réel, réduire les délais et améliorer la satisfaction client.",
      results: ["Réduction de 20% des temps de livraison", "Augmentation de 15% de la satisfaction client"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/OptimisationLivraisonNiger.png?raw=true",
      category: "Logistique",
      id: "optimisation-livraison"
    },
    {
      title: "Plateforme Numérique pour la Gestion des Tontines (Adaché)",
      client: "Associations de tontines locales",
      description: "Développement d'une application mobile sécurisée permettant aux membres des tontines de gérer leurs contributions, suivre les cycles de collecte et de distribution des fonds, et recevoir des notifications automatisées.",
      results: ["Augmentation de 30% de la transparence", "Amélioration de l'engagement des membres", "Optimisation des cycles de collecte"],
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/PlateformeTontineNiger.png?raw=true",
      category: "Finance",
      id: "gestion-tontines"
    }
  ];

  const ParticleEffect = () => {
    const particles = Array.from({ length: 50 });
    const ref = useRef<HTMLDivElement>(null);

    useAnimationFrame((t) => {
      if (ref.current) {
        const particles = ref.current.children;
        for (let i = 0; i < particles.length; i++) {
          const particle = particles[i] as HTMLDivElement;
          const speed = parseFloat(particle.dataset.speed || '1');
          const x = Math.sin(t * 0.001 * speed) * 20;
          const y = Math.cos(t * 0.001 * speed) * 20;
          particle.style.transform = `translate(${x}px, ${y}px)`;
        }
      }
    });

    return (
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((_, i) => (
          <div
            key={i}
            data-speed={Math.random() * 2 + 0.5}
            className="absolute w-1 h-1 bg-orange-500 dark:bg-orange-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    );
  };

  const streamingText = "Libérez le Potentiel de vos Données";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.017 } // plus rapide, réduire pour accélérer la révélation
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.2 } // durée de l'animation de chaque lettre
    }
  };

  const [animationKey, setAnimationKey] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prev) => prev + 1);
    }, 3000); // toutes les 2 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center bg-orange-500 dark:bg-orange-600"
        style={{
          scale: heroScale,
          opacity: heroOpacity,
          y: heroY
        }}
      >
        <ParticleEffect />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            filter: 'brightness(0.3)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          {/* Texte animé en streaming avec le même style que l'ancien H1 */}
          <motion.div
            key={animationKey} // redémarre l'animation
            className="text-6xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400 dark:from-orange-300 dark:to-green-400 whitespace-normal break-words"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {streamingText.split(" ").map((word, wordIndex, allWords) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span 
                    key={`${wordIndex}-${charIndex}`} 
                    variants={letterVariants} 
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < allWords.length - 1 && (
                  <motion.span 
                    variants={letterVariants} 
                    className="inline-block"
                    style={{ marginRight: "0.25em" }}
                  >
                    {" "}
                  </motion.span>
                )}
              </span>
            ))}
          </motion.div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white dark:text-gray-100">
            {t('home.hero.subtitle')}
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-green-500 dark:from-orange-400 dark:to-green-400 text-white font-bold py-4 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:from-orange-600 hover:to-green-600 dark:hover:from-orange-500 dark:hover:to-green-500"
            >
              {t('home.hero.cta')}
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Featured Case Studies Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('caseStudies.title')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              {t('caseStudies.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCases.map((caseStudy, index) => (
              <Link
                key={caseStudy.title}
                to={`/etudes-de-cas#${caseStudy.id}`}
                className="block"
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="inline-block px-3 py-1 bg-orange-500 text-white text-sm rounded-full">
                        {caseStudy.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {caseStudy.title}
                    </h3>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/etudes-de-cas"
              className="inline-flex items-center space-x-2 text-orange-500 dark:text-orange-400 font-semibold hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
            >
              <span>Voir toutes nos études de cas en détails</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Notre Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des solutions complètes et innovantes pour tous vos besoins en Data Science et IA
            </p>
          </div>

          <div className="space-y-12">
            {expertise.map((category) => (
              <div
                key={category.category}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105"
                  >
                    <item.icon className={`h-12 w-12 ${item.color} mb-6`} />
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                          <span className="mr-2 text-green-500">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden bg-green-600 dark:bg-green-700">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            filter: 'brightness(0.3)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(234, 88, 12, 0.8) 0%, rgba(22, 163, 74, 0.8) 100%)',
            backdropFilter: 'blur(8px)',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white dark:text-gray-100 mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-xl text-white dark:text-gray-100 mb-8 max-w-2xl mx-auto">
            {t('home.cta.subtitle')}
          </p>
          <div>
            <Link
              to="/contact"
              className="inline-block bg-white dark:bg-gray-100 text-green-600 dark:text-green-700 font-bold py-4 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-orange-50 dark:hover:bg-gray-200"
            >
              {t('home.cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;