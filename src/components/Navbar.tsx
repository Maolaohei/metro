import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BarChart } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">FlowCast</span>
          </Link>
          <div className="space-x-4">
            {user ? (
              <>
                <Link to="/dashboard" className="text-gray-600 hover:text-gray-800">Dashboard</Link>
                <Link to="/prediction" className="text-gray-600 hover:text-gray-800">Prediction</Link>
                <button onClick={logout} className="text-gray-600 hover:text-gray-800">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
                <Link to="/register" className="text-gray-600 hover:text-gray-800">Register</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;