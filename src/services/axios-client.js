import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
