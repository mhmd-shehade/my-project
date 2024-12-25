import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../../context/slices/CartSlice'; // Adjust the import path if needed

function CartItem({ item }) {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(item.quantity);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity >= 0) {
      setQty(newQuantity);
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: item.id }));
  };

  return (
    <div className="p-4 flex items-center justify-between">
      <img src={item.imageURL} alt={item.name} className="w-16 h-16 object-cover" />
      <div className="flex-1 ml-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <input
          type="number"
          value={qty}
          min="1"
          className="border rounded px-2 py-1"
          onChange={handleQuantityChange}
        />
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-600"
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
