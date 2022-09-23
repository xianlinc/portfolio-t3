import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "./Nav";
import evanPhoto from "/public/evan_photo.jpg";
import csharpIcon from "/public/csharp.svg";
import javaIcon from "/public/java.svg";
import javascriptIcon from "/public/logo-javascript.svg";
import pythonIcon from "/public/python-5.svg";
import gitIcon from "/public/git-icon.svg";
import reactIcon from "/public/react-2.svg";
import typescriptIcon from "/public/typescript.svg";
import nvimIcon from "/public/Neovim-mark.svg";
import vscodeIcon from "/public/visual-studio-code-1.svg";
import vsIcon from "/public/visual-studio-2013.svg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Evan&apos;s Portfolio</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-[1240px] w-full px-10 mx-auto">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Clubs />
        <Projects />
        <div className="relative border-2 w-full h-screen"></div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <div className="relative max-w-[1240px] w-full h-screen mx-auto p-2 flex justify-start items-center">
      <div>
        <p className="text-4xl font-bold">Hi! I&apos;m Evan!</p>
        <p className="text-4xl">
          I enjoy building applications to solve everyday problems I encounter.
        </p>
        <p className="text-xl">
          I enjoy tinkering and building solutions to increase productivity!
        </p>
      </div>
      <Image
        src={evanPhoto}
        alt={"Profile pic"}
        width={400}
        height={600}
        style={{ borderRadius: "20px" }}
      ></Image>
    </div>
  );
};

const About = () => {
  return (
    <div id="about" className=" relative w-full max-w-[1240px] mx-auto p-2">
      <h1 className="text-4xl">About Me</h1>
      <p>Im a student at NUS</p>
    </div>
  );
};
const Skills = () => {
  return (
    <div
      id="skills"
      className="relative max-w-[1240px] w-full mx-auto p-2 flex justify-start items-center"
    >
      <div>
        <h1 className="text-4xl font-bold pb-4">Skills</h1>
        <p className="text-xl pb-4">I have used:</p>
        <div className="flex flex-row">
          <ol className="flex flex-row gap-4">
            <SkillIcon name="C#" skillIcon={csharpIcon} />
            <SkillIcon name="Python" skillIcon={pythonIcon} />
            <SkillIcon name="Java" skillIcon={javaIcon} />
            <SkillIcon name="Typescript" skillIcon={typescriptIcon} />
            <SkillIcon name="Javascript" skillIcon={javascriptIcon} />
            <SkillIcon name="React" skillIcon={reactIcon} />
            <SkillIcon name="Git" skillIcon={gitIcon} />
          </ol>
        </div>
        <p className="text-xl pb-4 my-2">Tools</p>
        <div className="flex flex-row">
          <ol className="flex flex-row gap-4">
            <SkillIcon name="Neovim" skillIcon={nvimIcon} />
            <SkillIcon name="Visual Studio" skillIcon={vsIcon} />
            <SkillIcon name="VScode" skillIcon={vscodeIcon} />
          </ol>
        </div>
      </div>
    </div>
  );
};

interface SkillIconProps {
  name: string;
  skillIcon: string;
}

const SkillIcon = ({ name, skillIcon }: SkillIconProps) => {
  return (
    <>
      <Image src={skillIcon} alt={name} width={50} height={50} />
    </>
  );
};

const Experience = () => {
  return (
    <div
      id="experience"
      className="max-w-[1240px] w-full mx-auto p-2 flex justify-start items-center"
    >
      <div>
        <h1 className="text-4xl">Experience</h1>
        <ExperienceCard />
      </div>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="my-4">
      <p className="text-3xl">
        <span className="font-bold">Software Engineering Intern</span>
        <span className="text-blue-600"> @ Nete2Asia</span>
      </p>
      <p className="text-blue-600 text-2xl pb-2">05/2022 - present</p>
      <div>
        <EXB
          text="
              Spearheaded the development of 2 GUI applications as part of a
              Speech-to-Text software solution in collaboration with A*STAR and
              Alpha Acoustics, using C#, WinForms and OpenCV.
            "
        />
        <EXB
          text="
              Developed APIs in Javascript for a live streaming software
              solution to be used by SPF and SCDF to enhance the effectiveness
              and efficiency of operational tasks and incident management."
        />
      </div>
      <h1 className="text-3xl">Here I used:</h1>
      <div className="flex flex-row">
        <ol className="flex flex-row gap-4">
          <SkillIcon name="C#" skillIcon={csharpIcon} />
          <SkillIcon name="visualstudio" skillIcon={vsIcon} />
          <SkillIcon name="Javascript" skillIcon={javascriptIcon} />
          <SkillIcon name="React" skillIcon={reactIcon} />
          <SkillIcon name="Git" skillIcon={gitIcon} />
        </ol>
      </div>
    </div>
  );
};

const EXB = ({ text }: { text: string }) => {
  return <p className="border-l-4 border-blue-600 my-2 px-1">{text}</p>;
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] w-full mx-auto p-2 flex justify-start items-center"
    >
      <h1 className="text-4xl font-bold">Featured Projects</h1>
    </div>
  );
};

const Clubs = () => {
  return (
    <div
      id="clubs"
      className="max-w-[1240px] w-full mx-auto p-2 flex justify-start items-center"
    >
      <h1 className="text-4xl font-bold">Clubs</h1>
    </div>
  );
};
export default Home;
