// src/app/aboutme/page.tsx
import Image from "next/image";

export default function AboutMePage() {
  return (
    <main className="min-h-screen bg-[#f4eade] font-sans text-[#222]">
      {/* Main Box */}
      <section className="flex justify-center items-center px-6 py-10">
        <div className="bg-[#f4eade] border border-gray-400 rounded-md p-8 flex flex-col md:flex-row items-center max-w-6xl w-full shadow-md">
          {/* Text Section */}
          <div className="flex-1 mb-6 md:mb-0 md:mr-4 text-center md:text-left">
            <h1 className="text-3xl font-extrabold mb-3">Falak Pabari</h1>

            <p className="text-lg mb-4">
              I’m a senior at Brown studying Applied Math–CS. I like building
              simple, useful systems with data and ML—whether that’s debugging
              models, shipping features, or analyzing noisy signals. I’ve worked
              across quant-style analysis, machine learning, and computational
              biology (e.g., spatial transcriptomics pipelines, VAE/contrastive
              models), and I co‑founded a lightweight skincare tool that blends
              product thinking with practical engineering. I care about clear
              thinking, collaboration, and results. I’m looking for roles where
              I can grow as an engineer/researcher and ship work that matters.
            </p>

            <p className="text-sm font-semibold">@falakpabari</p>

      
          </div>

          {/* Image Section (kept same placement/structure) */}
          <div className="w-80 h-150 relative">
            <Image
              src="/falak.jpg" // ensure this exists in /public
              alt="Falak Pabari"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}

