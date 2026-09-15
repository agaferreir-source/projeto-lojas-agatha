import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "DESENVOLVIMENTO GRATUITO",
    description:
      "O projeto selecionado será desenvolvido sem custo de desenvolvimento.",
  },
  {
    number: "02",
    title: "SOLUÇÃO PERSONALIZADA",
    description:
      "A proposta será pensada a partir das necessidades reais do seu negócio.",
  },
  {
    number: "03",
    title: "UM PROJETO REAL",
    description:
      "Sua empresa poderá fazer parte de um projeto digital desenvolvido para resolver uma necessidade real.",
  },
];

const solutions = [
  {
    number: "01",
    title: "SITE",
    description:
      "Uma presença digital profissional para apresentar sua empresa, produtos e serviços.",
  },
  {
    number: "02",
    title: "SISTEMA",
    description:
      "Uma ferramenta personalizada para organizar processos e facilitar a rotina do negócio.",
  },
  {
    number: "03",
    title: "AUTOMAÇÃO",
    description:
      "Processos repetitivos podem se transformar em fluxos mais rápidos e inteligentes.",
  },
  {
    number: "04",
    title: "GESTÃO",
    description:
      "Soluções para ajudar no controle de clientes, vendas, estoque, financeiro e informações.",
  },
];

const steps = [
  {
    number: "01",
    title: "VOCÊ SE INSCREVE",
    description:
      "Conte sobre sua empresa, seus desafios e o que gostaria de transformar através da tecnologia.",
  },
  {
    number: "02",
    title: "EU ANALISO",
    description:
      "As inscrições serão analisadas considerando a necessidade, a proposta e a possibilidade de desenvolvimento.",
  },
  {
    number: "03",
    title: "A EMPRESA É SELECIONADA",
    description:
      "Caso exista alinhamento, entrarei em contato para entender melhor o projeto.",
  },
  {
    number: "04",
    title: "O PROJETO COMEÇA",
    description:
      "Depois do alinhamento, começamos a transformar a necessidade em uma solução digital real.",
  },
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <div className="logo-mark">AP</div>

            <div className="logo-text">
              <span className="logo-name">AGATHA PINHEIRO</span>
              <span className="logo-subtitle">DIGITAL SOLUTIONS</span>
            </div>
          </Link>

          <Link href="/participar" className="header-cta">
            Quero participar
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="hero campaign-hero">
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">OPEN PROJECT · 2026</div>

              <h1 className="hero-title">
                Seu negócio tem
                <br />
                <span>um problema para resolver?</span>
              </h1>

              <p className="hero-text">
                Estou selecionando negócios reais para desenvolver uma solução
                digital personalizada, pensada a partir das necessidades de
                cada empresa.
              </p>

              <div className="hero-actions">
                <Link href="/participar" className="button-primary">
                  Quero participar
                </Link>

                <a href="#projeto" className="button-secondary">
                  Conhecer o projeto
                </a>
              </div>

              <div className="hero-note">
                <span>✦</span>

                <p>
                  Desenvolvimento sem custo para os negócios selecionados.
                </p>
              </div>
            </div>

            {/* VISUAL */}
            <div className="campaign-visual">
              <div className="campaign-orbit orbit-one" />
              <div className="campaign-orbit orbit-two" />

              <div className="campaign-card">
                <div className="campaign-card-top">
                  <span>AP / OPEN PROJECT</span>
                  <span>2026</span>
                </div>

                <div className="campaign-card-center">
                  <div className="campaign-small">PROJETO</div>

                  <div className="campaign-number">01</div>

                  <div className="campaign-main">
                    REAL
                    <br />
                    BUSINESS
                  </div>

                  <div className="campaign-line" />

                  <div className="campaign-small">
                    DIGITAL SOLUTIONS
                  </div>
                </div>

                <div className="campaign-card-bottom">
                  <span>REAL NEED</span>
                  <span>REAL PROJECT</span>
                </div>
              </div>

              <div className="floating-tag tag-one">
                <span>01</span>
                NEGÓCIO REAL
              </div>

              <div className="floating-tag tag-two">
                <span>✦</span>
                SOLUÇÃO PERSONALIZADA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O PROJETO */}
      <section className="section section-dark" id="projeto">
        <div className="container">
          <div className="split-section">
            <div className="section-heading">
              <div className="section-label">O PROJETO</div>

              <h2 className="section-title">
                Tecnologia criada
                <br />
                para problemas
                <br />
                reais.
              </h2>
            </div>

            <div className="split-text">
              <p>
                Estou criando uma iniciativa para desenvolver projetos
                digitais em negócios reais.
              </p>

              <p>
                A ideia é encontrar empresas que tenham uma necessidade, um
                problema ou uma ideia que possa ser transformada em uma
                solução através da tecnologia.
              </p>

              <p>
                A partir das inscrições, alguns negócios serão selecionados
                para participar do desenvolvimento.
              </p>

              <div className="gold-line" />
            </div>
          </div>

          <div className="highlights">
            {benefits.map((benefit) => (
              <article className="highlight" key={benefit.number}>
                <span className="highlight-number">{benefit.number}</span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
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
              A solução começa
              <br />
              com o seu problema.
            </h2>

            <p className="section-description">
              Você não precisa saber exatamente qual sistema, site ou
              tecnologia precisa. Quero entender o seu negócio primeiro.
              A partir disso, podemos descobrir o que faz sentido construir.
            </p>
          </div>

          <div className="services-grid">
            {solutions.map((solution) => (
              <article className="service-card" key={solution.number}>
                <span className="service-icon">{solution.number}</span>

                <h3>{solution.title}</h3>

                <p>{solution.description}</p>

                <span className="service-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE DE IMPACTO */}
      <section className="statement-section">
        <div className="container">
          <div className="statement">
            <span className="statement-symbol">✦</span>

            <p>
              Talvez a próxima solução digital
              <br />
              que eu desenvolva seja para
              <br />
              <strong>o seu negócio.</strong>
            </p>
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
              Do problema
              <br />
              ao projeto.
            </h2>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <article className="step" key={step.number}>
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
                Seu negócio não precisa
                <br />
                ser grande.
              </h2>
            </div>

            <div className="eligibility-text">
              <p>
                A iniciativa é voltada para lojas, pequenos negócios,
                profissionais e empresas que tenham uma necessidade que possa
                ser solucionada através da tecnologia.
              </p>

              <p>
                Não importa se você ainda não possui um sistema, se trabalha
                com planilhas ou se sente que poderia fazer muita coisa de uma
                forma mais organizada.
              </p>

              <p>
                O mais importante é existir uma necessidade real e vontade de
                encontrar uma solução.
              </p>

              <Link
                href="/participar"
                className="button-primary"
              >
                Contar sobre meu negócio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOU ANALISAR */}
      <section className="section section-dark">
        <div className="container">
          <div className="split-section">
            <div className="section-heading">
              <div className="section-label">SOBRE A SELEÇÃO</div>

              <h2 className="section-title">
                Mais do que
                <br />
                uma ideia.
              </h2>
            </div>

            <div className="split-text">
              <p>
                Cada inscrição será analisada individualmente.
              </p>

              <p>
                Vou buscar entender o problema apresentado, a realidade do
                negócio, o impacto que uma solução poderia gerar e a
                possibilidade de transformar essa necessidade em um projeto
                viável.
              </p>

              <p>
                Por isso, não é necessário chegar com tudo pronto. O formulário
                existe justamente para eu conhecer melhor sua realidade.
              </p>

              <div className="gold-line" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta campaign-cta">
        <div className="container cta-content">
          <div className="section-label">
            INSCRIÇÕES ABERTAS
          </div>

          <h2 className="section-title">
            Talvez o seu negócio
            <br />
            seja o próximo.
          </h2>

          <p className="cta-text">
            Preencha o formulário e conte sobre sua empresa, seus desafios e
            o que você gostaria de transformar através da tecnologia.
          </p>

          <Link
            href="/participar"
            className="button-primary"
          >
            Quero participar
          </Link>

          <div className="cta-disclaimer">
            O preenchimento do formulário não garante a seleção do projeto.
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
              DIGITAL PROJECT · OPEN CALL
            </div>
          </div>

          <div className="footer-mark">AP</div>
        </div>
      </footer>
    </main>
  );
}
