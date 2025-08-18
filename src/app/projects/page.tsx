// src/app/projects/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Falak Pabari",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl p-6 pt-20">
      <h1 className="mb-6 text-2xl font-semibold">Projects</h1>
      <p className="opacity-80">Project cards coming soon.</p>
    </main>
  );
}