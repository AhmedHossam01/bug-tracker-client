import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    // @ts-ignore
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

export default api;
