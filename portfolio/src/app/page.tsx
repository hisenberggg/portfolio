// pages/index.tsx
"use client";
import { useState, useEffect } from "react";
import Timeline from "./components/timeline";
import { FaLinkedinIn, FaGithub, FaAngleDoubleDown, FaFileDownload, FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiReact, SiNodedotjs, SiPython, SiTensorflow, SiPytorch, SiAmazonaws, SiDocker, SiPostgresql, SiMongodb, SiGit, SiGooglecloud, SiMicrosoftazure, SiKubernetes, SiTerraform, SiApacheairflow, SiApachekafka, SiRedis, SiJest, SiCypress, SiStorybook, SiTableau, SiPowerbi, SiAuth0 } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";
import Image from 'next/image';
import { Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const skills: { name: string; icon: IconType; color: string }[] = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Java", icon: FaJava, color: "#E76F00" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Node.js", icon: SiNodedotjs, color: "#3C873A" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Microsoft Azure", icon: SiMicrosoftazure, color: "#0078D4" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" }
];


const Home = () => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const email = "ringeabhijeet9@gmail.com";
  const fullText = "turning ideas into impactful, intelligent products";

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        // Hide cursor after 500ms once typing is done
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 50); // Adjust speed here (lower = faster)

    return () => clearInterval(intervalId);
  }, [fullText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 1000);
    // Trigger download
    const link = document.createElement('a');
    link.href = '/files/Abhijeet_Ringe_Resume.pdf';
    link.download = 'Abhijeet_Ringe.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-24">
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
      <p className="text-2xl mb-6 text-center max-w-2xl">
        Software Engineer and AI Enthusiast <span className={`text-[var(--accent)] ${spaceMono.className}`}>{typewriterText}{showCursor && <span className="animate-pulse">|</span>}</span>
      </p>
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
        <div className="flex justify-center gap-4 flex-wrap">
          <button 
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 w-36"
          >
            {downloaded ? (
              <FaCheck className="h-5 w-5 sm:h-6 sm:w-6 text-green-500" />
            ) : (
              <FaFileDownload className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            )}
            <span className="text-sm sm:text-base font-medium">Resume</span>
          </button>

          <a 
            href="#work"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 w-36"
          >
            <FaAngleDoubleDown className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            <span className="text-sm sm:text-base font-medium">My Journey</span>
          </a>

          <a 
            href="#skills"
            className="flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-[var(--surface)] border border-gray-300 rounded-lg shadow-md hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 w-36"
          >
            <FaAngleDoubleDown className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
            <span className="text-sm sm:text-base font-medium">Skills</span>
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="work"></div>
      <br />

      <Timeline/>

      <div id="skills" className="w-full py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-3">Skills &amp; Tools</h2><br />
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                const durations = [5.5, 6.5, 7.5, 8.5];
                const delays = [0, 0.2, 0.4, 0.6];
                return (
                  <div key={skill.name} className="group relative flex flex-col items-center">
                    <div
                      className="flex items-center justify-center w-20 h-20 rounded-2xl bg-[var(--surface)] border border-gray-300 shadow-lg transition-shadow duration-300 group-hover:shadow-xl"
                      style={{
                        animation: `float ${durations[index % durations.length]}s ease-in-out infinite`,
                        animationDelay: `${delays[index % delays.length]}s`,
                      }}
                    >
                      <Icon className="w-10 h-10" style={{ color: skill.color }} aria-hidden />
                    </div>
                    <span className="mt-3 text-sm font-medium text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

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
    <style jsx global>{`
      @keyframes float {
        0% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    `}</style>
    </>
  )
}

export default Home;
