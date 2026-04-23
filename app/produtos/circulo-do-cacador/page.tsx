import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VSLPlayer from "@/components/VSLPlayer";

export const metadata: Metadata = {
  title: "Círculo do Caçador — Mentoria Espiritual Anual",
  description:
    "Acompanhamento espiritual exclusivo de 12 meses para quem decide grande o ano todo. Consultas mensais, acesso direto, rituais inclusos. 8 vagas por ano.",
};

export default function CirculoDoCacador() {
  return (
    <>
      <Header minimal />
      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-5">
                Acompanhamento exclusivo · 8 vagas/ano
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Tem gente querendo seu lugar. Você sabe disso.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Acompanhamento espiritual contínuo para quem não toma uma decisão grande por ano — toma várias. E precisa de quem esteja ao lado o ano inteiro.
              </p>
              <a
                href="https://wa.me/5511000000000?text=Quero%20saber%20mais%20sobre%20o%20C%C3%ADrculo%20do%20Ca%C3%A7ador."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Conversar com Pai Márcio →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                conversa prévia obrigatória · vagas limitadas
              </p>
            </div>

            {/* VSL do Círculo */}
            <VSLPlayer placeholder="[VSL Círculo - 45s]" />
          </div>
        </section>

        {/* ===== PARA QUEM É ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Para quem é
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Quando uma consulta por ano não é suficiente.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                O Círculo do Caçador é para quem opera no ritmo de quem decide grande continuamente: empresários em fase de expansão, executivos em cargos de comando, profissionais liberais com patrimônio em jogo, figuras públicas que precisam de proteção ativa.
              </p>
              <p>
                É o nível de acompanhamento que eu mesmo gostaria de ter tido quando estava no comando de empresas. Acesso direto, leitura contínua, blindagem ativa.
              </p>
              <p>
                Por limite de atenção e qualidade do atendimento, mantenho apenas 8 clientes ativos simultaneamente. Sempre.
              </p>
            </div>
          </div>
        </section>

        {/* ===== O QUE INCLUI ===== */}
        <section className="py-20 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              O que inclui
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              12 meses, cinco frentes de acompanhamento.
            </h2>
            <div className="space-y-4">
              {[
                {
                  t: "1 Mapa de Destino completo no início",
                  d: "Consulta inicial de 90 minutos para mapear o ciclo dos próximos 12 meses e definir os pontos de atenção.",
                },
                {
                  t: "12 consultas mensais (30 min cada)",
                  d: "Uma vez por mês, jogo dos búzios para checar onde você está, o que mudou e o que vem.",
                },
                {
                  t: "Acesso direto via WhatsApp",
                  d: "Para perguntas pontuais entre as consultas — quando algo urgente surge e você precisa de uma leitura rápida.",
                },
                {
                  t: "2 rituais inclusos no ano",
                  d: "Conforme diagnóstico: aniversário (Ritual da Porta Aberta) e virada de ano (Ritual do Escudo de Oxóssi).",
                },
                {
                  t: "Prioridade absoluta na agenda",
                  d: "Quando precisar de uma consulta extra, entra antes da fila normal.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-ink/10 rounded-lg p-6 flex gap-4"
                >
                  <span className="text-gold text-2xl font-serif flex-shrink-0">
                    ✓
                  </span>
                  <div>
                    <h3 className="font-medium text-ink mb-1">{item.t}</h3>
                    <p className="text-ink/70 leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESSO DE INGRESSO ===== */}
        <section className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-prose mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              Processo de ingresso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-cream">
              Não é venda rápida. Conversamos antes de você entrar.
            </h2>
            <div className="space-y-5 text-mute text-lg leading-relaxed">
              <p>
                Por ser um acompanhamento de longo prazo, o ingresso no Círculo passa por uma conversa inicial gratuita de 20 minutos.
              </p>
              <p>
                Nessa conversa, alinho expectativas, entendo seu momento atual, explico em detalhes como funciona o acompanhamento — e avalio se o formato faz sentido para você neste momento.
              </p>
              <p>
                Nem todo mundo que quer entrar, entra. E nem todo mundo que entra precisa ficar o ano inteiro. O compromisso é com o resultado, não com o contrato.
              </p>
            </div>
          </div>
        </section>

        {/* ===== CTA + PREÇO ===== */}
        <section className="py-20 px-6">
          <div className="max-w-content mx-auto max-w-2xl text-center">
            <div className="bg-cream-subtle border-2 border-gold rounded-lg p-10">
              <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
                Investimento anual
              </p>
              <p className="font-serif text-6xl text-ink mb-2">R$ 5.997</p>
              <p className="text-ink/60 mb-8">
                À vista ou em 12x de R$ 599 no cartão
              </p>
              <a
                href="https://wa.me/5511000000000?text=Quero%20saber%20mais%20sobre%20o%20C%C3%ADrculo%20do%20Ca%C3%A7ador."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-ink hover:bg-ink-softer text-cream px-10 py-4 rounded font-medium transition-colors"
              >
                Conversar com Pai Márcio →
              </a>
              <p className="text-ink/50 text-xs mt-6">
                Vagas limitadas · Conversa prévia obrigatória
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
