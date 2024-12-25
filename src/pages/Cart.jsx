import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import CartItem from '../components/cart-item/CartItem';
import { updateQuantity, removeItem } from '../context/slices/CartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  // Calculate the total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <ShoppingCartIcon className="h-6 w-6 text-blue-500" />
        <h1 className="text-2xl font-semibold ml-2">Your Cart</h1>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="divide-y divide-gray-200">
          {cartItems.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-lg text-gray-600">Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map(item => (
              <CartItem 
                key={item.id} 
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
              />
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-4 flex justify-between items-center bg-gray-100">
            <p className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <Link to="/checkout" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
