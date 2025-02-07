// src/pages/CartPage.jsx
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  return (
    <div className="cart-page">
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Seu carrinho está vazio</p>
          <Link to="/" className="button">Voltar às Compras</Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>Quantidade: {item.quantity}</p>
                <p>Valor Unitário: R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <p>Total: R$ {(item.value * item.quantity).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Geral: R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</h3>
            <div className="cart-actions">
              <Link to="/" className="button">Continuar Comprando</Link>
              <button className="button checkout-btn">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};