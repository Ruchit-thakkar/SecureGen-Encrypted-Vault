import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, ArrowRight, Hexagon } from "lucide-react";

const HAPTIC_PRESS =
  "active:scale-[0.97] transition-transform duration-200 ease-out";

export default function Login({ isDark }) {
  // 👈 FIXED: Added isDark prop
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const success = await login(formData);
    if (success) navigate("/");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10 pt-4">
      {/* Abstract Animated Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg pointer-events-none dark:hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite]"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_4s]"></div>
      </div>

      <div className="text-center mb-10 relative z-10">
        <div className="relative inline-flex justify-center mb-6 group">
          <div className="absolute inset-0 bg-indigo-500/20 dark:bg-teal-500/20 blur-2xl rounded-full animate-pulse group-hover:bg-indigo-500/40 transition-colors duration-500"></div>
          <div className="relative p-4 bg-white/80 backdrop-blur-xl dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-3xl shadow-xl shadow-indigo-900/10 dark:shadow-black/50 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
            {/* Custom Logos with Fallback */}
            {!logoError ? (
              <img
                src={isDark ? "/logo1.png" : "/logo2.png"}
                alt="SecureGen Logo"
                onError={() => setLogoError(true)}
                className="w-10 h-10 object-contain drop-shadow-md"
              />
            ) : (
              <Hexagon
                size={40}
                strokeWidth={2}
                className="text-indigo-600 dark:text-teal-400 fill-indigo-50 dark:fill-teal-500/10"
              />
            )}
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-3 text-stone-900 dark:text-white tracking-tight leading-tight">
          Welcome <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-teal-400 dark:to-emerald-400 drop-shadow-sm">
            Back
          </span>
        </h2>
        <p className="text-indigo-950/60 dark:text-zinc-400 font-extrabold text-sm uppercase tracking-widest">
          Access your secure vault
        </p>
      </div>

      {/* Main Glass Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 shadow-2xl shadow-indigo-900/10 bg-white/70 backdrop-blur-3xl border-white dark:bg-zinc-900/70 dark:border-zinc-800/80 dark:shadow-black/80">
        <div className="h-2 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-teal-400 dark:via-cyan-500 dark:to-emerald-500" />

        <div className="p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Custom Floating Label Input - Email */}
            <div className="relative group">
              <Mail
                className="absolute left-5 top-4 text-indigo-300 dark:text-zinc-600 group-focus-within:text-indigo-600 dark:group-focus-within:text-teal-400 transition-colors z-10"
                size={20}
              />
              <input
                id="email"
                type="email"
                placeholder=" "
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-white/50 dark:bg-zinc-950/50 border-2 border-indigo-50/50 dark:border-zinc-800/50 focus:border-indigo-500 dark:focus:border-teal-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-400 cursor-text"
              >
                Email Address
              </label>
            </div>

            {/* Custom Floating Label Input - Password */}
            <div className="space-y-3">
              <div className="relative group">
                <Lock
                  className="absolute left-5 top-4 text-indigo-300 dark:text-zinc-600 group-focus-within:text-indigo-600 dark:group-focus-within:text-teal-400 transition-colors z-10"
                  size={20}
                />
                <input
                  id="password"
                  type="password"
                  placeholder=" "
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-white/50 dark:bg-zinc-950/50 border-2 border-indigo-50/50 dark:border-zinc-800/50 focus:border-indigo-500 dark:focus:border-teal-500 outline-none transition-all font-black tracking-widest text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                  required
                />
                <label
                  htmlFor="password"
                  className="absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-400 cursor-text"
                >
                  Master Password
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 text-white shadow-xl shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:hover:from-teal-400 dark:hover:to-emerald-500 dark:text-zinc-950 mt-6 transition-all duration-300 ${HAPTIC_PRESS} disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none`}
            >
              {loading ? (
                <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
              ) : (
                <>
                  {" "}
                  Secure Login <ArrowRight size={18} strokeWidth={3} />{" "}
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <p className="text-center mt-8 text-[13px] text-stone-500 dark:text-zinc-500 font-bold tracking-wide">
        New to SecureGen?{" "}
        <Link
          to="/register"
          className="text-indigo-600 dark:text-teal-400 font-black hover:underline transition-colors"
        >
          Create Account
        </Link>
      </p>
    </div>
  );
}
