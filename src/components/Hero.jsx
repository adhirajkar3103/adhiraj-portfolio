import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

const Hero = () => {
  const names = [
    "Adhiraj", // English
    "अधिराज", // Hindi
    "অধিরাজ", // Bengali
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
        setIsFading(false);
      }, 1000); // Half of the interval time to allow fading out and in
    }, 2000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-5">
      <h1 className="md:text-6xl text-3xl text-white font-semibold text-center">
        Hi, my name is{" "}
        <span
          className={`inline-block transition-opacity duration-1000 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          style={{ textAlign: "center" }}
        >
          {names[currentIndex]}
        </span>
      </h1>
      <p className="text-white text-lg">
        A software developer with a passion for learning and creating.
      </p>
      <a
        href="https://drive.google.com/file/d/1_rTrAZq1qgBdAgVUoIwhFl9KOqq2T9uL/view"
        target="__blank"
        className="text-white cursor-pointer flex items-center gap-2 text-lg border-gray-500 border-[1px] py-2 px-10 rounded-md hover:bg-white hover:text-blue-950 transition-all"
      >
        Resume <FiExternalLink />
      </a>
      <div className="flex items-center text-center gap-5 text-white text-3xl">
        <a href="mailto:adhirajkar3103@gmail.com">
          <IoMdMail className="cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/adhiraj-kar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/adhirajkar3103"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
