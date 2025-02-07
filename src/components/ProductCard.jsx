// src/components/ProductCard.jsx
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    
    // Feedback visual temporário
    setShowFeedback(true);
    toast.success(`${product.title} adicionado ao carrinho!`, {
      position: 'top-right',
      duration: 2000,
      icon: '🛒',
    });
    
    // Reset após 2 segundos
    setTimeout(() => {
      setShowFeedback(false);
    }, 2000);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="product-price">
        R$ {product.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </p>
      <button
        onClick={handleAddToCart}
        className={`add-to-cart-btn ${showFeedback ? 'added' : ''}`}
      >
        {showFeedback ? '✔️ Adicionado!' : 'Adicionar ao Carrinho'}
      </button>
    </div>
  );
};