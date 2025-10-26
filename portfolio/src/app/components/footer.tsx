import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--surface)] text-[var(--text)] py-8 border-t border-gray-700">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://linkedin.com/in/abhijeet-ringe/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="h-10 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
          <a href="https://github.com/hisenberggg" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="h-10 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
          <a href="https://www.instagram.com/_._abhijeet_147_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="h-10 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;