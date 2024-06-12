import * as React from "react";
import Image from 'next/image';

type NavItemProps = {
  text: string;
};

const NavItem: React.FC<NavItemProps> = ({ text }) => (
  <span className="self-stretch my-auto">{text}</span>
);

const NavButton: React.FC<{ text: string }> = ({ text }) => (
  <button className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5">
    {text}
  </button>
);

export default function About() {
  return (
    <div className="flex flex-col bg-white">
      <header className="flex gap-5 justify-center px-20 py-14 w-full text-xl font-medium leading-8 text-black bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <h1 className="flex-auto my-auto">Disability Website 2024</h1>
        <nav className="flex gap-5 items-center whitespace-nowrap max-md:flex-wrap">
          <NavItem text="Contact" />
          <NavItem text="Auditory" />
          <NavItem text="Cognitive" />
          <NavButton text="Home" />
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f32b022a91cfae569f5d3762c3a9a829ded3443d772ae845bf5d3ea8f678629e?apiKey=400e6d64691245068da30088a66e8bb2&"
              alt="An inclusive digital community illustration"
              className="grow mt-20 w-full aspect-[1.39] max-md:mt-10 max-md:max-w-full"
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
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/199c9a3c64fa87237dabe74b1aff1fe617935141f37a07ba364b7012e90e628c?apiKey=400e6d64691245068da30088a66e8bb2&"
            alt="Social media icon 1"
            className="shrink-0 w-10 aspect-square"
          />
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?apiKey=400e6d64691245068da30088a66e8bb2&"
            alt="Social media icon 2"
            className="shrink-0 w-10 aspect-square"
          />
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?apiKey=400e6d64691245068da30088a66e8bb2&"
            alt="Social media icon 3"
            className="shrink-0 w-10 aspect-square"
          />
          <Image
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?apiKey=400e6d64691245068da30088a66e8bb2&"
            alt="Social media icon 4"
            className="shrink-0 w-10 aspect-square"
          />
        </div>
      </footer>
    </div>
  );
}