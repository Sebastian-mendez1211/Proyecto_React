import React, { useState } from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, dispatch } = useCart();
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [totalPaid, setTotalPaid] = useState(0); 

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePurchase = () => {
    const total = getTotalPrice();
    setTotalPaid(total); 
    setPurchaseComplete(true);
    dispatch({ type: 'CLEAR_CART' }); 
  };

  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      {purchaseComplete ? (
        <div>
          <h4>Felicidades por tu compra!</h4>
          <p>Total pagado: ${totalPaid}</p> {/* Usar totalPaid */}
        </div>
      ) : (
        <>
          {cart.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <div>
              <ul className="list-group mb-3">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">Cantidad: {item.quantity}</small>
                    </div>
                    <span className="text-muted">${item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <h4>Total: ${getTotalPrice()}</h4>
              <button className="btn btn-primary mt-3" onClick={handlePurchase}>Comprar ahora</button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Cart;
