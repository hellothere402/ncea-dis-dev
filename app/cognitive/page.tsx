import * as React from "react";
import Image from "next/image";
import Link from 'next/link';
import {useRouter} from 'next/router';

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} className="self-stretch my-auto hover:text-gray-600 transition-colors">
    {children}
  </Link>
);

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4 w-full bg-white shadow-sm max-md:px-5 max-md:flex-col">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/Disability_Awareness-removebg-preview.png"
            alt="Company Logo"
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
};

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-5 w-full bg-white max-md:px-5 max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="flex gap-5 mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start mt-3.5">
        <div className="text-2xl leading-9 text-black">Disability Website</div>
        <div className="flex gap-2 pr-3.5 mt-24 max-md:mt-10">
          <Image
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

const CognitivePage: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <main className="flex-grow">
      <section className="flex flex-col items-center mt-12 px-4">
        <h1 className="text-6xl font-bold tracking-tighter text-center text-black mb-6 max-md:text-4xl">
          Cognitive
        </h1>
        <p className="text-xl leading-8 text-zinc-700 max-w-3xl text-center mb-12">
          Navigating a website can present significant challenges for individuals with cognitive disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users.
        </p>
        <Image
          src="/DALLE2024-05-2719.28.45-Avisuallyappealingcoolillustrationofapersonstrugglingwithcognitivedisabilitieswhileusingaclutteredwebsite.Thepersonissittingata-ezgif.com-webp-to-png-converter.png"
          alt="Cognitive Disabilities Illustration"
          width={1000}
          height={581}
          className="w-full max-w-4xl h-auto mb-16"
        />
      </section>

      <article className="max-w-3xl mx-auto px-4 text-lg leading-7 text-zinc-700">
        <h2 className="text-3xl font-semibold text-black mb-4">Understanding Cognitive Disabilities and Web Navigation</h2>
        <p className="mb-6">
          Cognitive disabilities encompass a wide range of conditions that affect an individual's mental processes, including memory, problem-solving, attention, and comprehension. People with cognitive disabilities may have difficulty with reading, understanding complex instructions, staying focused on tasks, or remembering sequences of actions. These challenges can make navigating websites particularly daunting, as users may struggle with confusing layouts, intricate menus, or the sheer volume of information presented.
        </p>
        <h3 className="text-2xl font-semibold text-black mb-4">Common Barriers Faced by Users:</h3>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Complex Navigation Structures: Websites with complicated navigation systems can be overwhelming for users with cognitive disabilities. Multiple layers of menus, lack of clear labels, and inconsistent placement of navigation elements can lead to confusion and frustration.</li>
          <li className="mb-2">Information Overload: Websites often present large amounts of information on a single page, which can be overwhelming and difficult to process for users with cognitive disabilities. Long paragraphs, technical jargon, and dense content can hinder comprehension and retention.</li>
          <li>Memory Demands: Many websites require users to remember multiple steps to complete a task, such as filling out forms or navigating through e-commerce checkouts. For individuals with cognitive disabilities, remembering these steps can be a significant challenge, leading to incomplete or abandoned tasks.</li>
        </ul>
        <Image
          src="/02ea053d85e9802a6b1fc2c679f38cf9a611c548d2b5094056bd8e0710769bb8.png"
          alt="Example cognitive loading image"
          width={1000}
          height={230}
          className="w-full h-auto my-8"
        />
        <h2 className="text-3xl font-semibold text-black mb-4">Conclusion</h2>
        <p className="mb-8">
          Creating an accessible web environment for individuals with cognitive disabilities requires thoughtful design and consideration of the unique challenges these users face. By simplifying navigation, managing information load, providing assistive features, and minimizing distractions, web designers can create more inclusive online experiences. Prioritizing accessibility not only benefits users with cognitive disabilities but also enhances the overall usability and satisfaction for all website visitors.
        </p>
      </article>

      <section className="max-w-4xl mx-auto px-4 mt-16">
        <h2 className="text-4xl font-semibold text-black mb-8">Other Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Physical", src: "/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657.png" },
            { title: "Auditory", src: "/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f.png" },
          ].map((item, index) => (
            <article key={index} className="flex flex-col">
              <Image 
                src={item.src} 
                alt={`${item.title} Thumbnail`} 
                width={400} 
                height={377} 
                className="w-full h-auto rounded-lg shadow-md"
              />
              <h3 className="mt-4 text-2xl font-medium text-black">
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CognitivePage;