import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type ButtonProps = {
  label: string;
  href: string;
};

const Button: React.FC<ButtonProps> = ({ label, href }) => (
  <Link href={href}>
    <button className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
      {label}
    </button>
  </Link>
);

type ImageWithTextProps = {
  src: string;
  alt: string;
  label: string;
  href: string;
};

const ImageWithText: React.FC<{ src: string; alt: string; label: string; href: string }> = ({ src, alt, label, href }) => (
  <Link href={href} className="flex flex-col text-xl font-medium leading-8 text-black whitespace-nowrap hover:text-gray-600 transition-colors">
    <div className="relative w-full aspect-[1.06]">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" className="rounded-lg" />
    </div>
    <div className="mt-6">{label}</div>
  </Link>
);

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h1 className="text-6xl font-bold tracking-tighter text-black text-center mb-6 max-md:text-4xl">
    {title}
  </h1>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="self-stretch my-auto hover:text-gray-600 transition-colors">
    {children}
  </Link>
);

const NavBar: React.FC = () => (
  <header className="flex justify-between items-center px-20 py-4 w-full bg-white shadow-sm max-md:px-5 max-md:flex-col">
    <div className="flex items-center">
      <Link href="/">
        <Image
          src="/Disability_Awareness-removebg-preview.png"
          alt="Logo"
          width={96}
          height={66}
          className="object-contain"
        />
      </Link>
      <div className="text-xl font-medium leading-8 text-black ml-4">
        Disability Website 2024
      </div>
    </div>
    <nav className="flex gap-5 items-center text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-4">
      <NavLink href="/cognitive">Cognitive</NavLink>
      <NavLink href="/auditory">Auditory</NavLink>
      <NavLink href="/speech">Speech</NavLink>
      <NavLink href="/">
        <button className="px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors">
          Home
        </button>
      </NavLink>
    </nav>
  </header>
);

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="flex gap-5 px-px mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start mt-3.5">
        <div className="text-2xl leading-9 text-black">Disability Website 2024</div>
        <div className="flex gap-2 mt-8">
          <Image src="/Social Icons.png" alt="Social Icons" width={100} height={40} />
        </div>
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {[
            { title: "Company", links: ["About", "Contact", "Policies"] },
            { title: "More", links: ["Physical", "Auditory", "Speech"] },
            { title: "Help", links: ["Policies", "About", "Contact"] },
          ].map((section, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
                <div className="text-black">{section.title}</div>
                {section.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={`/${link.toLowerCase()}`} className="mt-6 hover:text-gray-600 transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

const Physical: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavBar />
      <main className="flex-grow flex flex-col items-center px-5 mt-8 w-full max-w-[1216px] mx-auto">
        <SectionTitle title="Physical" />
        <section className="mt-6 text-2xl leading-9 text-zinc-700 max-w-3xl text-center">
          Navigating a website can present significant challenges for individuals with Physical disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users.
        </section>
        <div className="relative w-full max-w-[1045px] aspect-[1.75] mt-16">
          <Image 
            src="/DALLE2024-05-2719.28.45-Avisuallyappealingcoolillustrationofapersonstrugglingwithcognitivedisabilitieswhileusingaclutteredwebsite.Thepersonissittingata-ezgif.com-webp-to-png-converter.png" 
            alt="Person with physical disability using a computer" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md" 
          />
        </div>
        <article className="mt-16 text-xl leading-8 text-gray-800 max-w-3xl">
          <h3 className="text-3xl font-semibold text-black mb-6">Understanding Physical Hardships in Navigating a Website:</h3>
          <p className="mb-6">
            Navigating websites can be particularly challenging for individuals with physical disabilities, who often depend on assistive devices like screen readers, adaptive keyboards, and voice recognition software. These devices help users interact with digital content, but many websites are not optimized for such technologies, leading to significant barriers. Common issues include forms that are difficult to fill out using a keyboard, buttons that are not properly labeled for screen readers, and navigation menus that are complex and hard to use without a mouse.
          </p>
          <p className="mb-6">
            These challenges can be addressed by adopting inclusive design practices. Ensuring all interactive elements, such as buttons and links, are accessible via keyboard shortcuts is crucial. Additionally, using semantic HTML tags helps screen readers accurately interpret and convey content. Designers should also provide clear and concise labels for all form fields and interactive elements, and avoid relying solely on visual cues to convey important information.
          </p>
        </article>
        <div className="relative w-full max-w-[1151px] aspect-[3.23] mt-16">
          <Image 
            src="/DALLE2024-05-2719.35.51-Amodernaestheticillustrationofapersonstrugglingwithcognitivedisabilitieswhileusingaclutteredwebsite.Thepersonsitsatastylishmin-ezgif.com-webp-to-png-converter.png" 
            alt="Inclusive web design infographic" 
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md" 
          />
        </div>
        <section className="mt-16 text-xl leading-8 text-gray-800 max-w-3xl">
          <p>
            Another important aspect is the implementation of ARIA (Accessible Rich Internet Applications) landmarks, which provide additional context to assistive technologies about the structure and functionality of web elements. Ensuring sufficient color contrast and allowing users to adjust text size can also greatly improve accessibility. By integrating these practices, web developers can create a more inclusive online environment. This not only benefits individuals with physical disabilities but also enhances the overall user experience for everyone. Through thoughtful design and a commitment to accessibility, we can break down barriers and ensure that the digital world is open to all.
          </p>
        </section>
        <h2 className="mt-24 text-4xl font-semibold text-black self-start">Other Pages</h2>
        <section className="mt-8 w-full max-w-[840px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImageWithText 
              src="/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657.png" 
              alt="Cognitive category" 
              label="Cognitive" 
              href="/cognitive" 
            />
            <ImageWithText 
              src="/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f.png" 
              alt="Auditory category" 
              label="Auditory" 
              href="/auditory" 
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Physical;