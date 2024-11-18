import { motion } from 'framer-motion';
import { useDarkMode } from '../components/DarkModeContext';

const Skills = () => {
  const { darkMode } = useDarkMode(); // Access the dark mode context

  const skills = [
    { category: 'Programming Languages', items: ['Python', 'R', 'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
    { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Express', 'Flask', 'TensorFlow', 'PyTorch', 'sklearn'] },
    { category: 'Tools & Technologies', items: ['Git', 'Docker', 'Kubernetes'] },
    { category: 'Data science Tools', items: [ 'NumPy', 'Pandas','matplotlib & seaborn','jupyter notebook','scikit-learn','plotly','pytorch-lightning'] },
    { category: 'Cloud platforms', items: ['AWS','Azure', 'Google Cloud Platform', 'IBM Cloud', 'Hugging Face'] },
    { category: 'Big Data & Databases ', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Cassandra', 'Redis', 'supabase'] },
  ];

  return (
    <section id="skills" className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} py-16`}>
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white bg-opacity-70 text-gray-900'
                } p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              <h3 className="text-2xl font-semibold mb-4">{skillCategory.category}</h3>
              <ul className="list-disc list-inside">
                {skillCategory.items.map((item, idx) => (
                  <li key={idx} className="text-lg">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
