"use client";

import Link from "next/link";
import { memo } from "react";
import { RiInstagramLine, RiTiktokLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className="bg-[#FDF2E9] text-[#2C2C2C] pb-8 px-2 relative z-10"
      style={{ marginTop: "0", paddingTop: "0" }}
    >
      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-[30px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#FFF8F2"
            d="M0,64L60,53.3C120,43,240,21,360,26.7C480,32,600,64,720,69.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          />
        </svg>
      </div>
      <div className="max-w-screen mx-auto flex flex-col items-center text-center gap-4 pt-10">
        <p className="text-2xl font-bold tracking-tight">Ciao Vello Studio</p>

        <p className="max-w-md text-sm text-[#555] leading-relaxed">
          Estética con propósito. Cuidamos cada detalle para que tu experiencia
          sea cálida, profesional y transformadora.
        </p>

        <div className="flex gap-4 mt-2">
          <a
            href="https://www.instagram.com/ciaovello.studio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#B6674B] hover:text-[#A4553A] transition"
          >
            <RiInstagramLine size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@ciaovello.studio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-[#B6674B] hover:text-[#A4553A] transition"
          >
            <RiTiktokLine size={24} />
          </a>
        </div>

        <div className="flex gap-4 text-sm mt-4">
          <Link href="/contacto" className="hover:underline">
            Contacto
          </Link>
          <Link href="/nosotras" className="hover:underline">
            Sobre nosotras
          </Link>
        </div>

        <p className="text-xs text-[#888] mt-4">
          © {new Date().getFullYear()} Ciao Vello Studio. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
