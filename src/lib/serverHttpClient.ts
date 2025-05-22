import axios from "axios";

export const serverHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_JAVA_API_BASE,
  withCredentials: true,
  timeout: 10000
});
