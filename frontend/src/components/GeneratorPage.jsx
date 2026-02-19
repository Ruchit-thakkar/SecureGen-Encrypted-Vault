import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  RefreshCw,
  Save,
  Check,
  Command,
  Fingerprint,
  ShieldCheck,
  Briefcase,
  Landmark,
  Users,
  Box,
  X,
  Sliders,
} from "lucide-react";
import api from "../utils/api";
// Matches your Backend Enum
const CATEGORIES = [
  {
    id: "Social",
    icon: <Users size={18} />,
    color: "text-blue-600 dark:text-blue-400",
    bgActive:
      "bg-blue-100 border-blue-400 dark:bg-blue-500/20 dark:border-blue-500",
    bgInactive:
      "bg-blue-50/50 border-blue-100 dark:bg-zinc-900 dark:border-zinc-800",
  },
  {
    id: "Banking",
    icon: <Landmark size={18} />,
    color: "text-emerald-600 dark:text-emerald-400",
    bgActive:
      "bg-emerald-100 border-emerald-400 dark:bg-emerald-500/20 dark:border-emerald-500",
    bgInactive:
      "bg-emerald-50/50 border-emerald-100 dark:bg-zinc-900 dark:border-zinc-800",
  },
  {
    id: "Work",
    icon: <Briefcase size={18} />,
    color: "text-purple-600 dark:text-purple-400",
    bgActive:
      "bg-purple-100 border-purple-400 dark:bg-purple-500/20 dark:border-purple-500",
    bgInactive:
      "bg-purple-50/50 border-purple-100 dark:bg-zinc-900 dark:border-zinc-800",
  },
  {
    id: "Other",
    icon: <Box size={18} />,
    color: "text-amber-600 dark:text-amber-400",
    bgActive:
      "bg-amber-100 border-amber-400 dark:bg-amber-500/20 dark:border-amber-500",
    bgInactive:
      "bg-amber-50/50 border-amber-100 dark:bg-zinc-900 dark:border-zinc-800",
  },
];

const HAPTIC_PRESS =
  "active:scale-[0.96] transition-transform duration-200 ease-out";

