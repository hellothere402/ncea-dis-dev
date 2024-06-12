import * as React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className }) => (
  <button className={`justify-center items-center px-8 py-4 mt-6 text-xl text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5 max-md:max-w-full ${className}`}>
    {children}
  </button>
);

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  label?: string;
  value?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ id, type = 'text', placeholder, label, value, className }) => (
  <div className="flex flex-col">
    {label && <label htmlFor={id} className="text-black">{label}</label>}
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      className={`justify-center px-4 py-3 mt-2 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 text-zinc-500 ${className}`}
      aria-label={placeholder}
    />
  </div>
);

const Footer: React.FC = () => (
  <footer className="flex flex-col px-20 pb-12 mt-32 w-full bg-white max-md:px-5 max-md:mt-10 max-md:max-w-full">
    <div className="shrink-0 h-px border border-solid bg-neutral-200 border-neutral-200 max-md:max-w-full" />
    <div className="mt-16 text-2xl leading-9 text-black max-md:mt-10 max-md:max-w-full">Disability Website 2024</div>
    <div className="flex gap-2 self-start mt-24 max-md:mt-10">
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/199c9a3c64fa87237dabe74b1aff1fe617935141f37a07ba364b7012e90e628c?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Icon 1" className="shrink-0 w-10 aspect-square" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1bac3668b19309ab1c82835d154f9962b24bad9c262723d53374e3173c3e762?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Icon 2" className="shrink-0 w-10 aspect-square" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9c8d64becb556072cf4288b2dadd32d18a3ce8e19d5cc15f298f66d1125313b?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Icon 3" className="shrink-0 w-10 aspect-square" />
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0828515f09127d365461d17e1036e88788811bd5c0258116139d171a870fbe56?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Social Icon 4" className="shrink-0 w-10 aspect-square" />
    </div>
  </footer>
);

const Header: React.FC = () => (
  <header className="flex gap-5 justify-center px-20 py-14 w-full text-xl font-medium leading-8 text-black bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <div className="flex-auto my-auto">Disability Website 2024</div>
    <nav className="flex gap-5 items-center whitespace-nowrap max-md:flex-wrap">
      <a href="#" className="self-stretch my-auto">Cognitive</a>
      <a href="#" className="self-stretch my-auto">Auditory</a>
      <a href="#" className="self-stretch my-auto">Speech</a>
      <Button className="">Home</Button>
    </nav>
  </header>
);

const MainContent: React.FC = () => (
  <main className="flex flex-col pl-20 mt-20 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
    <h1 className="text-6xl font-bold tracking-tighter text-black max-md:max-w-full max-md:text-4xl">Contact us</h1>
    <section className="mt-2.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <form className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col flex-wrap grow content-start mt-20 text-base font-medium leading-6 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-md:flex-wrap">
              <Input id="firstName" label="First name" className="h-12" />
              <Input id="lastName" value="Smitherton" className="px-4 py-3" aria-label="Last name" />
            </div>
            <Input id="email" label="Email address" value="email@janesfakedomain.net" className="px-4 py-3" aria-label="Email address" />
            <Input id="message" label="Your message" placeholder="Enter your question or message" className="px-4 pt-3 pb-8" aria-label="Your message" />
            <Button>Submit</Button>
          </div>
        </form>
        <div className="flex flex-col ml-5 w-[54%] max-md:ml-0 max-md:w-full">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd3b00d8e2f452c1f1fd73f79200753eb70d5da2387449ce67ea57f841a06f70?apiKey=400e6d64691245068da30088a66e8bb2&" alt="Contact us visual" className="w-full aspect-[1.45] max-md:max-w-full" />
        </div>
      </div>
    </section>
  </main>
);

const Contact: React.FC = () => (
  <div className="flex flex-col bg-white">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default Contact;