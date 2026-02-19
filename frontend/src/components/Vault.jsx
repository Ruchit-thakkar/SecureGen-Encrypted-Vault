import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Plus,
  FileJson,
  Download,
  Upload,
  Pencil,
  Trash2,
  Copy,
  RotateCw,
  RefreshCcw,
  Users,
  Landmark,
  Briefcase,
  Box,
  X,
  ShieldCheck,
} from "lucide-react";
import { toast } from "react-hot-toast";
import api from "../utils/api";

// Match the styling from Generator/Dashboard
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

export default function VaultPage() {
  const [passwords, setPasswords] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [editingItem, setEditingItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Manual Add Form State
  const [isAdding, setIsAdding] = useState(false);
  const [newItem, setNewItem] = useState({
    title: "",
    password: "",
    category: "Social",
    description: "",
  });

  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchVaults();
  }, []);

  const fetchVaults = async () => {
    try {
      const res = await api.get("/vault/all");
      if (res.data.success) {
        const formattedData = res.data.data.map((item) => ({
          ...item,
          id: item._id,
        }));
        setPasswords(formattedData);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Server connection error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleManualSave = async () => {
    if (!newItem.title) return toast.error("Title is required");
    if (!newItem.password) return toast.error("Password is required");

    try {
      const res = await api.post("/vault/add", newItem);
      if (res.data.success) {
        const newEntry = { ...res.data.data, id: res.data.data._id };
        setPasswords([newEntry, ...passwords]);
        setIsAdding(false);
        setNewItem({
          title: "",
          password: "",
          category: "Social",
          description: "",
        });
        toast.success("Entry Added to Vault", { icon: "✨" });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to save to server");
    }
  };

  const handleUpdate = async () => {
    if (!editingItem.title) return toast.error("Title is required");

    try {
      const res = await api.put(`/vault/update/${editingItem.id}`, editingItem);
      if (res.data.success) {
        setPasswords(
          passwords.map((p) =>
            p.id === editingItem.id
              ? { ...res.data.data, id: res.data.data._id }
              : p,
          ),
        );
        setEditingItem(null);
        toast.success("Entry Updated");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Update Failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/vault/delete/${id}`);
      if (res.data.success) {
        setPasswords(passwords.filter((p) => p.id !== id));
        toast.success("Entry Deleted");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete entry");
    }
  };

  const handleExport = () => {
    if (passwords.length === 0) return toast.error("Vault is empty");
    const blob = new Blob([JSON.stringify(passwords, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `securegen_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Backup Downloaded");
  };

  const handleImport = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (!Array.isArray(importedData)) throw new Error("Invalid Backup");
        let successCount = 0;
        for (const item of importedData) {
          try {
            const res = await api.post("/vault/add", item);
            if (res.data.success) successCount++;
          } catch (err) {
            console.error("Failed to import item", item.title);
          }
        }
        if (successCount > 0) {
          toast.success(`${successCount} entries restored!`);
          fetchVaults();
        }
      } catch (err) {
        toast.error("Restore Failed. Invalid format.");
      }
    };
    reader.readAsText(file);
    event.target.value = null;
  };

  const regenerateInEdit = () => {
    const chars =
      "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%^&*()_+";
    let result = "";
    for (let i = 0; i < 16; i++)
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    setEditingItem({ ...editingItem, password: result });
    toast.success("New Password Generated", { icon: "✨" });
  };

  const filtered = passwords.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[520px]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-4 border-indigo-600 dark:border-teal-400"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[520px] animate-in fade-in slide-in-from-bottom-4 duration-500 relative max-w-4xl mx-auto w-full">
      {/* 🔍 TOP BAR: Search & Add */}
      <div className="flex items-center gap-3 mb-5">
        <div className="relative flex-1 group">
          <Search
            className="absolute left-4 top-3.5 text-indigo-300 dark:text-zinc-500 transition-colors group-focus-within:text-indigo-600 dark:group-focus-within:text-teal-400"
            size={18}
          />
          <input
            className="w-full rounded-2xl pl-12 pr-4 py-3 text-sm outline-none transition-all font-bold border-2 bg-indigo-50/30 border-indigo-100 text-indigo-950 focus:border-indigo-500  focus:shadow-lg focus:shadow-indigo-500/10 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-white dark:focus:border-teal-500/50 dark:placeholder:text-zinc-600"
            placeholder="Search your secure vault..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <button
          onClick={() => setIsAdding(true)}
          className={`p-3.5 rounded-2xl transition-all border-2 bg-gradient-to-br from-indigo-600 to-purple-600 border-transparent text-white shadow-lg shadow-purple-500/20 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:shadow-teal-900/40 dark:hover:from-teal-400 dark:hover:to-emerald-500 ${HAPTIC_PRESS}`}
        >
          <Plus size={20} strokeWidth={2.5} />
        </button>
      </div>

      {/* 🏷️ CATEGORY FILTERS */}
      <div className="flex gap-2 overflow-x-auto pb-4 custom-scrollbar mb-2">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-5 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border-2 whitespace-nowrap transition-all ${HAPTIC_PRESS} ${
            activeCategory === "All"
              ? "bg-stone-900 text-white border-stone-900 dark:bg-zinc-100 dark:text-zinc-900"
              : "bg-white text-stone-500 border-stone-200 hover:bg-stone-50 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700"
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-extrabold uppercase tracking-widest border-2 whitespace-nowrap transition-all ${HAPTIC_PRESS} ${
              activeCategory === cat.id
                ? "bg-indigo-50 border-indigo-500 text-indigo-700 shadow-sm dark:bg-teal-500/10 dark:border-teal-500 dark:text-teal-400"
                : "bg-white text-stone-500 border-stone-200 hover:bg-stone-50 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700"
            }`}
          >
            <span
              className={
                activeCategory === cat.id
                  ? "text-indigo-500 dark:text-teal-400 scale-110 transition-transform"
                  : "text-stone-400 dark:text-zinc-500"
              }
            >
              {React.cloneElement(cat.icon, { size: 14 })}
            </span>
            {cat.id}
          </button>
        ))}
      </div>

      {/* 📜 VAULT LIST */}
      <div className="flex-1 overflow-y-auto space-y-4 pr-1 pb-4 custom-scrollbar">
        {filtered.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-indigo-100 bg-indigo-50/30 text-indigo-300 dark:border-zinc-800 dark:bg-zinc-900/20 dark:text-zinc-700">
            <FileJson
              size={40}
              strokeWidth={1.5}
              className="mb-3 opacity-50 text-indigo-400 dark:text-zinc-600"
            />
            <p className="text-xs font-extrabold uppercase tracking-widest">
              Vault is Empty
            </p>
          </div>
        ) : (
          filtered.map((item) => (
            <VaultCard
              key={item.id}
              item={item}
              onDelete={handleDelete}
              onEdit={setEditingItem}
            />
          ))
        )}
      </div>

      {/* 📥 EXPORT / IMPORT FOOTER */}
      <div className="pt-5 border-t border-indigo-50 dark:border-zinc-800 grid grid-cols-2 gap-4">
        <button
          onClick={handleExport}
          className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest border-2 transition-all bg-white border-indigo-50 text-indigo-600 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 ${HAPTIC_PRESS}`}
        >
          <Download size={16} /> Backup Vault
        </button>
        <button
          onClick={() => fileInputRef.current.click()}
          className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[11px] font-extrabold uppercase tracking-widest border-2 transition-all bg-white border-indigo-50 text-indigo-600 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 dark:bg-zinc-900/40 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:border-zinc-700 ${HAPTIC_PRESS}`}
        >
          <Upload size={16} /> Restore JSON
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImport}
          className="hidden"
          accept=".json"
        />
      </div>

      {/* 🆕 ADD MODAL (Matches Generator style) */}
      {isAdding && (
        <ModalWrapper onClose={() => setIsAdding(false)}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black flex items-center gap-2 text-stone-900 dark:text-white">
              <ShieldCheck
                className="text-indigo-500 dark:text-teal-400"
                size={24}
              />{" "}
              Add Manual Entry
            </h3>
            <button
              onClick={() => setIsAdding(false)}
              className="p-2 bg-stone-100 dark:bg-zinc-900 text-stone-400 dark:text-zinc-500 rounded-full hover:bg-rose-50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-5 mb-8">
            <FloatingInput
              id="title"
              label="Entry Title"
              value={newItem.title}
              onChange={(e) =>
                setNewItem({ ...newItem, title: e.target.value })
              }
              autoFocus
            />
            <FloatingInput
              id="password"
              label="Secure Password"
              value={newItem.password}
              onChange={(e) =>
                setNewItem({ ...newItem, password: e.target.value })
              }
              isMono
            />

            <div>
              <label className="text-[10px] uppercase font-extrabold text-stone-400 dark:text-zinc-500 mb-3 block px-1 tracking-widest">
                Category
              </label>
              <div className="grid grid-cols-4 gap-3">
                {CATEGORIES.map((cat) => {
                  const isSelected = newItem.category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() =>
                        setNewItem({ ...newItem, category: cat.id })
                      }
                      className={`flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all ${HAPTIC_PRESS} ${isSelected ? cat.bgActive : cat.bgInactive}`}
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

            <FloatingInput
              id="notes"
              label="Optional Notes"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleManualSave}
            className={`w-full py-4 rounded-2xl font-bold text-sm text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:text-zinc-950 dark:hover:from-teal-400 transition-all ${HAPTIC_PRESS}`}
          >
            Confirm & Save Entry
          </button>
        </ModalWrapper>
      )}

      {/* ✏️ EDIT MODAL (Matches Generator style) */}
      {editingItem && (
        <ModalWrapper onClose={() => setEditingItem(null)}>
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black flex items-center gap-2 text-stone-900 dark:text-white">
              <Pencil
                className="text-indigo-500 dark:text-teal-400"
                size={20}
              />{" "}
              Edit Entry
            </h3>
            <button
              onClick={() => setEditingItem(null)}
              className="p-2 bg-stone-100 dark:bg-zinc-900 text-stone-400 dark:text-zinc-500 rounded-full hover:bg-rose-50 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <div className="space-y-5 mb-8">
            <FloatingInput
              id="edit-title"
              label="Entry Title"
              value={editingItem.title}
              onChange={(e) =>
                setEditingItem({ ...editingItem, title: e.target.value })
              }
            />

            {/* Password input with regenerate button inline */}
            <div className="flex gap-2">
              <div className="flex-1">
                <FloatingInput
                  id="edit-password"
                  label="Secure Password"
                  value={editingItem.password}
                  onChange={(e) =>
                    setEditingItem({ ...editingItem, password: e.target.value })
                  }
                  isMono
                />
              </div>
              <button
                onClick={regenerateInEdit}
                className={`px-4 rounded-2xl border-2 bg-indigo-50 border-indigo-100 text-indigo-600 hover:bg-indigo-100 dark:bg-zinc-900/50 dark:border-zinc-800 dark:text-teal-400 dark:hover:border-teal-500/50 transition-colors ${HAPTIC_PRESS}`}
              >
                <RefreshCcw size={18} />
              </button>
            </div>

            <div>
              <label className="text-[10px] uppercase font-extrabold text-stone-400 dark:text-zinc-500 mb-3 block px-1 tracking-widest">
                Category
              </label>
              <div className="grid grid-cols-4 gap-3">
                {CATEGORIES.map((cat) => {
                  const isSelected = editingItem.category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() =>
                        setEditingItem({ ...editingItem, category: cat.id })
                      }
                      className={`flex flex-col items-center justify-center py-4 rounded-2xl border-2 transition-all ${HAPTIC_PRESS} ${isSelected ? cat.bgActive : cat.bgInactive}`}
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

            <FloatingInput
              id="edit-notes"
              label="Optional Notes"
              value={editingItem.description}
              onChange={(e) =>
                setEditingItem({ ...editingItem, description: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleUpdate}
            className={`w-full py-4 rounded-2xl font-bold text-sm text-white shadow-xl shadow-purple-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:text-zinc-950 dark:hover:from-teal-400 transition-all ${HAPTIC_PRESS}`}
          >
            Save Changes
          </button>
        </ModalWrapper>
      )}
    </div>
  );
}

// ==========================================
// 🧩 SUBCOMPONENTS
// ==========================================

// Reusable Modal Wrapper with Glassmorphism
function ModalWrapper({ children, onClose }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end md:justify-center p-2 md:p-6 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-indigo-950/20 dark:bg-black/60 backdrop-blur-md rounded-[2rem] md:rounded-3xl"
        onClick={onClose}
      />
      <div className="relative bg-white dark:bg-zinc-950 border border-indigo-50 dark:border-zinc-800 p-6 md:p-8 rounded-[2rem] shadow-2xl shadow-indigo-900/10 dark:shadow-black/50 animate-in slide-in-from-bottom-8 md:zoom-in-95 duration-300">
        {children}
      </div>
    </div>
  );
}

// Reusable Floating Label Input
function FloatingInput({ id, label, value, onChange, autoFocus, isMono }) {
  return (
    <div className="relative">
      <input
        autoFocus={autoFocus}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={label}
        className={`peer w-full bg-indigo-50/50 dark:bg-zinc-900/50 border-2 border-indigo-100 dark:border-zinc-800/50 rounded-2xl px-5 pt-7 pb-3 text-sm font-bold text-stone-900 dark:text-white outline-none focus:border-indigo-500 dark:focus:border-teal-500 transition-colors placeholder-transparent ${isMono ? "font-mono tracking-wider" : ""}`}
      />
      <label
        htmlFor={id}
        className="absolute left-5 top-2.5 text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:text-[10px] peer-focus:text-indigo-600 dark:peer-focus:text-teal-500 cursor-text"
      >
        {label}
      </label>
    </div>
  );
}

// 🎭 VAULT CARD WITH REDESIGNED 3D FLIP & REVEAL
function VaultCard({ item, onDelete, onEdit }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const category =
    CATEGORIES.find((c) => c.id === item.category) || CATEGORIES[3];

  const copy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.password);
    toast.success("Copied", { icon: "✨" });
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (isFlipped) setRevealed(false);
  };

  const cardStyle =
    "absolute inset-0 w-full h-full rounded-[1.5rem] p-5 border backface-hidden transition-all duration-300";

  return (
    <div
      className="group relative h-[120px] w-full perspective-1000 cursor-pointer"
      onClick={handleFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* FRONT FACE (Glassmorphism & Gradient) */}
        <div
          className={`${cardStyle} bg-gradient-to-br from-white to-indigo-50/30 border-indigo-100/60 shadow-lg shadow-indigo-900/5 group-hover:shadow-indigo-500/10 group-hover:border-indigo-300/60 dark:bg-none dark:bg-zinc-900/60 dark:border-zinc-800/60 dark:group-hover:border-teal-500/30 flex flex-col justify-center`}
        >
          <div className="flex items-center gap-5">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 transition-transform duration-300 group-hover:scale-105 ${category.bgActive}`}
            >
              {category.icon}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-lg text-stone-900 dark:text-zinc-100 leading-tight truncate">
                {item.title}
              </h3>
              <p className="text-xs font-bold text-indigo-400 dark:text-zinc-500 mt-1 uppercase tracking-widest truncate">
                {item.description || item.category || "Secure Entry"}
              </p>
            </div>
            <div className="ml-auto text-indigo-200 dark:text-zinc-700 transition-transform duration-300 group-hover:rotate-180 group-hover:text-indigo-500 dark:group-hover:text-teal-400">
              <RotateCw size={18} strokeWidth={2.5} />
            </div>
          </div>
        </div>

        {/* BACK FACE (Actions & Password Reveal) */}
        <div
          className={`${cardStyle} bg-indigo-50/80 border-indigo-200 dark:bg-zinc-950 dark:border-zinc-800 rotate-y-180 flex flex-col justify-between`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-400 dark:text-zinc-500 flex items-center gap-1.5">
              <ShieldCheck size={12} /> Protected Data
            </span>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(item);
                }}
                className="p-2 bg-white text-indigo-500 shadow-sm rounded-xl hover:bg-indigo-500 hover:text-white dark:bg-zinc-900 dark:text-teal-400 dark:hover:bg-teal-500 dark:hover:text-zinc-900 transition-colors"
              >
                <Pencil size={14} strokeWidth={2.5} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(item.id);
                }}
                className="p-2 bg-white text-rose-500 shadow-sm rounded-xl hover:bg-rose-500 hover:text-white dark:bg-zinc-900 dark:text-rose-400 dark:hover:bg-rose-500 dark:hover:text-white transition-colors"
              >
                <Trash2 size={14} strokeWidth={2.5} />
              </button>
            </div>
          </div>
          <div
            onClick={(e) => {
              e.stopPropagation();
              setRevealed(!revealed);
            }}
            className="flex items-center justify-between bg-white dark:bg-zinc-900 rounded-xl px-4 py-3 border border-indigo-100 dark:border-zinc-800 shadow-sm group/pass hover:border-indigo-300 dark:hover:border-zinc-700 transition-colors"
          >
            <div
              className={`font-mono text-sm font-black tracking-widest transition-all duration-700 flex-1 truncate ${revealed ? "blur-0 text-stone-900 dark:text-white" : "blur-sm select-none text-stone-400 dark:text-zinc-500"}`}
            >
              {revealed ? item.password : "••••••••••••••••"}
            </div>
            <button
              onClick={copy}
              className="text-indigo-300 hover:text-indigo-600 hover:scale-110 dark:text-zinc-600 dark:hover:text-teal-400 transition-all"
            >
              <Copy size={16} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// CSS HELPER
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
      .perspective-1000 { perspective: 1000px; }
      .transform-style-3d { transform-style: preserve-3d; }
      .backface-hidden { backface-visibility: hidden; }
      .rotate-y-180 { transform: rotateY(180deg); }
    `;
  document.head.appendChild(style);
}
