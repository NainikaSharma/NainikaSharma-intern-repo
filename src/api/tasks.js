import api from './axiosInstance';

export const getTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};
