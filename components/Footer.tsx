import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 pt-16 pb-8 mt-20">
      <div className="max-w-content mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-cream text-2xl mb-3">
              Pai Márcio <span className="text-gold">de Oxóssi</span>
            </h3>
            <p className="text-sm leading-relaxed max-w-md text-cream/60">
              Quatro décadas no comando de multinacionais. Quatro décadas de axé.
              Hoje, dedico minha experiência integral a ajudar empresários e
              executivos a tomarem decisões de alto impacto.
            </p>
          </div>

          <div>
            <h4 className="text-gold text-sm font-medium uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre" className="hover:text-gold transition-colors">
                  Quem é Pai Márcio
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/flecha-da-decisao"
                  className="hover:text-gold transition-colors"
                >
                  Flecha da Decisão
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/mapa-de-destino"
                  className="hover:text-gold transition-colors"
                >
                  Mapa de Destino
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/circulo-do-cacador"
                  className="hover:text-gold transition-colors"
                >
                  Círculo do Caçador
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold text-sm font-medium uppercase tracking-wider mb-4">
              A Casa
            </h4>
            <address className="text-sm not-italic leading-relaxed text-cream/60">
              Rua São Cristóvão, 50<br />
              IAPI · Osasco · SP<br />
              <br />
              <a
                href="https://wa.me/5511000000000"
                className="text-gold hover:underline"
              >
                Falar pelo WhatsApp
              </a>
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} Pai Márcio de Oxóssi. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/politica-de-privacidade" className="hover:text-gold">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-uso" className="hover:text-gold">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
