import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/",
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
