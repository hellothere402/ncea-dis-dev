import * as React from "react";
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

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <Link href={href} className="self-stretch my-auto hover:text-gray-600 transition-colors">
    {children}
  </Link>
);

const Navigation: React.FC = () => (
  <nav className="flex gap-5 items-center my-auto max-md:flex-wrap">
    <NavItem href="/cognitive">Cognitive</NavItem>
    <NavItem href="/auditory">Auditory</NavItem>
    <NavItem href="/speech">Speech</NavItem>
    <Link href="/">
      <div className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5 hover:bg-gray-800 transition-colors cursor-pointer" role="button" tabIndex={0}>
        Home
      </div>
    </Link>
  </nav>
);

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => (
  <section className="max-w-4xl mx-auto px-4 mt-12 text-center">
    <h1 className="text-6xl font-bold tracking-tighter text-black mb-6 max-md:text-4xl">
      {title}
    </h1>
    <p className="text-xl leading-8 text-gray-700 mb-12">{description}</p>
  </section>
);

interface ContentSectionProps {
  title: string;
  content: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => (
  <section className="max-w-3xl mx-auto px-4 mt-12">
    <h2 className="text-2xl font-semibold text-black mb-4">{title}</h2>
    <p className="text-xl leading-8 text-gray-700">
      {content}
    </p>
  </section>
);

interface FooterProps {
  companyName: string;
  footerLinks: { category: string; links: string[] }[];
}

const Footer: React.FC<FooterProps> = ({companyName, footerLinks}) => (
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

const Speech: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <SectionHeader
          title="Speech"
          description="Navigating a website can present significant challenges for individuals with speech disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users."
        />

        <Image 
          src="/DALLE2024-05-2719.28.45-Avisuallyappealingcoolillustrationofapersonstrugglingwithcognitivedisabilitieswhileusingaclutteredwebsite.Thepersonissittingata-ezgif.com-webp-to-png-converter.png" 
          alt="Representative image" 
          width={1081} 
          height={640} 
          className="mx-auto mt-12 w-full max-w-4xl h-auto mb-16" 
        />

        <ContentSection
          title="Introduction"
          content="Navigating websites can be particularly challenging for individuals with speech disabilities. Despite the advancements in technology and web design, many online platforms fail to consider the needs of users who have difficulties with verbal communication. This essay will explore the specific hardships faced by individuals with speech disabilities when using websites, the current limitations of web design in addressing these challenges, and the solutions that can be implemented to create a more inclusive online environment."
        />
        
        <ContentSection
          title="Hardships Faced by Individuals with Speech Disabilities"
          content="Individuals with speech disabilities often encounter significant obstacles when navigating websites that require verbal interaction. For example, many websites utilize voice recognition systems for navigation, search functions, and customer service interactions. These systems are often not designed to accommodate users with speech impairments, leading to frustration and exclusion. Additionally, forms and interactive elements that require voice input can be particularly challenging, as they do not offer alternative methods for input. This lack of accessibility not only limits the usability of the website but also excludes a significant portion of the population from fully participating in the digital world."
        />

        <Image 
          src="/02ea053d85e9802a6b1fc2c679f38cf9a611c548d2b5094056bd8e0710769bb8.png" 
          alt="Informative graphic" 
          width={1000} 
          height={230} 
          className="mx-auto mt-16 w-full max-w-4xl h-auto mb-16" 
        />

        <ContentSection
          title="Conclusion"
          content="In conclusion, navigating websites presents unique challenges for individuals with speech disabilities, primarily due to the lack of accessible design features. The heavy reliance on voice recognition systems without providing alternative methods, combined with the absence of customization settings, creates significant barriers. However, by implementing solutions such as alternative input methods, customization voice recognition settings, and clear communication, web developers can create more inclusive digital environments. These changes not only improve accessibility for users with speech disabilities but also enhance the overall user experience, making the internet a more inclusive space for everyone."
        />

        <section className="max-w-4xl mx-auto px-4 mt-16">
          <h2 className="text-4xl font-semibold text-black mb-8">Other Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { src: "/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657.png", title: "Physical", href: "/physical" },
              { src: "/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f.png", title: "Auditory", href: "/auditory" },
            ].map((page, index) => (
              <Link key={index} href={page.href} className="group">
                <Image 
                  src={page.src} 
                  alt={`${page.title} Challenges`} 
                  width={400} 
                  height={377} 
                  className="w-full h-auto rounded-lg shadow-md transition-transform group-hover:scale-105"
                />
                <h3 className="mt-4 text-2xl font-medium text-black group-hover:text-gray-600 transition-colors">{page.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer
        companyName="Disability Website 2024"
        footerLinks={[
          { category: "Company", links: ["About", "Contact", "Policies"] },
          { category: "More", links: ["Physical", "Auditory", "Speech"] },
          { category: "Help", links: ["Policies", "About", "Contact"] },
        ]}
      />
    </div>
  );
};

export default Speech;