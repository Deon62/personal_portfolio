import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';

const Hero: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <section
      className={`relative flex items-center justify-between h-screen px-6 text-center ${darkMode
        ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
        : 'bg-gradient-to-br from-[#1E3A8A] to-[#3BB273] text-white'
        }`}
    >
      {/* Left Section - Text Content */}
      <div className="flex flex-col items-center md:items-start max-w-2xl z-10 space-y-6 md:text-left">
        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-3xl mt-8 md:text-6xl font-bold"
        >
          Hi, I'm Deon, AI & ML Enthusiast
        </motion.h1>

        {/* Subtitle or Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="text-lg md:text-2xl mb-8 px-4"
        >
          I'm passionate about using AI and machine learning to create innovative solutions that solve real-world problems. With a strong background in data science and advanced algorithms, I aim to make an impact through intelligent, user-focused technologies.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1 }}
          className={`px-6 py-3 font-semibold rounded-full shadow-lg transition duration-300 ${darkMode ? 'bg-white text-gray-800 hover:bg-[#3BB273] hover:text-white' : 'bg-white text-[#1E3A8A] hover:bg-[#3BB273] hover:text-white'}`}
        >
          View My Projects
        </motion.a>
      </div>

      {/* Right Section - Robot Illustration */}
      <div className="hidden md:block w-1/2">
        <motion.img
          src="/ai.svg" // Path to your robot image
          alt="Robot Illustration"
          className="w-full h-full object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
};

export default Hero;
