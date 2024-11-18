import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const { darkMode } = useDarkMode();

  const projects = [
    { name: 'FinancAI', description: 'A system for tracking financial services and providing insights', image: '/demo1.jpg', link: 'https://financeai.com' },
    { name: 'Lunar moon landing agent', description: 'A description of lunar', image: '/demo2.jpg', link: 'https://lunarmoon.com' },
    { name: 'A fighting kungfu agent', description: 'A description of kungfu agent', image: '/demo3.jpg', link: 'https://kungfuagent.com' },
    { name: 'RAG Based Chatbot with voice Enabled', description: 'A description of RAG bot', image: '/demo7.jpg', link: 'https://RAGbot.com' },
    { name: '6 Degree of separation', description: 'A description of 6 degrees of separation', image: '/demo8.jpg', link: 'https://lunarmoon.com' },
    { name: 'Tic-Tac-Toe game with AI', description: 'A description of tic-tac-toe', image: '/demo9.jpg', link: 'https://kungfuagent.com' },
    { name: 'Gymnasium self Driving Car', description: 'A description of a self driving car', image: '/demo10.jpg', link: 'https://RAGbot.com' },
  ];

  return (
    <section id="projects" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-60 text-gray-900'} py-16`}>
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
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)" }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`relative overflow-hidden rounded-lg shadow-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} transition-transform`}
            >
              <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}>
                <div className="absolute top-0 left-0 w-full p-4 bg-black bg-opacity-60 z-10">
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-all duration-300 ease-in-out">
                  <p className="text-lg text-white text-center mb-4">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white">
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-6 h-6" />
                  </a>
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
