// src/app/resume/page.tsx
import type { Metadata } from "next";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = { title: "Resume | Falak Pabari" };

export default function ResumePage() {
  const pdfPath = `${base}/Falak_Pabari_Resume.pdf`;
  return (
    <main className="mx-auto max-w-5xl p-6 pt-24">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold">Resume</h1>
        <div className="flex gap-3">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-2 hover:bg-gray-50"
          >
            Open in new tab
          </a>
          <a
            href={pdfPath}
            download
            className="rounded-xl bg-black text-white px-4 py-2 hover:opacity-90"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="rounded-xl border overflow-hidden">
        <object
          data={pdfPath}
          type="application/pdf"
          className="w-full"
          style={{ height: "min(80vh, 900px)" }}  // keeps it sensible on big screens
        >
          <p className="p-4">
            Your browser can’t display the PDF.{" "}
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Open it in a new tab
            </a>.
          </p>
        </object>
      </div>
    </main>
  );
}
