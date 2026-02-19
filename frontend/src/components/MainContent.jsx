import React, { useState, useEffect } from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import { Zap, LayoutGrid } from "lucide-react";
import toast from "react-hot-toast";

// 👇 IMPORT THE GENERATOR PAGE HERE
import GeneratorPage from "./GeneratorPage";
import VaultPage from "./Vault";

const HAPTIC_PRESS =
  "active:scale-[0.96] transition-transform duration-100 ease-in-out cursor-pointer select-none";

export default function MainContent({
  globalGeneratedPassword,
  setGlobalGeneratedPassword,
}) {
  const [forceLock, setForceLock] = useState(false);

  // Shortcut Logic
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "l") {
        e.preventDefault();
        setForceLock((prev) => !prev);
        toast("Vault Locking...", { icon: "🔒" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="w-full max-w-md animate-in fade-in zoom-in duration-300">
      {/* TABS */}
      <div className="flex p-1.5 rounded-2xl mb-8 relative border backdrop-blur-md shadow-sm transition-colors duration-500 bg-white/60 border-stone-200 dark:bg-zinc-900/60 dark:border-white/5">
        <NavLink
          to="/generator"
          className={({ isActive }) =>
            `flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${HAPTIC_PRESS} ${
              isActive
                ? "bg-white text-indigo-600 shadow-md shadow-stone-200/50 dark:bg-zinc-800 dark:text-teal-400 dark:shadow-none"
                : "text-stone-500 hover:text-stone-900 dark:text-zinc-500 dark:hover:text-zinc-300"
            }`
          }
        >
          <Zap size={16} /> Generator
        </NavLink>
        <NavLink
          to="/vault"
          className={({ isActive }) =>
            `flex-1 py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 ${HAPTIC_PRESS} ${
              isActive
                ? "bg-white text-indigo-600 shadow-md shadow-stone-200/50 dark:bg-zinc-800 dark:text-teal-400 dark:shadow-none"
                : "text-stone-500 hover:text-stone-900 dark:text-zinc-500 dark:hover:text-zinc-300"
            }`
          }
        >
          <LayoutGrid size={16} /> Vault
        </NavLink>
      </div>

      {/* CARD CONTENT */}
      <div className="relative overflow-hidden rounded-[2rem] border transition-all duration-500 shadow-2xl bg-white border-stone-100 shadow-stone-200/50 dark:bg-zinc-900/80 dark:border-zinc-800 dark:shadow-black/80">
        <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 dark:from-teal-500 dark:via-cyan-500 dark:to-blue-600" />
        <div className="p-6 md:p-8">
          <Routes>
            {/* 👇 ROUTE FOR GENERATOR */}
            <Route
              path="/generator"
              element={
                <GeneratorPage
                  setGlobalGeneratedPassword={setGlobalGeneratedPassword}
                />
              }
            />
            {/* ROUTE FOR VAULT */}
            <Route
              path="/vault"
              element={<VaultPage forceLockTrigger={forceLock} />}
            />
            {/* DEFAULT REDIRECT */}
            <Route path="*" element={<Navigate to="/generator" replace />} />
          </Routes>
        </div>
      </div>

      <div className="flex justify-between mt-8 opacity-50 px-4">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-zinc-600">
          <span className="font-mono">⌘+L</span> to Lock
        </p>
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400 dark:text-zinc-600">
          Encrypted Storage
        </p>
      </div>
    </div>
  );
}
