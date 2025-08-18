"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const links = [
  { href: "/", label: "About" },     // root = src/app/page.tsx
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname() || "/";
  const stripBase = (p: string) =>
    base && p.startsWith(base) ? p.slice(base.length) : p;
  const current = stripBase(pathname);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="font-semibold">Falak Pabari</Link>
        <div className="flex gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:underline ${current === href ? "font-semibold" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
