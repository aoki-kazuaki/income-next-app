import { RetryAxiosRequestConfig } from "@/types/httpClient";
import axios, { AxiosError } from "axios";
import { tokenRefreshManager } from "./tokenManager";

export const browserHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  timeout: 10000
});

browserHttpClient.interceptors.response.use(
  res => res,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryAxiosRequestConfig;

    if (error.response?.status === 401 && originalRequest && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await tokenRefreshManager.ensureRefreshed();
        return browserHttpClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default browserHttpClient;
