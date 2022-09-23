import csharpIcon from "/public/csharp.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  interface CustomLinkProps {
    href: string;
    children: string;
  }
  const CustomLink = ({ href, children }: CustomLinkProps) => {
    const scrollToSection = () => {
      const anchor = document.querySelector(href);
      anchor!.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    return (
      <>
        <a
          className="py-2 px-4 hover:cursor-pointer hover:backdrop-brightness-90 rounded-lg"
          onClick={scrollToSection}
        >
          {children}
        </a>
      </>
    );
  };

  return (
    <div className="py-3 rounded">
      <div className="container flex flex-wrap justify-between items-center ">
        <div className="flex items-center gap-2 pr-10">
          <a href="/" className="font-mono font-bold text-2xl">
            Evan
          </a>
        </div>
        <CustomLink href="#about">About me</CustomLink>
        <CustomLink href="#skills">Skills</CustomLink>
        <CustomLink href="#experience">Experience</CustomLink>
        <CustomLink href="#projects">Projects</CustomLink>
        <CustomLink href="#contact">Contact Me</CustomLink>
      </div>
    </div>
  );
};

export default NavBar;
