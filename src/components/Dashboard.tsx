import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, Users } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/prediction" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center space-x-4">
            <BarChart className="w-10 h-10 text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">Customer Flow Prediction</h2>
              <p className="text-gray-600">Predict customer flow by day or hour</p>
            </div>
          </div>
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <Users className="w-10 h-10 text-green-500" />
            <div>
              <h2 className="text-xl font-semibold">Total Customers Today</h2>
              <p className="text-3xl font-bold text-gray-800">1,234</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;