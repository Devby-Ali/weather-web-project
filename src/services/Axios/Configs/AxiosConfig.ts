import axios from "axios";
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  timeout: 2000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    errorHandler(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
