import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Hexagon, Heart } from "lucide-react";

// Context
import { AuthProvider, useAuth } from "./context/AuthContext";

// Components
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import MainContent from "./components/MainContent";
import GeneratorPage from "./components/GeneratorPage";
import VaultPage from "./components/Vault";

export default function App() {
  // Theme State
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return true;
  });

  // 🚀 Splash Screen State
  const [showSplash, setShowSplash] = useState(true);

  // Theme Effect
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  // ⏱️ 4-Second Splash Screen Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // Exactly 4 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* AuthProvider mounts instantly, checking session in the background */}
      <AuthProvider>
        {/* ==========================================
            🟢 GLOBAL SPLASH SCREEN (Shows for 4s)
        ========================================== */}
        {showSplash ? (
          <div className="relative min-h-screen flex flex-col items-center justify-center bg-stone-50 dark:bg-zinc-950 transition-colors duration-700 z-[9999]">
            {/* Background glow effects for loader */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-teal-500/10 blur-[100px] rounded-full animate-pulse-slow pointer-events-none"></div>
            <GlobalLoader isDark={isDark} />
          </div>
        ) : (
          /* ==========================================
              🔵 MAIN APP CONTENT (Shows after 4s)
          ========================================== */
          <div className="relative min-h-screen flex flex-col transition-colors duration-700 font-sans selection:bg-indigo-500 selection:text-white bg-stone-50 text-stone-900 dark:bg-zinc-950 dark:text-zinc-100 animate-in fade-in zoom-in-95 duration-1000">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none opacity-40 dark:opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[100px] opacity-30 bg-indigo-300 mix-blend-multiply dark:bg-teal-900/40 dark:mix-blend-normal animate-pulse-slow"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 bg-orange-200 mix-blend-multiply dark:bg-violet-900/30 dark:mix-blend-normal animate-pulse-slow"></div>
            </div>

            <Toaster position="bottom-center" />

            <Navbar isDark={isDark} setIsDark={setIsDark} />

            {/* Content Area */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 pt-32 pb-6 relative z-10">
              <Routes>
                <Route path="/" element={<HomeHandler />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route
                  path="/login"
                  element={
                    <PublicOnly>
                      <Login />
                    </PublicOnly>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PublicOnly>
                      <Register />
                    </PublicOnly>
                  }
                />

                <Route
                  path="/generator"
                  element={
                    <Protected>
                      <GeneratorPage />
                    </Protected>
                  }
                />
                <Route
                  path="/vault"
                  element={
                    <Protected>
                      <VaultPage />
                    </Protected>
                  }
                />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </div>

            {/* Footer */}
            {/* ==========================================
    FOOTER SECTION
========================================== */}
            <footer className="relative z-10 w-full mt-auto border-t border-stone-200/40 dark:border-zinc-800/40 bg-white/30 dark:bg-zinc-950/30 backdrop-blur-xl py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-5">
                {/* Brand & Tagline */}
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-3">
                    {/* Theme-aware Logo with Fallback */}
                    <img
                      src={isDark ? "/logo1.png" : "/logo2.png"}
                      alt="SecureGen Logo"
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    {/* Fallback Icon (initially hidden) */}
                    <div style={{ display: "none" }}>
                      <Hexagon
                        size={20}
                        strokeWidth={2.5}
                        className="text-indigo-600 dark:text-teal-400"
                      />
                    </div>

                    <span className="text-sm font-black tracking-widest uppercase text-stone-900 dark:text-white">
                      SecureGen
                    </span>
                  </div>
                  <p className="text-xs font-bold text-stone-500 dark:text-zinc-500">
                    Military-grade encryption. Zero-knowledge architecture.
                  </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-6 text-xs font-extrabold text-stone-400 dark:text-zinc-600 uppercase tracking-wider">
                  <Link
                    to="/about"
                    className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                  >
                    Support
                  </Link>
                </div>

                {/* Divider */}
                <div className="w-16 h-0.5 rounded-full bg-stone-200 dark:bg-zinc-800"></div>

                {/* Copyright & Maker Credit */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-xs font-bold text-stone-500 dark:text-zinc-500">
                  <p>
                    &copy; {new Date().getFullYear()} SecureGen. All rights
                    reserved.
                  </p>

                  <div className="hidden md:block w-1 h-1 rounded-full bg-stone-300 dark:bg-zinc-700"></div>

                  <p className="flex items-center gap-1.5">
                    Crafted with{" "}
                    <Heart
                      size={12}
                      className="text-rose-500 fill-rose-500 animate-pulse"
                    />{" "}
                    by{" "}
                    <a
                      href="https://github.com/Ruchit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-800 dark:text-zinc-200 hover:text-indigo-600 dark:hover:text-teal-400 transition-colors"
                    >
                      Ruchit
                    </a>{" "}
                    <span className="opacity-60 bg-stone-200 dark:bg-zinc-800 px-2 py-0.5 rounded-md text-[10px] tracking-wider">
                      DevNex
                    </span>
                  </p>
                </div>
              </div>
            </footer>
          </div>
        )}
      </AuthProvider>
    </BrowserRouter>
  );
}

// ==========================================
// 🧩 HELPER COMPONENTS
// ==========================================

// 🚀 REUSABLE GLOBAL LOADER (Using Custom Logos)
function GlobalLoader({ isDark }) {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in zoom-in duration-700 relative z-10">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-indigo-500 dark:bg-teal-500 blur-2xl opacity-40 animate-pulse"></div>
        <div className="relative p-6 rounded-[2rem] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-stone-100 dark:border-zinc-800 shadow-2xl flex items-center justify-center">
          {/* 👇 Using your Custom Logos here */}
          {!logoError ? (
            <img
              src={isDark ? "/logo1.png" : "/logo2.png"}
              alt="SecureGen Loading"
              onError={() => setLogoError(true)}
              className="w-20 h-20 object-contain drop-shadow-lg animate-[pulse_1.5s_ease-in-out_infinite]"
            />
          ) : (
            <Hexagon
              size={80}
              strokeWidth={1.5}
              className="text-indigo-600 dark:text-teal-400 animate-[spin_3s_linear_infinite]"
            />
          )}
        </div>
      </div>
      <h1 className="text-3xl font-black tracking-widest uppercase mb-2 text-stone-900 dark:text-white">
        SecureGen
      </h1>
      <div className="flex items-center gap-2 mt-2">
        <div
          className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-500 animate-bounce"
          style={{ animationDelay: "0ms" }}
        ></div>
        <div
          className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-500 animate-bounce"
          style={{ animationDelay: "150ms" }}
        ></div>
        <div
          className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-teal-500 animate-bounce"
          style={{ animationDelay: "300ms" }}
        ></div>
      </div>
    </div>
  );
}

// 1. Decides whether to show Landing Page or Dashboard
function HomeHandler() {
  const { user, loading } = useAuth();
  if (loading) return null; // Let the 4s splash screen cover the loading time
  return user ? <Dashboard /> : <Home />;
}

// 2. Redirects logged-in users away from Login/Register pages
function PublicOnly({ children }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (user) return <Navigate to="/" replace />;
  return children;
}
