import api from "./axiosInstance";

export const createPayment = async (data) => {
  const response = await api.post("/payments", data);
  return response.data;
};
