import api from './axiosInstance';

export const getUsers = async () => {
  const response = await api.get('/api/users?page=1');
  return response.data;
};
