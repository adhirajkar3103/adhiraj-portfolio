import { TbBrandCpp } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaLinux, FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full h-screen text-white py-10 flex flex-col justify-center">
      <h1 className="text-center text-5xl font-semibold">SKILLS</h1>
      <div className="flex items-center flex-col gap-8 mt-8">
        <div className="flex flex-col gap-5 items-center">
          <p className="text-2xl">Programming Languages</p>
          <div className="flex gap-10 text-4xl justify-center">
            <TbBrandCpp />
            <SiJavascript />
            <FaPython />
            <SiTypescript />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <p className="text-2xl">Frameworks/Libraries</p>
          <div className="flex gap-5 text-4xl justify-center">
            <FaReact />
            <SiExpress />
            <DiDjango />
            <SiNextdotjs />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <p className="text-2xl">Databases</p>
          <div className="flex gap-5 text-4xl justify-center">
            <BiLogoPostgresql />
            <SiMongodb />
            <SiMysql />
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <p className="text-2xl">Platforms/Tools</p>
          <div className="flex gap-5 text-4xl justify-center">
            <FaLinux />
            <FaAws />
            <FaGitAlt />
            <IoLogoFirebase />
            <FaDocker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
