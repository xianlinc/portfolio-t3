import NavBar from "./Nav";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Works = () => {
  return (
    <div className="max-w-[1240px] w-full h-screen px-12 mx-auto">
      <NavBar />
      <div className="mx-auto">
        <Grid />
      </div>
    </div>
  );
};

const Grid = () => {
  const placeholderUrl = "https://picsum.photos/200/300";
  const Placeholder = () => {
    return (
      <GridItem
        href={placeholderUrl}
        title="titletest"
        thumbnail={placeholderUrl}
      >
        <p>
          tool that allows users to collect and analyse data from the Twitter
          cryptocurrency space based on network analysis.
        </p>
      </GridItem>
    );
  };
  return (
    <div className="mx-48">
      <h1 className="text-4xl font-bold my-12">Works</h1>
      <div className="flex flex-wrap justify-around gap-12">
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
      </div>
    </div>
  );
};

interface GridItemProps {
  children: any;
  href: string;
  title: string;
  thumbnail: string;
}
const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => {
  const router = useRouter();
  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    alert("clicked");
    //router.push(href);
  };
  return (
    <div className="text-center max-w-xs" onClick={() => handleClick}>
      <Image
        src={thumbnail}
        alt={title}
        width={300}
        height={150}
        layout="fixed"
        loading="lazy"
        style={{ borderRadius: "10px" }}
      />
      <p className="text-2xl font-semibold">{title}</p>
      {children}
    </div>
  );
};

export default Works;
