"use client";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
export default function ItinerarioLima() {
  const dias = [
    {
      titulo: "Día 1 – Llegada & Aclimatación",
      actividades: [
        {
          hora: "🕐",
          titulo: "Llegada a Lima",
          descripcion: "Recepción en el aeropuerto y traslado al hotel.",
          imagen: "img-llegada",
        },
        {
          hora: "🏨",
          titulo: "Check-in en el hotel",
          descripcion: "Tiempo libre para descansar.",
          imagen: "img-checkin",
        },
        {
          hora: "🚶",
          titulo: "Caminata ligera por Barranco",
          descripcion: "Explora murales, cafés y puentes.",
          imagen: "img-barranco",
        },
        {
          hora: "🍽",
          titulo: "Cena ligera cerca del hotel",
          descripcion: "Recomendación: ceviche o lomo saltado.",
          imagen: "img-cena",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen w-full text-gray-800 snap-y snap-mandatory overflow-y-scroll">
      <HeroSection></HeroSection>

      {dias.map((dia, idx) => (
        <section
          key={idx}
          className="min-h-screen snap-start px-4 py-12 bg-[#fffdf8]"
        >
          <motion.h2
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {dia.titulo}
          </motion.h2>
          <div className="space-y-6">
            {dia.actividades.map((actividad, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div
                  className={`actividad-icon ${actividad.imagen}`}
                  aria-label={actividad.titulo}
                  style={{
                    width: "96px",
                    height: "96px",
                    backgroundImage: "url('/img/dia1-sprite-clean.webp')",
                  }}
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {actividad.hora} {actividad.titulo}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {actividad.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      <footer className="min-h-[60vh] flex flex-col items-center justify-center text-center snap-start bg-[#faf4e6]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-xl mb-4">
            🌅 Gracias por acompañarme en este viaje
          </p>
          <p className="text-md">Nos vemos en la próxima aventura</p>
        </motion.div>
      </footer>
    </div>
  );
}
