import axios from "axios";

const token = localStorage.getItem("token");

const Api = axios.create({
  baseURL: "http://localhost:8000/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
});

export default Api;
