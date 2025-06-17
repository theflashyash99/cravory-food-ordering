import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());

  }

  return (
    <div className="mt-24 m-4 p-4 max-w-4xl mx-auto">
      <h1 className="text-center font-bold text-2xl mb-6">Your Cart</h1>
      <div className='flex justify-center m-2 '>
      <button  className='border border-solid  p-2  rounded-md text-white  bg-black' onClick={handleClearCart}> Clear Cart!</button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Add items to your Cart 🛒 </p>
      ) : (
        <div className="space-y-4">
        
          {cartItems.map(item => (
            <div
              key={item.id || Math.random()}
              className="flex items-center space-x-4 bg-white p-4 rounded shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-700">₹{item.price.toFixed(2)}</p>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
