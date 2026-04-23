import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileCTA from "@/components/MobileCTA";
import FAQItem from "@/components/FAQItem";
import VSLPlayer from "@/components/VSLPlayer";

export default function Home() {
  return (
    <>
      <Header minimal />

      <main>
        {/* ===== HERO COM VSL ===== */}
        <section className="bg-ink text-cream pt-28 pb-16 md:pt-36 md:pb-20 px-6">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-6">
                Consultoria estratégica de destino
              </p>
              <h1 className="font-serif text-3xl md:text-[2.75rem] leading-[1.1] mb-5 text-cream">
                Decisões de alto impacto não se tomam no escuro.
              </h1>
              <p className="text-mute text-lg leading-relaxed mb-8 max-w-lg">
                Por 40 anos fui executivo C-level em multinacionais. Por 40 anos também leio búzios. Hoje, ajudo empresários e executivos a enxergarem o que não está nos relatórios.
              </p>
              <Link
                href="/produtos/mapa-de-destino"
                className="inline-block bg-gold text-ink px-8 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
              >
                Ver meu mapa de 12 meses →
              </Link>
              <p className="text-mute-deeper text-xs mt-4">
                atendimento online · sigilo absoluto · garantia de 7 dias
              </p>
            </div>

            {/* VSL Player - sem videoSrc mostra placeholder; quando gravar, adicionar videoSrc="/videos/vsl-mapa.mp4" */}
            <VSLPlayer placeholder="[VSL Mapa de Destino - 60s]" />
          </div>
        </section>

        {/* ===== BARRA DE TRAJETÓRIA ===== */}
        <section className="bg-ink-softer text-cream py-5 px-6 border-t border-gold/10">
          <div className="max-w-content mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] text-center mb-3">
              Trajetória executiva em
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 text-sm text-mute">
              <span>Varejo de moda global</span>
              <span className="text-gold">·</span>
              <span>Auditoria Big Four</span>
              <span className="text-gold">·</span>
              <span>Setor petroleiro</span>
              <span className="text-gold">·</span>
              <span>Multinacional de alimentos</span>
              <span className="text-gold">·</span>
              <span>Docente UFRJ/UFRGS</span>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 01 - DIAGNÓSTICO (Voice of Customer) ===== */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              01 · Se você está aqui
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 max-w-3xl">
              Você tem uma decisão grande na mesa. E está há semanas com ela travando seu sono.
            </h2>
            <p className="text-ink/60 text-lg mb-12 max-w-2xl">
              Talvez seja uma dessas:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  title: "Uma proposta que não sai da sua cabeça",
                  text: "Os números fecham. A due diligence bateu. Todo mundo diz para assinar. Mas algo dentro de você trava — e você não sabe se é sabedoria ou medo. Precisa de um olhar que enxergue o que o Excel não mostra.",
                },
                {
                  title: "Um sócio que você não consegue decifrar",
                  text: "A conversa é boa, os resultados vêm, mas tem uma coisa no ar. Você não tem prova — mas sente. E já viu empresas grandes ruírem por conta de sócio que ninguém leu a tempo.",
                },
                {
                  title: "Uma decisão de virada que você adia há meses",
                  text: "Mudar de área, fazer aquela transição, dar o passo que você sabe que precisa dar. Cada mês que passa é uma janela fechando — e você precisa saber se agora é a hora ou se é melhor esperar.",
                },
                {
                  title: "A vida 'perfeita' que pesa demais",
                  text: "Tudo ao seu redor funciona. Dinheiro entra, família é sólida, carreira flui. E mesmo assim, algo pede atenção — e você precisa entender o quê, antes que vire crise.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-cream-subtle border border-ink/10 rounded-lg p-6 hover:border-gold/40 transition-colors"
                >
                  <h3 className="font-serif text-xl mb-3 text-ink leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-ink/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 02 - OS DOIS MUNDOS ===== */}
        <section id="dois-mundos" className="py-20 md:py-24 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              02 · Os dois mundos
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-3 max-w-3xl">
              Duas trajetórias paralelas. Quatro décadas cada uma.
            </h2>
            <p className="text-ink/60 text-lg mb-12 max-w-2xl">
              A combinação que quase ninguém tem: leitura espiritual feita por quem sentou na cadeira de quem decide grande, por quatro décadas.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-ink/10 rounded-lg p-8">
                <p className="text-blue-700 text-xs uppercase tracking-[0.15em] font-medium mb-3">
                  Vida corporativa
                </p>
                <h3 className="font-serif text-2xl mb-6 text-ink">
                  40 anos no comando
                </h3>
                <ul className="space-y-3 text-ink/80">
                  <li>
                    <span className="font-medium text-ink">Diretor Geral</span>
                    {" — "}multinacional global de moda
                  </li>
                  <li>
                    <span className="font-medium text-ink">Presidente</span>
                    {" — "}grupo industrial de calçados (multinacional)
                  </li>
                  <li>
                    <span className="font-medium text-ink">Vice-Presidente</span>
                    {" — "}grupo nacional de moda
                  </li>
                  <li>
                    <span className="font-medium text-ink">Gerente Geral</span>
                    {" — "}multinacional de alimentos
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      Gerente de Planejamento Estratégico
                    </span>
                    {" — "}setor petroleiro
                  </li>
                  <li>
                    <span className="font-medium text-ink">
                      Gerente de Auditoria
                    </span>
                    {" — "}Big Four
                  </li>
                </ul>
                <p className="text-xs text-ink/40 mt-6 pt-4 border-t border-ink/10">
                  Trajetória comprovável no LinkedIn.
                </p>
              </div>

              <div className="bg-parchment border border-parchment-border rounded-lg p-8">
                <p className="text-parchment-deep text-xs uppercase tracking-[0.15em] font-medium mb-3">
                  Vida espiritual
                </p>
                <h3 className="font-serif text-2xl mb-6 text-gold-darker">
                  40 anos de axé
                </h3>
                <ul className="space-y-3 text-parchment-deep">
                  <li>
                    <span className="font-medium text-gold-darker">
                      Iniciado
                    </span>{" "}
                    no Candomblé Nagô Ketu
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Filho de Pai Obarayí
                    </span>
                    {" — "}Ilê Opô Aganjú
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Linhagem direta
                    </span>{" "}
                    da matriz do Ilê Opô Afonjá
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Filho de Oxóssi
                    </span>
                    {" — "}o orixá da precisão
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Casa aberta
                    </span>{" "}
                    há 25 anos em Osasco
                  </li>
                  <li>
                    <span className="font-medium text-gold-darker">
                      Atendimento
                    </span>{" "}
                    presencial e online
                  </li>
                </ul>
                <p className="text-xs text-parchment-deep/60 mt-6 pt-4 border-t border-parchment-border">
                  Linhagem reconhecida na tradição iorubá.
                </p>
              </div>
            </div>

            <div className="bg-white border border-ink/10 rounded-lg p-8 mt-6 text-center">
              <p className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed max-w-3xl mx-auto">
                &ldquo;Os dois mundos sempre conversaram. Cada decisão grande da minha trajetória executiva, eu consultei nos búzios antes de tomar.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 03 - POR QUE BÚZIOS ===== */}
        <section className="py-20 md:py-24 px-6 bg-parchment">
          <div className="max-w-prose mx-auto">
            <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
              03 · Por que búzios funcionam para quem decide grande
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8 text-gold-darker">
              A ferramenta de decisão mais antiga da humanidade — e a mais subestimada pelo mundo corporativo.
            </h2>
            <div className="space-y-6 text-parchment-deep text-lg leading-relaxed">
              <p>
                Gestores de ativos bilionários pagam caro por consultores que os ajudem a decidir sob incerteza. Boards corporativos constroem comitês para acessar a intuição de quem já viu o padrão antes. O jogo de búzios é isso — com quatro mil anos a mais de refinamento.
              </p>
              <p>
                Não é previsão. É leitura de padrão. É um sistema simbólico que acessa a camada de informação que sua mente racional não alcança sozinha — e que todo empresário experiente aprende a chamar de &ldquo;faro&rdquo;.
              </p>
              <p>
                Eu mesmo consultei os búzios antes de cada decisão grande das quatro décadas em que estive em cargos executivos. Antes de aceitar cargos. Antes de fechar negócios. Antes de virar contra a opinião do board. Os resultados falam por si.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 04 - O MÉTODO ===== */}
        <section className="py-20 md:py-24 px-6 bg-ink text-cream">
          <div className="max-w-prose mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-3">
              04 · O método
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-cream">
              Oxóssi não atira duas vezes.
            </h2>
            <div className="space-y-6 text-mute text-lg leading-relaxed">
              <p>
                Meu trabalho não é te dizer o que vai acontecer — é te mostrar o que já está em movimento. Cada decisão grande deixa rastros antes de ser tomada. Os búzios leem esses rastros.
              </p>
              <p>
                Você sai da consulta com três entregas concretas: o diagnóstico do momento que você está vivendo, o mapa dos próximos movimentos da estrada e as recomendações específicas para cada cenário. Sem generalidades. Sem frases feitas.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 05 - PAINTED PICTURE ===== */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              05 · Como vai ser sua vida depois
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4 max-w-3xl">
              Seis meses depois da consulta, isso aqui é rotina.
            </h2>
            <p className="text-ink/60 text-lg mb-12 max-w-2xl">
              Não é promessa. É o padrão que observo há 40 anos em quem faz o Mapa e aplica.
            </p>

            <div className="space-y-4">
              {[
                "Você tem um documento estratégico ao lado do seu planejamento financeiro do ano — e consulta ele antes de cada reunião importante.",
                "Quando aparece a próxima decisão grande, você já sabe em qual janela do ano está. E decide com mais convicção do que seus sócios.",
                "As oportunidades que o Mapa apontou, você aproveita. Os meses de risco, você recolhe. E descobre que o calendário do Odu bate com o ritmo dos seus resultados.",
                "Você para de consumir energia com perguntas sem resposta. E gasta essa energia executando o que já está claro.",
                "Em dezembro, você olha pra trás e percebe que o ano virou exatamente como os búzios falaram. E entende por que empresário sério consulta antes de decidir.",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start py-3 border-b border-ink/5"
                >
                  <span className="text-gold font-serif text-2xl leading-none flex-shrink-0 mt-1">
                    →
                  </span>
                  <p className="text-ink/80 text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 06 - MODALIDADES (com guia de auto-seleção) ===== */}
        <section id="modalidades" className="py-20 md:py-24 px-6 bg-cream-subtle">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              06 · Modalidades de consulta
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-3 max-w-2xl">
              Três formas de consultar, uma única qualidade.
            </h2>
            <p className="text-ink/60 text-lg mb-10 max-w-2xl">
              Escolha de acordo com o tamanho da sua pergunta.
            </p>

            {/* Guia rápido de auto-seleção */}
            <div className="bg-ink/5 rounded-lg p-5 mb-10 border border-ink/10">
              <p className="text-ink/80 text-sm leading-relaxed">
                <strong className="text-ink">Primeira vez ou pergunta pontual?</strong> Comece pela{" "}
                <span className="text-gold-darker font-medium">Flecha</span>.{" "}
                <strong className="text-ink">Quer o quadro completo dos próximos 12 meses?</strong>{" "}
                O <span className="text-gold-darker font-medium">Mapa</span> é pra você.{" "}
                <strong className="text-ink">Já me conhece e quer acompanhamento contínuo?</strong>{" "}
                Entra no <span className="text-gold-darker font-medium">Círculo</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {/* FLECHA */}
              <div className="bg-white border border-ink/10 rounded-lg p-6 flex flex-col">
                <p className="text-ink/40 text-xs uppercase tracking-wider mb-3">
                  Consulta pontual
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  Flecha da Decisão
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
                  Uma pergunta específica. Uma resposta precisa em áudio detalhado, em até 48 horas no seu WhatsApp.
                </p>
                <ul className="text-xs text-ink/60 mb-5 space-y-1">
                  <li>• Uma pergunta estratégica</li>
                  <li>• Resposta em áudio (15-20min)</li>
                  <li>• Entrega em até 48h</li>
                </ul>
                <p className="text-2xl font-medium text-ink mb-4">R$ 197</p>
                <Link
                  href="/produtos/flecha-da-decisao"
                  className="block text-center border border-ink/30 hover:border-ink py-3 rounded text-sm transition-colors"
                >
                  Saiba mais
                </Link>
              </div>

              {/* MAPA - destaque */}
              <div className="bg-white border-2 border-gold rounded-lg p-6 flex flex-col relative md:scale-105 md:shadow-lg">
                <span className="absolute -top-3 left-6 bg-gold text-gold-darker text-xs font-medium px-3 py-1 rounded uppercase tracking-wider">
                  Mais procurado
                </span>
                <p className="text-ink/40 text-xs uppercase tracking-wider mb-3 mt-2">
                  Consulta estratégica
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  Mapa de Destino
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
                  Diagnóstico completo dos próximos 12 meses. Consulta de 60 a 90 minutos + PDF personalizado que você consulta o ano inteiro.
                </p>
                <ul className="text-xs text-ink/60 mb-5 space-y-1">
                  <li>• Búzios + Odu regente</li>
                  <li>• Consulta ao vivo (60-90min)</li>
                  <li>• PDF personalizado</li>
                  <li>• 3 bônus inclusos</li>
                </ul>
                <p className="text-2xl font-medium text-ink mb-1">R$ 997</p>
                <p className="text-xs text-ink/50 mb-4">
                  à vista ou 12x no cartão
                </p>
                <Link
                  href="/produtos/mapa-de-destino"
                  className="block text-center bg-ink hover:bg-ink-softer text-cream py-3 rounded text-sm font-medium transition-colors"
                >
                  Agendar meu mapa →
                </Link>
              </div>

              {/* CÍRCULO */}
              <div className="bg-white border border-ink/10 rounded-lg p-6 flex flex-col">
                <p className="text-ink/40 text-xs uppercase tracking-wider mb-3">
                  Acompanhamento anual
                </p>
                <h3 className="font-serif text-2xl text-ink mb-3">
                  Círculo do Caçador
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-4 flex-grow">
                  Mentoria espiritual de 12 meses para quem não toma uma decisão grande por ano — toma várias.
                </p>
                <ul className="text-xs text-ink/60 mb-5 space-y-1">
                  <li>• Consultas mensais</li>
                  <li>• Acesso direto via WhatsApp</li>
                  <li>• Rituais inclusos</li>
                </ul>
                <p className="text-2xl font-medium text-ink mb-4">R$ 5.997</p>
                <Link
                  href="/produtos/circulo-do-cacador"
                  className="block text-center border border-ink/30 hover:border-ink py-3 rounded text-sm transition-colors"
                >
                  Saiba mais
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 07 - PROVA SOCIAL ===== */}
        <section className="py-20 md:py-24 px-6">
          <div className="max-w-content mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              07 · Quem já consultou
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-12 max-w-3xl">
              Quatro décadas, milhares de decisões, zero arrependimento documentado.
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  quote:
                    "Pai Márcio viu a traição do meu sócio três meses antes dela acontecer. Se eu tivesse ignorado, tinha perdido a empresa.",
                  name: "Ricardo C.",
                  role: "Empresário, setor atacadista",
                },
                {
                  quote:
                    "Ia abrir uma filial em outro estado. Ele disse: espera seis meses. Esperei. A economia do setor virou. Teria quebrado.",
                  name: "Paulo R.",
                  role: "Construção civil",
                },
                {
                  quote:
                    "Eu sou ateu. Fui por indicação, cético total. Saí com três decisões tomadas que eu adiava há um ano.",
                  name: "Eduardo T.",
                  role: "Sócio de escritório de advocacia",
                },
                {
                  quote:
                    "Em seis meses eu já estava casada com a pessoa certa. Os búzios me mostraram o que dois anos de terapia não mostraram.",
                  name: "Carolina M.",
                  role: "Executiva, 34 anos",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-cream-subtle border border-ink/10 rounded-lg p-6"
                >
                  <p className="font-serif italic text-lg text-ink leading-relaxed mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-ink font-medium text-sm">{t.name}</p>
                  <p className="text-ink/60 text-xs">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 08 - GARANTIA + ESCASSEZ ===== */}
        <section className="py-16 md:py-20 px-6 bg-parchment">
          <div className="max-w-content mx-auto grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-parchment-border rounded-lg p-8">
              <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
                Agenda
              </p>
              <h3 className="font-serif text-2xl mb-4 text-gold-darker">
                Atendo no máximo 8 mapas por semana.
              </h3>
              <p className="text-parchment-deep leading-relaxed mb-4">
                Cada Mapa demanda preparação ritual específica no dia anterior à consulta. Por isso, mantenho agenda limitada há 25 anos — é a única forma de preservar a qualidade do diagnóstico.
              </p>
              <p className="text-parchment-deep/80 text-sm">
                Lista de espera atual: 7 a 14 dias.
              </p>
            </div>

            <div className="bg-white border border-parchment-border rounded-lg p-8">
              <p className="text-parchment-deep text-xs uppercase tracking-[0.2em] mb-3">
                Garantia
              </p>
              <h3 className="font-serif text-2xl mb-4 text-gold-darker">
                7 dias incondicionais.
              </h3>
              <p className="text-parchment-deep leading-relaxed mb-4">
                Se nas primeiras 24h após sua consulta você sentir que não recebeu clareza estratégica, devolvo 100% do seu investimento.
              </p>
              <p className="text-parchment-deep/80 text-sm">
                Você fica com o PDF, com a leitura gravada e com o seu dinheiro de volta. É a regra da casa há 40 anos.
              </p>
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO 09 - FAQ ===== */}
        <section id="faq" className="py-20 md:py-24 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-ink/50 text-xs uppercase tracking-[0.2em] mb-3">
              09 · Dúvidas frequentes
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
              As perguntas que todo empresário faz antes de agendar.
            </h2>
            <div>
              {[
                {
                  q: "Preciso acreditar em Candomblé para consultar?",
                  a: "Não. A maioria dos meus clientes não é do axé. Os búzios funcionam independentemente da sua crença — assim como a medicina funciona independentemente de religião. O que importa é que você esteja disposto a ouvir o diagnóstico com honestidade.",
                },
                {
                  q: "A consulta online tem a mesma precisão da presencial?",
                  a: "Sim. Os búzios são jogados aqui no meu ilê, com toda a fundamentação. Você recebe a leitura por áudio (Flecha) ou videochamada (Mapa de Destino). Atendo online há mais de 15 anos com a mesma precisão do presencial.",
                },
                {
                  q: "Por que um executivo de carreira faz consultoria espiritual?",
                  a: "Porque durante 40 anos no mundo corporativo, percebi que as decisões mais importantes da minha trajetória não foram tomadas com planilha — foram tomadas com os búzios. Hoje, aposentado, quero entregar para outros executivos o que eu mesmo consultei por quatro décadas. Não é um segundo ofício. É o trabalho que sempre esteve por trás do outro.",
                },
                {
                  q: "Como funciona o sigilo?",
                  a: "Rigorosamente. O que é tratado na consulta fica entre você, eu e Oxóssi. Não guardo registros escritos das perguntas. Não compartilho nomes. Não dou depoimentos sobre clientes — nem para promoção. É por isso que pessoas públicas me consultam há décadas.",
                },
                {
                  q: "Posso consultar sobre decisões empresariais complexas?",
                  a: "Sim. Atendo rotineiramente sobre sociedades, contratações, expansões, aquisições, questões societárias e conflitos internos. Os búzios não substituem sua análise racional — somam a ela uma camada que nenhum balanço mostra.",
                },
                {
                  q: "Qual a diferença entre você e um cartomante ou astrólogo?",
                  a: "O jogo de búzios é uma tradição oracular de 4.000 anos do povo iorubá, com um sistema simbólico próprio (os 16 odus e seus desdobramentos) e uma metodologia de interpretação rigorosa que leva décadas para se dominar. Não trabalho com previsão genérica. Trabalho com diagnóstico específico de situação.",
                },
                {
                  q: "Você faz rituais ou trabalhos espirituais?",
                  a: "Sim, quando o diagnóstico dos búzios aponta necessidade. Não ofereço rituais preventivamente — só quando fazem sentido dentro do seu caso específico. Isso é conversado individualmente, nunca empurrado.",
                },
                {
                  q: "Como é feito o pagamento?",
                  a: "PIX, cartão de crédito (até 12x) ou boleto. Todo o processo é protegido por plataforma de pagamento certificada. A consulta só é realizada após confirmação.",
                },
                {
                  q: "Tem lista de espera?",
                  a: "Sim. Atendo no máximo 8 Mapas de Destino por semana para manter a qualidade do diagnóstico. Flechas da Decisão têm mais disponibilidade, mas também respeitam a agenda.",
                },
                {
                  q: "E se eu não souber exatamente qual é minha pergunta?",
                  a: "Nesse caso, o Mapa de Destino é o caminho certo. Ele diagnostica o momento que você está vivendo e aponta as áreas que pedem atenção — mesmo quando você não sabe formular a pergunta.",
                },
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="py-20 md:py-28 px-6 bg-ink text-cream text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.2em] mb-6">
              Último convite
            </p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6 text-cream">
              Quem decidiu certo nos meus 40 anos de carreira corporativa, decidiu com os búzios na mesa.
            </h2>
            <p className="text-mute text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Hoje, posso colocar a mesma mesa à sua disposição.
            </p>
            <Link
              href="/produtos/mapa-de-destino"
              className="inline-block bg-gold text-ink px-10 py-4 rounded font-medium hover:bg-gold-dark transition-colors text-sm tracking-wide"
            >
              Agendar meu mapa →
            </Link>
            <p className="text-mute-deeper text-xs mt-6">
              atendimento online · sigilo absoluto · garantia de 7 dias
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileCTA />
    </>
  );
}
