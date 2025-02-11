import { Link } from 'react-router-dom';
import { Cart } from './Cart';
import { GiSmartphone } from 'react-icons/gi'; // Ícone smartphone
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <GiSmartphone className="logo-icon" /> 
          <span>TechStore</span>
        </Link>
      </div>

      <div className="header-controls">
        <ThemeToggle />
        <Cart />
      </div>
    </header>
  );
};