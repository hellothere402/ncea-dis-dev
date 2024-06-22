import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
  className={`justify-center items-center px-8 py-4 mt-6 text-xl text-white whitespace-nowrap bg-black rounded-lg shadow-sm max-md:px-5 max-md:max-w-full ${className}`}
  >
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
      <Image src="/Social Icons.png" alt="Social Icon 1" className="shrink-0 w-10 aspect-square" width={100} height={100} />
    </div>
  </footer>
);

const Header: React.FC = () => (
  <header className="flex gap-5 justify-center px-20 py-14 w-full text-xl font-medium leading-8 text-black bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
    <Link href="/" className="flex-auto my-auto">Disability Website 2024</Link>
    <nav className="flex gap-5 items-center whitespace-nowrap max-md:flex-wrap">
      <Link href="/cognitive" className="self-stretch my-auto">Cognitive</Link>
      <Link href="/auditory" className="self-stretch my-auto">Auditory</Link>
      <Link href="/speech" className="self-stretch my-auto">Speech</Link>
      <Link  href="/">
        <Button>Home</Button>
      </Link>
    </nav>
  </header>
);

const MainContent: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
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
          <Image src="/Disability_Awareness-removebg-preview.png" alt="Contact us visual" className="w-full aspect-[1.45] max-md:max-w-full" width={100} height={100} />
        </div>
      </div>
    </section>
  </main>
);
}

const Contact: React.FC = () => (
  <div className="flex flex-col bg-white">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default Contact;


