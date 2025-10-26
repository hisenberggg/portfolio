// pages/index.tsx
"use client";
import { useState } from "react";
import Timeline from "./components/timeline";
import { FaLinkedinIn, FaGithub, FaAngleDoubleDown, FaFileDownload, FaEnvelope, FaCopy } from "react-icons/fa";
import Image from 'next/image';


const Home = () => {
  const [copied, setCopied] = useState(false);
  const email = "ringeabhijeet9@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <br />
      <br />
      {/* Profile Image */}
      <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
              <Image 
                src="/images/mypics/AbhijeetRinge2.jpg" 
                alt="Abhijeet Ringe" 
                className="object-cover"
                fill
                sizes="128px"
              />
            </div>
          </div>
      <h1 className="text-5xl font-bold mb-4">Hello <span className="waving-hand">👋</span></h1>
      <h1 className="text-5xl font-bold mb-4">I am Abhijeet </h1>
      <p className="text-2xl mb-6 text-center max-w-2xl">Software Engineer and AI Enthusiast turning ideas into impactful, intelligent products.</p>
      {/* <p className="text-lg text-center max-w-2xl">
        I am a dedicated and skilled professional with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.
      </p> */}
      <div className="container mx-auto px-4 py-8">
        {/* Circular social icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/abhijeet-ringe/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-[var(--surface)] border border-gray-300 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="h-8 w-8 text-blue-500 hover:text-white" />
          </a>

          <a 
            href="https://github.com/hisenberggg" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-16 h-16 rounded-full bg-[var(--surface)] border border-gray-300 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="GitHub"
          >
            <FaGithub className="h-8 w-8 text-blue-500 hover:text-white" />
          </a>
        </div>

        {/* Resume and Journey buttons */}
        <div className="flex justify-center gap-4">
          <a 
            href="/files/Abhijeet_Ringe_Resume.pdf" 
            download="Abhijeet_Ringe.pdf"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 w-36"
          >
            <FaFileDownload className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            <span className="text-sm sm:text-base font-medium">Resume</span>
          </a>

          <a 
            href="#work"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 w-36"
          >
            <FaAngleDoubleDown className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            <span className="text-sm sm:text-base font-medium">My Journey</span>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="work"></div>
      <br />

      <Timeline/>

      <div id="contact" className="w-full py-12 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
              <Image 
                src="/images/mypics/AbhijeetRinge2.jpg" 
                alt="Abhijeet Ringe" 
                className="object-cover"
                fill
                sizes="128px"
              />
            </div>
          </div>
          
          {/* Contact Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <FaCopy className="h-5 w-5 text-blue-500" />
              <span className="text-sm sm:text-base font-medium">{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>

            <a 
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <FaEnvelope className="h-5 w-5 text-blue-500" />
              <span className="text-sm sm:text-base font-medium">Email Me</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/abhijeet-ringe/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300"
            >
              <FaLinkedinIn className="h-5 w-5 text-blue-500" />
              <span className="text-sm sm:text-base font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

    </div>
    
  )
}

export default Home;
