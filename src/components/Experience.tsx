import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Machine Learning Engineer',
    company: 'VISA',
    period: 'Sep 2023 - Present',
    location: 'Bangalore',
    highlights: [
      'Successfully onboarded advanced fraud detection models to a dedicated platform, ensuring seamless integration, optimal performance, and accurate deployment',
      'Managed data transfer and transformation, coordinated with data scientists and engineers, conducted extensive testing',
      'Migrated the model\'s scoring engine from VEI to Triton for improved performance and scalability',
      'Created comprehensive unit tests for delta feed tables using Java',
      'Designed and implemented a common schema to unify real-time data from three distinct transaction sources',
      'Developed robust Java code with Apache Spark for efficient data ingestion and processing',
      'Worked on multiple microservices, implementing changes as per requirements'
    ]
  },
  {
    title: 'Backend Developer with Big Data Tools | Data Engineer',
    company: 'ACCENTURE',
    period: 'Dec 2020 - Aug 2023',
    location: 'Bangalore',
    highlights: [
      'Designed and implemented a data pre-processing framework to extract .csv data from Azure Blob Storage',
      'Processed data in Databricks using Scala with Apache Spark for distributed processing',
      'Transformed data into views and snapshots based on business requirements',
      'Optimized performance for time and cost efficiency',
      'Managed workflows with Azure Data Factory pipelines, streamlining data analysis',
      'Developed frontend features using Angular, HTML, and CSS',
      'Built and integrated Python APIs with stored procedures for seamless data access'
    ]
  },
  {
    title: 'Software Intern | Java, Android Studio',
    company: 'ZEBRA TECHNOLOGIES',
    period: 'Jan 2020 - Jun 2020',
    location: 'Bangalore',
    highlights: [
      'Worked on establishing P2P connection between Android devices using Java',
      'Obtained scan results of all access points and plotted the same while walking paths',
      'Implemented functionality where users can search for access points of their choice'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <Briefcase size={32} className="text-blue-600 dark:text-blue-400" />
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}