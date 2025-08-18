// src/app/page.tsx  <-- homepage
import Image from "next/image";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f4eade] font-sans text-[#222] pt-20">
      <section className="flex justify-center items-center px-6 py-10">
        <div className="bg-[#f4eade] border border-gray-400 rounded-md p-8 flex flex-col md:flex-row items-center max-w-6xl w-full shadow-md">
          
          {/* Text Section */}
          <div className="flex-1 mb-6 md:mb-0 md:mr-4 text-center md:text-left">
            <h1 className="text-3xl font-extrabold mb-3">Falak Pabari</h1>
            <p className="text-lg mb-4">
              Senior at Brown (Applied Math, CS). I build simple, useful systems with data and ML,
              debugging models, shipping features, and making noisy signals legible. Experience across
              quant style analysis, ML, and comp bio (spatial transcriptomics, VAEs/contrastive models).
              Co founded a lightweight skincare tool. I care about clear thinking, fast iteration, and
              results. Open to roles where I can grow as an engineer/researcher and ship work that matters.
            </p>
            <p className="text-sm font-semibold">@falakpabari</p>
          </div>

          {/* Image Section */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
          <Image
            src={`${base}/falak.png`}
            alt="Falak Pabari"
            width={384}
            height={384}
            className="object-cover rounded-md"
            priority
          />
          </div>
        </div>
      </section>
    </main>
  );
}

