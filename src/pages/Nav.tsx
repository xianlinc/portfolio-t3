import csharpIcon from "/public/csharp.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="py-3 rounded">
      <div className="container flex flex-wrap justify-between items-center ">
        <div className="flex flex-row items-center gap-2 pr-10">
          <Image src={csharpIcon} alt="charp" width={20} height={20} />
          <h1 className="font-mono font-bold text-xl">Evan</h1>
        </div>
        <a href="#about" className="">
          About me
        </a>
        <a href="#skills" className="">
          Skills
        </a>
        <a href="#experience" className="">
          Experience
        </a>
        <a href="#projects" className="">
          Projects
        </a>
        <a href="#contact" className="">
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default NavBar;
