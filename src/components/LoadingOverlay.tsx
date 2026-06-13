import { useEffect, useState } from "react";

const LoadingOverlay = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 800);
    const hideTimer = setTimeout(() => setVisible(false), 1800);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="w-16 h-16 border-t-2 border-tertiary animate-spin rounded-full" />
      <p className="font-label-mono text-label-mono uppercase tracking-[0.4em] mt-unit-md text-outline">
        System Initializing
      </p>
    </div>
  );
};

export default LoadingOverlay;
