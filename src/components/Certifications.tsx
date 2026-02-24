import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'DP-203 Data Engineering on Microsoft Azure',
    issuer: 'Microsoft',
    type: 'Certification'
  },
  {
    title: 'DP-900 Microsoft Azure Data Fundamentals',
    issuer: 'Microsoft',
    type: 'Certification'
  },
  {
    title: 'PL-900 Power Platform Fundamentals',
    issuer: 'Microsoft',
    type: 'Certification'
  },
  {
    title: 'Java',
    issuer: 'HackerRank',
    type: 'Certification'
  },
  {
    title: 'Python',
    issuer: 'HackerRank',
    type: 'Certification'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <Award size={32} className="text-blue-600 dark:text-blue-400" />
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-3">
                <Award size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">
                    {cert.issuer}
                  </p>
                  <span className="inline-block mt-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                    {cert.type}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}