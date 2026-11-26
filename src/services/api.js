import axios from "axios";

const api = axios.create({
  baseURL: " https://electronics-backend-qmi3.onrender.com"
});

export default api;