// pages/index.tsx
import Timeline from "./components/timeline";
import Box from "./components/box";
import { FaLinkedinIn, FaGithub, FaAngleDoubleDown, FaFileDownload } from "react-icons/fa";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <br />
      <br />

      <h1 className="text-5xl font-bold mb-4">Hello <span className="waving-hand">👋</span></h1>
      <h1 className="text-5xl font-bold mb-4">I am Abhijeet </h1>
      <p className="text-2xl mb-6">Welcome to my portfolio.</p>
      <p className="text-lg text-center max-w-2xl">
        I am a dedicated and skilled professional with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly. Confident communicator, strategic thinker, and innovative creator to develop software that is customized to meet a company’s organizational needs, highlight their core competencies, and further their success.
      </p>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://www.linkedin.com/in/abhijeet-ringe/"><Box icon={<FaLinkedinIn  className="h-6 w-6 text-blue-500" />} text="LinkedIn" /></a>
          <a href="https://github.com/hisenberggg"><Box icon={<FaGithub  className="h-6 w-6 text-blue-500" />} text="GitHub" /></a>
          <a href="files/Abhijeet_Resume.pdf" download="Abhijeet_Ringe.pdf"><Box icon={<FaFileDownload   className="h-6 w-6 text-blue-500" />} text="Resume" /></a>  
          <a href="#work"><Box icon={<FaAngleDoubleDown  className="h-6 w-6 text-blue-500" />} text="My Journey" /></a>              
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="work"></div>
      <br />

      <Timeline/>

    </div>
    
  )
}

export default Home;
