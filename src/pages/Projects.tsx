import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';

const Projects = () => {
  const { darkMode } = useDarkMode();

  // Example project data with image URL
  const projects = [
    { name: 'FinanceAI', description: 'A system for tracking financial services and providing insights', image: '/demo1.jpg' },
    { name: 'Lunar moon landing agent', description: 'A description of lunar', image: '/demo2.jpg' },
    { name: 'A fighting kungfu agent', description: 'A description of kungfu agent', image: '/demo3.jpg' },
  ];

  return (
    <section className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-16`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`relative overflow-hidden rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
                }`}
            >
              <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                {/* Title section */}
                <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-60 z-10">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                </div>
                {/* Hovered description */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-lg text-white text-center">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
