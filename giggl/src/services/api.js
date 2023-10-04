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

// Comedians related API calls
export const getComedians = () => {
  return apiClient.get('comedians/');
};

export const getComedian = (id) => {
  return apiClient.get(`comedians/${id}`);
};

export const addComedian = (data) => {
  return apiClient.post('comedians/', data);
};

export const updateComedian = (id, data) => {
  return apiClient.put(`comedians/${id}/edit`, data);
};

export const deleteComedian = (id) => {
  return apiClient.delete(`comedians/${id}`);
};

export default {
  getBits,
  getBit,
  addBit,
  updateBit,
  deleteBit,

  getComedians,
  getComedian,
  addComedian,
  updateComedian,
  deleteComedian
};
