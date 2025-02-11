// src/components/ThemeToggle.jsx
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';


export const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();
  
    return (
      <button 
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={`Mudar para tema ${isDark ? 'claro' : 'escuro'}`}
      >
        {isDark ? (
          <FiSun size={20} color={isDark ? '#fff' : '#000'} />
        ) : (
          <FiMoon size={20} color={isDark ? '#fff' : '#000'} />
        )}
      </button>
    );
  };