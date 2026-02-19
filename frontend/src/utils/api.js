import axios from "axios";

const api = axios.create({
  // Ensure this points to port 3000 and includes /api
  baseURL: "http://localhost:3000/api",
  withCredentials: true, // 👈 REQUIRED for Auto Login to work
});

export default api;
