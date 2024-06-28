import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart, removeFromCart } from '../slices/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {items.map(item => (
          <li key={item.productId._id}>
            <h2>{item.productId.name}</h2>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(removeFromCart(item.productId._id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
