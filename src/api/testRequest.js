import api from './axiosInstance';

export const testPostRequest = async () => {
  try {
    const response = await api.post('/posts', {
      title: 'Hello',
      body: 'This is a test',
      userId: 1,
    });

    console.log('API Response:', response.data);

    if (response.data.redirectTo) {
      window.location.href = response.data.redirectTo;
    }

    return response.data;
  } catch (error) {
    console.error('API Request Failed:', error);
  }
};
