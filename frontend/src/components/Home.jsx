import React from "react";
import { Link } from "react-router-dom";
import InstallPWA from "./InstallPWA"; // 👈 Imported the PWA component
import {
  ShieldCheck,
  Lock,
  Zap,
  Database,
  Smartphone,
  CheckCircle2,
  Server,
  FileKey,
  Fingerprint,
  ChevronDown,
  Globe,
  KeyRound,
  EyeOff,
  CloudLightning,
} from "lucide-react";

const HAPTIC_PRESS =
  "active:scale-[0.96] transition-transform duration-200 ease-out";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-700 relative overflow-hidden">
      {/* Global Background Orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 dark:hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-[100px] animate-[blob_10s_infinite_2s]"></div>
      </div>

      {/* ==========================================
          1️⃣ HERO SECTION
      ========================================== */}
      <section className="relative w-full max-w-7xl px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-16 z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-8 text-center lg:text-left relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 dark:bg-zinc-900 border border-indigo-100 dark:border-zinc-800 shadow-sm backdrop-blur-md mx-auto lg:mx-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 dark:text-zinc-400">
              SecureGen v1.1 Live
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-stone-900 dark:text-white leading-[1.1]">
            Secure Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-500 drop-shadow-sm">
              Digital Life
            </span>{" "}
            <br /> in One Place.
          </h1>

          <p className="text-lg md:text-xl font-bold text-stone-500 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Generate, store, and protect passwords with military-grade AES-256
            encryption.
            <span className="text-indigo-600 dark:text-teal-400">
              {" "}
              Zero browser storage. 100% cloud secure.
            </span>
          </p>

          {/* CTA Buttons + PWA Install */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <Link
              to="/register"
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-lg text-white bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-xl text-center ${HAPTIC_PRESS}`}
            >
              Get Started Free
            </Link>

            {/* 🚀 Inserted the Custom PWA Button Here */}
            <div className="w-full sm:w-auto">
              <InstallPWA />
            </div>

            <Link
              to="/login"
              className={`w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-lg text-stone-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 border-2 border-indigo-50 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-zinc-700 hover:shadow-lg text-center transition-all ${HAPTIC_PRESS}`}
            >
              Login to Vault
            </Link>
          </div>
        </div>

        {/* Right Content: Floating Glass Mockup */}
        <div className="flex-1 w-full max-w-lg relative perspective-1000 group">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 dark:from-teal-500 dark:to-emerald-500 blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 -z-10 rounded-full"></div>

          <div className="relative z-10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 dark:border-zinc-700/50 shadow-2xl p-6 transform rotate-y-12 rotate-x-6 group-hover:rotate-0 transition-transform duration-700">
            {/* Mockup Header */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-indigo-100/50 dark:border-zinc-800">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <ShieldCheck size={24} strokeWidth={2.5} />
              </div>
              <div className="space-y-2 flex-1">
                <div className="w-1/2 h-3 bg-stone-800 dark:bg-zinc-200 rounded-full"></div>
                <div className="w-1/3 h-2 bg-stone-300 dark:bg-zinc-700 rounded-full"></div>
              </div>
            </div>

            {/* Mockup Vault Items */}
            <div className="space-y-4">
              {[
                {
                  c: "bg-blue-500",
                  i: <Globe size={14} className="text-white" />,
                },
                {
                  c: "bg-emerald-500",
                  i: <Database size={14} className="text-white" />,
                },
                {
                  c: "bg-amber-500",
                  i: <Lock size={14} className="text-white" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/80 dark:bg-zinc-950/80 border border-stone-100 dark:border-zinc-800 shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${item.c} flex items-center justify-center shadow-md`}
                    >
                      {item.i}
                    </div>
                    <div className="space-y-1.5">
                      <div className="w-24 h-2.5 bg-stone-800 dark:bg-zinc-300 rounded-full"></div>
                      <div className="w-16 h-2 bg-stone-300 dark:bg-zinc-700 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700"></div>
                    <div className="w-2 h-2 rounded-full bg-stone-300 dark:bg-zinc-700"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating Password Gen Widget */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-zinc-900 p-5 rounded-3xl shadow-2xl border border-stone-100 dark:border-zinc-800 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700 delay-100">
              <div className="flex items-center gap-3 mb-3">
                <Zap size={16} className="text-amber-500" />
                <span className="text-xs font-black uppercase tracking-widest text-stone-900 dark:text-white">
                  Generator
                </span>
              </div>
              <div className="font-mono text-lg font-bold text-indigo-600 dark:text-teal-400 bg-indigo-50 dark:bg-teal-500/10 px-4 py-2 rounded-xl">
                x9$K#mP2@vL
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          2️⃣ SOCIAL PROOF / STATS
      ========================================== */}
      <section className="w-full bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border-y border-indigo-50 dark:border-zinc-800 py-16 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 divide-x divide-indigo-50 dark:divide-zinc-800">
          <TrustStat
            icon={<Lock />}
            value="AES-256"
            label="End-to-End Encryption"
          />
          <TrustStat
            icon={<CloudLightning />}
            value="Cloud"
            label="Secure DB Storage"
          />
          <TrustStat
            icon={<EyeOff />}
            value="Zero"
            label="Plaintext Visibility"
          />
          <TrustStat
            icon={<CheckCircle2 />}
            value="100%"
            label="Stateless JWT Auth"
          />
        </div>
      </section>

      {/* ==========================================
          3️⃣ FEATURES SECTION
      ========================================== */}
      <section className="w-full max-w-7xl px-6 py-32 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-stone-900 dark:text-white mb-6 tracking-tight">
            Everything you need. <br />{" "}
            <span className="text-indigo-600 dark:text-teal-400">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-stone-500 dark:text-zinc-400 font-bold text-lg max-w-2xl mx-auto">
            We stripped away the bloat and left only military-grade security
            wrapped in a beautiful, lightning-fast interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon={<Server />}
            title="Secure Cloud Vault"
            desc="Passwords are encrypted client-side before being safely stored in our protected cloud database."
            color="text-indigo-600 dark:text-indigo-400"
            bg="bg-indigo-100 dark:bg-indigo-500/20"
          />
          <FeatureCard
            icon={<Zap />}
            title="Smart Generator"
            desc="Create uncrackable passwords instantly with adjustable length and complexity rules."
            color="text-amber-600 dark:text-amber-400"
            bg="bg-amber-100 dark:bg-amber-500/20"
          />
          <FeatureCard
            icon={<Fingerprint />}
            title="Stateless Auth"
            desc="Sessions are secured using strict HttpOnly JSON Web Tokens to prevent XSS attacks."
            color="text-emerald-600 dark:text-emerald-400"
            bg="bg-emerald-100 dark:bg-emerald-500/20"
          />
          <FeatureCard
            icon={<ShieldCheck />}
            title="Zero-Knowledge"
            desc="We never store your master password. We couldn't read your vault even if we wanted to."
            color="text-rose-600 dark:text-rose-400"
            bg="bg-rose-100 dark:bg-rose-500/20"
          />
          <FeatureCard
            icon={<Smartphone />}
            title="PWA Ready"
            desc="Install SecureGen directly to your phone or desktop for a native-like app experience."
            color="text-purple-600 dark:text-purple-400"
            bg="bg-purple-100 dark:bg-purple-500/20"
          />
          <FeatureCard
            icon={<KeyRound />}
            title="JSON Backups"
            desc="Your data is yours. Export an encrypted JSON backup of your vault at any time."
            color="text-blue-600 dark:text-blue-400"
            bg="bg-blue-100 dark:bg-blue-500/20"
          />
        </div>
      </section>

      {/* ==========================================
          4️⃣ SECURITY SECTION (Dark Architecture)
      ========================================== */}
      <section className="w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-indigo-950 to-slate-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-black  py-32 relative overflow-hidden shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-white">
              <ShieldCheck size={16} strokeWidth={2.5} />
              <span className="text-[11px] font-black uppercase tracking-widest">
                Zero-Trust Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Why trust SecureGen?
            </h2>
            <p className="text-lg leading-relaxed font-medium">
              We do not store your raw passwords. We store encrypted hashes.
              Even in the highly unlikely event our database is compromised,
              your data remains a jumbled mess of characters impossible to
              decipher without your key.
            </p>
            <ul className="space-y-5 pt-4">
              <SecurityPoint text="Strict API validation middleware." />
              <SecurityPoint text="Bcrypt hashing for Master Passwords." />
              <SecurityPoint text="AES-256 cipher for Vault Entries." />
            </ul>
          </div>

          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-10 flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full animate-pulse"></div>
              <FileKey
                size={80}
                strokeWidth={1.5}
                className="text-indigo-400 mb-6 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]"
              />
              <h3 className="text-2xl font-black  mb-2">
                Encryption isn't a feature.
              </h3>
              <p className=" font-bold uppercase tracking-widest text-xs">
                It's the foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          5️⃣ PRICING
      ========================================== */}
      <section className="w-full max-w-5xl px-6 py-32 relative z-10">
        <h2 className="text-4xl font-black text-center mb-16 text-stone-900 dark:text-white tracking-tight">
          Simple, Transparent Pricing.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Core Vault"
            price="$0"
            desc="Perfect for individuals."
            features={[
              "Unlimited Passwords",
              "Password Generator",
              "Cloud Sync",
              "PWA Mobile Access",
            ]}
          />
          <PricingCard
            title="Secure Pro"
            price="$5"
            period="/mo"
            desc="For security enthusiasts."
            recommended
            features={[
              "Advanced Security Insights",
              "Priority Support",
              "Encrypted JSON Backups",
              "Early Access Features",
            ]}
          />
        </div>
      </section>

      {/* ==========================================
          6️⃣ FAQ
      ========================================== */}
      <section className="w-full max-w-3xl px-6 pb-32 relative z-10">
        <h2 className="text-3xl font-black text-center mb-12 text-stone-900 dark:text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <FAQItem
            q="Is my data stored in the browser?"
            a="No. Browser local storage is highly vulnerable to XSS attacks. All sensitive data is encrypted and stored securely in our cloud database, and session tokens are locked in HttpOnly cookies."
          />
          <FAQItem
            q="What happens if I lose my Master Password?"
            a="Because we use a Zero-Knowledge architecture, we cannot recover or reset your Master Password. If you lose it, your vault data cannot be decrypted."
          />
          <FAQItem
            q="Can I export my passwords?"
            a="Yes! You can download a structured JSON backup of your entire vault at any time from your dashboard."
          />
        </div>
      </section>

      {/* ==========================================
          7️⃣ FINAL CTA
      ========================================== */}
      <section className="w-full px-6 pb-24 relative z-10">
        <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 dark:from-teal-600 dark:via-emerald-600 dark:to-cyan-600 text-center rounded-[3.5rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-purple-900/20">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Start Protecting Your <br /> Digital Identity Today.
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
              <Link
                to="/register"
                className={`px-10 py-5 bg-white text-indigo-900 dark:text-teal-900 rounded-2xl font-black text-lg shadow-2xl hover:-translate-y-1 transition-all ${HAPTIC_PRESS}`}
              >
                Create Free Account
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

function TrustStat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3 p-4">
      <div className="text-indigo-500 dark:text-teal-400 mb-2 p-4 bg-indigo-50 dark:bg-zinc-800/50 rounded-2xl shadow-inner">
        {React.cloneElement(icon, { size: 28, strokeWidth: 2 })}
      </div>
      <p className="text-3xl font-black text-stone-900 dark:text-white tracking-tight">
        {value}
      </p>
      <p className="text-[11px] font-extrabold uppercase tracking-widest text-stone-400 dark:text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, desc, color, bg }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-xl border border-white dark:border-zinc-800 shadow-xl shadow-stone-200/40 dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className={`mb-6 p-4 rounded-2xl w-fit shadow-inner ${bg} ${color}`}>
        {React.cloneElement(icon, { size: 28, strokeWidth: 2.5 })}
      </div>
      <h3 className="text-2xl font-black mb-3 text-stone-900 dark:text-white tracking-tight">
        {title}
      </h3>
      <p className="text-sm font-bold text-stone-500 dark:text-zinc-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function SecurityPoint({ text }) {
  return (
    <li className="flex items-center gap-4">
      <div className="min-w-[24px] h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shadow-inner">
        <CheckCircle2 size={14} strokeWidth={3} className="text-white" />
      </div>
      <span className="font-bold  tracking-wide">{text}</span>
    </li>
  );
}

