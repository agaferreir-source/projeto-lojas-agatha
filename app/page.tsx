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
    title: "PROJETO REAL",
    description:
      "Sua empresa poderá fazer parte de um projeto digital desenvolvido profissionalmente.",
  },
];

const services = [
  {
    number: "01",
    title: "SITE",
    description:
      "Uma presença digital profissional para apresentar sua empresa, serviços e produtos.",
  },
  {
    number: "02",
    title: "SISTEMA",
    description:
      "Uma ferramenta personalizada para organizar e facilitar processos da empresa.",
  },
  {
    number: "03",
    title: "AUTOMAÇÃO",
    description:
      "Processos repetitivos podem ser transformados em fluxos mais rápidos e inteligentes.",
  },
  {
    number: "04",
    title: "GESTÃO",
    description:
      "Soluções para ajudar no controle de clientes, vendas, estoque e informações.",
  },
];

const steps = [
  {
    number: "01",
    title: "VOCÊ SE INSCREVE",
    description:
      "Conte sobre sua empresa, seus desafios e a solução que gostaria de desenvolver.",
  },
  {
    number: "02",
    title: "EU ANALISO",
    description:
      "As inscrições serão avaliadas considerando a proposta e a possibilidade de desenvolvimento.",
  },
  {
    number: "03",
    title: "SEU NEGÓCIO É SELECIONADO",
    description:
      "Caso exista alinhamento, entrarei em contato para conversarmos sobre o projeto.",
  },
  {
    number: "04",
    title: "O PROJETO GANHA VIDA",
    description:
      "Depois do alinhamento, começamos o desenvolvimento da solução.",
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
              <span className="logo-name">
                AGATHA PINHEIRO
              </span>

              <span className="logo-subtitle">
                DIGITAL SOLUTIONS
              </span>
            </div>
          </Link>

          <Link
            href="/participar"
            className="header-cta"
          >
            Quero participar
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="hero campaign-hero">
        <div className="container hero-content">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">
                UMA NOVA EXPERIÊNCIA DIGITAL
              </div>

              <h1 className="hero-title">
                Estou procurando
                <br />
                <span>
                  lojas para um novo projeto.
                </span>
              </h1>

              <p className="hero-text">
                Quero selecionar alguns negócios para
                desenvolver uma solução digital real,
                personalizada e pensada para as
                necessidades de cada empresa.
              </p>

              <div className="hero-actions">
                <Link
                  href="/participar"
                  className="button-primary"
                >
                  Quero participar
                </Link>

                <a
                  href="#projeto"
                  className="button-secondary"
                >
                  Conhecer o projeto
                </a>
              </div>

              <div className="hero-note">
                <span>✦</span>

                <p>
                  Desenvolvimento sem custo para os
                  negócios selecionados.
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
                  <div className="campaign-small">
                    PROJETO
                  </div>

                  <div className="campaign-number">
                    01
                  </div>

                  <div className="campaign-main">
                    YOUR
                    <br />
                    BUSINESS
                  </div>

                  <div className="campaign-line" />

                  <div className="campaign-small">
                    DIGITAL SOLUTIONS
                  </div>
                </div>

                <div className="campaign-card-bottom">
                  <span>REAL BUSINESS</span>
                  <span>REAL PROJECT</span>
                </div>
              </div>

              <div className="floating-tag tag-one">
                <span>01</span>
                NEGÓCIO REAL
              </div>

              <div className="floating-tag tag-two">
                <span>✦</span>
                PROJETO PERSONALIZADO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O PROJETO */}
      <section
        className="section section-dark"
        id="projeto"
      >
        <div className="container">
          <div className="split-section">
            <div className="section-heading">
              <div className="section-label">
                O PROJETO
              </div>

              <h2 className="section-title">
                Quero transformar
                <br />
                negócios reais
                <br />
                através da tecnologia.
              </h2>
            </div>

            <div className="split-text">
              <p>
                Estou criando uma iniciativa para
                desenvolver projetos digitais em negócios
                reais.
              </p>

              <p>
                A ideia é encontrar empresas que tenham
                uma necessidade, um problema ou uma ideia
                que possa ser transformada em uma solução
                através da tecnologia.
              </p>

              <p>
                Alguns negócios serão selecionados para
                participar do desenvolvimento.
              </p>

              <div className="gold-line" />
            </div>
          </div>

          <div className="highlights">
            {benefits.map((benefit) => (
              <article
                className="highlight"
                key={benefit.number}
              >
                <span className="highlight-number">
                  {benefit.number}
                </span>

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
            <div className="section-label">
              O QUE PODE SER CRIADO
            </div>

            <h2 className="section-title">
              A tecnologia deve
              <br />
              se adaptar ao negócio.
            </h2>

            <p className="section-description">
              Não existe uma solução única. O projeto será
              pensado a partir da realidade e das
              necessidades de cada empresa selecionada.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.number}
              >
                <span className="service-icon">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <span className="service-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE DE IMPACTO */}
      <section className="statement-section">
        <div className="container">
          <div className="statement">
            <span className="statement-symbol">
              ✦
            </span>

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
            <div className="section-label">
              COMO FUNCIONA
            </div>

            <h2 className="section-title">
              Uma ideia.
              <br />
              Um negócio.
              <br />
              Um projeto real.
            </h2>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <article
                className="step"
                key={step.number}
              >
                <span className="step-number">
                  {step.number}
                </span>

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
              <div className="section-label">
                QUEM PODE PARTICIPAR
              </div>

              <h2 className="section-title">
                Seu negócio não precisa
                <br />
                ser grande.
              </h2>
            </div>

            <div className="eligibility-text">
              <p>
                A iniciativa é voltada para lojas,
                pequenos negócios, profissionais e empresas
                que tenham uma necessidade que possa ser
                solucionada através da tecnologia.
              </p>

              <p>
                O mais importante é existir uma ideia,
                necessidade ou processo que faça sentido
                transformar.
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

      {/* CTA FINAL */}
      <section className="cta campaign-cta">
        <div className="container cta-content">
          <div className="section-label">
            AS INSCRIÇÕES ESTÃO ABERTAS
          </div>

          <h2 className="section-title">
            Vamos descobrir
            <br />
            o que podemos criar?
          </h2>

          <p className="cta-text">
            Preencha o formulário e conte um pouco sobre
            seu negócio, seus desafios e a solução que
            gostaria de desenvolver.
          </p>

          <Link
            href="/participar"
            className="button-primary"
          >
            Quero participar
          </Link>

          <div className="cta-disclaimer">
            O preenchimento do formulário não garante a
            seleção do projeto.
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

          <div className="footer-mark">
            AP
          </div>
        </div>
      </footer>
    </main>
  );
}
