import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://giggl-backend-d1dba8cb813e.herokuapp.com/';

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

const getAllData = async () => {
  try {
    const [bitsResponse, comediansResponse, podcastsResponse, tourdatesResponse] = await Promise.all([
      bitsApi.getAll(),
      comediansApi.getAll(),
      podcastsApi.getAll(),
      tourdatesApi.getAll(),
    ]);

    return {
      bits: bitsResponse.data,
      comedians: comediansResponse.data,
      podcasts: podcastsResponse.data,
      tourdates: tourdatesResponse.data,
    };
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw error; 
  }
};

const bitsApi = makeCrudApi('bits');
const comediansApi = makeCrudApi('comedians');
const podcastsApi = makeCrudApi('podcasts');
const tourdatesApi = makeCrudApi('tourdates');

export default {
  // Get All Data for Bit model
  getAllData,

  // Bits
  getBits: bitsApi.getAll,
  getBit: bitsApi.getOne,
  addBit: bitsApi.add,
  updateBit: bitsApi.update,
  deleteBit: bitsApi.delete,

  // Comedians
  getComedians: comediansApi.getAll,
  getComedian: comediansApi.getOne,
  addComedian: comediansApi.add,
  updateComedian: comediansApi.update,
  deleteComedian: comediansApi.delete,

  // Podcasts
  getPodcasts: podcastsApi.getAll,
  getPodcast: podcastsApi.getOne,
  addPodcast: podcastsApi.add,
  updatePodcast: podcastsApi.update,
  deletePodcast: podcastsApi.delete,

  // Tourdates
  getTourdates: tourdatesApi.getAll,
  getTourdate: tourdatesApi.getOne,
  addTourdate: tourdatesApi.add,
  updateTourdate: tourdatesApi.update,
  deleteTourdate: tourdatesApi.delete,
};
