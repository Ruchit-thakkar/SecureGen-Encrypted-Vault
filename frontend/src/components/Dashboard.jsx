import React, { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";
import {
  ShieldCheck,
  ShieldAlert,
  Key,
  Activity,
  Plus,
  Zap,
  Download,
  Trash2,
  RefreshCw,
  LogOut,
  Calendar,
  User,
  Lock,
} from "lucide-react";
import toast from "react-hot-toast";

const HAPTIC_PRESS =
  "active:scale-[0.96] transition-transform duration-200 ease-out cursor-pointer select-none";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [vaultData, setVaultData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // 🕒 Greeting Logic
  const timeOfDay = useMemo(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  }, []);

  // 🔄 Fetch Real Data
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await api.get("/vault/all");
        if (res.data.success) {
          setVaultData(res.data.data);
        }
      } catch (error) {
        toast.error("Failed to load vault data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  // 📊 Calculate Stats
  const stats = useMemo(() => {
    const total = vaultData.length;
    const getStrength = (pwd) => {
      if (!pwd) return 0;
      let s = 0;
      if (pwd.length > 8) s++;
      if (pwd.length > 12) s++;
      if (/[A-Z]/.test(pwd)) s++;
      if (/[0-9]/.test(pwd)) s++;
      if (/[^A-Za-z0-9]/.test(pwd)) s++;
      return s;
    };

    const strong = vaultData.filter((i) => getStrength(i.password) >= 4).length;
    const weak = vaultData.filter((i) => getStrength(i.password) <= 2).length;
    const score = total === 0 ? 0 : Math.round((strong / total) * 100);

    return { total, strong, weak, score };
  }, [vaultData]);

  // 🚀 Actions
  const handleLogout = async () => {
    try {
      logout();
      navigate("/login");
      toast.success("Logged out safely", {
        icon: "👋",
        style: { borderRadius: "12px", background: "#333", color: "#fff" },
      });
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  const handleSync = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/vault/all");
      if (res.data.success) {
        setVaultData(res.data.data);
        toast.success("Vault Synced Successfully", { icon: "✨" });
      }
    } catch (err) {
      toast.error("Sync Failed");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-indigo-600 dark:border-teal-400"></div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* ==========================
          1️⃣ HERO SECTION (Vibrant Redesign)
      ========================== */}
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
        {/* Colorful Glowing Orbs (Visible mostly in Light Mode) */}
        <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:hidden pointer-events-none animate-pulse duration-1000"></div>
        <div className="absolute -bottom-10 left-40 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 dark:hidden pointer-events-none"></div>

        {/* LEFT: Welcome Text */}
        <div className="lg:col-span-2 flex flex-col justify-center space-y-5 relative z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 border border-indigo-100 shadow-sm shadow-indigo-200/50 text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:bg-zinc-900 dark:border-zinc-800 dark:text-teal-400 w-max backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75 dark:bg-teal-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500 dark:bg-teal-500"></span>
            </span>
            System Online
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1]">
            {timeOfDay},<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-teal-400 dark:to-emerald-400 drop-shadow-sm">
              {user?.fullName?.firstName || user?.name || "Traveler"}
            </span>
          </h1>

          <p className="text-stone-600 dark:text-zinc-400 text-sm md:text-base max-w-md font-bold leading-relaxed">
            Welcome to your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-teal-400 dark:to-emerald-400">
              SecureGen Cloud Dashboard
            </span>
            . All your credentials are encrypted, protected, and accessible
            anywhere.
          </p>
        </div>

        {/* RIGHT: Vibrant User Status Card */}
        <div className="relative group rounded-[2.5rem] p-1.5 bg-gradient-to-br from-blue-300 via-indigo-300 to-purple-300 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-900 shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 dark:shadow-black/60 transition-all duration-500 hover:-translate-y-1">
          {/* Glass Inner Card */}
          <div className="relative h-full w-full bg-white/70 backdrop-blur-2xl rounded-[2.2rem] p-7 dark:bg-zinc-950/90 overflow-hidden">
            {/* Inner Card Abstract Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity dark:from-teal-500 dark:to-emerald-600 dark:opacity-20 pointer-events-none"></div>

            <div className="absolute -top-6 -right-6 text-indigo-500/10 dark:text-teal-500/5 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
              <ShieldCheck size={140} strokeWidth={2} />
            </div>

            <div className="space-y-6 relative z-10">
              {/* User Row */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 dark:from-teal-500 dark:to-emerald-600 dark:shadow-teal-900/50 transform group-hover:scale-105 transition-transform duration-300">
                  <User size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-indigo-500 dark:text-zinc-500 mb-0.5">
                    Logged in as
                  </p>
                  <p className="text-sm font-black text-stone-900 dark:text-white truncate max-w-[140px]">
                    {user?.email || "user@securegen.com"}
                  </p>
                </div>
              </div>

              {/* Date Row */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/80 border-2 border-indigo-50 text-indigo-500 flex items-center justify-center shadow-sm dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-400">
                  <Calendar size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-indigo-500 dark:text-zinc-500 mb-0.5">
                    Last Login
                  </p>
                  <p className="text-sm font-black text-stone-900 dark:text-white">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Bottom Status Row */}
              <div className="pt-5 border-t border-indigo-100/60 dark:border-zinc-800 flex justify-between items-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-teal-500/10 text-[10px] font-black tracking-widest text-emerald-600 dark:text-teal-400 uppercase shadow-sm border border-emerald-100 dark:border-teal-500/20">
                  <Lock size={12} strokeWidth={3} /> Active Session
                </span>
                <span className="text-[10px] font-black text-indigo-400 dark:text-zinc-600 bg-indigo-50/50 dark:bg-zinc-900 px-2.5 py-1.5 rounded-lg border border-indigo-100/50 dark:border-zinc-800">
                  v1.1.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==========================
          2️⃣ STATS OVERVIEW
      ========================== */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        <StatsCard
          label="Total Entries"
          value={stats.total}
          icon={<Key size={22} />}
          color="text-indigo-600 dark:text-indigo-400"
          bg="bg-indigo-100 dark:bg-indigo-500/20"
          border="border-indigo-100 dark:border-indigo-500/20"
        />
        <StatsCard
          label="Strong Passwords"
          value={stats.strong}
          icon={<ShieldCheck size={22} />}
          color="text-emerald-600 dark:text-emerald-400"
          bg="bg-emerald-100 dark:bg-emerald-500/20"
          border="border-emerald-100 dark:border-emerald-500/20"
        />
        <StatsCard
          label="Weak Passwords"
          value={stats.weak}
          icon={<ShieldAlert size={22} />}
          color="text-rose-600 dark:text-rose-400"
          bg="bg-rose-100 dark:bg-rose-500/20"
          border="border-rose-100 dark:border-rose-500/20"
        />
        <StatsCard
          label="Security Score"
          value={`${stats.score}%`}
          icon={<Activity size={22} />}
          color={
            stats.score > 70
              ? "text-indigo-600 dark:text-teal-400"
              : "text-amber-600 dark:text-amber-400"
          }
          bg={
            stats.score > 70
              ? "bg-indigo-100 dark:bg-teal-500/20"
              : "bg-amber-100 dark:bg-amber-500/20"
          }
          border={
            stats.score > 70
              ? "border-indigo-100 dark:border-teal-500/20"
              : "border-amber-100 dark:border-amber-500/20"
          }
        />
      </div>

      {/* ==========================
          3️⃣ QUICK ACTIONS PANEL
      ========================== */}
      <div>
        <h3 className="text-[11px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-zinc-500 mb-4 px-1">
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <ActionCard
            icon={<Plus size={26} strokeWidth={2.5} />}
            title="Add Entry"
            desc="Save new credentials"
            onClick={() => navigate("/vault", { state: { openAdd: true } })}
            primary
          />
          <ActionCard
            icon={<Zap size={26} />}
            title="Generator"
            desc="Create strong pass"
            onClick={() => navigate("/generator")}
          />
          <ActionCard
            icon={<RefreshCw size={26} />}
            title="Sync Vault"
            desc="Fetch latest data"
            onClick={() => {
              navigate("/vault");
              handleSync();
            }}
          />
          <ActionCard
            icon={<Download size={26} />}
            title="Import"
            desc="Restore from JSON"
            onClick={() => navigate("/vault")}
          />
          <ActionCard
            icon={<Trash2 size={26} />}
            title="Clean Up"
            desc="Manage weak items"
            onClick={() => navigate("/vault", { state: { filter: "Weak" } })}
          />
          <ActionCard
            icon={<LogOut size={26} />}
            title="Logout"
            desc="End session safely"
            onClick={handleLogout}
            danger
          />
        </div>
      </div>
    </div>
  );
}

// --- REDESIGNED SUBCOMPONENTS ---

function StatsCard({ label, value, icon, color, bg, border }) {
  return (
    <div
      className={`relative overflow-hidden p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-zinc-900/40 ${border} shadow-sm dark:shadow-none hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:border-zinc-700`}
    >
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${bg} ${color}`}
      >
        {icon}
      </div>
      <p className="text-3xl font-black text-stone-900 dark:text-white tracking-tight mb-1">
        {value}
      </p>
      <p className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function ActionCard({ icon, title, desc, onClick, primary, danger }) {
  return (
    <button
      onClick={onClick}
      className={`group relative p-5 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between h-36 ${HAPTIC_PRESS}
        ${
          primary
            ? "bg-gradient-to-br from-indigo-600 to-purple-600 border-transparent text-white shadow-xl shadow-purple-500/20 dark:from-teal-500 dark:to-emerald-600 dark:shadow-teal-900/40 hover:from-indigo-700 hover:to-purple-700 dark:hover:from-teal-400 dark:hover:to-emerald-500"
            : danger
              ? "bg-rose-50/50 border-rose-100 text-rose-600 hover:bg-rose-100 hover:border-rose-200 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-rose-400 dark:hover:bg-rose-900/20 dark:hover:border-rose-800"
              : "bg-white border-indigo-50/50 shadow-sm shadow-indigo-100/20 hover:border-indigo-200 hover:shadow-md hover:-translate-y-0.5 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-zinc-200 dark:hover:border-teal-500/50 dark:hover:bg-teal-500/10"
        }
      `}
    >
      <div
        className={`transition-transform duration-300 group-hover:scale-110 ${primary ? "text-white dark:text-zinc-950" : danger ? "text-rose-500" : "text-indigo-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-teal-400"}`}
      >
        {icon}
      </div>
      <div>
        <p
          className={`font-black text-[15px] tracking-wide mb-1 ${primary ? "text-white dark:text-zinc-950" : ""}`}
        >
          {title}
        </p>
        <p
          className={`text-[10px] font-bold uppercase tracking-widest ${primary ? "text-indigo-200 dark:text-teal-900" : "text-stone-400 dark:text-zinc-500"}`}
        >
          {desc}
        </p>
      </div>
    </button>
  );
}
