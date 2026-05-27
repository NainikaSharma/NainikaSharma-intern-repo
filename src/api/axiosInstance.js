import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://reqres.in";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    Accept: "*/*",
  },
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Add unique request ID
    config.headers["X-Request-ID"] = uuidv4();

    // Attach auth token if exists
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // AbortController for cancellation support
    const controller = new AbortController();
    config.signal = controller.signal;

    // (optional) store controller if you want to cancel manually later
    config.metadata = { controller };

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Timeout handling
    if (error.code === "ECONNABORTED") {
      console.error("Request timed out");
    }

    // Unauthorized handling
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default api;