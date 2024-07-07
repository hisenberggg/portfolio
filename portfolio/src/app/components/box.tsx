// components/Box.tsx

import React from 'react';

interface BoxProps {
  icon: React.ReactNode; // Icon component or SVG
  text: string;
}

const Box: React.FC<BoxProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center justify-center p-4 border border-gray-300 rounded-md shadow-md mx-2">
      <div className="mr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
};

export default Box;
