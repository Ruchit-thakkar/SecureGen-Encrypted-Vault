import React, { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import api from "../utils/api";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1️⃣ CHECK AUTH ON LOAD (Auto Login)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data } = await api.get("/auth/me");
        if (data.success) {
          // 🟢 FIX 1: Changed from data.user to data.data to match backend response!
          setUser(data.data);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // 2️⃣ LOGIN
  const login = async (credentials) => {
    try {
      const { data } = await api.post("/auth/login", credentials);
      if (data.success) {
        setUser(data.data);
        toast.success(data.message);
        return true;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      return false;
    }
  };

  // 3️⃣ REGISTER
  const register = async (userData) => {
    try {
      const { data } = await api.post("/auth/register", userData);
      if (data.success) {
        toast.success("Account created! Please login.");
        return true;
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
      return false;
    }
  };

  // 4️⃣ LOGOUT
  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      setUser(null);
      toast.error("Logout failed");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {/* 🟢 FIX 2: Render children directly! 
          We want the app to render so Protected.jsx can show its custom LoadingScreen. */}
      {children}
    </AuthContext.Provider>
  );
};
