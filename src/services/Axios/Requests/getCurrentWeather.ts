import axios from 'axios';
import { errorHandler } from "../ErrorHandlers/ErrorHandler";

const API_KEY = '27470dca4452989cbdb542a5a4e4253f';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // برای دمای سلسیوس
        lang: 'fa' // اختیاری - برای توضیحات فارسی
      }
    });
    console.log(response)
    return response.data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};