import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { clearCart } from '../context/slices/CartSlice';

function Checkout() {
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart.value);

  // State for input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Handle form submission
  const handleProceed = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!name || !email || !address) {
      toast.error("Please fill out all billing information fields!");
      return;
    }

    // Show a success message
    toast.success("Your order has been successfully processed!");

    // 
    dispatch(clearCart());
    

    // Navigate to the home route after a short delay
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Checkout</h1>

        {/* Billing Information */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Billing Information
          </h2>
          <form className="space-y-4" onSubmit={handleProceed}>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Address
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your shipping address"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Order Summary
          </h2>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-lg text-gray-600">Your cart is empty.</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <img
                    src={item.imageURL}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="text-gray-600 flex-1 ml-4">
                    {item.title}
                  </span>
                  <span className="text-gray-600">x{item.quantity}</span>
                  <span className="text-gray-800 font-medium">
                    ${item.price * item.quantity}
                  </span>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <div className="flex justify-between border-t pt-4">
                <span className="font-semibold text-gray-800">Total</span>
                <span className="font-semibold text-gray-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Payment Button */}
        <button
          className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
          onClick={handleProceed}
          disabled={cartItems.length === 0}
        >
          Proceed to Payment
        </button>
      </div>
      {/* Toast container */}
      <ToastContainer />
    </div>
  );
}

export default Checkout;
