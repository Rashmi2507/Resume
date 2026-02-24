import { motion } from 'framer-motion';
import {
  FaPython,
  FaDatabase,
  FaAws,
  FaGit,
  FaReact,
} from 'react-icons/fa';
import {
  SiApachespark,
} from 'react-icons/si';
import { SectionTitle } from './SectionTitle';

interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  proficiency: 'Expert' | 'Proficient' | 'Familiar';
}

const skillsData: SkillCategory[] = [
  {
    category: 'Languages',
    icon: <FaPython className="text-4xl text-yellow-500" />,
    skills: ['Python', 'Java', 'SQL'],
    proficiency: 'Expert',
  },
  {
    category: 'Big Data & Streaming',
    icon: <SiApachespark className="text-4xl text-orange-500" />,
    skills: ['Apache Spark', 'Hadoop', 'Kafka', 'Apache Flink'],
    proficiency: 'Expert',
  },
  {
    category: 'Databases',
    icon: <FaDatabase className="text-4xl text-blue-500" />,
    skills: ['MySQL', 'Redis'],
    proficiency: 'Expert',
  },
  {
    category: 'Cloud & DevOps',
    icon: <FaAws className="text-4xl text-orange-400" />,
    skills: ['Azure', 'Docker', 'Jenkins'],
    proficiency: 'Proficient',
  },
  {
    category: 'Frameworks & Tools',
    icon: <FaReact className="text-4xl text-blue-400" />,
    skills: ['Spring Boot', 'React', 'TailwindCSS', 'REST APIs'],
    proficiency: 'Proficient',
  },
  {
    category: 'Tools & Platforms',
    icon: <FaGit className="text-4xl text-orange-600" />,
    skills: ['Git', 'VS Code', 'IntelliJ IDEA', 'Jira'],
    proficiency: 'Expert',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="section bg-white dark:bg-gray-900">
      <SectionTitle title="Skills & Expertise" subtitle="Technologies I work with" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillsData.map((skillGroup, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="card"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                {skillGroup.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    skillGroup.proficiency === 'Expert'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                      : skillGroup.proficiency === 'Proficient'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                        : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                  }`}
                >
                  {skillGroup.proficiency}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional tech highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 card bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Backend Engineering and Machine Learning</h3>
        <p className="mb-4">
          Advanced expertise in fraud detection models, feature engineering, and model optimization
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            'Low Level Systems Design',
            'Data Structures & Algorithms',
            'Scikit-learn',
            'TensorFlow',
            'PyTorch',
            'XGBoost',
            'Feature Engineering',
            'Model Deployment',
          ].map((tech, i) => (
            <span key={i} className="px-3 py-1 rounded-full bg-white/20 text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
