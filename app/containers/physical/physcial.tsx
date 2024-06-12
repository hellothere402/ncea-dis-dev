import * as React from 'react';
import Image from 'next/image';

type ButtonProps = {
  label: string;
};

const Button: React.FC<ButtonProps> = ({ label }) => (
  <button className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5">
    {label}
  </button>
);

type ImageWithTextProps = {
  src: string;
  alt: string;
  label: string;
};

const ImageWithText: React.FC<ImageWithTextProps> = ({ src, alt, label }) => (
  <div className="flex flex-col grow text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-8">
    <Image loading="lazy" src={src} alt={alt} className="w-full aspect-[1.06]" />
    <div className="mt-6">{label}</div>
  </div>
);

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <h2 className="self-start ml-24 text-6xl font-bold tracking-tighter text-black border border-black border-solid max-md:max-w-full max-md:text-4xl">
    {title}
  </h2>
);

const NavBar: React.FC = () => (
  <nav className="flex gap-5 justify-between pt-6 pr-20 pb-1.5 w-full text-xl font-medium leading-8 text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <Image
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08ff16ef3b2100c9c8586591cfa62a7c8ed17d18ef4c745bd0560e0ceff98538?apiKey=400e6d64691245068da30088a66e8bb2&"
      alt="Logo"
      className="shrink-0 max-w-full aspect-[1.45] w-[194px]"
    />
    <div className="flex gap-5 items-center my-auto max-md:flex-wrap">
      <div className="self-stretch my-auto">Cognitive</div>
      <div className="self-stretch my-auto">Auditory</div>
      <div className="self-stretch my-auto">Speech</div>
      <Button label="Home" />
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="flex gap-5 px-px mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start mt-3.5">
        <div className="text-2xl leading-9 text-black">Disability Website 2024</div>
        <div className="flex gap-2 pr-20 mt-24 max-md:pr-5 max-md:mt-10">
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/199c9a3c64fa87237dabe74b1aff1fe617935141f37a07ba364b7012e90e628c?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social icon 1" className="shrink-0 w-10 aspect-square" />
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social icon 2" className="shrink-0 w-10 aspect-square" />
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social icon 3" className="shrink-0 w-10 aspect-square" />
          <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social icon 4" className="shrink-0 w-10 aspect-square" />
        </div>
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
              <div className="text-black">Company</div>
              <div className="mt-6">About</div>
              <div className="mt-6">Contact</div>
              <div className="mt-6">Policies</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
              <div className="text-black">More</div>
              <div className="mt-6">Physical</div>
              <div className="mt-6">Auditory</div>
              <div className="mt-6">Speech</div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
              <div className="text-black">Help</div>
              <div className="mt-6">Policies</div>
              <div className="mt-6">About</div>
              <div className="mt-6">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const Physical: React.FC = () => {
  return (
    <div className="flex flex-col bg-white border border-black border-solid shadow-sm">
      <NavBar />
      <main className="flex flex-col self-center px-5 mt-8 w-full max-w-[1216px] max-md:max-w-full">
        <SectionTitle title="Physical" />
        <section className="self-start mt-6 ml-24 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
          Navigating a website can present significant challenges for individuals with Physical disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users.
        </section>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e7bb0fd526e0017ce1f01d1d1eaa333f1962a461d8ed23d4856bf1c7c6287e3?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Example image" className="self-center mt-20 w-full aspect-[1.75] max-w-[1045px] max-md:mt-10 max-md:max-w-full" />
        <article className="self-center mt-44 text-xl font-medium leading-8 text-black w-[842px] max-md:mt-10 max-md:max-w-full">
          Understanding Physical hardships in Navigating a website:
          <br />
          <br />
          Navigating websites can be particularly challenging for individuals with physical disabilities, who often depend on assistive devices like screen readers, adaptive keyboards, and voice recognition software. These devices help users interact with digital content, but many websites are not optimized for such technologies, leading to significant barriers. Common issues include forms that are difficult to fill out using a keyboard, buttons that are not properly labeled for screen readers, and navigation menus that are complex and hard to use without a mouse.
          <br />
          <br />
          These challenges can be addressed by adopting inclusive design practices. Ensuring all interactive elements, such as buttons and links, are accessible via keyboard shortcuts is crucial. Additionally, using semantic HTML tags helps screen readers accurately interpret and convey content. Designers should also provide clear and concise labels for all form fields and interactive elements, and avoid relying solely on visual cues to convey important information.
          <br />
          <br />
        </article>
        <Image loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/699fec279db57750feac25d818e53a85751580a7d330a77443c8c495dcc9a389?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Infographic" className="self-center mt-32 w-full aspect-[3.23] max-w-[1151px] max-md:mt-10 max-md:max-w-full" />
        <section className="mt-16 ml-20 text-xl font-medium leading-8 text-black w-[842px] max-md:mt-10 max-md:max-w-full">
          Another important aspect is the implementation of ARIA (Accessible Rich Internet Applications) landmarks, which provide additional context to assistive technologies about the structure and functionality of web elements. Ensuring sufficient color contrast and allowing users to adjust text size can also greatly improve accessibility. By integrating these practices, web developers can create a more inclusive online environment. This not only benefits individuals with physical disabilities but also enhances the overall user experience for everyone. Through thoughtful design and a commitment to accessibility, we can break down barriers and ensure that the digital world is open to all.
        </section>
        <h2 className="mt-16 text-4xl font-semibold leading-10 text-black max-md:mt-10 max-md:max-w-full">Other Pages</h2>
        <section className="mt-8 max-w-full w-[840px]">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <ImageWithText src="https://cdn.builder.io/api/v1/image/assets/TEMP/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Physical category" label="Physical" />
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <ImageWithText src="https://cdn.builder.io/api/v1/image/assets/TEMP/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Auditory category" label="Auditory" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Physical;