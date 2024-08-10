import React from 'react';
import { useTheme } from './ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-4 left-4 p-2 rounded-full flex items-center gap-2 transition-colors ${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-yellow-300 text-gray-800'
      }`}
      aria-label="Toggle Theme"
    >
      <FaMoon className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
      <FaSun className={`text-xl ${theme === 'light' ? 'text-gray-400' : 'text-gray-600'}`} />
    </button>
  );
};

export default ToggleButton;
