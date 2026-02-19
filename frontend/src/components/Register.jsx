import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Mail, Lock, User, Phone, Zap, ShieldCheck } from "lucide-react";

const HAPTIC_PRESS =
  "active:scale-[0.97] transition-transform duration-200 ease-out";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });
  const { register } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = {
      fullName: { firstName: formData.firstName, lastName: formData.lastName },
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    };
    const success = await register(payload);
    if (success) navigate("/login");
    setLoading(false);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="w-full max-w-md mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 relative z-10 pt-4 pb-10">
      {/* Abstract Animated Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg max-h-lg pointer-events-none dark:hidden">
        <div className="absolute top-0 left-10 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite]"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-400/30 rounded-full mix-blend-multiply filter blur-[80px] animate-[blob_7s_infinite_4s]"></div>
      </div>

      <div className="text-center mb-10 relative z-10">
        <div className="relative inline-flex justify-center mb-6">
          <div className="absolute inset-0 bg-purple-500/20 dark:bg-emerald-500/20 blur-xl rounded-full animate-pulse"></div>
          <div className="relative p-4 bg-white dark:bg-zinc-900 border border-purple-100 dark:border-zinc-800 rounded-3xl shadow-xl shadow-purple-900/10 dark:shadow-black/50 transform rotate-6 hover:rotate-0 transition-transform duration-500">
            <ShieldCheck
              size={40}
              strokeWidth={2}
              className="text-purple-600 dark:text-emerald-400"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-black mb-3 text-stone-900 dark:text-white tracking-tight leading-tight">
          Join <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-emerald-400 dark:to-cyan-400 drop-shadow-sm">
            SecureGen
          </span>
        </h2>
        <p className="text-purple-950/60 dark:text-zinc-400 font-extrabold text-sm uppercase tracking-widest">
          Your digital life, protected.
        </p>
      </div>

      {/* Main Glass Card */}
      <div className="relative overflow-hidden rounded-[2.5rem] border transition-all duration-500 shadow-2xl shadow-purple-900/10 bg-white/70 backdrop-blur-2xl border-white dark:bg-zinc-900/70 dark:border-zinc-800/80 dark:shadow-black/80">
        <div className="h-2 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 dark:from-emerald-400 dark:via-cyan-500 dark:to-blue-600" />

        <div className="p-8 md:p-10 space-y-7">
          <a
            href="http://localhost:3000/api/auth/google"
            className={`w-full flex justify-center items-center gap-3 py-4 px-4 bg-white dark:bg-zinc-950 border-2 border-purple-50 dark:border-zinc-800/80 text-stone-700 dark:text-zinc-200 rounded-2xl font-black hover:border-purple-100 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:border-zinc-700 transition-all duration-300 ${HAPTIC_PRESS}`}
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign up with Google
          </a>

          <div className="flex items-center w-full">
            <div className="flex-1 border-t-2 border-purple-50 dark:border-zinc-800"></div>
            <span className="px-4 text-[10px] font-black uppercase tracking-widest text-purple-300 dark:text-zinc-600">
              Or email
            </span>
            <div className="flex-1 border-t-2 border-purple-50 dark:border-zinc-800"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative group">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  className="peer w-full px-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-5 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text"
                >
                  First Name
                </label>
              </div>
              <div className="relative group">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder=" "
                  required
                  onChange={handleChange}
                  className="peer w-full px-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-5 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative group">
              <Mail
                className="absolute left-5 top-4 text-purple-300 dark:text-zinc-600 group-focus-within:text-purple-600 dark:group-focus-within:text-emerald-400 transition-colors z-10"
                size={20}
              />
              <input
                id="email"
                name="email"
                type="email"
                placeholder=" "
                required
                onChange={handleChange}
                className="peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
              />
              <label
                htmlFor="email"
                className="absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text"
              >
                Email Address
              </label>
            </div>

            <div className="relative group">
              <Phone
                className="absolute left-5 top-4 text-purple-300 dark:text-zinc-600 group-focus-within:text-purple-600 dark:group-focus-within:text-emerald-400 transition-colors z-10"
                size={20}
              />
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder=" "
                onChange={handleChange}
                className="peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
              />
              <label
                htmlFor="phone"
                className="absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text"
              >
                Phone Number (Optional)
              </label>
            </div>

            <div className="relative group">
              <Lock
                className="absolute left-5 top-4 text-purple-300 dark:text-zinc-600 group-focus-within:text-purple-600 dark:group-focus-within:text-emerald-400 transition-colors z-10"
                size={20}
              />
              <input
                id="password"
                name="password"
                type="password"
                placeholder=" "
                required
                onChange={handleChange}
                className="peer w-full pl-12 pr-5 pt-6 pb-2 rounded-2xl bg-purple-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-purple-500 dark:focus:border-emerald-500 outline-none transition-all font-black tracking-widest text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
              />
              <label
                htmlFor="password"
                className="absolute left-12 top-2 text-[10px] font-extrabold uppercase tracking-widest text-purple-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-purple-600 dark:peer-focus:text-emerald-400 cursor-text"
              >
                Create Master Password
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-2xl font-black text-[15px] flex items-center justify-center gap-2 text-white shadow-xl shadow-pink-500/20 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 dark:from-emerald-500 dark:to-cyan-600 dark:hover:from-emerald-400 dark:hover:to-cyan-500 dark:text-zinc-950 mt-6 transition-all duration-300 ${HAPTIC_PRESS} disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {loading ? (
                "Initializing Vault..."
              ) : (
                <>
                  {" "}
                  <Zap size={18} strokeWidth={3} /> Create Account{" "}
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <p className="text-center mt-8 text-[13px] text-stone-500 dark:text-zinc-500 font-bold tracking-wide">
        Already have an account?{" "}
        <Link
          to="/login"
          className="text-purple-600 dark:text-emerald-400 font-black hover:underline transition-colors"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
