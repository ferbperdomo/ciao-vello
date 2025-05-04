"use client";
import Image from "next/image";
import icon1 from "../assets/icon_0_0.png";
import icon2 from "../assets/icon_0_1.png";
import icon3 from "../assets/icon_1_0.png";
import icon4 from "../assets/icon_1_1.png";
import icon5 from "../assets/icon_2_0.png";
import icon6 from "../assets/icon_2_1.png";

const reasons = [
  {
    icon: icon1,
    title: "Tecnología de última generación",
    description:
      "Usamos equipos modernos que garantizan seguridad y eficacia desde la primera sesión.",
  },
  {
    icon: icon2,
    title: "Resultados visibles desde la primera sesión",
    description:
      "Reduce el vello de forma progresiva desde el inicio, con tratamientos efectivos.",
  },
  {
    icon: icon3,
    title: "Para todo tipo de piel y vello",
    description:
      "Nuestros tratamientos se adaptan a todas las tonalidades de piel y tipos de vello.",
  },
  {
    icon: icon4,
    title: "Atención profesional y cercana",
    description:
      "Te acompañamos con un trato humano y personalizado en cada sesión.",
  },
  {
    icon: icon5,
    title: "Ubicación céntrica en Madrid",
    description:
      "Estamos a pasos de Cuatro Caminos, con fácil acceso en transporte público.",
  },
  {
    icon: icon6,
    title: "Experiencia cómoda y relajante",
    description:
      "Creamos un ambiente que invita a cuidarte con calma y bienestar.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-white text-[#2C2C2C]"
      style={{ padding: "5rem 1.5rem" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "3rem",
        }}
      >
        ¿Por qué elegirnos?
      </h2>

      <div
        className="flex flex-wrap justify-center gap-12"
        style={{ maxWidth: "1536px", margin: "0 auto" }}
      >
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="w-full md:w-1/2 xl:w-1/3 flex flex-col items-center text-center"
            style={{ maxWidth: "400px", margin: "0 auto", gap: "1rem" }}
          >
            <Image
              src={reason.icon}
              alt={reason.title}
              width={200}
              height={200}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
              }}
              priority
            />
            <h3 style={{ fontSize: "1.125rem", fontWeight: 600 }}>
              {reason.title}
            </h3>
            <p style={{ fontSize: "0.95rem", color: "#555" }}>
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
