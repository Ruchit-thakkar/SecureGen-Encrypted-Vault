import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  Server,
  Database,
  Code2,
  GitBranch,
  Layers,
  CheckCircle2,
  XCircle,
  User,
  Terminal,
  Hexagon,
} from "lucide-react";

const HAPTIC_PRESS =
  "active:scale-[0.97] transition-transform duration-200 ease-out";

export default function AboutPage({ isDark }) {
  const [logoError, setLogoError] = useState(false); // For custom logo fallback

  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
      {/* Global Animated Background Mesh */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 dark:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite_2s]"></div>
      </div>

      {/* ==========================================
          1️⃣ HERO SECTION
      ========================================== */}
      <section className="relative w-full max-w-5xl px-6 py-24 md:py-32 text-center z-10">
        <div className="relative inline-flex justify-center mb-6">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-indigo-500/20 dark:bg-teal-500/20 blur-2xl rounded-full animate-pulse"></div>

          {/* Logo Container */}
          <div className="relative p-5 bg-white dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 rounded-3xl shadow-xl shadow-indigo-900/10 dark:shadow-black/50 transform rotate-6 hover:rotate-0 transition-transform duration-500">
            {/* 🚀 Using logo1 and logo2 here */}
            {!logoError ? (
              <>
                {/* Dark Mode Logo */}
                <img
                  src="/logo1.png"
                  alt="SecureGen Logo"
                  onError={() => setLogoError(true)}
                  className="hidden dark:block w-15 h-15 object-contain drop-shadow-md"
                />
                {/* Light Mode Logo */}
                <img
                  src="/logo2.png"
                  alt="SecureGen Logo"
                  onError={() => setLogoError(true)}
                  className="block dark:hidden w-15 h-15 object-contain drop-shadow-md"
                />
              </>
            ) : (
              /* Fallback Icon */
              <Hexagon
                size={40}
                strokeWidth={2}
                className="text-indigo-600 dark:text-teal-400 fill-indigo-50 dark:fill-teal-500/10"
              />
            )}
            {/* Fallback Hexagon (Hidden unless image fails) */}
            <div style={{ display: "none" }}>
              <Hexagon
                size={64}
                strokeWidth={2}
                className="text-indigo-600 dark:text-teal-400 fill-indigo-50 dark:fill-teal-500/10"
              />
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1] mb-6">
          Security Without <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-500 drop-shadow-sm">
            Compromise.
          </span>
        </h1>

        <p className="text-lg md:text-xl font-bold text-stone-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          SecureGen eliminates insecure browser storage, replacing it with a
          beautifully designed, military-grade encrypted cloud vault.
        </p>
      </section>
      {/* ==========================================
          2️⃣ THE PROBLEM VS SOLUTION
      ========================================== */}
      <section className="w-full max-w-6xl px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* The Problem (Glassmorphism) */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-rose-100 dark:border-rose-900/30 shadow-2xl shadow-rose-900/5 relative overflow-hidden group">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-400/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-rose-400/30 transition-colors"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-4 bg-rose-100 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 rounded-2xl shadow-inner">
              <XCircle size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">
              The Problem
            </h2>
          </div>
          <p className="text-stone-600 dark:text-zinc-400 mb-8 font-semibold text-lg relative z-10">
            Traditional web tools rely on{" "}
            <strong className="text-rose-600 dark:text-rose-400">
              Local Storage
            </strong>
            , leaving you exposed:
          </p>
          <ul className="space-y-4 relative z-10">
            <ProblemItem text="Browser storage allows easy plaintext inspection." />
            <ProblemItem text="No mechanism for secure, automated session expiration." />
            <ProblemItem text="Highly vulnerable to Cross-Site Scripting (XSS)." />
            <ProblemItem text="Lacks modern cryptographic encryption standards." />
          </ul>
        </div>

        {/* The Solution (Glassmorphism) */}
        <div className="p-8 md:p-10 rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-2xl shadow-emerald-900/5 relative overflow-hidden group">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-emerald-400/30 transition-colors"></div>
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-4 bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 rounded-2xl shadow-inner">
              <CheckCircle2 size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">
              Our Solution
            </h2>
          </div>
          <p className="text-stone-600 dark:text-zinc-400 mb-8 font-semibold text-lg relative z-10">
            SecureGen adopts a{" "}
            <strong className="text-emerald-600 dark:text-emerald-400">
              Zero-Trust Architecture
            </strong>{" "}
            via the cloud:
          </p>
          <ul className="space-y-4 relative z-10">
            <SolutionItem text="End-to-end AES-256 encrypted database vault." />
            <SolutionItem text="Strict HttpOnly Cookies eradicate XSS token theft." />
            <SolutionItem text="JWT-based stateless, expirable authentication." />
            <SolutionItem text="Backend routes locked behind validation middleware." />
          </ul>
        </div>
      </section>

      {/* ==========================================
          3️⃣ SECURITY PHILOSOPHY (Dark Premium Section)
      ========================================== */}
      <section className="w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-black  py-32 my-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1 space-y-8">
              <div className="text-white inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300">
                <ShieldCheck size={16} strokeWidth={2.5} />
                <span className="  text-[11px] font-black uppercase tracking-widest">
                  Core Philosophy
                </span>
              </div>
              <h2 className="text-5xl font-black leading-tight tracking-tight">
                Security First. <br />
                <span className="text-indigo-400">Always.</span>
              </h2>
              <p className=" text-lg leading-relaxed font-medium max-w-xl">
                We believe security isn't a feature—it's the foundation. Every
                line of code in SecureGen is written assuming the network is
                hostile.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
                <PhilosophyCard
                  icon={<Lock />}
                  title="AES-256"
                  desc="Military-grade cipher."
                />
                <PhilosophyCard
                  icon={<Server />}
                  title="Bcrypt Hashing"
                  desc="Irreversible password hashing."
                />
                <PhilosophyCard
                  icon={<Terminal />}
                  title="Strict API"
                  desc="Middleware validated endpoints."
                />
                <PhilosophyCard
                  icon={<Layers />}
                  title="No Local Trace"
                  desc="Zero plaintext storage."
                />
              </div>
            </div>

            <div className="flex-1 flex justify-center relative w-full max-w-md">
              <div className="absolute inset-0 bg-indigo-500/30 blur-[100px] rounded-full animate-pulse"></div>
              <div className="relative z-10 w-full aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] flex items-center justify-center shadow-2xl shadow-black/50 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <ShieldCheck
                  size={160}
                  strokeWidth={1.5}
                  className=" drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          4️⃣ TECHNOLOGY STACK
      ========================================== */}
      <section className="w-full max-w-6xl px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-stone-900 dark:text-white mb-4 tracking-tight">
            Built on Modern Architecture
          </h2>
          <p className="text-stone-500 dark:text-zinc-400 font-bold text-lg">
            Transparency is key to trust. Here is what powers SecureGen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechCard
            icon={<Code2 />}
            title="React & Vite"
            desc="Fast, component-based frontend rendering."
          />
          <TechCard
            icon={<Server />}
            title="Node & Express"
            desc="Robust, scalable backend API infrastructure."
          />
          <TechCard
            icon={<Database />}
            title="MongoDB Atlas"
            desc="Flexible, document-based cloud storage."
          />
          <TechCard
            icon={<Lock />}
            title="JWT & Bcrypt"
            desc="Industry standard auth & hashing protocols."
          />
        </div>
      </section>

      {/* ==========================================
          5️⃣ CTA SECTION
      ========================================== */}
      <section className="w-full max-w-5xl px-6 pb-32 relative z-10">
        <div className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-teal-600 dark:via-emerald-600 dark:to-cyan-600 text-center rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-purple-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Ready to Protect Your <br /> Digital Identity?
            </h2>
            <p className="text-white/80 font-bold mb-10 text-lg md:text-xl max-w-2xl mx-auto">
              Join the secure, encrypted future of password management.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link
                to="/register"
                className={`px-10 py-4 bg-white text-indigo-900 dark:text-teal-900 rounded-2xl font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all ${HAPTIC_PRESS}`}
              >
                Create Account
              </Link>
              <Link
                to="/login"
                className={`px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl font-black text-lg hover:bg-white/10 transition-colors ${HAPTIC_PRESS}`}
              >
                Login to Vault
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ==========================================
// 🧩 SUB-COMPONENTS
// ==========================================

function ProblemItem({ text }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1.5 min-w-[8px] h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]"></div>
      <span className="text-[15px] font-bold text-stone-700 dark:text-zinc-300 leading-snug">
        {text}
      </span>
    </li>
  );
}

function SolutionItem({ text }) {
  return (
    <li className="flex items-start gap-4">
      <div className="mt-1.5 min-w-[8px] h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
      <span className="text-[15px] font-bold text-stone-700 dark:text-zinc-300 leading-snug">
        {text}
      </span>
    </li>
  );
}

function PhilosophyCard({ icon, title, desc }) {
  return (
    <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group">
      <div className="mb-4 bg-indigo-500/20 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 24, strokeWidth: 2 })}
      </div>
      <h3 className="font-black  mb-1.5 text-lg tracking-wide">{title}</h3>
      <p className="text-sm font-medium leading-relaxed">{desc}</p>
    </div>
  );
}

function TechCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white dark:border-zinc-800 shadow-xl shadow-stone-200/50 dark:shadow-none hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group">
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-800 text-indigo-600 dark:text-teal-400 shadow-inner group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 32, strokeWidth: 2 })}
      </div>
      <h3 className="font-black text-xl text-stone-900 dark:text-white mb-3 tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-bold text-stone-500 dark:text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
