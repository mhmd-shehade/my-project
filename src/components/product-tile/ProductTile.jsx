import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../context/slices/CartSlice'; // Adjust the import path if needed

function ProductTile({ product }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(addItem(product)); // Dispatch the addItem action with the product
      setIsLoading(false); // Set loading state back to false after the item is added to the cart
    }, 1000); // 1-second delay
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.imageURL}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {isLoading ? "Loading..." : "add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductTile;
