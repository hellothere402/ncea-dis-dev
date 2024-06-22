import * as React from "react";
import Image from 'next/image';
import Link from 'next/link';

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
  <section>
    <header className="flex flex-col self-center mt-8 w-full max-w-[1191px] max-md:max-w-full">
      <h1 className="self-start ml-32 text-6xl font-bold tracking-tighter text-black border border-black border-solid max-md:max-w-full max-md:text-4xl">
        {title}
      </h1>
      <p className="self-start mt-6 ml-32 text-2xl leading-9 text-zinc-500 max-md:max-w-full">{description}</p>
    </header>
  </section>
);

interface ContentSectionProps {
  title: string;
  content: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ title, content }) => (
  <section>
    <h2 className="self-center mt-24 ml-14 text-xl font-medium leading-8 text-black w-[842px] max-md:mt-10 max-md:max-w-full">{title}</h2>
    <p className="self-center mt-6 ml-14 text-xl font-medium leading-8 text-black w-[842px] max-md:mt-10 max-md:max-w-full">
      {content}
    </p>
  </section>
);

interface FooterProps {
  companyName: string;
  footerLinks: { category: string; links: string[] }[];
}

const Footer: React.FC<FooterProps> = ({ companyName, footerLinks }) => (
  <footer className="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <hr className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="flex gap-5 px-px mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-start mt-3.5">
        <div className="text-2xl leading-9 text-black">{companyName}</div>
        <div className="flex gap-2 pr-20 mt-24 max-md:pr-5 max-md:mt-10">
          {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
            <Image key={index} src={`/social-icons/${social}.png`} alt={`${social} icon`} width={40} height={40} className="shrink-0 w-10 aspect-square" />
          ))}
        </div>
      </div>
      <div className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {footerLinks.map((category, index) => (
            <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
                <div className="text-black">{category.category}</div>
                {category.links.map((link, linkIndex) => (
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

const Speech: React.FC = () => {
  return (
    <section className="flex flex-col bg-white border border-black border-solid shadow-sm">
      <header className="flex gap-5 justify-between pt-6 pr-20 pb-1.5 w-full text-xl font-medium leading-8 text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <Link href="/">
          <Image src="/Disability_Awareness-removebg-preview.png" alt="Logo" width={194} height={134} className="shrink-0 max-w-full aspect-[1.45] w-[194px]" />
        </Link>
        <Navigation />
      </header>

      <SectionHeader
        title="Speech"
        description="Navigating a website can present significant challenges for individuals with speech disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users."
      />

      <Image src="/DALL·E 2024-05-27 19.28.45 - A visually appealing, cool illustration of a person struggling with cognitive disabilities while using a cluttered website. The person is sitting at a.webp" alt="Representative image" width={1081} height={640} className="self-center mt-12 w-full aspect-[1.69] max-w-[1081px] max-md:mt-10 max-md:max-w-full" />

      <ContentSection
        title="Introduction:"
        content="Navigating websites can be particularly challenging for individuals with speech disabilities. Despite the advancements in technology and web design, many online platforms fail to consider the needs of users who have difficulties with verbal communication. This essay will explore the specific hardships faced by individuals with speech disabilities when using websites, the current limitations of web design in addressing these challenges, and the solutions that can be implemented to create a more inclusive online environment."
      />
      
      <ContentSection
        title="Hardships Faced by Individuals with Speech Disabilities:"
        content="Individuals with speech disabilities often encounter significant obstacles when navigating websites that require verbal interaction. For example, many websites utilize voice recognition systems for navigation, search functions, and customer service interactions. These systems are often not designed to accommodate users with speech impairments, leading to frustration and exclusion. Additionally, forms and interactive elements that require voice input can be particularly challenging, as they do not offer alternative methods for input. This lack of accessibility not only limits the usability of the website but also excludes a significant portion of the population from fully participating in the digital world."
      />

      <Image src="/DALL·E 2024-05-27 19.35.51 - A modern, aesthetic illustration of a person struggling with cognitive disabilities while using a cluttered website. The person sits at a stylish, min.webp" alt="Informative graphic" width={1000} height={230} className="mt-48 w-full aspect-[4.35] max-md:mt-10 max-md:max-w-full" />

      <ContentSection
        title="Conclusion"
        content="In conclusion, navigating websites presents unique challenges for individuals with speech disabilities, primarily due to the lack of accessible design features. The heavy reliance on voice recognition systems without providing alternative methods, combined with the absence of customization settings, creates significant barriers. However, by implementing solutions such as alternative input methods, customization voice recognition settings, and clear communication, web developers can create more inclusive digital environments. These changes not only improve accessibility for users with speech disabilities but also enhance the overall user experience, making the internet a more inclusive space for everyone."
      />

      <h2 className="self-start mt-7 ml-2.5 text-4xl font-semibold leading-10 text-black">Other Pages</h2>

      <section className="mt-8 ml-3 max-w-full w-[840px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {[
            { src: "/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657.png", title: "Physical", href: "/physical" },
            { src: "/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f.png", title: "Auditory", href: "/auditory" },
          ].map((page, index) => (
            <article key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <Link href={page.href}>
                <figure className="flex flex-col grow text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-8">
                  <Image src={page.src} alt={page.title} width={400} height={377} className="w-full aspect-[1.06]" />
                  <figcaption className="mt-6 hover:text-gray-600 transition-colors">{page.title}</figcaption>
                </figure>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <Footer
        companyName="Disability Website 2024"
        footerLinks={[
          { category: "Company", links: ["About", "Contact", "Policies"] },
          { category: "More", links: ["Physical", "Auditory", "Speech"] },
          { category: "Help", links: ["Policies", "About", "Contact"] },
        ]}
      />
    </section>
  );
};

export default Speech;