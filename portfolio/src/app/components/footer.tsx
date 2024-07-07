import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://linkedin.com/in/abhijeet-ringe/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-10 text-gray-400 hover:text-white" />
          </a>
          <a href="https://github.com/hisenberggg" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-10 text-gray-400 hover:text-white" />
          </a>
          <a href="https://www.instagram.com/_._abhijeet_147_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-10 text-gray-400 hover:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;