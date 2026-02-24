import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { SectionTitle } from './SectionTitle';

interface ContactLink {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const Contact = () => {
  const contactLinks: ContactLink[] = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: 'Email',
      value: 'rashmibh1997@gmail.com',
      href: 'mailto:rashmibh1997@gmail.com',
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/rashmi-bharti-6995bb184/',
      href: 'https://www.linkedin.com/in/rashmi-bharti-6995bb184/',
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: 'GitHub',
      value: 'https://github.com/Rashmi2507',
      href: 'https://github.com/Rashmi2507',
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: 'Phone',
      value: '+91 9483427542',
      href: 'tel:+919483427542',
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

  return (
    <section
      id="contact"
      className="section bg-white dark:bg-gray-900 min-h-screen flex items-center justify-center"
    >
      <div className="w-full">
        <SectionTitle
          title="Let's Connect"
          subtitle="Get in touch with me for opportunities or collaborations"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.05, x: 5 }}
              className="card flex items-center gap-6 cursor-pointer group"
            >
              <div className="p-4 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white group-hover:shadow-lg transition-shadow">
                {link.icon}
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {link.label}
                </p>
                <p className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
