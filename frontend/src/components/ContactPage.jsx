import React, { useState } from "react";
import {
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowUpRight,
} from "lucide-react";
import toast from "react-hot-toast";

const HAPTIC_PRESS =
  "active:scale-[0.97] transition-transform duration-200 ease-out";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Support",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent securely.", {
        icon: "🚀",
        style: { borderRadius: "12px", background: "#333", color: "#fff" },
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "General Support",
        message: "",
      });
    }, 1500);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Social Data Configuration
  const socialLinks = [
    {
      title: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "http://www.linkedin.com/in/ruchit-thakkar-38ab37379",
      color: "text-blue-600 dark:text-blue-400",
      bgHover: "group-hover:bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)]",
    },
    {
      title: "X / Twitter",
      icon: <Twitter size={20} />,
      href: "https://x.com/RuchitThakkar19",
      color: "text-stone-800 dark:text-white",
      bgHover: "group-hover:bg-stone-500/10",
      border: "group-hover:border-stone-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(120,113,108,0.3)]",
    },
    {
      title: "Instagram",
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/ruchit1744",
      color: "text-pink-600 dark:text-pink-400",
      bgHover: "group-hover:bg-pink-500/10",
      border: "group-hover:border-pink-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.4)]",
    },
    {
      title: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/Ruchit-thakkar",
      color: "text-purple-600 dark:text-purple-300",
      bgHover: "group-hover:bg-purple-500/10",
      border: "group-hover:border-purple-500/50",
      glow: "group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
      {/* Abstract Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 dark:hidden">
        <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-orange-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite]"></div>
        <div className="absolute top-[30%] right-[10%] w-[30rem] h-[30rem] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite_3s]"></div>
      </div>

      {/* ==========================================
          1️⃣ HERO SECTION
      ========================================== */}
      <section className="relative w-full max-w-5xl px-6 py-20 text-center z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white dark:bg-zinc-900 border border-orange-100 dark:border-zinc-800 shadow-sm mx-auto backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-600 dark:text-zinc-300">
            Support Systems Online
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1] mb-6">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:from-cyan-400 dark:to-blue-500 drop-shadow-sm">
            Touch
          </span>
        </h1>

        <p className="text-lg md:text-xl font-bold text-stone-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Have questions, feedback, or security concerns? Every message is
          handled with strict{" "}
          <span className="text-stone-800 dark:text-white">
            confidentiality and care.
          </span>
        </p>
      </section>

      {/* ==========================================
          2️⃣ CONTACT OPTIONS & FORM GRID
      ========================================== */}
      <section className="w-full max-w-6xl px-6 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-10 relative z-10">
        {/* LEFT COLUMN: Trust Signals & Socials */}
        <div className="lg:col-span-2 space-y-6">
          {/* Trust Signals */}
          <div className="p-8 rounded-[2rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-stone-100 dark:border-zinc-800 shadow-xl shadow-stone-200/50 dark:shadow-none">
            <h3 className="font-black text-stone-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
              Our Commitment
            </h3>
            <ul className="space-y-4">
              <TrustSignal text="End-to-End Encryption" />
              <TrustSignal text="Under 24h Response Time" />
              <TrustSignal text="Strict GDPR Compliance" />
            </ul>
          </div>

          {/* ==========================================
              🚀 SOCIAL GRID (Holographic Keys)
          ========================================== */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-2xl bg-white border border-stone-200 p-5 transition-all duration-500 hover:-translate-y-1 dark:bg-[#12121A] dark:border-white/5 ${item.border} ${item.glow} shadow-lg shadow-stone-200/50 dark:shadow-none`}
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-100/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col justify-between h-full gap-3">
                  <div className="flex justify-between items-start">
                    <div
                      className={`p-2.5 rounded-xl bg-stone-50 dark:bg-white/5 backdrop-blur-md ${item.color} transition-transform duration-300 group-hover:scale-110 ${item.bgHover}`}
                    >
                      {item.icon}
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-stone-300 dark:text-zinc-600 transition-all duration-300 group-hover:text-stone-900 dark:group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                  <span className="text-sm font-bold text-stone-500 dark:text-zinc-400 group-hover:text-stone-900 dark:group-hover:text-white transition-colors">
                    {item.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Form (Glassmorphism) */}
        <div className="lg:col-span-3">
          <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-orange-900/10 dark:shadow-black/50 border border-white dark:border-zinc-800 relative overflow-hidden">
            <div className="h-2 w-full absolute top-0 left-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 dark:from-cyan-400 dark:to-blue-600" />

            <div className="mb-10 mt-2">
              <h2 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">
                Send a Message
              </h2>
              <p className="text-stone-500 dark:text-zinc-400 font-bold mt-2">
                Fill out the form and our team will get back to you securely.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Floating Label Inputs */}
                <div className="relative group">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full px-5 pt-7 pb-3 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-orange-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-orange-600 dark:peer-focus:text-cyan-400 cursor-text"
                  >
                    Full Name
                  </label>
                </div>

                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder=" "
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full px-5 pt-7 pb-3 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-orange-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-5 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-orange-600 dark:peer-focus:text-cyan-400 cursor-text"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white appearance-none cursor-pointer focus:bg-white dark:focus:bg-zinc-900 shadow-inner"
                >
                  <option>General Support</option>
                  <option>Account Issue</option>
                  <option>Security Vulnerability Report</option>
                  <option>Business Inquiry</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-orange-400">
                  <ArrowRight size={16} className="rotate-90" strokeWidth={3} />
                </div>
              </div>

              <div className="relative group">
                <MessageSquare
                  className="absolute left-5 top-5 text-orange-300 dark:text-zinc-600 group-focus-within:text-orange-500 dark:group-focus-within:text-cyan-400 transition-colors z-10"
                  size={20}
                />
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full pl-12 pr-5 py-5 rounded-2xl bg-orange-50/50 dark:bg-zinc-950/50 border-2 border-transparent focus:border-orange-400 dark:focus:border-cyan-500 outline-none transition-all font-bold text-sm text-stone-900 dark:text-white focus:bg-white dark:focus:bg-zinc-900 shadow-inner resize-none custom-scrollbar"
                ></textarea>
              </div>

              <button
                disabled={isSubmitting}
                className={`w-full py-4 rounded-2xl font-black text-[15px] text-white shadow-xl shadow-pink-500/20 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 dark:from-cyan-600 dark:to-blue-600 dark:hover:from-cyan-500 dark:hover:to-blue-500 dark:text-zinc-950 flex items-center justify-center gap-2 mt-4 transition-all duration-300 ${HAPTIC_PRESS} disabled:opacity-70`}
              >
                {isSubmitting ? (
                  <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                ) : (
                  <>
                    {" "}
                    Send Secure Message{" "}
                    <Send size={18} strokeWidth={2.5} />{" "}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 🧩 SUB-COMPONENTS
// ==========================================

function TrustSignal({ text }) {
  return (
    <li className="flex items-center gap-4">
      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center shadow-inner">
        <CheckCircle2 size={16} strokeWidth={3} className="text-emerald-500" />
      </div>
      <span className="font-bold text-[15px] text-stone-700 dark:text-zinc-300 tracking-wide">
        {text}
      </span>
    </li>
  );
}
