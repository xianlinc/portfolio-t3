const NavBar = () => {
  return (
    <div className="max-width-[1240px] w-full px-10 items-center mx-auto">
      <div className="py-3 sticky top-0 z-50 bg-white border-slate-300 border-b">
        <div className="flex justify-between">
          <a href="/" className="font-mono font-bold text-2xl ml-0">
            Evan
          </a>
          <div className="flex flex-wrap justify-end items-center ">
            <CustomLink href="#about">About me</CustomLink>
            <CustomLink href="#skills">Skills</CustomLink>
            <CustomLink href="#experience">Experience</CustomLink>
            <CustomLink href="#contact">Contact Me</CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
};

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
export default NavBar;
