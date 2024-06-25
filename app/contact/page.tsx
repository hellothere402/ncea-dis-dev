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
    className={`justify-center items-center px-8 py-4 text-xl text-white whitespace-nowrap bg-black rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black ${className}`}
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
  <div className="flex flex-col w-full">
    {label && <label htmlFor={id} className="text-black mb-2">{label}</label>}
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      className={`justify-center px-4 py-3 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 text-zinc-700 focus:border-black focus:ring-1 focus:ring-black ${className}`}
      aria-label={placeholder || label}
    />
  </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href} className="self-stretch my-auto hover:text-gray-600 transition-colors">
    {children}
  </Link>
);

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-20 py-4 w-full bg-white shadow-sm max-md:px-5 max-md:flex-col">
      <div className="flex items-center">
        <div className="text-xl font-medium leading-8 text-black mr-4">
          Disability Website 2024
        </div>
        <div className="w-16 h-16 relative">
        </div>
      </div>
      <nav className="flex gap-5 items-center text-xl font-medium leading-8 text-black whitespace-nowrap max-md:mt-4">
        <NavLink href="/cognitive">Cognitive</NavLink>
        <NavLink href="/auditory">Auditory</NavLink>
        <NavLink href="/speech">Speech</NavLink>
        <NavLink href="/">
          <Button>Home</Button>
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
    </div>
  </footer>
);


const MainContent: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col items-center mt-12 w-full max-w-[1087px] mx-auto px-4">
      <h1 className="text-6xl font-bold tracking-tighter text-center text-black mb-12 max-md:text-4xl">Contact Us</h1>
      <div className="flex gap-12 w-full max-md:flex-col">
        <form className="flex flex-col w-full md:w-1/2 space-y-6">
          <div className="flex gap-4 max-md:flex-col">
            <Input id="firstName" label="First name" placeholder="John" />
            <Input id="lastName" label="Last name" placeholder="Doe" />
          </div>
          <Input id="email" label="Email address" type="email" placeholder="john.doe@example.com" />
          <div className="flex flex-col">
            <label htmlFor="message" className="text-black mb-2">Your message</label>
            <textarea
              id="message"
              placeholder="Enter your question or message"
              className="px-4 py-3 h-32 bg-white rounded-lg border border-solid shadow-sm border-neutral-200 text-zinc-700 focus:border-black focus:ring-1 focus:ring-black resize-none"
              aria-label="Your message"
            ></textarea>
          </div>
          <Button>Submit</Button>
        </form>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <Image
            src="/Disability_Awareness-removebg-preview.png"
            alt="Contact us visual"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
};

const Contact: React.FC = () => (
  <div className="flex flex-col min-h-screen bg-white">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default Contact;