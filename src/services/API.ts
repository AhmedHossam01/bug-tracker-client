import axios from "axios";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "http://localhost:1337/api",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default API;
