"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LoadingIndicator = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname(); // Trigger loading on path change

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // simulate short animation

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed top-0 left-0 w-full h-[4px] z-[9999] bg-[var(--accent)] animate-pulse"></div>
    // <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
    //     <div className="w-10 h-10 border-4 border-[var(--accent)] border-t-transparent rounded-full animate-spin"></div>
    // </div>
  ) : null;
};

export default LoadingIndicator;
