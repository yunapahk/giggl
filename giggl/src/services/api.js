import axios from 'axios';

// Backend URL setup
const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://giggl-backend-d1dba8cb813e.herokuapp.com/';

// Axios instance
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

const makeCrudApi = (type) => ({
  getAll: () => apiClient.get(`${type}/`),
  getOne: (id) => apiClient.get(`${type}/${id}`),
  add: (data) => apiClient.post(`${type}/`, data),
  update: (id, data) => apiClient.put(`${type}/${id}/`, data),
  delete: (id) => apiClient.delete(`${type}/${id}`),
});

const bitsApi = makeCrudApi('bits');
const comediansApi = makeCrudApi('comedians');
const podcastsApi = makeCrudApi('podcasts');
const tourdatesApi = makeCrudApi('tourdates');

export default {
  // For bits
  getBits: bitsApi.getAll,
  getBit: bitsApi.getOne,
  addBit: bitsApi.add,
  updateBit: bitsApi.update,
  deleteBit: bitsApi.delete,

  // For comedians
  getComedians: comediansApi.getAll,
  getComedian: comediansApi.getOne,
  addComedian: comediansApi.add,
  updateComedian: comediansApi.update,
  deleteComedian: comediansApi.delete,

  // For podcasts
  getPodcasts: podcastsApi.getAll,
  getPodcast: podcastsApi.getOne,
  addPodcast: podcastsApi.add,
  updatePodcast: podcastsApi.update,
  deletePodcast: podcastsApi.delete,

  // For tourdates
  getTourdates: tourdatesApi.getAll,
  getTourdate: tourdatesApi.getOne,
  addTourdate: tourdatesApi.add,
  updateTourdate: tourdatesApi.update,
  deleteTourdate: tourdatesApi.delete,
};
