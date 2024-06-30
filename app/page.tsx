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
    <header className="flex justify-between items-center px-20 py-4 w-full bg-white shadow-sm max-md:px-5 max-md:flex-col">
      <div className="flex items-center">
        <div className="text-xl font-medium leading-8 text-black mr-4">
          Disability Website 2024
        </div>
        <div className="">
          <ResponsiveImage
            src="/Disability_Awareness-removebg-preview.png"
            alt="Header Image"
            className="object-contain"
            width={150}
            height={150}
          />
        </div>
      </div>
      <nav className="flex gap-5 items-center text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-4">
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
                <NavLink href="/physical"><div className="mt-6">Physical</div></NavLink>
                <NavLink href="/auditory"><div className="mt-6">Auditory</div></NavLink>
                <NavLink href="/cognitive"><div className="mt-6">Cognitive</div></NavLink>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
                <div className="text-black">About</div>
                <NavLink href="/"><div className="mt-6">Home</div></NavLink>
                <NavLink href="/contact"><div className="mt-6">Contact</div></NavLink>
                <NavLink href="/help"><div className="mt-6">Help</div></NavLink>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
                <div className="text-black">More</div>
                <NavLink href="/cognitive"><div className="mt-6">Cognitive</div></NavLink>
                <NavLink href="/contact"><div className="mt-6">Contact</div></NavLink>
                <NavLink href="/auditory"><div className="mt-6">Auditory</div></NavLink>
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
        <main className="flex flex-col items-center mt-12 w-full text-black max-w-[1087px] mx-auto px-4">
          {showWelcome && (
            <h1 className="text-6xl font-bold tracking-tighter text-center mb-12 max-md:text-4xl">
              Welcome
            </h1>
          )}
          <ResponsiveImage
            src="/DALLE2024-05-2818.56.14-Acoolandengagingillustrationforthewelcomepageofawebsiteaboutdisability.Thescenefeaturesabstractelementsrepresentinginclusivityand-ezgif.com-webp-to-png-converter.png"
            alt="Main Image"
            className="w-full max-w-[1031px] h-auto"
            width={1031}
            height={721}
          />
          <section className="mt-16 max-w-3xl text-center">
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Disability Website
            </h2>
            <p className="text-xl leading-relaxed text-zinc-700">
              Welcome to our website, a dedicated space where inclusivity, accessibility, and empowerment converge. Here, we strive to create an environment that supports and celebrates individuals with diverse abilities. Our goal is to provide valuable resources, insights, and connections that enhance the lives of those with disabilities.
            </p>
            <p className="text-xl leading-relaxed text-zinc-700 mt-4">
              Whether you're seeking information, looking for community support, or exploring new opportunities, we thank you for joining us on this journey towards a more inclusive and accessible world.
            </p>
          </section>
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Home;