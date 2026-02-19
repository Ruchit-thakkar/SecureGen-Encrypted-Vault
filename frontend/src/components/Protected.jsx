import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Hexagon, GitBranch } from "lucide-react";

// Reuse your existing loading/splash screen design
const LoadingScreen = () => (
  <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-stone-50 dark:bg-zinc-950 text-stone-900 dark:text-white transition-colors duration-700">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 dark:bg-teal-500/20 rounded-full blur-[80px] animate-pulse"></div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-indigo-500 dark:bg-teal-500 blur-xl opacity-30 animate-ping"></div>
        <div className="relative p-6 rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-stone-100 dark:border-zinc-800">
          <Hexagon
            size={48}
            strokeWidth={2}
            className="text-indigo-600 dark:text-teal-500 animate-[spin_4s_linear_infinite]"
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold tracking-[0.2em] uppercase mb-2">
        SecureGen
      </h1>
      <div className="flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full bg-stone-200/50 dark:bg-zinc-800/50 backdrop-blur-sm">
        <GitBranch size={12} className="text-indigo-500 dark:text-teal-500" />
        <span className="text-[10px] font-mono font-bold opacity-60">
          Verifying Session...
        </span>
      </div>
    </div>
  </div>
);

const Protected = ({ children }) => {
  const { user, loading } = useAuth(); // Grabbing loading from context
  const location = useLocation();

  // 1. If backend is checking the cookie, show your awesome loading screen
  if (loading) return <LoadingScreen />;

  // 2. If finished loading and no user, kick them to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />; // 👈 Changed from /auth/login to /login
  }

  // 3. If user exists, let them into the Dashboard/Vault!
  return children;
};

export default Protected;
