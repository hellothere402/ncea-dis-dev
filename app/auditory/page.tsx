import React from "react";
import Image from 'next/image';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

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
};

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-16 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="flex gap-5 mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start mt-3.5">
        <div className="text-2xl leading-9 text-black">Disability Website 2024</div>
        <div className="flex gap-2 pr-3.5 mt-8">
          <Image src="/Social Icons.png" alt="Social Icons" width={100} height={40} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 ml-auto">
        {[
          { title: "Company", items: ["About", "Contact", "Policies"] },
          { title: "More", items: ["Physical", "Auditory", "Speech"] },
          { title: "Help", items: ["Policies", "About", "Contact"] },
        ].map((section, idx) => (
          <nav key={idx} className="flex flex-col text-base font-medium leading-6 text-zinc-700">
            <h4 className="text-black mb-4">{section.title}</h4>
            {section.items.map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} className="mt-2 hover:text-black transition-colors">
                {item}
              </Link>
            ))}
          </nav>
        ))}
      </div>
    </div>
  </footer>
);

const AuditoryPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4">
        <section className="max-w-4xl w-full mt-12 text-center">
          <h1 className="text-6xl font-bold tracking-tighter text-black mb-6 max-md:text-4xl">
            Auditory
          </h1>
          <p className="text-xl leading-8 text-zinc-700 mb-12">
            Navigating a website can present significant challenges for individuals with Auditory disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users.
          </p>
        </section>
        
        <Image 
          src="/f873eca6592185d30b33387c742feb73b9d4a40676c9fba110426c1ea55db08d.png" 
          alt="Auditory Challenges" 
          width={1078} 
          height={602} 
          className="w-full max-w-4xl h-auto mb-16"
        />

        <article className="prose prose-lg max-w-3xl text-black">
          <h2>Introduction</h2>
          <br />
          <p>
            Navigating websites can be particularly challenging for individuals with auditory disabilities. Despite the advancements in technology, many websites still lack the necessary features to be fully accessible to people with hearing impairments. This essay will explore the specific hardships faced by individuals with auditory disabilities when using websites, the current limitations of web design in addressing these challenges, and the solutions that can be implemented to create a more inclusive online environment.
          </p>
          <br />
          <h2>Hardships Faced by Individuals with Auditory Disabilities:</h2>
          <br />
          <p>
            Individuals with auditory disabilities often encounter significant obstacles when navigating websites that rely heavily on audio content without providing equivalent text-based alternatives. Many websites use videos, podcasts, and other audio elements as primary means of delivering information, yet fail to include captions or transcripts. This exclusion makes it difficult for users with hearing impairments to access the content. Moreover, essential auditory cues, such as alerts or notifications, are often not supplemented with visual or vibratory signals, further hindering their ability to interact effectively with the website.
          </p>
        </article>

        <Image 
          src="/02ea053d85e9802a6b1fc2c679f38cf9a611c548d2b5094056bd8e0710769bb8.png" 
          alt="Web Accessibility Solutions" 
          width={1000} 
          height={230} 
          className="w-full max-w-4xl h-auto my-16"
        />

        <article className="prose prose-lg max-w-3xl text-black">
          <h2>Conclusion:</h2>
          <br />
          <p>
            In conclusion, navigating websites presents unique challenges for individuals with auditory disabilities, primarily due to the lack of accessible design features. The heavy reliance on audio content without providing equivalent alternatives, combined with the absence of visual alerts, creates significant barriers. However, by implementing solutions such as captions, transcripts, and real-time captioning, web developers can create more inclusive digital environments. These changes not only improve accessibility for users with auditory disabilities but also enhance the overall user experience, making the internet a more inclusive space for everyone.
          </p>
        </article>

        <section className="w-full max-w-4xl mt-16">
          <h2 className="text-4xl font-semibold text-black mb-8">Other Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/physical" className="group">
              <Image 
                src="/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657.png" 
                alt="Physical Challenges" 
                width={400} 
                height={377} 
                className="w-full h-auto rounded-lg shadow-md transition-transform group-hover:scale-105"
              />
              <h3 className="mt-4 text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">Physical</h3>
            </Link>
            <Link href="/cognitive" className="group">
              <Image 
                src="/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f.png" 
                alt="Cognitive Challenges" 
                width={400} 
                height={377} 
                className="w-full h-auto rounded-lg shadow-md transition-transform group-hover:scale-105"
              />
              <h3 className="mt-4 text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">Cognitive</h3>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AuditoryPage;