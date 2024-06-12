import * as React from "react";

type NavbarProps = {
  items: string[];
};

type SectionProps = {
  title: string;
  content: string;
  imageUrl: string;
};

type FooterProps = {
  companyName: string;
  socialImages: string[];
  links: { title: string; items: string[] }[];
};

const Navbar: React.FC<NavbarProps> = ({ items }) => (
  <header className="flex gap-5 justify-between pt-6 pr-20 pb-1.5 w-full text-xl font-medium leading-8 text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08ff16ef3b2100c9c8586591cfa62a7c8ed17d18ef4c745bd0560e0ceff98538?apiKey=400e6d64691245068da30088a66e8bb2&"
      className="shrink-0 max-w-full aspect-[1.45] w-[194px]"
      alt="Company Logo"
    />
    <nav className="flex gap-5 items-center my-auto max-md:flex-wrap">
      {items.map((item, index) => (
        <a href={`#${item.toLowerCase()}`} className="self-stretch my-auto" key={index}>
          {item}
        </a>
      ))}
      <button className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5">
        Home
      </button>
    </nav>
  </header>
);

const Section: React.FC<SectionProps> = ({ title, content, imageUrl }) => (
  <section className="flex flex-col items-start self-center mt-8 w-full max-w-[1203px] max-md:max-w-full">
    <h2 className="ml-32 text-6xl font-bold tracking-tighter text-black border border-black border-solid max-md:max-w-full max-md:text-4xl">
      {title}
    </h2>
    <p className="mt-6 ml-32 text-2xl leading-9 text-zinc-500 max-md:max-w-full">{content}</p>
    <img
      loading="lazy"
      src={imageUrl}
      className="self-center mt-12 w-full aspect-[1.72] max-w-[1106px] max-md:mt-10 max-md:max-w-full"
      alt={title}
    />
  </section>
);

const Footer: React.FC<FooterProps> = ({ companyName, socialImages, links }) => (
  <footer className="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <hr className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="prose flex justify-between mt-12 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="text-2xl leading-9 text-black">{companyName}</h3>
        <div className="flex gap-2 mt-24 max-md:mt-10">
          {socialImages.map((src, idx) => (
            <img
              key={idx}
              loading="lazy"
              src={src}
              className="shrink-0 w-10 aspect-square"
              alt={`${companyName} social link ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 w-full">
        {links.map((link, idx) => (
          <nav key={idx} className="flex flex-col text-base font-medium leading-6 text-zinc-700">
            <h4 className="text-black">{link.title}</h4>
            {link.items.map((item, index) => (
              <a key={index} href={`#${item.toLowerCase()}`} className="mt-6">
                {item}
              </a>
            ))}
          </nav>
        ))}
      </div>
    </div>
  </footer>
);

const Cognitive: React.FC = () => (
  <main>
    <Navbar items={["Cognitive", "Auditory", "Speech"]} />
    <Section
      title="Cognitive"
      content="Navigating a website can present significant challenges for individuals with cognitive disabilities, impacting their ability to process information, make decisions, and complete tasks efficiently. This page aims to explore the effects of these challenges and provide insights into creating more inclusive and accessible web experiences for all users."
      imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/a88e8ea6f3cc9f15aed7c4d0db45d8ee004a22c975b8bcc1b592375433b02839?apiKey=400e6d64691245068da30088a66e8bb2&"
    />
    <article className="self-center mt-24 text-xl font-medium leading-8 text-black w-[842px] max-md:mt-10 max-md:max-w-full">
      <h3>Understanding Cognitive Disabilities and Web Navigation</h3>
      <p>
        Cognitive disabilities encompass a wide range of conditions that affect an individual's mental processes, including memory, problem-solving, attention, and comprehension. People with cognitive disabilities may have difficulty with reading, understanding complex instructions, staying focused on tasks, or remembering sequences of actions. These challenges can make navigating websites particularly daunting, as users may struggle with confusing layouts, intricate menus, or the sheer volume of information presented.
      </p>
      <h3>Common Barriers Faced by Users:</h3>
      <ul>
        <li>Complex Navigation Structures: Websites with complicated navigation systems can be overwhelming for users with cognitive disabilities. Multiple layers of menus, lack of clear labels, and inconsistent placement of navigation elements can lead to confusion and frustration.</li>
        <li>Information Overload: Websites often present large amounts of information on a single page, which can be overwhelming and difficult to process for users with cognitive disabilities. Long paragraphs, technical jargon, and dense content can hinder comprehension and retention.</li>
        <li>Memory Demands: Many websites require users to remember multiple steps to complete a task, such as filling out forms or navigating through e-commerce checkouts. For individuals with cognitive disabilities, remembering these steps can be a significant challenge, leading to incomplete or abandoned tasks.</li>
      </ul>
    </article>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea053d85e9802a6b1fc2c679f38cf9a611c548d2b5094056bd8e0710769bb8?apiKey=400e6d64691245068da30088a66e8bb2&"
      className="mt-10 w-full aspect-[4.35] max-md:max-w-full"
      alt="Example cognitive loading image"
    />
    <section className="self-center mt-10 text-xl font-medium leading-8 text-black w-[842px] max-md:max-w-full">
      <h3>Conclusion</h3>
      <p>
        Creating an accessible web environment for individuals with cognitive disabilities requires thoughtful design and consideration of the unique challenges these users face. By simplifying navigation, managing information load, providing assistive features, and minimizing distractions, web designers can create more inclusive online experiences. Prioritizing accessibility not only benefits users with cognitive disabilities but also enhances the overall usability and satisfaction for all website visitors.
      </p>
    </section>
    <aside className="mt-24 ml-2.5 text-4xl font-semibold leading-10 text-black max-md:mt-10">
      Other Pages
    </aside>
    <section className="mt-8 ml-3 max-w-full w-[840px]">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {[
          { title: "Physical", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657?apiKey=400e6d64691245068da30088a66e8bb2&" },
          { title: "Auditory", src: "https://cdn.builder.io/api/v1/image/assets/TEMP/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f?apiKey=400e6d64691245068da30088a66e8bb2&" },
        ].map((item, index) => (
          <article key={index} className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img loading="lazy" src={item.src} className="w-full aspect-[1.06]" alt={`${item.title} Thumbnail`} />
            <h4 className="mt-6 text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-8">
              {item.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
    <Footer
      companyName="Disability Website 2024"
      socialImages={[
        "https://cdn.builder.io/api/v1/image/assets/TEMP/199c9a3c64fa87237dabe74b1aff1fe617935141f37a07ba364b7012e90e628c?apiKey=400e6d64691245068da30088a66e8bb2&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?apiKey=400e6d64691245068da30088a66e8bb2&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?apiKey=400e6d64691245068da30088a66e8bb2&",
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?apiKey=400e6d64691245068da30088a66e8bb2&",
      ]}
      links={[
        { title: "Company", items: ["About", "Contact", "Polices"] },
        { title: "More", items: ["Physical", "Auditory", "Speech"] },
        { title: "Help", items: ["Polices", "About", "Contact"] },
      ]}
    />
  </main>
);

export default Cognitive;