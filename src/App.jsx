import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SideBar from './components/side-bar/SideBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import LoginForm from './components/auth/LoginForm'; 
import Checkout from './pages/Checkout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for client in local storage
    const client = localStorage.getItem('client');
    setIsAuthenticated(!!client); // Convert to boolean
  }, []);

  if (!isAuthenticated) {
    return <LoginForm setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <Router>
      <div className="flex">
        <SideBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
