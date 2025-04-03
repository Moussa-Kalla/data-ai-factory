import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimationFrame } from 'framer-motion';
import { Brain, Database, LineChart, BarChart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLElement>(null);
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

  // Auto-scroll to expertise section after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      expertiseRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const heroScale = useTransform(smoothProgress, [0, 0.3], [1, 0.95]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 0.3], [0, 50]);

  const services = [
    {
      icon: Brain,
      title: t('home.expertise.ml.title'),
      description: t('home.expertise.ml.description'),
      color: "text-orange-600 dark:text-orange-400",
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Database,
      title: t('home.expertise.de.title'),
      description: t('home.expertise.de.description'),
      color: "text-green-600 dark:text-green-400",
      bg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: LineChart,
      title: t('home.expertise.llm.title'),
      description: t('home.expertise.llm.description'),
      color: "text-orange-600 dark:text-orange-400",
      bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BarChart,
      title: t('home.expertise.bi.title'),
      description: t('home.expertise.bi.description'),
      color: "text-green-600 dark:text-green-400",
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const featuredCases = [
    {
      title: t('caseStudies.cases.agriculture.title'),
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/main/assets/OptimisationAgricoleNiger.png?raw=true",
      category: t('caseStudies.categories.agriculture')
    },
    {
      title: t('caseStudies.cases.education.title'),
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ApprentissagePersonnaliséEcole.png?raw=true",
      category: t('caseStudies.categories.education')
    },
    {
      title: t('caseStudies.cases.health.title'),
      image: "https://github.com/Moussa-Kalla/data-ai-factory/blob/mk_dev/assets/ConsultationMédicaleVirtuelle.png?raw=true",
      category: t('caseStudies.categories.health')
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
            {t('home.hero.title')}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl text-white dark:text-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          >
            {t('home.hero.subtitle')}
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
              {t('home.hero.cta')}
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Services Overview */}
      <motion.section 
        ref={expertiseRef}
        className="py-24 bg-white dark:bg-gray-800 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 dark:from-orange-400 dark:to-green-400"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {t('home.expertise.title')}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative p-8 bg-white dark:bg-gray-700 shadow-lg rounded-xl overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

      {/* Featured Case Studies Section */}
      <motion.section
        className="py-24 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('caseStudies.title')}
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t('caseStudies.subtitle')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/etudes-de-cas"
              className="inline-flex items-center space-x-2 text-orange-500 dark:text-orange-400 font-semibold hover:text-orange-600 dark:hover:text-orange-300 transition-colors"
            >
              <span>{t('caseStudies.viewAll')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="relative py-24 overflow-hidden bg-green-600 dark:bg-green-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
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
            {t('home.cta.title')}
          </motion.h2>
          <motion.p 
            className="text-xl text-white dark:text-gray-100 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          >
            {t('home.cta.subtitle')}
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
              {t('home.cta.button')}
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;