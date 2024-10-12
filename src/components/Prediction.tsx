import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Prediction: React.FC = () => {
  const [predictionType, setPredictionType] = useState<'daily' | 'hourly'>('daily');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handlePredict = () => {
    // Here you would call your API to get prediction data
    console.log('Predicting for:', predictionType, startDate, endDate);
  };

  // Mock data for the chart
  const data = {
    labels: predictionType === 'daily' ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] : ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'],
    datasets: [
      {
        label: 'Predicted Customer Flow',
        data: predictionType === 'daily' ? [65, 59, 80, 81, 56, 55, 40] : [30, 45, 60, 70, 65, 55, 40, 50, 45],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Customer Flow Prediction</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="space-y-4">
          <div>
            <label className="block mb-2">Prediction Type</label>
            <select
              value={predictionType}
              onChange={(e) => setPredictionType(e.target.value as 'daily' | 'hourly')}
              className="w-full p-2 border rounded"
            >
              <option value="daily">Daily</option>
              <option value="hourly">Hourly</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          <button
            onClick={handlePredict}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Predict
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Prediction Results</h2>
        <Line data={data} />
      </div>
    </div>
  );
};

export default Prediction;