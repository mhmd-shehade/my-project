import React, { useState } from 'react';

function LoginForm() {
  const [isLogin, setIsLogin] = useState(true); // Track whether it's login or signup
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || []; // Get users list from localStorage

    if (isLogin) {
      // Login logic
      const user = users.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        // Successful login
        localStorage.setItem('client', JSON.stringify(user)); // Save the logged-in user to localStorage
        setErrorMessage('');
        console.log('Login successful:', user);
        // refresh the page
        window.location.reload();
        // Redirect or take any other action upon successful login
      } else {
        // Login failed
        setErrorMessage('Invalid email or password. Please try again.');
      }
    } else {
      // Signup logic
      const existingUser = users.find((user) => user.email === formData.email);

      if (existingUser) {
        // User already exists
        setErrorMessage('Email is already registered. Please login.');
      } else {
        // Add the new user to the list
        const updatedUsers = [...users, formData];
        localStorage.setItem('users', JSON.stringify(updatedUsers)); // Save the updated list
        setErrorMessage('');
        console.log('Signup successful:', formData);
        setIsLogin(true); // Switch to login after signup
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
                required={!isLogin}
              />
            </div>
          )}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            className="text-indigo-600 hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setErrorMessage('');
            }}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
