import api from './axiosInstance';

// LOGIN
export const loginUser = async (email, password) => {
  const response = await api.post('/api/login', {
    email,
    password,
  });

  const token = response.data.token;

  if (!token) throw new Error('ReqRes response did not contain a token');

  // Store token in localStorage
  localStorage.setItem('authToken', token);

  return response.data;
};

// LOGOUT
export const logoutUser = () => {
  localStorage.removeItem('authToken');
};
