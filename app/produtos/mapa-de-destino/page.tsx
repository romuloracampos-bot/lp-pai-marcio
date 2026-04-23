import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VSLPlayer from "@/components/VSLPlayer";

export const metadata: Metadata = {
  title: "Mapa de Destino — Diagnóstico Estratégico de 12 Meses",
  description:
    "Consulta completa de búzios + Odu regente + PDF personalizado. Os próximos 12 meses da sua vida pessoal e profissional em 60-90min. R$ 997 com garantia de 7 dias.",
};

export default function MapaDeDestino() {
  return (
    <>
      <Header minimal />
      <main>
        {/* ===== HERO ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-5">
                Consultoria estratégica · Mais procurado
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Os próximos 12 meses da sua vida em um documento estratégico.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                60 a 90 minutos comigo, búzios completos, Odu regente, e um PDF personalizado que você consulta ao lado do seu planejamento financeiro do ano.
              </p>
              <a
                href="#oferta"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Ver o que está incluso →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                garantia de 7 dias · atendimento online · sigilo absoluto
              </p>
            </div>

            {/* VSL do Mapa (criativo específico) */}
            <VSLPlayer placeholder="[VSL Mapa - 60s]" />
          </div>
        </section>

        {/* ===== O QUE É ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              O que é
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Não é uma consulta. É um relatório estratégico do seu ano.
            </h2>
            <div className="space-y-5 text-ink/80 text-lg leading-relaxed">
              <p>
                Empresários contratam consultorias caras para mapear cenários dos próximos 12 meses do mercado. O Mapa de Destino faz isso para a sua vida — pessoal, profissional, financeira, relacional — usando o sistema oracular mais antigo da humanidade.
              </p>
              <p>
                A consulta tem duração de 60 a 90 minutos via videochamada. Os búzios são jogados aqui no ilê, com toda a fundamentação da tradição Nagô Ketu. Você recebe a leitura ao vivo, faz perguntas, anota.
              </p>
              <p>
                Ao final, recebe também um PDF personalizado com o resumo da leitura, o Odu regente do seu ciclo, as áreas de atenção e as janelas de oportunidade dos próximos 12 meses.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEIS CAMADAS ===== */}
        <section className="py-20 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto max-w-4xl">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              O que você sai sabendo
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              Seis camadas de diagnóstico.
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  t: "O Odu regente do seu ciclo",
                  d: "Qual energia governa os próximos 12 meses da sua vida e o que ela pede.",
                },
                {
                  t: "Diagnóstico do momento atual",
                  d: "Onde você está, o que está em movimento, o que precisa ser visto.",
                },
                {
                  t: "Mapa profissional e financeiro",
                  d: "Janelas de expansão, momentos de prudência, alertas de risco.",
                },
                {
                  t: "Mapa relacional",
                  d: "Sociedades, parcerias, relações afetivas — o que pede atenção.",
                },
                {
                  t: "Áreas de bloqueio",
                  d: "O que está travando seu fluxo e o que pode ser feito para destravar.",
                },
                {
                  t: "Recomendações específicas",
                  d: "Práticas, atitudes e — se for o caso — rituais que apoiam o caminho.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-ink/10 rounded-lg p-5"
                >
                  <h3 className="font-medium text-ink mb-2">{item.t}</h3>
                  <p className="text-ink/70 text-sm leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PAINTED PICTURE ===== */}
        <section className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-prose mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              Como vai ser sua vida depois
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight text-cream">
              Seis meses depois do Mapa, isso aqui é rotina.
            </h2>
            <div className="space-y-4">
              {[
                "Você tem um documento estratégico ao lado do seu planejamento financeiro do ano — e consulta antes de cada reunião importante.",
                "Quando aparece a próxima decisão grande, você já sabe em qual janela do ano está. E decide com mais convicção que seus sócios.",
                "As oportunidades que o Mapa apontou, você aproveita. Os meses de risco, você recolhe.",
                "Em dezembro, olha pra trás e percebe que o ano virou exatamente como os búzios falaram.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start py-3 border-b border-cream/10"
                >
                  <span className="text-gold font-serif text-2xl leading-none flex-shrink-0 mt-1">
                    →
                  </span>
                  <p className="text-mute text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== COMO FUNCIONA ===== */}
        <section className="py-20 px-6">
          <div className="max-w-prose mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              Como funciona
            </p>
            <h2 className="font-serif text-3xl mb-10 leading-tight">
              Da confirmação à entrega final.
            </h2>
            <ol className="space-y-6">
              {[
                {
                  n: "01",
                  t: "Agendamento",
                  d: "Você confirma data e horário pelo WhatsApp. Atendo no máximo 8 mapas por semana — agenda costuma ser de 7 a 14 dias.",
                },
                {
                  n: "02",
                  t: "Formulário confidencial",
                  d: "Você preenche um formulário com dados de nascimento e áreas que quer aprofundar. Tudo sob sigilo absoluto.",
                },
                {
                  n: "03",
                  t: "Preparação ritual",
                  d: "No dia anterior, preparo o ilê, acendo as velas de Oxóssi e me concentro especificamente no seu caso.",
                },
                {
                  n: "04",
                  t: "Consulta ao vivo (60-90min)",
                  d: "Videochamada. Os búzios são jogados, a leitura é feita, suas perguntas são respondidas em tempo real.",
                },
                {
                  n: "05",
                  t: "PDF personalizado em até 5 dias",
                  d: "Resumo escrito do mapa, com Odu regente, áreas de atenção, janelas e recomendações. Você consulta o ano inteiro.",
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

        {/* ===== OFERTA EMPILHADA ===== */}
        <section id="oferta" className="py-20 px-6 bg-ink text-cream">
          <div className="max-w-content mx-auto max-w-3xl">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              O que você recebe
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10 text-cream">
              Não é só uma consulta. É um ano inteiro de apoio estratégico.
            </h2>

            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Consulta completa de 60 a 90 minutos",
                  desc: "Búzios + Odu regente + leitura ao vivo via videochamada com suas perguntas respondidas em tempo real.",
                  value: "R$ 997",
                },
                {
                  title: "PDF personalizado do seu Mapa de 12 meses",
                  desc: "Documento estratégico com diagnóstico, janelas de oportunidade e áreas de atenção. Entregue em até 5 dias.",
                  value: "incluso",
                },
                {
                  title: "BÔNUS 1: PDF 'Decisões de Alto Impacto'",
                  desc: "Guia executivo de 30 páginas com os 10 princípios de decisão que apliquei nos meus 40 anos de C-level.",
                  value: "R$ 197",
                },
                {
                  title: "BÔNUS 2: Consulta de revisão aos 6 meses",
                  desc: "30 minutos para checar o que mudou no meio do caminho e recalibrar suas decisões com base no novo momento.",
                  value: "R$ 497",
                },
                {
                  title: "BÔNUS 3: Acesso ao grupo VIP por 30 dias",
                  desc: "Canal exclusivo no WhatsApp com acesso direto para perguntas complementares logo após sua consulta.",
                  value: "R$ 297",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-ink-softer border border-gold/10 rounded-lg p-5"
                >
                  <span className="text-gold text-xl flex-shrink-0">✓</span>
                  <div className="flex-grow">
                    <h3 className="font-medium text-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="text-mute text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <span className="text-gold text-sm font-medium flex-shrink-0 whitespace-nowrap">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Stack slide */}
            <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 text-center">
              <p className="text-mute text-sm mb-2">Valor total dos itens:</p>
              <p className="font-serif text-2xl text-mute line-through mb-4">
                R$ 1.988
              </p>
              <p className="text-gold text-xs uppercase tracking-wider mb-2">
                Seu investimento hoje
              </p>
              <p className="font-serif text-5xl md:text-6xl text-cream mb-4">
                R$ 997
              </p>
              <p className="text-mute text-sm mb-6">
                à vista via PIX ou em 12x de R$ 99,70 no cartão
              </p>
              <a
                href="https://wa.me/5511000000000?text=Quero%20agendar%20o%20Mapa%20de%20Destino."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-ink px-10 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Agendar meu mapa →
              </a>
              <p className="text-mute-deeper text-xs mt-4">
                Agenda limitada · 8 mapas por semana
              </p>
            </div>
          </div>
        </section>

        {/* ===== GARANTIA ===== */}
        <section className="py-16 px-6 bg-parchment">
          <div className="max-w-content mx-auto max-w-2xl text-center">
            <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
              Garantia
            </p>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-gold-darker">
              7 dias incondicionais.
            </h2>
            <p className="text-parchment-deep text-lg leading-relaxed mb-4">
              Se nas primeiras 24h após sua consulta você sentir que não recebeu clareza estratégica, devolvo 100% do seu investimento.
            </p>
            <p className="text-parchment-deep/80 text-base leading-relaxed">
              Você fica com o PDF, com a leitura gravada e com o seu dinheiro de volta. É a regra da casa há 40 anos: não fica cliente insatisfeito.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
