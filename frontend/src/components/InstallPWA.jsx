import React, { useState, useEffect } from "react";
import { Download, Smartphone } from "lucide-react";

const HAPTIC_PRESS =
  "active:scale-[0.96] transition-transform duration-200 ease-out";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // This event fires if the browser detects the app is not installed yet
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault(); // Prevent the default mini-infobar
      setDeferredPrompt(e); // Save the event to trigger it later
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      console.log("User accepted the install prompt");
      setIsInstallable(false); // Hide the button once installed
    }

    setDeferredPrompt(null);
  };

  // If the app is already installed or not supported, don't show the button
  if (!isInstallable) return null;

  return (
    <button
      onClick={handleInstallClick}
      className={`group relative overflow-hidden flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-2xl font-bold text-white shadow-lg shadow-indigo-500/20 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-teal-500 dark:to-emerald-600 dark:hover:from-teal-400 dark:hover:to-emerald-500 dark:text-zinc-950 transition-all ${HAPTIC_PRESS}`}
    >
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
      <Smartphone size={18} strokeWidth={2.5} className="relative z-10" />
      <span className="relative z-10 text-sm tracking-wide">Install App</span>
      <Download
        size={14}
        className="relative z-10 opacity-70 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all"
      />
    </button>
  );
}
