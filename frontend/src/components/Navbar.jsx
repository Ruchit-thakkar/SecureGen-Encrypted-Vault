import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  Hexagon,
  LogOut,
  Sun,
  Moon,
  User,
  LayoutGrid,
  Home,
  Zap,
  Info,
  Mail,
  Menu,
  X,
} from "lucide-react";

const HAPTIC_PRESS =
  "active:scale-[0.96] transition-transform duration-100 ease-in-out cursor-pointer select-none";

export default function Navbar({ isDark, setIsDark }) {
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 🆕 Added state for logo fallback
  const [logoError, setLogoError] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Helper for Desktop Link Styles
  const desktopNavLinkStyle = ({ isActive }) =>
    `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${HAPTIC_PRESS} ${
      isActive
        ? "bg-indigo-100 text-indigo-600 dark:bg-teal-500/10 dark:text-teal-400"
        : "text-stone-500 hover:bg-stone-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
    }`;

  // Helper for Mobile Link Styles
  const mobileNavLinkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${HAPTIC_PRESS} ${
      isActive
        ? "bg-indigo-50 text-indigo-600 dark:bg-teal-500/10 dark:text-teal-400"
        : "text-stone-600 hover:bg-stone-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
    }`;

  return (
    <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="relative pointer-events-auto w-full max-w-5xl backdrop-blur-xl border shadow-xl rounded-[2rem] md:rounded-full px-4 md:px-5 py-3 flex items-center justify-between transition-all duration-500 bg-white/80 border-stone-200/50 shadow-indigo-900/5 dark:bg-zinc-900/70 dark:border-white/10 dark:shadow-black/50">
        {/* ==========================
            LEFT: LOGO (With Fallback)
        ========================== */}
        <Link
          to="/"
          onClick={closeMenu}
          className={`flex items-center gap-3 mr-4 ${HAPTIC_PRESS}`}
        >
          {!logoError ? (
            <img
              src={isDark ? "/logo1.png" : "/logo2.png"}
              alt="SecureGen Logo"
              onError={() => setLogoError(true)}
              // Adjusted to w-10 h-10 to prevent navbar stretching, kept your pulse animation
              className="w-10 h-10 object-contain drop-shadow-md "
            />
          ) : (
            <div className="p-2 rounded-full transition-colors duration-500 bg-gradient-to-br from-indigo-500 to-purple-600 text-white dark:from-teal-400 dark:to-emerald-500 dark:text-zinc-950 shadow-lg shadow-indigo-500/20 dark:shadow-teal-500/20">
              <Hexagon
                size={20}
                strokeWidth={2.5}
                className="fill-transparent"
              />
            </div>
          )}
          <span className="font-black tracking-tight text-lg text-stone-900 dark:text-white">
            SecureGen
          </span>
        </Link>

        {/* ==========================
            CENTER: DESKTOP LINKS
        ========================== */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          {user ? (
            <>
              <NavLink to="/" className={desktopNavLinkStyle} end>
                <Home size={14} /> <span>Dashboard</span>
              </NavLink>
              <NavLink to="/generator" className={desktopNavLinkStyle}>
                <Zap size={14} /> <span>Generate</span>
              </NavLink>
              <NavLink to="/vault" className={desktopNavLinkStyle}>
                <LayoutGrid size={14} /> <span>Vault</span>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" className={desktopNavLinkStyle} end>
                <Home size={14} /> <span>Home</span>
              </NavLink>
              <NavLink to="/about" className={desktopNavLinkStyle}>
                <Info size={14} /> <span>About</span>
              </NavLink>
              <NavLink to="/contact" className={desktopNavLinkStyle}>
                <Mail size={14} /> <span>Contact us</span>
              </NavLink>
            </>
          )}
        </div>

        {/* ==========================
            RIGHT: ACTIONS & THEME
        ========================== */}
        <div className="flex items-center gap-2 md:gap-3 ml-auto md:ml-4">
          {/* DESKTOP AUTH ACTIONS */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-100 dark:bg-zinc-800 border border-stone-200 dark:border-zinc-700">
                  <User
                    size={14}
                    className="text-stone-400 dark:text-zinc-500"
                  />
                  <span className="text-xs font-extrabold text-stone-600 dark:text-zinc-300 max-w-[100px] truncate">
                    {user.fullName?.firstName || "User"}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className={`p-2 rounded-full text-stone-500 hover:bg-rose-50 hover:text-rose-500 dark:text-zinc-400 dark:hover:bg-rose-500/20 dark:hover:text-rose-400 transition-colors ${HAPTIC_PRESS}`}
                  title="Logout"
                >
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className={`text-xs font-extrabold px-4 py-2 rounded-full text-stone-500 hover:bg-stone-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-colors ${HAPTIC_PRESS}`}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className={`text-xs font-bold px-5 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-md ${HAPTIC_PRESS}`}
                >
                  Sign up
                </NavLink>
              </>
            )}
          </div>

          <div className="hidden md:block w-px h-6 bg-stone-200 dark:bg-zinc-700 mx-1"></div>

          {/* THEME TOGGLE (Always Visible) */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`relative w-12 h-7 rounded-full transition-colors duration-300 focus:outline-none border-2 bg-stone-200 border-stone-300 dark:bg-zinc-800 dark:border-zinc-700 ${HAPTIC_PRESS}`}
          >
            <div
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                isDark
                  ? "translate-x-5 bg-zinc-950 text-teal-400"
                  : "translate-x-0 bg-white text-orange-500"
              }`}
            >
              {isDark ? <Moon size={10} /> : <Sun size={10} />}
            </div>
          </button>

          {/* MOBILE HAMBURGER MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-full text-stone-600 dark:text-zinc-300 hover:bg-stone-100 dark:hover:bg-zinc-800 transition-colors ${HAPTIC_PRESS}`}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* ==========================
            MOBILE DROPDOWN MENU
        ========================== */}
        {isMobileMenuOpen && (
          <div className="absolute top-[110%] left-0 right-0 p-4 rounded-[2rem] md:hidden bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-stone-200/50 dark:border-zinc-800/50 shadow-2xl shadow-indigo-900/10 dark:shadow-black/50 flex flex-col gap-2 animate-in slide-in-from-top-4 fade-in duration-200 origin-top">
            {user ? (
              <>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={mobileNavLinkStyle}
                  end
                >
                  <Home size={18} /> <span>Dashboard</span>
                </NavLink>
                <NavLink
                  to="/generator"
                  onClick={closeMenu}
                  className={mobileNavLinkStyle}
                >
                  <Zap size={18} /> <span>Generate Password</span>
                </NavLink>
                <NavLink
                  to="/vault"
                  onClick={closeMenu}
                  className={mobileNavLinkStyle}
                >
                  <LayoutGrid size={18} /> <span>Secure Vault</span>
                </NavLink>
                <div className="h-px bg-stone-200 dark:bg-zinc-800 my-2"></div>
                <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2 text-stone-500 dark:text-zinc-400">
                    <User size={16} />
                    <span className="text-xs font-bold truncate max-w-[150px]">
                      {user.fullName?.firstName || "User"}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 dark:bg-rose-500/10 dark:text-rose-400 ${HAPTIC_PRESS}`}
                  >
                    <LogOut size={14} /> Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={mobileNavLinkStyle}
                  end
                >
                  <Home size={18} /> <span>Home</span>
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={closeMenu}
                  className={mobileNavLinkStyle}
                >
                  <Info size={18} /> <span>About</span>
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={closeMenu}
                  className={mobileNavLinkStyle}
                >
                  <Mail size={18} /> <span>Contact us</span>
                </NavLink>
                <div className="h-px bg-stone-200 dark:bg-zinc-800 my-2"></div>
                <div className="flex flex-col gap-2">
                  <NavLink
                    to="/login"
                    onClick={closeMenu}
                    className={`text-center py-3 rounded-xl font-bold text-stone-700 bg-stone-100 dark:text-zinc-300 dark:bg-zinc-800/50 ${HAPTIC_PRESS}`}
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    onClick={closeMenu}
                    className={`text-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-teal-500 dark:to-emerald-500 shadow-lg ${HAPTIC_PRESS}`}
                  >
                    Sign up
                  </NavLink>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
