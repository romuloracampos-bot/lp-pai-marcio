import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VSLPlayer from "@/components/VSLPlayer";

export const metadata: Metadata = {
  title: "Flecha da Decisão — Consulta Pontual de Búzios",
  description:
    "Uma pergunta específica. Uma resposta precisa em áudio. Entrega em até 48h no seu WhatsApp. R$ 197 com garantia de refazer se não houver clareza.",
};

export default function FlechaDaDecisao() {
  return (
    <>
      <Header minimal />
      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-5">
                Consulta pontual · R$ 197
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                A decisão que você adia há 3 meses pode ser resolvida em 48 horas.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Uma pergunta específica. Uma resposta precisa. Áudio detalhado direto no seu WhatsApp.
              </p>
              <a
                href="https://wa.me/5511000000000?text=Quero%20agendar%20uma%20Flecha%20da%20Decis%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Quero fazer minha pergunta →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                resposta em até 48h · garantia de clareza
              </p>
            </div>

            {/* VSL da Flecha */}
            <VSLPlayer placeholder="[VSL Flecha - 30s]" />
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Para quem é
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Quando você precisa de uma resposta — não de um discurso.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                A Flecha da Decisão é a consulta certa quando você tem uma pergunta específica e precisa de um diagnóstico direto. Sem rodeios, sem leitura de carma, sem promessa de futuro distante.
              </p>
              <p>Os pedidos mais frequentes incluem:</p>
              <ul className="space-y-3 pl-6 border-l-2 border-gold">
                <li>
                  <strong>Negócios:</strong> Aceito essa proposta? Esse sócio é
                  confiável? Abro a empresa agora ou espero?
                </li>
                <li>
                  <strong>Carreira:</strong> Aceito essa oferta de emprego? Mudo
                  de cidade? Faço a transição agora?
                </li>
                <li>
                  <strong>Relações:</strong> Essa pessoa é do meu caminho? Volto
                  ou sigo? Levo a sério ou solto?
                </li>
                <li>
                  <strong>Saúde e energia:</strong> O que meu corpo está pedindo?
                  Por que esse cansaço?
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== COMO FUNCIONA ===== */}
        <section className="py-20 px-6 bg-cream-subtle">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Como funciona
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              Quatro passos simples.
            </h2>
            <ol className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Você confirma o pagamento",
                  d: "Via PIX, cartão ou link. Em seguida, recebe um formulário confidencial no WhatsApp.",
                },
                {
                  n: "02",
                  t: "Envia sua pergunta",
                  d: "Por mensagem ou áudio. Quanto mais específica, mais precisa será a resposta dos búzios.",
                },
                {
                  n: "03",
                  t: "Pai Márcio joga os búzios",
                  d: "No ilê, com toda a fundamentação tradicional. Concentrado especificamente no seu caso.",
                },
                {
                  n: "04",
                  t: "Você recebe a resposta",
                  d: "Áudio detalhado de 15 a 20 minutos no seu WhatsApp, em até 48h. Pode ouvir quantas vezes quiser.",
                },
              ].map((s, i) => (
                <li key={i} className="flex gap-5">
                  <span className="text-gold font-serif text-3xl font-medium leading-none mt-1">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-medium text-ink text-lg mb-1">{s.t}</h3>
                    <p className="text-ink/70 leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== CTA + PREÇO ===== */}
        <section className="py-20 px-6">
          <div className="max-w-content mx-auto max-w-2xl text-center">
            <div className="bg-cream-subtle border-2 border-gold rounded-lg p-10">
              <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
                Investimento
              </p>
              <p className="font-serif text-6xl text-ink mb-2">R$ 197</p>
              <p className="text-ink/60 mb-8">
                PIX à vista ou em até 3x no cartão
              </p>
              <a
                href="https://wa.me/5511000000000?text=Quero%20agendar%20uma%20Flecha%20da%20Decis%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink hover:bg-ink-softer text-cream px-10 py-4 rounded font-medium transition-colors"
              >
                Agendar pelo WhatsApp →
              </a>
              <p className="text-ink/50 text-xs mt-6">
                Resposta em até 48 horas · Garantia de refazer se não houver clareza
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
