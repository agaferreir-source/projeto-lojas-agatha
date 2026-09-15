import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "DESENVOLVIMENTO GRATUITO",
    description:
      "O projeto será desenvolvido sem custo para os negócios selecionados.",
  },
  {
    number: "02",
    title: "FEITO PARA SUA LOJA",
    description:
      "A solução será pensada a partir da rotina, dos desafios e das necessidades do seu negócio.",
  },
  {
    number: "03",
    title: "UM PROJETO DE VERDADE",
    description:
      "Sua loja poderá fazer parte de um projeto real, criado para resolver uma necessidade real.",
  },
];

const solutions = [
  {
    number: "01",
    title: "SITE",
    description:
      "Uma página profissional para apresentar sua loja, produtos, serviços e informações.",
  },
  {
    number: "02",
    title: "SISTEMA",
    description:
      "Uma ferramenta criada para organizar processos e facilitar a rotina da sua loja.",
  },
  {
    number: "03",
    title: "AUTOMAÇÃO",
    description:
      "Processos repetitivos podem se tornar mais rápidos e simples.",
  },
  {
    number: "04",
    title: "GESTÃO",
    description:
      "Uma solução para ajudar no controle de clientes, vendas, estoque, financeiro e informações.",
  },
];

const steps = [
  {
    number: "01",
    title: "VOCÊ SE INSCREVE",
    description:
      "Conte um pouco sobre sua loja, como ela funciona e o que você gostaria de melhorar.",
  },
  {
    number: "02",
    title: "EU ANALISO",
    description:
      "Vou analisar as inscrições e entender quais necessidades podem se transformar em um projeto.",
  },
  {
    number: "03",
    title: "SUA LOJA PODE SER SELECIONADA",
    description:
      "Se houver alinhamento com a proposta, entrarei em contato para conversar sobre a ideia.",
  },
  {
    number: "04",
    title: "O PROJETO COMEÇA",
    description:
      "Depois do alinhamento, começamos a desenvolver a solução.",
  },
];

