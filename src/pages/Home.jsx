import React from 'react';
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-2">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
          <p className="text-lg mb-8">Discover the best products at unbeatable prices.</p>
          <Link to="/shop" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Shop Now
          </Link>
        </div>
      </section>
      <hr />
      <section className="bg-white-600 text-black py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
          <p className="text-lg mb-6">Sign up to receive updates on new products and exclusive offers.</p>
          <form className="flex justify-center">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg border-none focus:outline-none"/>
            <button type="submit" className="bg-white text-blue-600 px-4 py-2 rounded-r-lg font-semibold hover:bg-gray-200">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Home;
