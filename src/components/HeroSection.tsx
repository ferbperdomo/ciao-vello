'use client'

import Image from 'next/image'
import Link from 'next/link'
import heroImage from '../assets/hero-image.png'

export default function HeroSection() {
  return (
    <section
      className="bg-[#FFF8F2] text-[#2C2C2C] flex flex-col-reverse justify-center md:flex-row items-center"
      style={{
        padding: '5rem 1.5rem',
        margin: '0 auto',
      }}
    >
      <div className="flex flex-col max-w-2xl relative z-10">
        <div
          className="absolute -top-10 -left-10 w-[300px] h-[300px] rounded-full blur-3xl opacity-30 z-0"
          style={{ backgroundColor: 'rgb(221, 187, 155)' }}

        />
        <h1
          className="font-bold leading-tight z-10"
          style={{
            fontSize: '2rem',
            lineHeight: '1.25',
            marginBottom: '1.5rem',
          }}
        >
          Depilación láser en Madrid para una piel suave, sin complicaciones
        </h1>
        <p
          className="text-lg md:text-xl mb-6 max-w-lg z-10"
          style={{
            fontSize: '1.125rem',
            maxWidth: '36rem',
            marginBottom: '1.5rem',
          }}
        >
          En Ciao Vello Studio combinamos tecnología avanzada, resultados
          visibles desde la primera sesión y una atención cercana para que te
          olvides del vello… y del drama.
        </p>
        <Link
          href="/appointments"
          className="inline-block bg-[#EA7F68] max-w-fit text-white rounded-full font-semibold hover:bg-[#e56e56] transition z-10"
          style={{
            padding: '1rem 2rem',
            fontSize: '1rem',
          }}
        >
          Empieza tu cambio
        </Link>
      </div>
      <div className="w-full max-w-sm md:max-w-md">
        <Image
          src={heroImage}
          alt="Ilustración depilación"
          width={500}
          height={500}
          className="w-full h-auto object-contain rounded-xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
          priority
        />
      </div>
    </section>
  )
}
