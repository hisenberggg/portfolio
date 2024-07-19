// pages/contact.tsx
"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaLinkedin, FaEnvelope, FaCopy } from 'react-icons/fa';

const Contact = () => {
  const profilePic = "/images/AbhijeetRinge.jpg"
  const [copied, setCopied] = useState(false);
  const email = "ringeabhijeet@example.com";
  const linkedinUrl = "https://www.linkedin.com/in/abhijeet-ringe/";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="mb-8 lg:mb-0 lg:mr-8">
          <Image 
            src={profilePic} 
            alt="Profile Picture" 
            className="rounded-full" 
            width={200} 
            height={200} 
          />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl lg:text-6xl font-bold text-center">Abhijeet Ringe</h1>
          <p className="mt-2 text-lg">I would love to hear from you!</p>
          <p className="mt-2 text-base text-gray-300 text-center">Feel free to reach out via email or connect with me on LinkedIn.</p>
          <div className="mt-4 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
            <a href={`mailto:${email}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full lg:w-auto">
              <FaEnvelope className="mr-2" /> Email Me
            </a>
            <button onClick={handleCopy} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full lg:w-auto">
              <FaCopy className="mr-2" /> {copied ? 'Copied!' : 'Copy Email'}
            </button>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center w-full lg:w-auto">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact;