export default function GeneratorPage({ setGlobalGeneratedPassword }) {
  const [length, setLength] = useState(14);
  const [password, setPassword] = useState("");
  const [isComplex, setIsComplex] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isRevealing, setIsRevealing] = useState(false);

  const [saveData, setSaveData] = useState({
    title: "",
    desc: "",
    category: "Other",
  });

  const strength = useMemo(() => {
    let score = 0;
    if (!password) return 0;
    if (password.length > 8) score += 1;
    if (password.length > 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  }, [password]);

  const strengthConfig = {
    0: {
      label: "Too Short",
      color: "from-stone-400 to-stone-500",
      text: "text-stone-500",
      width: "5%",
      shadow: "shadow-none",
    },
    1: {
      label: "Weak",
      color: "from-rose-400 to-rose-600",
      text: "text-rose-600 dark:text-rose-400",
      width: "20%",
      shadow: "shadow-rose-500/40",
    },
    2: {
      label: "Fair",
      color: "from-orange-400 to-orange-600",
      text: "text-orange-600 dark:text-orange-400",
      width: "40%",
      shadow: "shadow-orange-500/40",
    },
    3: {
      label: "Good",
      color: "from-amber-300 to-amber-500",
      text: "text-amber-600 dark:text-amber-400",
      width: "60%",
      shadow: "shadow-amber-500/40",
    },
    4: {
      label: "Strong",
      color: "from-emerald-400 to-emerald-600",
      text: "text-emerald-600 dark:text-emerald-400",
      width: "80%",
      shadow: "shadow-emerald-500/40",
    },
    5: {
      label: "Excellent",
      color:
        "from-indigo-500 to-purple-600 dark:from-teal-400 dark:to-emerald-500",
      text: "text-indigo-600 dark:text-teal-400",
      width: "100%",
      shadow: "shadow-indigo-500/50 dark:shadow-teal-400/40",
    },
  };

  const currentStrength = strengthConfig[strength] || strengthConfig[0];

  const generate = () => {
    setIsRevealing(true);
    const numbers = "0123456789";
    const complex =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*()_+";
    const chars = isComplex ? complex : numbers;
    let result = "";
    for (let i = 0; i < length; i++)
      result += chars.charAt(Math.floor(Math.random() * chars.length));

    setTimeout(() => {
      setPassword(result);
      if (setGlobalGeneratedPassword) setGlobalGeneratedPassword(result);
      setCopied(false);
      setIsRevealing(false);
    }, 150);
  };

  useEffect(() => {
    generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [length, isComplex]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    toast.success("Password Copied", {
      icon: "✨",
      style: { borderRadius: "12px", background: "#333", color: "#fff" },
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = async () => {
    if (!saveData.title) return toast.error("Title is required");

    try {
      const response = await axios.post(
        "https://securegen-encrypted-vault-1.onrender.com/api/vault/add",
        {
          title: saveData.title,
          password: password,
          category: saveData.category,
          description: saveData.desc,
          securityLevel: strength,
        },
        { withCredentials: true },
      );

      if (response.data.success) {
        toast.success("Saved to Cloud Vault");
        setIsSaving(false);
        setSaveData({ title: "", desc: "", category: "Other" });
      }
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.message || "Failed to save entry";
      toast.error(msg);
    }
  };

  return (
    <div className="relative space-y-8 max-w-lg mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* --- PASSWORD DISPLAY CARD --- */}
      <div className="relative group perspective-1000">
        <div
          onClick={copyToClipboard}
          className={`relative overflow-hidden rounded-[2rem] p-8 pb-14 text-center transition-all duration-300 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/80 dark:bg-none dark:bg-zinc-900/60 backdrop-blur-xl border border-indigo-100/60 dark:border-zinc-800/60 shadow-xl shadow-indigo-900/5 dark:shadow-black/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-300/60 dark:hover:border-teal-500/30 cursor-pointer ${HAPTIC_PRESS}`}
        >
          {/* Top Strength Badge */}
          <div className="absolute top-4 inset-x-0 flex justify-center">
            <div
              className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-white dark:bg-zinc-800/80 shadow-sm border border-stone-100 dark:border-zinc-700/50 ${currentStrength.text} transition-colors flex items-center gap-1.5`}
            >
              <ShieldCheck size={14} />
              {currentStrength.label}
            </div>
          </div>

          {/* Password Text */}
          <div
            className={`mt-8 font-mono text-3xl md:text-4xl font-black tracking-widest break-all transition-all duration-500 flex justify-center items-center min-h-[80px] ${
              copied
                ? "text-emerald-500 dark:text-emerald-400 scale-105"
                : "text-indigo-950 dark:text-zinc-100"
            } ${
              isRevealing
                ? "blur-md opacity-0 scale-90 translate-y-2"
                : "blur-0 opacity-100 scale-100 translate-y-0"
            }`}
          >
            {password}
          </div>

          <div
            className={`absolute bottom-4 right-5 flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${
              copied
                ? "text-emerald-500"
                : "text-indigo-400 dark:text-zinc-500 group-hover:text-indigo-600 dark:group-hover:text-teal-400"
            }`}
          >
            {copied ? (
              <Check size={14} strokeWidth={3} />
            ) : (
              <Command size={14} />
            )}
            {copied ? "COPIED" : "CLICK TO COPY"}
          </div>

          {/* Glowing Gradient Strength Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-stone-100 dark:bg-zinc-950">
            <div
              className={`h-full transition-all duration-700 ease-out bg-gradient-to-r ${currentStrength.color} ${currentStrength.shadow}`}
              style={{ width: currentStrength.width }}
            />
          </div>
        </div>
      </div>

      {/* --- CONTROLS --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Complexity Toggle */}
        <div
          onClick={() => setIsComplex(!isComplex)}
          className={`flex justify-between items-center p-5 rounded-3xl border transition-all cursor-pointer bg-white border-indigo-50/50 shadow-sm shadow-indigo-100/20 dark:bg-zinc-900/40 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-zinc-700 ${HAPTIC_PRESS}`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`p-3 rounded-2xl transition-all duration-300 ${
                isComplex
                  ? "bg-gradient-to-br from-indigo-100 to-purple-100 text-indigo-700 dark:from-teal-500/20 dark:to-emerald-500/20 dark:text-teal-400"
                  : "bg-stone-100 text-stone-400 dark:bg-zinc-800 dark:text-zinc-500"
              }`}
            >
              <Fingerprint size={22} />
            </div>
            <div>
              <div className="text-sm font-extrabold text-stone-800 dark:text-zinc-200">
                Complex
              </div>
              <div className="text-[10px] font-bold text-stone-400 dark:text-zinc-500 uppercase tracking-widest">
                {isComplex ? "Symbols & Caps" : "Numbers Only"}
              </div>
            </div>
          </div>

          <div
            className={`w-14 h-8 rounded-full transition-all duration-300 relative border-2 ${
              isComplex
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 border-transparent dark:from-teal-400 dark:to-emerald-500"
                : "bg-stone-200 border-stone-200 dark:bg-zinc-800 dark:border-zinc-800"
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                isComplex ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Length Slider */}
        <div className="p-5 rounded-3xl border transition-colors bg-white border-indigo-50/50 shadow-sm shadow-indigo-100/20 dark:bg-zinc-900/40 dark:border-zinc-800">
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-2 text-xs font-bold text-stone-500 dark:text-zinc-400 uppercase tracking-widest">
              <Sliders size={14} /> Length
            </div>
            <span className="text-sm font-black text-indigo-600 dark:text-teal-400">
              {length}
            </span>
          </div>
          <div className="relative w-full h-2.5 bg-stone-100 dark:bg-zinc-800 rounded-full shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-teal-400 dark:to-emerald-500 rounded-full transition-all duration-150"
              style={{ width: `${((length - 4) / (32 - 4)) * 100}%` }}
            />
            <input
              type="range"
              min="4"
              max="32"
              step="1"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* --- ACTION BUTTONS --- */}
      <div className="flex gap-4">
        <button
          onClick={generate}
          className={`flex-1 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 border-2 bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 hover:border-indigo-200 dark:bg-zinc-900/50 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-white transition-all ${HAPTIC_PRESS}`}
        >
          <RefreshCw
            size={18}
            className={
              isRevealing
                ? "animate-spin text-indigo-500 dark:text-teal-400"
                : ""
            }
          />
          <span className="text-sm">Regenerate</span>
        </button>
        <button
          onClick={() => setIsSaving(true)}
          className={`flex-1 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:hover:from-teal-400 dark:hover:to-emerald-500 dark:shadow-teal-900/40 transition-all ${HAPTIC_PRESS}`}
        >
          <Save size={18} /> <span className="text-sm">Save to Vault</span>
        </button>
      </div>

      {/* --- REDESIGNED SAVE MODAL --- */}
      {isSaving && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end md:justify-center p-2 md:p-6 animate-in fade-in duration-200">
          <div
            className="absolute inset-0 bg-indigo-950/20 dark:bg-black/60 backdrop-blur-md rounded-[2rem] md:rounded-3xl"
            onClick={() => setIsSaving(false)}
          />

          <div className="relative bg-white dark:bg-zinc-950 border border-indigo-50 dark:border-zinc-800 p-6 rounded-[2rem] shadow-2xl animate-in slide-in-from-bottom-8 md:zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black flex items-center gap-2 text-stone-900 dark:text-white">
                <ShieldCheck
                  className="text-indigo-500 dark:text-teal-400"
                  size={24}
                />{" "}
                Add to Vault
              </h3>
              <button
                onClick={() => setIsSaving(false)}
                className="p-2 bg-stone-100 dark:bg-zinc-900 text-stone-400 dark:text-zinc-500 rounded-full hover:bg-rose-50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-6 mb-8">
              <div className="relative">
                <input
                  autoFocus
                  className="peer w-full bg-indigo-50/50 dark:bg-zinc-900/50 border-2 border-indigo-100 dark:border-zinc-800/50 rounded-2xl px-5 pt-7 pb-3 text-sm font-bold text-stone-900 dark:text-white outline-none focus:border-indigo-500 dark:focus:border-teal-500 transition-colors placeholder-transparent"
                  placeholder="Title"
                  id="title"
                  value={saveData.title}
                  onChange={(e) =>
                    setSaveData({ ...saveData, title: e.target.value })
                  }
                />
                <label
                  htmlFor="title"
                  className="absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-500 cursor-text"
                >
                  Entry Title
                </label>
              </div>

              <div>
                <label className="text-[10px] uppercase font-extrabold text-stone-400 dark:text-zinc-500 mb-3 block px-1 tracking-widest">
                  Category
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {CATEGORIES.map((cat) => {
                    const isSelected = saveData.category === cat.id;
                    return (
                      <button
                        key={cat.id}
                        onClick={() =>
                          setSaveData({ ...saveData, category: cat.id })
                        }
                        className={`flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all ${HAPTIC_PRESS} ${
                          isSelected ? cat.bgActive : cat.bgInactive
                        }`}
                      >
                        <div
                          className={`${cat.color} ${isSelected ? "scale-110" : "opacity-70"} transition-transform duration-300`}
                        >
                          {cat.icon}
                        </div>
                        <span
                          className={`text-[9px] font-extrabold mt-2 uppercase tracking-widest transition-colors ${isSelected ? cat.color : "text-stone-400 dark:text-zinc-500"}`}
                        >
                          {cat.id}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="relative">
                <input
                  className="peer w-full bg-indigo-50/50 dark:bg-zinc-900/50 border-2 border-indigo-100 dark:border-zinc-800/50 rounded-2xl px-5 pt-7 pb-3 text-sm font-bold text-stone-900 dark:text-white outline-none focus:border-indigo-500 dark:focus:border-teal-500 transition-colors placeholder-transparent"
                  placeholder="Notes"
                  id="notes"
                  value={saveData.desc}
                  onChange={(e) =>
                    setSaveData({ ...saveData, desc: e.target.value })
                  }
                />
                <label
                  htmlFor="notes"
                  className="absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-500 cursor-text"
                >
                  Optional Notes
                </label>
              </div>
            </div>

            <button
              onClick={handleSave}
              className={`w-full py-4 rounded-2xl font-bold text-sm text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:text-zinc-950 dark:hover:from-teal-400 dark:hover:to-emerald-500 transition-all ${HAPTIC_PRESS}`}
            >
              Confirm & Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
