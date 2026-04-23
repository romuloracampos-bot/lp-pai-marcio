"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="mobile-cta-bar md:hidden">
      <Link
        href="/produtos/mapa-de-destino"
        className="block bg-gold text-ink text-center py-3 rounded font-medium text-sm"
      >
        Quero meu mapa de destino →
      </Link>
    </div>
  );
}