function PricingCard({ title, price, period, desc, features, recommended }) {
  return (
    <div
      className={`p-10 rounded-[2.5rem] border-2 relative transition-all hover:-translate-y-1 ${recommended ? "bg-stone-900 text-white border-stone-900 dark:bg-zinc-900 dark:border-zinc-700 shadow-2xl shadow-indigo-900/20" : "bg-white/60 backdrop-blur-xl text-stone-900 border-stone-100 dark:bg-zinc-900/40 dark:text-white dark:border-zinc-800 shadow-xl shadow-stone-200/50 dark:shadow-none"}`}
    >
      {recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-black mb-1">{title}</h3>
      <p
        className={`text-sm font-bold mb-6 ${recommended ? "text-stone-400" : "text-stone-500 dark:text-zinc-400"}`}
      >
        {desc}
      </p>

      <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-stone-200/20 dark:border-zinc-800">
        <span className="text-5xl font-black tracking-tight">{price}</span>
        {period && <span className="font-bold opacity-60">{period}</span>}
      </div>

      <ul className="space-y-4 mb-10">
        {features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-3 text-sm font-bold opacity-90 tracking-wide"
          >
            <CheckCircle2
              size={18}
              strokeWidth={3}
              className={recommended ? "text-indigo-400" : "text-emerald-500"}
            />{" "}
            {f}
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 rounded-2xl font-black text-lg transition-transform active:scale-95 ${recommended ? "bg-white text-stone-900 hover:bg-stone-100 shadow-xl" : "bg-stone-100 text-stone-900 hover:bg-stone-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"}`}
      >
        Choose {title}
      </button>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <details className="group p-6 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-stone-100 dark:border-zinc-800 cursor-pointer shadow-sm hover:shadow-md transition-all">
      <summary className="flex justify-between items-center font-black text-lg text-stone-900 dark:text-zinc-100 list-none tracking-tight">
        {q}
        <div className="p-2 rounded-full bg-stone-100 dark:bg-zinc-800 group-open:bg-indigo-100 dark:group-open:bg-teal-900/30 transition-colors">
          <ChevronDown
            size={18}
            strokeWidth={3}
            className="transition-transform duration-300 group-open:rotate-180 group-open:text-indigo-600 dark:group-open:text-teal-400"
          />
        </div>
      </summary>
      <p className="mt-4 text-sm font-semibold text-stone-500 dark:text-zinc-400 leading-relaxed pr-8">
        {a}
      </p>
    </details>
  );
}
