import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animation
import { useDarkMode } from '../components/DarkModeContext'; // Dark mode context

// Import FontAwesome icons (ensure you have @fortawesome/react-fontawesome installed)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMedium, faWhatsapp, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const { darkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('Sending...');

    // Simulate backend call and set status
    setTimeout(() => {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    }, 1500);
  };

  return (
    <section id="contact" className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} transition-all`}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} transition-all`}
        >
          Contact Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`text-lg mt-4 ${darkMode ? 'text-[#bbb]' : 'text-gray-600'} transition-all`}
        >
          I would love to hear from you! Please reach out through the form or one of the social platforms below.
        </motion.p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3BB273] ${darkMode ? 'bg-[#333] text-white' : 'bg-[#f4f4f9] text-[#333]'} transition-all`}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3BB273] ${darkMode ? 'bg-[#333] text-white' : 'bg-[#f4f4f9] text-[#333]'} transition-all`}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3BB273] ${darkMode ? 'bg-[#333] text-white' : 'bg-[#f4f4f9] text-[#333]'} transition-all`}
              rows={5}
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="w-full py-3 bg-[#3BB273] text-white rounded-md hover:bg-[#2c8f59] focus:outline-none focus:ring-2 focus:ring-[#3BB273] transition duration-300"
          >
            Send Message
          </motion.button>
        </form>

        {formStatus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={`mt-6 text-lg font-semibold ${formStatus === 'Message sent successfully!' ? 'text-green-500' : 'text-gray-700'}`}
          >
            {formStatus}
          </motion.div>
        )}

        <div className="mt-12">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-6`}
          >
            Or reach me on social media:
          </motion.h3>

          <div className="flex justify-center space-x-8">
            <motion.a
              href="https://medium.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:text-[#3BB273] transition duration-300`}
            >
              <FontAwesomeIcon icon={faMedium} className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:text-[#3BB273] transition duration-300`}
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`${darkMode ? 'text-white' : 'text-gray-800'} hover:text-[#3BB273] transition duration-300`}
            >
              <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className={`text-[#333] dark:text-white hover:text-[#3BB273] transition duration-300`}
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
