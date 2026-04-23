"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  minimal?: boolean;
}

export default function Header({ minimal = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (minimal) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-content mx-auto px-6 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-cream text-xl tracking-wide hover:text-gold transition-colors"
          >
            Pai Márcio <span className="text-gold">de Oxóssi</span>
          </Link>
          <Link
            href="/produtos/mapa-de-destino"
            className="bg-gold text-ink px-5 py-2 rounded font-medium hover:bg-gold-dark transition-colors text-sm"
          >
            Agendar consulta
          </Link>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-cream text-xl tracking-wide hover:text-gold transition-colors"
        >
          Pai Márcio <span className="text-gold">de Oxóssi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-cream/90">
          <Link href="/sobre" className="hover:text-gold transition-colors">
            Quem sou
          </Link>
          <Link href="/#modalidades" className="hover:text-gold transition-colors">
            Modalidades
          </Link>
          <Link href="/#faq" className="hover:text-gold transition-colors">
            Dúvidas
          </Link>
          <Link
            href="/produtos/mapa-de-destino"
            className="bg-gold text-ink px-5 py-2 rounded font-medium hover:bg-gold-dark transition-colors"
          >
            Agendar consulta
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-cream p-2"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-ink/98 backdrop-blur-md border-t border-gold/20">
          <div className="px-6 py-6 flex flex-col gap-5 text-cream">
            <Link href="/sobre" onClick={() => setMobileOpen(false)}>
              Quem sou
            </Link>
            <Link href="/#modalidades" onClick={() => setMobileOpen(false)}>
              Modalidades
            </Link>
            <Link href="/#faq" onClick={() => setMobileOpen(false)}>
              Dúvidas
            </Link>
            <Link
              href="/produtos/mapa-de-destino"
              className="bg-gold text-ink px-5 py-3 rounded font-medium text-center"
            >
              Agendar consulta
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
