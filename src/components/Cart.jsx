import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { toast } from "react-toastify";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart is cleared!");
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
    toast.info(`${item.name} removed from cart`);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="mt-24 m-4 p-4 max-w-4xl mx-auto">
      <h1 className="text-center font-bold text-2xl mb-6">Your Cart</h1>

      <div className="flex justify-center m-2 gap-4">
        <button
          className="border border-solid p-2 rounded-md text-white bg-black"
          onClick={handleClearCart}
        >
          Clear Cart!
        </button>

        {cartItems.length > 0 && (
          <button
            className="border border-solid p-2 rounded-md text-white bg-green-600 hover:bg-green-700"
            onClick={() => toast.success("Proceeding to checkout...")}
          >
            Checkout ₹{totalAmount.toFixed(2)}
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty. Add items to your Cart 🛒
        </p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id ? item.id : Math.random().toString(36).substr(2, 9)}
              className="flex items-center justify-between bg-white p-4 rounded shadow"
              data-testid="foodItemInCart"
            >
              <div className="flex items-center space-x-4">
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
              <button
                onClick={() => handleRemoveItem(item)}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
