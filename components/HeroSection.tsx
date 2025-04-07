import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[url('/assets/bg-hero-lima-mobile-cropped.png')] md:bg-[url('/assets/bg-hero-lima-web-cropped.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col justify-between min-h-screen px-6 py-10 text-white bg-black/50">
        <main className="mt-auto max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-xl">
            Descubre Lima en 4 días inolvidables
          </h2>
          <p className="text-base md:text-lg mx-auto max-w-2xl mb-8 drop-shadow-md">
            Camina por la costa, prueba comida de primera clase y explora el
            corazón de la capital de Perú.
          </p>
          <Button className="bg-[#e6b777] hover:bg-[#d4a666] text-black font-semibold px-8 py-3 rounded-full shadow-lg text-lg">
            Comienza tu aventura
          </Button>
        </main>
      </div>
    </section>
  );
}
