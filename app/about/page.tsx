import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';

type NavItemProps = {
  href: string;
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ href, text }) => (
  <Link href={href} className="self-stretch my-auto">
    {text}
  </Link>
);

const NavButton: React.FC<{ href: string, text: string }> = ({ href, text }) => (
  <Link href={href}>
  <button className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5">
    {text}
  </button>
  </Link>
);

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex gap-5 justify-center px-20 py-14 w-full text-xl font-medium leading-8 text-black bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <Link href="/" className="flex-auto my-auto" >
        <h1>Disability Website 2024</h1>
      </Link>
        <nav className="flex gap-5 items-center whitespace-nowrap max-md:flex-wrap">
          <NavItem href="/contact" text="Contact" />
          <NavItem href="/auditory" text="Auditory" />
          <NavItem href="/cognitive" text="Cognitive" />
          <NavButton href="/" text="Home" />
        </nav>
      </header>
      <main className="self-center mt-20 w-full max-w-[1360px] max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 text-black max-md:mt-8 max-md:max-w-full">
              <h2 className="text-6xl font-bold tracking-tighter max-md:max-w-full max-md:text-4xl">
                About
              </h2>
              <p className="mt-6 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
                Welcome!
              </p>
              <p className="mt-6 text-xl font-medium leading-8 max-md:max-w-full">
                Welcome to our website, where we are committed to creating an inclusive digital environment for everyone. Our mission is to ensure that individuals with diverse abilities can navigate, interact, and engage with online content seamlessly. We focus on addressing the unique challenges faced by users with physical, cognitive, auditory, and speech disabilities by promoting accessible web design practices. Through comprehensive resources, innovative solutions, and community support, we aim to foster a more equitable and accessible digital world. Join us in our journey to break down barriers and build a future where every user, regardless of their abilities, can thrive online.
              </p>
            </div>
          </article>
          <aside className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <Image
              loading="lazy"
              src="/Disability_Awareness-removebg-preview.png"
              alt="An inclusive digital community illustration"
              className="grow mt-20 w-full aspect-[1.39] max-md:mt-10 max-md:max-w-full"
              width={100}
              height={100}
            />
          </aside>
        </section>
      </main>
      <footer className="flex flex-col px-20 pb-12 mt-48 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <hr className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
        <div className="mt-16 text-2xl leading-9 text-black max-md:mt-10 max-md:max-w-full">
          Disability Website 2024
        </div>
        <div className="flex gap-2 self-start mt-24 max-md:mt-10">
          <Image
            loading="lazy"
            src="/Social Icons.png"
            alt="Social media icon 1"
            className="shrink-0 w-10 aspect-square"
            width={100}
            height={100}
          />
        </div>
      </footer>
    </div>
  );
}