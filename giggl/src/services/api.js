import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://giggl-backend-d1dba8cb813e.herokuapp.com/';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, 
});

export const getBits = () => {
  return apiClient.get('bits/');
};

export const getBit = (id) => {
  return apiClient.get(`bits/${id}`);
};

export const addBit = (data) => {
  return apiClient.post('bits/', data);
};

export const updateBit = (id, data) => {
  return apiClient.put(`bits/${id}`, data);
};

export const deleteBit = (id) => {
  return apiClient.delete(`bits/${id}`);
};

export default {
  getBits,
  getBit,
  addBit,
  updateBit,
  deleteBit,
};