export default function Home() {
  return (
    <main className="site-page">
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <div className="logo-mark">AP</div>

            <div className="logo-text">
              <span className="logo-name">AGATHA PINHEIRO</span>
              <span className="logo-subtitle">PROJETO DIGITAL</span>
            </div>
          </Link>

          <Link href="/participar" className="header-cta">
            Inscrever minha loja
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="hero campaign-hero">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                INSCRIÇÕES ABERTAS · 2026
              </div>

              <h1 className="hero-title">
                Inscreva sua loja.
                <br />
                <span>Participe do projeto.</span>
              </h1>

              <p className="hero-text">
                Sua loja pode receber uma solução digital personalizada,
                desenvolvida especialmente para ajudar no dia a dia do negócio.
              </p>

              <div className="free-highlight">
                <span className="free-icon">✦</span>

                <div>
                  <strong>DESENVOLVIMENTO GRATUITO</strong>
                  <p>
                    Sem custo de desenvolvimento para as lojas selecionadas.
                  </p>
                </div>
              </div>

              <div className="hero-actions">
                <Link href="/participar" className="button-primary">
                  Quero inscrever minha loja
                  <span>↗</span>
                </Link>

                <a href="#como-funciona" className="button-secondary">
                  Como funciona
                </a>
              </div>

              <div className="hero-note">
                <span>✦</span>
                <p>
                  Você conta sua necessidade. Eu analiso e, se sua loja for
                  selecionada, o projeto começa.
                </p>
              </div>
            </div>

            {/* VISUAL INTERATIVO */}
            <div className="campaign-visual">
              <div className="visual-glow" />

              <div className="campaign-orbit orbit-one" />
              <div className="campaign-orbit orbit-two" />
              <div className="campaign-orbit orbit-three" />

              <div className="floating-dot dot-one" />
              <div className="floating-dot dot-two" />
              <div className="floating-dot dot-three" />

              <div className="campaign-card">
                <div className="campaign-card-top">
                  <span>AP / OPEN PROJECT</span>
                  <span>2026</span>
                </div>

                <div className="campaign-card-center">
                  <div className="campaign-small">PROJETO</div>

                  <div className="campaign-number">01</div>

                  <div className="campaign-main">
                    INSCRIVA
                    <br />
                    SUA LOJA
                  </div>

                  <div className="campaign-line" />

                  <div className="campaign-free">
                    <span>✦</span>
                    GRATUITO
                  </div>
                </div>

                <div className="campaign-card-bottom">
                  <span>LOJA REAL</span>
                  <span>PROJETO REAL</span>
                </div>
              </div>

              <div className="floating-tag tag-one">
                <span>✦</span>
                100% GRATUITO
              </div>

              <div className="floating-tag tag-two">
                <span>01</span>
                SUA LOJA
              </div>

              <div className="floating-tag tag-three">
                <span>↗</span>
                SOLUÇÃO PERSONALIZADA
              </div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* O PROJETO */}
      <section className="section section-dark" id="projeto">
        <div className="container">
          <div className="split-section">
            <div className="section-heading">
              <div className="section-label">O PROJETO</div>

              <h2 className="section-title">
                Sua loja pode
                <br />
                ganhar uma
                <br />
                solução digital.
              </h2>
            </div>

            <div className="split-text">
              <p>
                Estou selecionando lojas e pequenos negócios para participar
                de um projeto de desenvolvimento digital.
              </p>

              <p>
                A ideia é simples: entender como sua loja funciona, descobrir
                o que poderia ser melhorado e transformar essa necessidade em
                uma solução.
              </p>

              <p className="text-highlight">
                <strong>
                  E o desenvolvimento é gratuito para as lojas selecionadas.
                </strong>
              </p>

              <div className="gold-line" />
            </div>
          </div>

          <div className="highlights">
            {benefits.map((benefit) => (
              <article className="highlight interactive-card" key={benefit.number}>
                <span className="highlight-number">{benefit.number}</span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">O QUE PODE SER CRIADO</div>

            <h2 className="section-title">
              Você conta
              <br />
              o problema.
              <br />
              <span>Eu penso na solução.</span>
            </h2>

            <p className="section-description">
              Você não precisa saber exatamente qual sistema ou tecnologia
              precisa. Quero primeiro entender a realidade da sua loja.
            </p>
          </div>

          <div className="services-grid">
            {solutions.map((solution) => (
              <article
                className="service-card interactive-card"
                key={solution.number}
              >
                <span className="service-icon">{solution.number}</span>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>

                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="statement-section">
        <div className="statement-glow" />

        <div className="container">
          <div className="statement">
            <span className="statement-symbol">✦</span>

            <p>
              E se a próxima solução
              <br />
              fosse criada para
              <br />
              <strong>a sua loja?</strong>
            </p>

            <Link href="/participar" className="statement-link">
              Quero participar ↗
            </Link>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        className="section section-dark"
        id="como-funciona"
      >
        <div className="container">
          <div className="section-heading">
            <div className="section-label">COMO FUNCIONA</div>

            <h2 className="section-title">
              É simples.
              <br />
              Você participa.
            </h2>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <article className="step interactive-card" key={step.number}>
                <span className="step-number">{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM PODE PARTICIPAR */}
      <section className="section">
        <div className="container">
          <div className="eligibility">
            <div>
              <div className="section-label">QUEM PODE PARTICIPAR</div>

              <h2 className="section-title">
                Tem uma loja?
                <br />
                <span>Então pode participar.</span>
              </h2>
            </div>

            <div className="eligibility-text">
              <p>
                A iniciativa é voltada principalmente para lojas e pequenos
                negócios que tenham alguma necessidade que possa ser
                solucionada através da tecnologia.
              </p>

              <p>
                Pode ser algo simples ou algo maior. Pode ser uma ideia que
                você já tem há algum tempo ou um problema que aparece todos os
                dias na sua rotina.
              </p>

              <p>
                <strong>
                  O importante é ter uma necessidade real para contar.
                </strong>
              </p>

              <Link href="/participar" className="button-primary">
                Inscrever minha loja
                <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SELEÇÃO */}
      <section className="section section-dark">
        <div className="container">
          <div className="split-section">
            <div className="section-heading">
              <div className="section-label">SELEÇÃO</div>

              <h2 className="section-title">
                Quero conhecer
                <br />
                sua loja.
              </h2>
            </div>

            <div className="split-text">
              <p>
                Depois de receber as inscrições, vou analisar cada loja e
                entender as necessidades apresentadas.
              </p>

              <p>
                Vou considerar a situação do negócio, o problema apresentado,
                a possibilidade de desenvolvimento e o impacto que a solução
                poderia gerar.
              </p>

              <p>
                <strong>
                  O preenchimento do formulário não garante a seleção.
                </strong>
              </p>

              <div className="gold-line" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta campaign-cta">
        <div className="cta-glow" />

        <div className="container cta-content">
          <div className="section-label">
            ✦ INSCRIÇÕES ABERTAS
          </div>

          <h2 className="section-title">
            Inscreva sua loja.
            <br />
            <span>O projeto pode começar aqui.</span>
          </h2>

          <p className="cta-text">
            Conte um pouco sobre sua loja e o que você gostaria de melhorar.
          </p>

          <div className="cta-free">
            <span>✦</span>
            <strong>DESENVOLVIMENTO GRATUITO</strong>
            <small>
              Para os negócios selecionados.
            </small>
          </div>

          <Link href="/participar" className="button-primary button-large">
            Quero participar
            <span>↗</span>
          </Link>

          <div className="cta-disclaimer">
            A inscrição é gratuita e não garante a seleção do projeto.
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-copy">
              © 2026 Agatha Pinheiro
            </div>

            <div className="footer-project">
              PROJETO DIGITAL · INSCRIÇÕES ABERTAS
            </div>
          </div>

          <div className="footer-mark">AP</div>
        </div>
      </footer>
    </main>
  );
}
