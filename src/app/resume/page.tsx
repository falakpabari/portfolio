// src/app/resume/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Falak Pabari",
};

export default function ResumePage() {
  const pdfPath = "/Falak_Pabari_Resume.pdf"; // place this file in /public

  return (
    <main className="mx-auto max-w-5xl p-6 pt-20">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Resume</h1>
        <div className="flex gap-3">
          <a
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border px-4 py-2"
          >
            Open in new tab
          </a>
          <a
            href={pdfPath}
            download
            className="rounded-xl bg-black text-white px-4 py-2"
          >
            Download PDF
          </a>
        </div>
      </div>

      {/* Inline viewer */}
      <div className="rounded-xl border">
        <object
          data={pdfPath}
          type="application/pdf"
          className="w-full"
          style={{ height: "80vh" }}
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
            </a>
            .
          </p>
        </object>
      </div>
    </main>
  );
}

