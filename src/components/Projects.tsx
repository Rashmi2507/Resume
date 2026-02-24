import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Online Grocery Store',
    description: 'Developed a comprehensive e-commerce platform enabling users to browse products, add items to cart, place orders, and receive email notifications upon confirmation. The platform helps save time and is especially useful in situations like COVID-19, allowing people to get essential items without leaving their homes.',
    tags: ['Web Development', 'E-Commerce', 'Full Stack'],
    link: '#'
  },
  {
    title: 'IoT Based Smart Mirror',
    description: 'Developed an intelligent smart mirror using the Haar Cascade Algorithm, training it with positive and negative images. Utilized LBPH to enhance facial features for better representation. Implemented Facial Landmark detection and CNN to build an emotion recognition module.',
    tags: ['Machine Learning', 'IoT', 'Computer Vision', 'CNN'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <Code2 size={32} className="text-blue-600 dark:text-blue-400" />
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}