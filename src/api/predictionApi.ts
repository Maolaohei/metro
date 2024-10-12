import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const getPrediction = async (type: 'daily' | 'hourly', startDate: string, endDate: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/prediction`, {
      params: { type, startDate, endDate }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching prediction:', error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const register = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};