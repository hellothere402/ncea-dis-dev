import * as React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

type PageLinkProps = {
  text: string;
};

const PageLink: React.FC<PageLinkProps> = ({ text }) => (
  <a href="#" className="self-stretch my-auto">
    {text}
  </a>
);

type ButtonProps = {
  text: string;
};

const Button: React.FC<ButtonProps> = ({ text }) => (
  <button
    className="justify-center self-stretch px-6 py-3.5 text-base text-white bg-black rounded-lg shadow-sm max-md:px-5"
  >
    {text}
  </button>
);

const FooterColumn: React.FC<{ title: string; links: string[] }> = ({
  title,
  links,
}) => (
  <div className="flex flex-col grow justify-center text-base font-medium leading-6 whitespace-nowrap text-zinc-700 max-md:mt-8">
    <div className="text-black">{title}</div>
    {links.map((link, index) => (
      <a key={index} href="#" className="mt-6">
        {link}
      </a>
    ))}
  </div>
);

export default function Auditory() {
  return (
    <>
      <div className="flex flex-col bg-white border border-black border-solid shadow-sm">
        <header className="flex gap-5 justify-between items-start pt-10 pr-20 w-full text-xl font-medium leading-8 text-black whitespace-nowrap bg-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b4087481b958f8561589f4f298e67a6f083de11f36b22e742cff3df3a338ae8?apiKey=400e6d64691245068da30088a66e8bb2&"
            alt="Company Logo"
            className="shrink-0 self-start max-w-full aspect-[1.67] w-[205px]"
          />
          <nav className="flex gap-5 items-center my-auto max-md:flex-wrap">
            <PageLink text="Cognitive" />
            <PageLink text="Auditory" />
            <PageLink text="Speech" />
            <Button text="Home" />
          </nav>
        </header>

        <main>
          <section className="flex flex-col self-center mt-8 w-full max-w-[1189px] max-md:max-w-full">
            <h1 className="self-start ml-32 text-6xl font-bold tracking-tighter text-black border border-black border-solid max-md:max-w-full max-md:text-4xl">
              Auditory
            </h1>
            <p className="self-start mt-6 ml-32 text-2xl leading-9 text-zinc-500 max-md:max-w-full">
              Navigating a website can present significant challenges for
              individuals with Auditory disabilities, impacting their ability to
              process information, make decisions, and complete tasks efficiently.
              This page aims to explore the effects of these challenges and provide
              insights into creating more inclusive and accessible web experiences for
              all users.
            </p>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f873eca6592185d30b33387c742feb73b9d4a40676c9fba110426c1ea55db08d?apiKey=400e6d64691245068da30088a66e8bb2&"
              alt="Audience participating in an event"
              className="self-center mt-28 w-full aspect-[1.79] max-w-[1078px] max-md:mt-10 max-md:max-w-full"
            />
            <article className="self-center mt-28 ml-14 text-xl font-medium leading-8 text-black w-[842px] max-md:mt-10 max-md:max-w-full">
              Introduction: <br />
              Navigating websites can be particularly challenging for individuals with
              auditory disabilities. Despite the advancements in technology, many
              websites still lack the necessary features to be fully accessible to people
              with hearing impairments. This essay will explore the specific hardships
              faced by individuals with auditory disabilities when using websites, the
              current limitations of web design in addressing these challenges, and the
              solutions that can be implemented to create a more inclusive online
              environment. <br />
              <br />
              Hardships Faced by Individuals with Auditory Disabilities: <br />
              Individuals with auditory disabilities often encounter significant
              obstacles when navigating websites that rely heavily on audio content
              without providing equivalent text-based alternatives. Many websites use
              videos, podcasts, and other audio elements as primary means of delivering
              information, yet fail to include captions or transcripts. This exclusion
              makes it difficult for users with hearing impairments to access the
              content. Moreover, essential auditory cues, such as alerts or
              notifications, are often not supplemented with visual or vibratory signals,
              further hindering their ability to interact effectively with the website.
              <br />
              <br />
              <br />
            </article>
            <Image
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ea053d85e9802a6b1fc2c679f38cf9a611c548d2b5094056bd8e0710769bb8?apiKey=400e6d64691245068da30088a66e8bb2&"
              alt="people with auditory disabilities"
              className="mt-44 w-full aspect-[4.35] max-md:mt-10 max-md:max-w-full"
            />
            <article className="self-center mt-10 text-xl font-medium leading-8 text-black w-[842px] max-md:max-w-full">
              Conclusion: <br />
              In conclusion, navigating websites presents unique challenges for
              individuals with auditory disabilities, primarily due to the lack of
              accessible design features. The heavy reliance on audio content without
              providing equivalent alternatives, combined with the absence of visual
              alerts, creates significant barriers. However, by implementing solutions
              such as captions, transcripts, and real-time captioning, web developers
              can create more inclusive digital environments. These changes not only
              improve accessibility for users with auditory disabilities but also enhance
              the overall user experience, making the internet a more inclusive space for
              everyone.
            </article>
            <h2 className="self-start mt-10 ml-2.5 text-4xl font-semibold leading-10 text-black">
              Other Pages
            </h2>
            <section className="mt-8 ml-3 max-w-full w-[840px]">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-8">
                    <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/55db86a6dd33606019d032ab48fe3500746a5b0884ee625bbaa47dc1494ba657?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Physical Page Image" className="w-full aspect-[1.06]" />
                    <div className="mt-6">Physical</div>
                  </div>
                </article>
                <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-8">
                    <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/24686e906e0a3f49ac248bf6a420775f9823bc738c1a73300d7481edea251f6f?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Auditory Page Image" className="w-full aspect-[1.06]" />
                    <div className="mt-6">Auditory</div>
                  </div>
                </article>
              </div>
            </section>
          </section>
        </main>

        <footer className="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
          <div className="flex gap-5 px-px mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col self-start mt-3.5">
              <div className="text-2xl leading-9 text-black">Disability Website 2024</div>
              <nav className="flex gap-2 pr-20 mt-24 max-md:pr-5 max-md:mt-10">
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/199c9a3c64fa87237dabe74b1aff1fe617935141f37a07ba364b7012e90e628c?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Media Icon 1" className="shrink-0 w-10 aspect-square" />
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Media Icon 2" className="shrink-0 w-10 aspect-square" />
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Media Icon 3" className="shrink-0 w-10 aspect-square" />
                <Image src="https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Media Icon 4" className="shrink-0 w-10 aspect-square" />
              </nav>
            </div>
            <div className="flex-auto max-md:max-w-full">
              <nav className="flex gap-5 max-md:flex-col max-md:gap-0">
                <FooterColumn title="Company" links={["About", "Contact", "Policies"]} />
                <FooterColumn title="More" links={["Physical", "Auditory", "Speech"]} />
                <FooterColumn title="Help" links={["Policies", "About", "Contact"]} />
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
          					