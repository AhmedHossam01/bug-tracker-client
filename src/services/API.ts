import axios from "axios";

const Api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: "json",
});

Api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    // @ts-ignore
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

export default Api;
