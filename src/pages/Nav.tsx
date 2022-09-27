import Link from "next/link";
import Image from "next/image";
import duckIcon from "/public/duck.svg";

const NavBar = () => {
  return (
    <div className="max-w-[1240px] w-full px-10 items-center mx-auto py-3 sticky top-0 z-50 bg-white border-slate-300 border-b">
      <div className="flex justify-between items-center">
        <CustomLink href="#hero">
          <div className="flex items-center">
            <Image src={duckIcon} alt="duck" width={40} height={40} />
            <p className="text-2xl font-bold pl-2">Evan</p>
          </div>
        </CustomLink>
        <div className="flex flex-wrap justify-end items-center ">
          <CustomLink href="#about">About me</CustomLink>
          <CustomLink href="#skills">Skills</CustomLink>
          <CustomLink href="#experience">Experience</CustomLink>
          <CustomLink href="#contact">Contact Me</CustomLink>
        </div>
      </div>
    </div>
  );
};

interface CustomLinkProps {
  href: string;
  children: any;
}
const CustomLink = ({ href, children }: CustomLinkProps) => {
  const scrollToSection = () => {
    const anchor = document.querySelector(href);
    anchor!.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <>
      <div
        className="font-semibold py-2 px-4 hover:cursor-pointer hover:backdrop-brightness-90 rounded-lg"
        onClick={scrollToSection}
      >
        {children}
      </div>
    </>
  );
};
export default NavBar;
