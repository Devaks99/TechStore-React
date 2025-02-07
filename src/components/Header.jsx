import { Link } from 'react-router-dom';
import { Cart } from './Cart';
import { GiSmartphone } from 'react-icons/gi'; // Ícone alterado aqui

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <GiSmartphone className="logo-icon" /> {/* Ícone aplicado aqui */}
          <span>TechStore</span>
        </Link>
      </div>
      <Cart />
    </header>
  );
};