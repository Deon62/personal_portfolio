import { useState, useEffect } from 'react';
import { useDarkMode } from './DarkModeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);  // Track scroll position
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Toggle menu for mobile view
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll and change navbar position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true); // Change navbar position after scrolling 100px
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'translate-x-[-100%]' : 'translate-x-0'} 
      ${darkMode ? 'bg-gray-800 text-white' : 'bg-[#F5F5F5] text-[#333333]'}`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4 shadow-md">
        {/* Logo */}
        <div className="text-xl font-semibold">AI/ML Expert</div>

        {/* Links for larger screens */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-[#3BB273]">About</a>
          <a href="#projects" className="hover:text-[#3BB273]">Projects</a>
          <a href="#skills" className="hover:text-[#3BB273]">Skills</a>
          <a href="#contact" className="hover:text-[#3BB273]">Contact</a>
        </div>

        {/* Dark Mode Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {darkMode ? (
              // Moon icon for dark mode
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.707 15.293A8.966 8.966 0 0 1 12 21a9 9 0 1 1 9-9 8.966 8.966 0 0 1-.293 3.707z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm8-8a1 1 0 0 1 1 1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1 1 1 0 0 1 1-1zM4 13a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1zm13.656-8.656a1 1 0 0 1 1.415 0l.707.707a1 1 0 1 1-1.414 1.415l-.707-.707a1 1 0 0 1 0-1.415zM7.05 4.636a1 1 0 0 1 0 1.415l-.707.707a1 1 0 0 1-1.415-1.414l.707-.707a1 1 0 0 1 1.415 0zm11.313 11.314a1 1 0 0 1 1.415 1.415l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707zm-11.314 0a1 1 0 0 1 0 1.415l-.707.707a1 1 0 1 1-1.415-1.414l.707-.707a1 1 0 0 1 1.415 0z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} aria-label="Toggle menu" className="md:hidden">
            <svg className="w-6 h-6 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for mobile screens */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <a href="#about" className="block py-2 px-4 hover:text-[#3BB273]">About</a>
          <a href="#projects" className="block py-2 px-4 hover:text-[#3BB273]">Projects</a>
          <a href="#skills" className="block py-2 px-4 hover:text-[#3BB273]">Skills</a>
          <a href="#contact" className="block py-2 px-4 hover:text-[#3BB273]">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
