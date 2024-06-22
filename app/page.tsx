"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width: number;
  height: number;
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

type MenuButtonProps = {
  text: string;
  onClick: () => void;
};

const ResponsiveImage: React.FC<ImageProps> = ({ src, alt, className, width, height }) => (
  <Image src={src} alt={alt} className={className} width={width} height={height} />
);

const NavLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href} className="self-stretch my-auto">
    {children}
  </Link>
);

const MenuButton: React.FC<MenuButtonProps> = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
  >
    {text}
  </button>
);

const Header: React.FC = () => {
  return (
    <header className="flex gap-5 items-start px-20 pt-11 w-full bg-white shadow-sm max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex-auto self-start">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="mt-8 text-xl font-medium leading-8 text-black">
              Disability Website 2024
            </div>
          </div>
         
            <ResponsiveImage
              src="/Disability_Awareness-removebg-preview.png"
              alt="Header Image"
              className="grow w-full aspect-[1]"
              width={1000}
              height={500}
            />
        </div>
      </div>
      <nav className="flex gap-5 items-center my-auto text-xl font-medium leading-8 text-black whitespace-nowrap max-md:flex-wrap">
        <NavLink href="/cognitive">Cognitive</NavLink>
        <NavLink href="/auditory">Auditory</NavLink>
        <NavLink href="/speech">Speech</NavLink>
        <NavLink href="/">
           <MenuButton text="Home" onClick={() => {}} />
        </NavLink>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="flex gap-5 mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start mt-3.5">
        <div className="text-2xl leading-9 text-black">Disability Website</div>
        <div className="flex gap-2 pr-3.5 mt-24 max-md:mt-10">
          <ResponsiveImage
            src="/Social Icons.png"
            alt="Social Icon 1"
            width={200}
              height={200}
          />
        </div>
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center mr-8 text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
              <div className="text-black">Pages</div>
              <div className="mt-6">Physical</div>
              <div className="mt-6">Auditory</div>
              <div className="mt-6">Cognitive</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
              <div className="text-black">About</div>
              <div className="mt-6">Home</div>
              <div className="mt-6">Contact</div>
              <div className="mt-6">Help</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
              <div className="text-black">More</div>
              <div className="mt-6">Cognitive</div>
              <div className="mt-6">Contact</div>
              <div className="mt-6">Auditory</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Home: React.FC = () => {
  const [showWelcome, setShowWelcome] = React.useState(true);

  const toggleWelcome = () => {
    setShowWelcome(!showWelcome);
  };

  return (
    <div className="flex flex-col bg-white">
      <Header />
      <main className="flex flex-col self-center mt-32 w-full text-black max-w-[1087px] max-md:mt-10 max-md:max-w-full">
        {showWelcome && (
          <h1 className="self-end pr-52 mr-7 ml-52 text-6xl font-bold tracking-tighter text-center max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
            Welcome
          </h1>
        )}
        <ResponsiveImage
          src="/DALL·E 2024-05-28 18.56.14 - A cool and engaging illustration for the welcome page of a website about disability. The scene features abstract elements representing inclusivity and.webp"
          alt="Main Image"
          className="self-center mt-28 w-full aspect-[1.43] max-w-[1031px] max-md:mt-10 max-md:max-w-full"
          width={1031}
          height={721}
        />
        <section className="self-start mt-48 text-4xl font-semibold leading-10 max-md:mt-10 max-md:max-w-full">
          Disability website
        </section>
        <p className="mt-2 text-2xl leading-9 text-zinc-500 w-[625px] max-md:max-w-full">
          Welcome to our website, a dedicated space where inclusivity, accessibility, and empowerment converge. Here, we strive to create an environment that supports and celebrates individuals with diverse abilities. Our goal is to provide valuable resources, insights, and connections that enhance the lives of those with disabilities. Whether you're seeking information, looking for community support, or exploring new opportunities we thank you for joining us on this journey towards a more inclusive and accessible world.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;