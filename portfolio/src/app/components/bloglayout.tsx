// app/components/BlogLayout.tsx
import React from 'react';

const BlogLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="container prose prose-white mx-auto px-4 py-8">
      {children}
    </div>
  );
};

export default BlogLayout;
