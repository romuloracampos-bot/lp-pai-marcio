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

  // ===== MODO MINIMAL (home) =====
  // Agora com os 3 serviços visíveis, mesmo no modo minimal
  if (minimal) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-ink/95 backdrop-blur-md py-3" : "bg-ink/70 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-content mx-auto px-6 flex items-center justify-between gap-6">
          <Link
            href="/"
            className="font-serif text-cream text-lg md:text-xl tracking-wide hover:text-gold transition-colors whitespace-nowrap"
          >
            Pai Márcio <span className="text-gold">de Oxóssi</span>
          </Link>

          {/* Nav desktop - 3 serviços */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-cream/90">
            <Link
              href="/produtos/flecha-da-decisao"
              className="hover:text-gold transition-colors whitespace-nowrap"
            >
              Flecha da Decisão
            </Link>
            <span className="text-gold/30">·</span>
            <Link
              href="/produtos/mapa-de-destino"
              className="hover:text-gold transition-colors whitespace-nowrap"
            >
              Mapa de Destino
            </Link>
            <span className="text-gold/30">·</span>
            <Link
              href="/produtos/circulo-do-cacador"
              className="hover:text-gold transition-colors whitespace-nowrap"
            >
              Círculo do Caçador
            </Link>
          </nav>

          {/* CTA + Menu mobile */}
          <div className="flex items-center gap-3">
            <Link
              href="/produtos/mapa-de-destino"
              className="hidden sm:inline-block bg-gold text-ink px-4 md:px-5 py-2 rounded font-medium hover:bg-gold-dark transition-colors text-sm whitespace-nowrap"
            >
              Agendar consulta
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-cream p-2"
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
        </div>

        {/* Menu mobile expandido */}
        {mobileOpen && (
          <nav className="lg:hidden bg-ink/98 backdrop-blur-md border-t border-gold/20">
            <div className="px-6 py-6 flex flex-col gap-4 text-cream">
              <p className="text-gold text-xs uppercase tracking-[0.2em] mb-1">
                Modalidades
              </p>
              <Link
                href="/produtos/flecha-da-decisao"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-cream/10 hover:text-gold transition-colors"
              >
                Flecha da Decisão
                <span className="block text-xs text-mute mt-0.5">
                  Consulta pontual · R$ 197
                </span>
              </Link>
              <Link
                href="/produtos/mapa-de-destino"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-cream/10 hover:text-gold transition-colors"
              >
                Mapa de Destino
                <span className="block text-xs text-mute mt-0.5">
                  Consulta estratégica · R$ 997
                </span>
              </Link>
              <Link
                href="/produtos/circulo-do-cacador"
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-cream/10 hover:text-gold transition-colors"
              >
                Círculo do Caçador
                <span className="block text-xs text-mute mt-0.5">
                  Acompanhamento anual · R$ 5.997
                </span>
              </Link>
              <Link
                href="/sobre"
                onClick={() => setMobileOpen(false)}
                className="py-2 hover:text-gold transition-colors"
              >
                Quem é Pai Márcio
              </Link>
              <Link
                href="/produtos/mapa-de-destino"
                onClick={() => setMobileOpen(false)}
                className="bg-gold text-ink px-5 py-3 rounded font-medium text-center mt-2"
              >
                Agendar consulta →
              </Link>
            </div>
          </nav>
        )}
      </header>
    );
  }

  // ===== MODO COMPLETO (páginas internas) =====
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-md py-3" : "bg-ink/70 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between gap-6">
        <Link
          href="/"
          className="font-serif text-cream text-lg md:text-xl tracking-wide hover:text-gold transition-colors whitespace-nowrap"
        >
          Pai Márcio <span className="text-gold">de Oxóssi</span>
        </Link>

        {/* Nav desktop - 3 serviços + Sobre */}
        <nav className="hidden lg:flex items-center gap-6 text-sm text-cream/90">
          <Link
            href="/produtos/flecha-da-decisao"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Flecha da Decisão
          </Link>
          <span className="text-gold/30">·</span>
          <Link
            href="/produtos/mapa-de-destino"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Mapa de Destino
          </Link>
          <span className="text-gold/30">·</span>
          <Link
            href="/produtos/circulo-do-cacador"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Círculo do Caçador
          </Link>
          <span className="text-gold/30">·</span>
          <Link
            href="/sobre"
            className="hover:text-gold transition-colors whitespace-nowrap"
          >
            Quem sou
          </Link>
        </nav>

        {/* CTA + Menu mobile */}
        <div className="flex items-center gap-3">
          <Link
            href="/produtos/mapa-de-destino"
            className="hidden sm:inline-block bg-gold text-ink px-4 md:px-5 py-2 rounded font-medium hover:bg-gold-dark transition-colors text-sm whitespace-nowrap"
          >
            Agendar consulta
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-cream p-2"
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
      </div>

      {mobileOpen && (
        <nav className="lg:hidden bg-ink/98 backdrop-blur-md border-t border-gold/20">
          <div className="px-6 py-6 flex flex-col gap-4 text-cream">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-1">
              Modalidades
            </p>
            <Link
              href="/produtos/flecha-da-decisao"
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-cream/10 hover:text-gold transition-colors"
            >
              Flecha da Decisão
              <span className="block text-xs text-mute mt-0.5">
                Consulta pontual · R$ 197
              </span>
            </Link>
            <Link
              href="/produtos/mapa-de-destino"
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-cream/10 hover:text-gold transition-colors"
            >
              Mapa de Destino
              <span className="block text-xs text-mute mt-0.5">
                Consulta estratégica · R$ 997
              </span>
            </Link>
            <Link
              href="/produtos/circulo-do-cacador"
              onClick={() => setMobileOpen(false)}
              className="py-2 border-b border-cream/10 hover:text-gold transition-colors"
            >
              Círculo do Caçador
              <span className="block text-xs text-mute mt-0.5">
                Acompanhamento anual · R$ 5.997
              </span>
            </Link>
            <Link
              href="/sobre"
              onClick={() => setMobileOpen(false)}
              className="py-2 hover:text-gold transition-colors"
            >
              Quem é Pai Márcio
            </Link>
            <Link
              href="/produtos/mapa-de-destino"
              onClick={() => setMobileOpen(false)}
              className="bg-gold text-ink px-5 py-3 rounded font-medium text-center mt-2"
            >
              Agendar consulta →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
