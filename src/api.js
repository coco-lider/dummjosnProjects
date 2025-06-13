import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const refresh = () =>
  api.post("/auth/refresh", {
    refreshToken: localStorage.getItem("refreshToken"),
    expiresInMins: 30,
  });

export const Login = (userData) => api.post("/auth/login", userData);
