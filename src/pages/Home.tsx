import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Brain, Database, LineChart, BarChart } from 'lucide-react';

const Home = () => {
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

  const services = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Solutions d'IA avancées pour optimiser vos processus métier.",
      color: "text-orange-600 dark:text-orange-400",
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Architecture et intégration de données sur Azure.",
      color: "text-green-600 dark:text-green-400",
      bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: LineChart,
      title: "LLM",
      description: "Modèles de langage avancés pour vos besoins spécifiques.",
      color: "text-orange-600 dark:text-orange-400",
      bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BarChart,
      title: "Power BI",
      description: "Dashboards intelligents pour visualiser vos données.",
      color: "text-green-600 dark:text-green-400",
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Enhanced Parallax */}
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            filter: 'brightness(0.3)',
          }}
        />
        <motion.div 
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-green-400 dark:from-orange-300 dark:to-green-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            Libérez le Potentiel de vos Données
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl text-white dark:text-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            Experts en Data Science et Intelligence Artificielle, nous transformons vos données en solutions innovantes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-green-500 dark:from-orange-400 dark:to-green-400 text-white font-bold py-4 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg hover:from-orange-600 hover:to-green-600 dark:hover:from-orange-500 dark:hover:to-green-500"
            >
              Démarrer votre Projet
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Overview with Enhanced Animations */}
      <motion.section 
        className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 dark:from-orange-400 dark:to-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Nos Expertises
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative p-8 bg-white dark:bg-gray-700 shadow-lg rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ backgroundImage: `url(${service.bg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-700/80 dark:to-gray-700/40 group-hover:from-white/90 group-hover:to-white/50 dark:group-hover:from-gray-700/90 dark:group-hover:to-gray-700/50 transition-colors duration-500" />
                <service.icon className={`h-12 w-12 ${service.color} mb-4 relative z-10 transform group-hover:scale-110 transition-transform duration-500`} />
                <h3 className="text-xl font-semibold mb-2 relative z-10 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 relative z-10">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced CTA Section with Glassmorphism */}
      <motion.section 
        className="relative py-24 overflow-hidden bg-green-600 dark:bg-green-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
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
          <motion.h2 
            className="text-4xl font-bold text-white dark:text-gray-100 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Prêt à Transformer votre Entreprise ?
          </motion.h2>
          <motion.p 
            className="text-xl text-white dark:text-gray-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            Découvrez comment nos solutions en Data Science et IA peuvent révolutionner votre activité.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            <Link
              to="/contact"
              className="inline-block bg-white dark:bg-gray-100 text-green-600 dark:text-green-700 font-bold py-4 px-8 rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:bg-orange-50 dark:hover:bg-gray-200"
            >
              Contactez-nous
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;