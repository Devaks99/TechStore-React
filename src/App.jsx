// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Products } from './pages/Products';
import { CartPage } from './pages/CartPage';
import { Toaster } from 'react-hot-toast';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

// Modifique esta parte
function App() {
  return (
    <Router>
      <ThemeProvider> 
      <CartProvider>
        <Header />
        <Toaster position="top-right" />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App; 