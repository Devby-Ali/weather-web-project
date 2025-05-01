import { errorHandler } from "../ErrorHandlers/ErrorHandler";
import REACT_APP_OPENWEATHER_API_KEY from '../../../../config'
import axiosInstance from '../Configs/AxiosConfig';

const API_KEY = REACT_APP_OPENWEATHER_API_KEY

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axiosInstance.get("/weather", {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // برای دمای سلسیوس
        // lang: 'fa' // اختیاری - برای توضیحات فارسی
      }
    });
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};
