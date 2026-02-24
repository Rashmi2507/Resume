import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-dark dark:to-gray-900"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1 shadow-lg">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-6xl font-bold gradient-text">
              RB
            </div>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm <span className="gradient-text">Rashmi Bharti</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Machine Learning & Backend Engineer
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="text-lg text-gray-700 dark:text-gray-200 mb-12 space-y-4"
        >
          <p>
            Specialized in <span className="font-bold text-blue-600 dark:text-blue-400">Fraud Detection Models</span>,{' '}
            <span className="font-bold text-purple-600 dark:text-purple-400">Scalable Data Pipelines</span>, and{' '}
            <span className="font-bold text-pink-600 dark:text-pink-400">Backend Engineering</span>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Senior Machine Learning Engineer @ Visa | Building intelligent systems that detect fraud
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-6 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6 text-3xl"
        >
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://www.linkedin.com/in/rashmi-bharti-6995bb184/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="https://github.com/Rashmi2507"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 10 }}
            href="mailto:rashmibh1997@gmail.com"
            className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300"
          >
            <FaEnvelope />
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 animate-bounce"
        >
          <FaArrowDown className="mx-auto text-2xl text-gray-400 dark:text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
