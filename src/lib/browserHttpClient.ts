import { RetryAxiosRequestConfig } from "@/types/httpClient";
import { ServerErrorResponseMessage } from "@/types/server/error";
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

    const statusIs401 = error.response?.status === 401;
    const message = (error.response?.data as ServerErrorResponseMessage)?.message;
    const tokenExpired = message === "JWT has expired.";

    if (statusIs401 && tokenExpired && originalRequest && !originalRequest._retry) {
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
