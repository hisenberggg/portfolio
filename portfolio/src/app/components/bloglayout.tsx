// app/components/BlogLayout.tsx
"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="flex items-center gap-2 mb-6 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
      >
        <FaArrowLeft className="h-4 w-4" />
        <span className="text-sm font-medium">Back</span>
      </button>
      
      {/* Content */}
      <div className="prose">
        {children}
      </div>
    </div>
  );
};

export default BlogLayout;
