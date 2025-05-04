"use client";

import { MessageCircle, Quote } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="relative bg-[#FFF8F2] text-[#2C2C2C] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#F3C7B4] rounded-full blur-2xl animate-pulse opacity-20"></div>
        <div className="absolute bottom-[-80px] right-[-60px] w-[250px] h-[250px] bg-[#F3C7B4] rounded-full blur-2xl animate-pulse opacity-20"></div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-center items-center relative z-10"
        style={{ padding: "5rem 1.5rem", margin: "0 auto" }}
      >
        <div className="flex flex-col max-w-6xl w-full gap-16 md:flex-row">
          <div className="flex flex-col gap-6 flex-1">
            <h2
              className="text-center md:text-left"
              style={{ fontSize: "2rem", fontWeight: "bold" }}
            >
              Lo que dicen nuestras clientas
            </h2>

            <div
              className="bg-[#FDF2E9] border border-[#DDC6B0] rounded-xl shadow"
              style={{ padding: "1.5rem" }}
            >
              <Quote className="text-[#B6674B] w-6 h-6 mb-3" />
              <p className="text-[#2C2C2C] mb-2">
                Después de probar varios sitios encontré por fin uno que me hace
                sentir cómoda, cuidada y feliz con los resultados.
              </p>
              <p className="text-sm font-semibold text-[#2C2C2C]">— Paula G.</p>
            </div>

            <div
              className="bg-[#FDF2E9] border border-[#DDC6B0] rounded-xl shadow"
              style={{ padding: "1.5rem" }}
            >
              <MessageCircle className="text-[#B6674B] w-6 h-6 mb-3" />
              <p className="text-[#2C2C2C] mb-2">
                El trato es inmejorable, y el láser me está funcionando desde la
                primera sesión.
              </p>
              <p className="text-sm font-semibold text-[#2C2C2C]">— Marta R.</p>
            </div>
          </div>

          <div
            className="bg-white border border-[#DDC6B0] rounded-xl shadow flex-1 flex flex-col justify-between"
            style={{ padding: "1.5rem" }}
          >
            <div>
              <h3
                className="mb-2"
                style={{
                  color: "#B6674B",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Sobre nosotras
              </h3>
              <h4
                className="mb-4"
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "#2C2C2C",
                }}
              >
                Tu estudio de depilación láser con alma
              </h4>
              <p className="text-[#2C2C2C] mb-2">
                En Ciao Vello Studio creemos en la estética con propósito. Cada
                sesión está pensada para ofrecerte resultados reales, en un
                entorno cuidado, profesional y cercano.
              </p>
              <p className="text-[#2C2C2C]">
                Somos expertas, pero también humanas. Queremos que disfrutes
                tanto del proceso como del resultado.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="/nosotras"
                className="inline-block bg-[#EA7F68] text-white rounded-full font-semibold hover:bg-[#e56e56] transition"
                style={{ padding: "0.75rem 1.5rem", fontSize: "1rem" }}
              >
                Conócenos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
