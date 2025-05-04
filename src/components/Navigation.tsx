'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../assets/ciaovello_logo.jpg';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contact' },
    { name: 'Citas', path: '/appointments' },
  ];

  return (
    <nav className="bg-[#FFF8F2] shadow-md sticky top-0 z-50">
      <div className="w-full px-6 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 flex items-center justify-between py-5 relative">
        <Link href="/" className="mx-auto md:mx-0">
          <Image
            src={logo}
            alt="Ciao Vello Logo"
            priority
            className="w-16 md:w-20 2xl:w-24 h-auto"
          /> 
        </Link>
        <button
  className={`md:hidden text-[2.5rem] leading-none transition-all duration-300 ease-in-out transform ${
    isOpen ? 'rotate-180 scale-110' : 'scale-100'
  }`}
  style={{ color: '#EA7F68',fontSize: '1.5rem', 
    lineHeight: '1',
    marginRight: '1.5rem', }}
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Menú móvil"
  aria-expanded={isOpen}
>
  {isOpen ? '✕' : '☰'}
</button>


<div className="hidden md:flex gap-8 text-lg font-medium " style={{ paddingRight: '2rem' }}>

          {navLinks.map((link) => (
           <Link
           key={link.name}
           href={link.path}
           className="transition duration-200 tracking-wide underline-offset-4"
           style={{
             color: '#2C2C2C',
           }}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#EA7F68')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
         >
           {link.name}
         </Link>
         
          ))}
        </div>
      </div>

      {/* Navegación móvil centrada */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center text-center animate-fade-in" style={ {paddingBottom: '1rem'}}>
          <ul className="flex flex-col gap-4 text-base font-medium text-[#2C2C2C]">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
  key={link.name}
  href={link.path}
  className="transition duration-200 tracking-wide underline-offset-4"
  style={{
    color: '#2C2C2C',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = '#EA7F68')}
  onMouseLeave={(e) => (e.currentTarget.style.color = '#2C2C2C')}
>
  {link.name}
</Link>

              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
