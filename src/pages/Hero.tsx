import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';
//import NeuralNetworkBackground from '../components/NeuralNetworkBackground';


const Hero: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`relative flex items-center justify-center h-screen px-6 text-center ${darkMode
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
        : 'bg-gradient-to-br from-[#1E3A8A] to-[#3BB273] text-white'
        }`}
    >
      {/* Neural Network Background */}
      {/* <NeuralNetworkBackground darkMode={darkMode} /> */}

      <div className="flex flex-col items-center max-w-2xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Empowering AI & ML Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="text-lg md:text-2xl mb-8"
        >
          Transforming ideas into intelligent solutions with advanced machine learning models and AI.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className={`px-6 py-3 font-semibold rounded-full shadow-lg transition duration-300 ${darkMode ? 'bg-white text-gray-800 hover:bg-[#3BB273] hover:text-white' : 'bg-white text-[#1E3A8A] hover:bg-[#3BB273] hover:text-white'
            }`}
        >
          View My Projects
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
