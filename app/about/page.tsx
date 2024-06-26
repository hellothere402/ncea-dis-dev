import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link href={href} className="self-stretch my-auto hover:text-gray-600 transition-colors">
    {children}
  </Link>
);

const NavButton: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href}>
    <button className="px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
      {children}
    </button>
  </Link>
);

const Header: React.FC = () => (
  <header className="flex justify-between items-center px-20 py-4 w-full bg-white shadow-sm max-md:px-5 max-md:flex-col">
    <Link href="/" className="text-xl font-medium leading-8 text-black hover:text-gray-600 transition-colors">
      Disability Website 2024
    </Link>
    <nav className="flex gap-5 items-center text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-4">
      <NavItem href="/contact">Contact</NavItem>
      <NavItem href="/auditory">Auditory</NavItem>
      <NavItem href="/cognitive">Cognitive</NavItem>
      <NavButton href="/">Home</NavButton>
    </nav>
  </header>
);

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-16 w-full bg-white max-md:px-5 max-md:mt-10">
    <hr className="h-px border-t border-neutral-200" />
    <div className="flex justify-between items-center mt-12 max-md:flex-col max-md:items-start">
      <div className="text-2xl leading-9 text-black">Disability Website 2024</div>
      <div className="flex gap-2 mt-4 md:mt-0">
        <Image
          src="/Social Icons.png"
          alt="Social media icons"
          width={100}
          height={40}
        />
      </div>
    </div>
  </footer>
);

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex flex-col items-center px-5 mt-16 w-full max-w-[1360px] mx-auto">
        <h1 className="text-6xl font-bold tracking-tighter text-black text-center mb-12 max-md:text-4xl">
          About Us
        </h1>
        <section className="flex gap-12 items-center max-md:flex-col">
          <article className="flex-1 max-w-2xl">
            <p className="text-2xl leading-9 text-zinc-700 mb-6">
              Welcome to our website!
            </p>
            <p className="text-xl leading-8 text-gray-800">
              We are committed to creating an inclusive digital environment for everyone. Our mission is to ensure that individuals with diverse abilities can navigate, interact, and engage with online content seamlessly. We focus on addressing the unique challenges faced by users with physical, cognitive, auditory, and speech disabilities by promoting accessible web design practices.
            </p>
            <p className="text-xl leading-8 text-gray-800 mt-6">
              Through comprehensive resources, innovative solutions, and community support, we aim to foster a more equitable and accessible digital world. Join us in our journey to break down barriers and build a future where every user, regardless of their abilities, can thrive online.
            </p>
          </article>
          <aside className="flex-1 max-w-md">
            <Image
              src="/Disability_Awareness-removebg-preview.png"
              alt="An inclusive digital community illustration"
              width={500}
              height={360}
              className="w-full h-auto"
            />
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}