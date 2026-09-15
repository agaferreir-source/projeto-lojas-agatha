"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

const WHATSAPP_NUMBER = "5521987103449";

const steps = [
  "VOCÊ",
  "NEGÓCIO",
  "PROJETO",
  "NECESSIDADES",
  "FINALIZAR",
];

const functions = [
  "Proprietário(a)",
  "Sócio(a)",
  "Gerente",
  "Responsável pelo negócio",
  "Outro",
];

const segments = [
  "Loja de roupas",
  "Loja de celulares",
  "Beleza / Estética",
  "Alimentação",
  "Serviços",
  "Comércio",
  "Profissional autônomo",
  "Outro",
];

const businessTime = [
  "Menos de 1 ano",
  "1–3 anos",
  "3–5 anos",
  "Mais de 5 anos",
];

const businessPresenceOptions = [
  "Físico",
  "Online",
  "Físico e online",
];

const systemOptions = [
  "Não utilizo",
  "Sim, utilizo um sistema",
  "Utilizo planilhas",
  "Utilizo várias ferramentas diferentes",
  "Utilizo ferramentas, mas ainda faço muita coisa manualmente",
];

const projectTypes = [
  "Site profissional",
  "Loja virtual",
  "Landing page",
  "Sistema de gestão",
  "Sistema de vendas",
  "Controle de estoque",
  "Sistema financeiro",
  "Automação",
  "Integração com WhatsApp",
  "Agendamento",
  "Painel administrativo",
  "Outro",
];

const objectives = [
  "Atrair mais clientes",
  "Aumentar vendas",
  "Organizar o negócio",
  "Economizar tempo",
  "Automatizar tarefas",
  "Melhorar o atendimento",
  "Ter uma presença profissional na internet",
  "Controlar melhor as informações",
  "Reduzir erros",
  "Facilitar o trabalho da equipe",
  "Outro",
];

const functionalities = [
  "Cadastro de clientes",
  "Cadastro de produtos",
  "Controle de estoque",
  "Registro de vendas",
  "Orçamentos",
  "Ordens de serviço",
  "Financeiro",
  "Contas a receber",
  "Relatórios",
  "Dashboard",
  "Login de funcionários",
  "Diferentes níveis de acesso",
  "WhatsApp",
  "Agendamento",
  "Notificações automáticas",
  "Upload de arquivos/fotos",
  "Integração com redes sociais",
  "Outra",
];

const digitalPresenceOptions = [
  "Instagram",
  "WhatsApp Business",
  "Site",
  "Google Meu Negócio",
  "Loja virtual",
  "Nenhum desses",
];

type FormData = {
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  personalInstagram: string;
  role: string;

  business: string;
  instagram: string;
  website: string;
  segment: string;
  businessTime: string;
  businessPresence: string[];
  businessDescription: string;
  system: string;
  systemName: string;
  systemUse: string;
  systemLikes: string;
  systemProblems: string;
  biggestDifficulty: string;
  repetitiveTasks: string;

  projectType: string;
  projectDescription: string;
  projectObjective: string;
  objectives: string[];
  successDefinition: string;

  functionalities: string[];
  specificFunctionality: string;
  digitalPresence: string[];
  digitalImprovement: string;
  references: string;
  referenceDetails: string;

  whyCandidate: string;
  whyNow: string;
  expectedChange: string;
  availability: string;
  responsiblePerson: string;

  portfolioAuthorization: string;
  imageAuthorization: string;
  additionalInformation: string;
  whyProject: string;
};

const initialForm: FormData = {
  name: "",
  whatsapp: "",
  email: "",
  city: "",
  personalInstagram: "",
  role: "",

  business: "",
  instagram: "",
  website: "",
  segment: "",
  businessTime: "",
  businessPresence: [],
  businessDescription: "",
  system: "",
  systemName: "",
  systemUse: "",
  systemLikes: "",
  systemProblems: "",
  biggestDifficulty: "",
  repetitiveTasks: "",

  projectType: "",
  projectDescription: "",
  projectObjective: "",
  objectives: [],
  successDefinition: "",

  functionalities: [],
  specificFunctionality: "",
  digitalPresence: [],
  digitalImprovement: "",
  references: "",
  referenceDetails: "",

  whyCandidate: "",
  whyNow: "",
  expectedChange: "",
  availability: "",
  responsiblePerson: "",

  portfolioAuthorization: "",
  imageAuthorization: "",
  additionalInformation: "",
  whyProject: "",
};

export default function ParticiparPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setError("");
  };

  const toggleOption = (
    field: "businessPresence" | "objectives" | "functionalities" | "digitalPresence",
    value: string
  ) => {
    setForm((current) => {
      const currentValues = current[field];

      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...current,
        [field]: updatedValues,
      };
    });

    setError("");
  };

  const validateStep = () => {
    if (step === 0) {
      if (!form.name.trim()) {
        setError("Digite seu nome completo.");
        return false;
      }

      if (!form.whatsapp.trim()) {
        setError("Digite seu WhatsApp.");
        return false;
      }

      if (!form.email.trim()) {
        setError("Digite seu e-mail.");
        return false;
      }

      if (!form.city.trim()) {
        setError("Digite sua cidade e estado.");
        return false;
      }

      if (!form.role) {
        setError("Selecione qual é sua função no negócio.");
        return false;
      }
    }

    if (step === 1) {
      if (!form.business.trim()) {
        setError("Digite o nome da empresa ou negócio.");
        return false;
      }

      if (!form.segment) {
        setError("Selecione o segmento do negócio.");
        return false;
      }

      if (!form.businessTime) {
        setError("Informe há quanto tempo o negócio existe.");
        return false;
      }

      if (form.businessPresence.length === 0) {
        setError("Selecione como o negócio funciona atualmente.");
        return false;
      }

      if (!form.businessDescription.trim()) {
        setError("Conte um pouco sobre o seu negócio.");
        return false;
      }

      if (!form.system) {
        setError("Informe como você administra o negócio atualmente.");
        return false;
      }

      if (
        form.system !== "Não utilizo" &&
        !form.systemName.trim()
      ) {
        setError("Informe qual sistema ou ferramenta você utiliza.");
        return false;
      }

      if (!form.biggestDifficulty.trim()) {
        setError(
          "Conte qual é a maior dificuldade que você enfrenta atualmente."
        );
        return false;
      }

      if (!form.repetitiveTasks.trim()) {
        setError(
          "Conte se existe alguma tarefa repetitiva que poderia ser automatizada."
        );
        return false;
      }
    }

    if (step === 2) {
      if (!form.projectType) {
        setError("Selecione o tipo de projeto que você imagina.");
        return false;
      }

      if (!form.projectDescription.trim()) {
        setError(
          "Explique com suas palavras como você gostaria que o projeto funcionasse."
        );
        return false;
      }

      if (form.objectives.length === 0) {
        setError("Selecione pelo menos um objetivo para o projeto.");
        return false;
      }

      if (!form.successDefinition.trim()) {
        setError(
          "Conte como você saberia que o projeto deu certo."
        );
        return false;
      }
    }

    if (step === 3) {
      if (form.functionalities.length === 0) {
        setError(
          "Selecione pelo menos uma funcionalidade que seria importante."
        );
        return false;
      }

      if (form.digitalPresence.length === 0) {
        setError(
          "Informe quais canais digitais o negócio possui atualmente."
        );
        return false;
      }

      if (!form.digitalImprovement.trim()) {
        setError(
          "Conte o que você gostaria de melhorar na presença digital."
        );
        return false;
      }

      if (!form.whyCandidate.trim()) {
        setError(
          "Conte por que sua empresa seria uma boa candidata."
        );
        return false;
      }

      if (!form.whyNow.trim()) {
        setError(
          "Conte por que decidiu procurar uma solução tecnológica agora."
        );
        return false;
      }

      if (!form.expectedChange.trim()) {
        setError(
          "Conte o que mudaria no seu negócio com esse projeto."
        );
        return false;
      }

      if (!form.availability) {
        setError(
          "Informe sua disponibilidade para acompanhar o desenvolvimento."
        );
        return false;
      }

      if (!form.responsiblePerson.trim()) {
        setError(
          "Informe quem será responsável por acompanhar o projeto."
        );
        return false;
      }
    }

    if (step === 4) {
      if (!form.portfolioAuthorization) {
        setError(
          "Informe se autoriza a apresentação do projeto no portfólio."
        );
        return false;
      }

      if (!form.imageAuthorization) {
        setError(
          "Informe se autoriza a utilização de imagens do projeto."
        );
        return false;
      }

      if (!form.whyProject.trim()) {
        setError(
          "Conte por que você quer participar deste projeto."
        );
        return false;
      }
    }

    setError("");
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    setStep((current) => Math.min(current + 1, steps.length - 1));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const previousStep = () => {
    setError("");

    setStep((current) => Math.max(current - 1, 0));

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 2) {
      return `(${numbers}`;
    }

    if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }

    if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(
        2,
        7
      )}-${numbers.slice(7)}`;
    }

    return value;
  };

  const buildWhatsAppMessage = () => {
    const message = `
🚀 NOVA INSCRIÇÃO — PROJETO LOJAS

━━━━━━━━━━━━━━━━━━
👤 SOBRE VOCÊ
━━━━━━━━━━━━━━━━━━

Nome: ${form.name}
WhatsApp: ${form.whatsapp}
E-mail: ${form.email}
Cidade/Estado: ${form.city}
Instagram pessoal: ${form.personalInstagram || "Não informado"}
Função: ${form.role}

━━━━━━━━━━━━━━━━━━
🏢 SOBRE O NEGÓCIO
━━━━━━━━━━━━━━━━━━

Empresa: ${form.business}
Instagram: ${form.instagram || "Não informado"}
Site: ${form.website || "Não possui / não informado"}
Segmento: ${form.segment}
Tempo de atuação: ${form.businessTime}
Presença: ${form.businessPresence.join(", ")}

Sobre o negócio:
${form.businessDescription}

━━━━━━━━━━━━━━━━━━
🔎 COMO FUNCIONA HOJE
━━━━━━━━━━━━━━━━━━

Sistema/ferramentas:
${form.system}

Sistema utilizado:
${form.systemName || "Não informado"}

Como utiliza:
${form.systemUse || "Não informado"}

O que gosta:
${form.systemLikes || "Não informado"}

O que incomoda:
${form.systemProblems || "Não informado"}

Maior dificuldade:
${form.biggestDifficulty}

Tarefas repetitivas / automatização:
${form.repetitiveTasks}

━━━━━━━━━━━━━━━━━━
💡 SOBRE O PROJETO
━━━━━━━━━━━━━━━━━━

Tipo de projeto:
${form.projectType}

Como gostaria que funcionasse:
${form.projectDescription}

Objetivo principal:
${form.projectObjective || "Não informado"}

Objetivos selecionados:
${form.objectives.join(", ")}

Como saberia que deu certo:
${form.successDefinition}

━━━━━━━━━━━━━━━━━━
⚙️ NECESSIDADES
━━━━━━━━━━━━━━━━━━

Funcionalidades:
${form.functionalities.join(", ")}

Função específica:
${form.specificFunctionality || "Não informado"}

Presença digital:
${form.digitalPresence.join(", ")}

O que deseja melhorar:
${form.digitalImprovement}

Referências:
${form.references || "Não informado"}

O que gosta nas referências:
${form.referenceDetails || "Não informado"}

━━━━━━━━━━━━━━━━━━
🤝 SOBRE A PARTICIPAÇÃO
━━━━━━━━━━━━━━━━━━

Por que seria uma boa candidata:
${form.whyCandidate}

Por que procurar uma solução agora:
${form.whyNow}

O que mudaria no negócio:
${form.expectedChange}

Disponibilidade:
${form.availability}

Responsável pelo projeto:
${form.responsiblePerson}

━━━━━━━━━━━━━━━━━━
📸 AUTORIZAÇÕES
━━━━━━━━━━━━━━━━━━

Portfólio:
${form.portfolioAuthorization}

Imagens do projeto:
${form.imageAuthorization}

━━━━━━━━━━━━━━━━━━
⭐ PERGUNTA FINAL
━━━━━━━━━━━━━━━━━━

Informações adicionais:
${form.additionalInformation || "Não informado"}

Por que quer participar:
${form.whyProject}

━━━━━━━━━━━━━━━━━━
📋 Projeto Lojas
Agatha Pinheiro — Digital Solutions
`.trim();

    return message;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateStep()) return;

    const message = buildWhatsAppMessage();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  if (submitted) {
    return (
      <main className="form-page">
        <div className="form-success">
          <div className="success-icon">✓</div>

          <span className="eyebrow">FORMULÁRIO FINALIZADO</span>

          <h1>
            Obrigada por
            <br />
            compartilhar sua ideia.
          </h1>

          <p>
            Sua inscrição foi organizada e o WhatsApp foi aberto
            com todas as informações preenchidas.
          </p>

          <p className="success-note">
            Caso o WhatsApp não tenha aberto automaticamente,
            você pode voltar e tentar novamente.
          </p>

          <Link href="/" className="btn btn-gold">
            Voltar para o início
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="form-page">
      <header className="form-header">
        <Link href="/" className="form-logo">
          <span>AP</span>
          <div>
            <strong>AGATHA PINHEIRO</strong>
            <small>DIGITAL SOLUTIONS</small>
          </div>
        </Link>

        <Link href="/" className="form-back">
          ← Voltar
        </Link>
      </header>

      <section className="form-intro">
        <span className="eyebrow">PROJETO LOJAS</span>

        <h1>
          Conte sobre o seu
          <br />
          <span>negócio.</span>
        </h1>

        <p>
          Quero entender sua empresa, seus desafios e a solução
          que você gostaria de construir. Quanto mais detalhes
          você compartilhar, melhor poderei analisar sua ideia.
        </p>
      </section>

      <div className="form-progress">
        <div className="progress-line">
          <div
            className="progress-fill"
            style={{
              width: `${(step / (steps.length - 1)) * 100}%`,
            }}
          />
        </div>

        <div className="step-list">
          {steps.map((item, index) => (
            <div
              key={item}
              className={`step-item ${
                index === step ? "active" : ""
              } ${index < step ? "completed" : ""}`}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <small>{item}</small>
            </div>
          ))}
        </div>
      </div>

      <form className="application-form" onSubmit={handleSubmit}>
        {error && (
          <div className="form-error">
            <strong>Antes de continuar:</strong>
            <span>{error}</span>
          </div>
        )}

        {step === 0 && (
          <section className="form-section">
            <div className="section-heading">
              <span>01 / 05</span>
              <h2>Primeiro, quero conhecer você.</h2>
              <p>
                Essas informações serão usadas para entrar em
                contato caso sua empresa seja selecionada.
              </p>
            </div>

            <div className="form-grid">
              <label className="field full">
                <span>Nome completo *</span>
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={form.name}
                  onChange={(event) =>
                    updateField("name", event.target.value)
                  }
                />
              </label>

              <label className="field">
                <span>WhatsApp *</span>
                <input
                  type="tel"
                  placeholder="(21) 99999-9999"
                  value={form.whatsapp}
                  onChange={(event) =>
                    updateField(
                      "whatsapp",
                      formatWhatsApp(event.target.value)
                    )
                  }
                />
              </label>

              <label className="field">
                <span>E-mail *</span>
                <input
                  type="email"
                  placeholder="seuemail@exemplo.com"
                  value={form.email}
                  onChange={(event) =>
                    updateField("email", event.target.value)
                  }
                />
              </label>

              <label className="field">
                <span>Cidade / Estado *</span>
                <input
                  type="text"
                  placeholder="Ex.: Rio de Janeiro / RJ"
                  value={form.city}
                  onChange={(event) =>
                    updateField("city", event.target.value)
                  }
                />
              </label>

              <label className="field">
                <span>Instagram pessoal</span>
                <input
                  type="text"
                  placeholder="@seuinstagram"
                  value={form.personalInstagram}
                  onChange={(event) =>
                    updateField(
                      "personalInstagram",
                      event.target.value
                    )
                  }
                />
              </label>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Qual é sua função no negócio? *
              </span>

              <div className="choice-grid">
                {functions.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.role === item ? "selected" : ""
                    }`}
                    onClick={() => updateField("role", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {step === 1 && (
          <section className="form-section">
            <div className="section-heading">
              <span>02 / 05</span>
              <h2>Agora, quero conhecer o negócio.</h2>
              <p>
                Quanto melhor eu entender como sua empresa funciona
                hoje, melhor consigo identificar oportunidades.
              </p>
            </div>

            <div className="form-grid">
              <label className="field">
                <span>Nome da empresa / negócio *</span>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  value={form.business}
                  onChange={(event) =>
                    updateField("business", event.target.value)
                  }
                />
              </label>

              <label className="field">
                <span>Instagram da empresa</span>
                <input
                  type="text"
                  placeholder="@suaempresa"
                  value={form.instagram}
                  onChange={(event) =>
                    updateField("instagram", event.target.value)
                  }
                />
              </label>

              <label className="field">
                <span>Site atual</span>
                <input
                  type="url"
                  placeholder="https://..."
                  value={form.website}
                  onChange={(event) =>
                    updateField("website", event.target.value)
                  }
                />
              </label>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Qual é o segmento do negócio? *
              </span>

              <div className="choice-grid">
                {segments.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.segment === item ? "selected" : ""
                    }`}
                    onClick={() =>
                      updateField("segment", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Há quanto tempo o negócio existe? *
              </span>

              <div className="choice-grid">
                {businessTime.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.businessTime === item
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      updateField("businessTime", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Como o negócio funciona atualmente? *
              </span>

              <div className="choice-grid">
                {businessPresenceOptions.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.businessPresence.includes(item)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      toggleOption("businessPresence", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>Conte um pouco sobre o seu negócio. *</span>
              <textarea
                rows={5}
                placeholder="O que sua empresa faz, quais produtos ou serviços oferece e como funciona atualmente?"
                value={form.businessDescription}
                onChange={(event) =>
                  updateField(
                    "businessDescription",
                    event.target.value
                  )
                }
              />
            </label>

            <div className="choice-field">
              <span className="field-label">
                Como você administra o negócio atualmente? *
              </span>

              <div className="choice-grid">
                {systemOptions.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.system === item ? "selected" : ""
                    }`}
                    onClick={() => updateField("system", item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {form.system &&
              form.system !== "Não utilizo" && (
                <div className="form-grid">
                  <label className="field full">
                    <span>
                      Qual sistema ou ferramenta você utiliza? *
                    </span>
                    <input
                      type="text"
                      placeholder="Ex.: Excel, sistema próprio, Trello..."
                      value={form.systemName}
                      onChange={(event) =>
                        updateField(
                          "systemName",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label className="field">
                    <span>Para que você utiliza?</span>
                    <textarea
                      rows={4}
                      placeholder="Explique como essa ferramenta ajuda hoje."
                      value={form.systemUse}
                      onChange={(event) =>
                        updateField(
                          "systemUse",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label className="field">
                    <span>O que você gosta nele?</span>
                    <textarea
                      rows={4}
                      placeholder="O que funciona bem para você?"
                      value={form.systemLikes}
                      onChange={(event) =>
                        updateField(
                          "systemLikes",
                          event.target.value
                        )
                      }
                    />
                  </label>

                  <label className="field full">
                    <span>O que mais te incomoda?</span>
                    <textarea
                      rows={4}
                      placeholder="O que poderia ser melhor?"
                      value={form.systemProblems}
                      onChange={(event) =>
                        updateField(
                          "systemProblems",
                          event.target.value
                        )
                      }
                    />
                  </label>
                </div>
              )}

            <label className="field full">
              <span>
                Qual é a maior dificuldade que você enfrenta
                hoje? *
              </span>
              <textarea
                rows={5}
                placeholder="Descreva o principal problema ou dificuldade do negócio."
                value={form.biggestDifficulty}
                onChange={(event) =>
                  updateField(
                    "biggestDifficulty",
                    event.target.value
                  )
                }
              />
            </label>

            <label className="field full">
              <span>
                Existe alguma tarefa repetitiva que poderia ser
                automatizada? *
              </span>
              <textarea
                rows={5}
                placeholder="Ex.: responder clientes, cadastrar vendas, controlar estoque, enviar mensagens..."
                value={form.repetitiveTasks}
                onChange={(event) =>
                  updateField(
                    "repetitiveTasks",
                    event.target.value
                  )
                }
              />
            </label>
          </section>
        )}

        {step === 2 && (
          <section className="form-section">
            <div className="section-heading">
              <span>03 / 05</span>
              <h2>Vamos falar sobre a sua ideia.</h2>
              <p>
                Não precisa saber explicar tecnicamente. Quero
                entender a sua ideia com as suas próprias palavras.
              </p>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Que tipo de projeto você imagina? *
              </span>

              <div className="choice-grid">
                {projectTypes.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.projectType === item
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      updateField("projectType", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>
                Explique como você gostaria que o projeto
                funcionasse. *
              </span>
              <textarea
                rows={7}
                placeholder="Imagine que você está explicando sua ideia para alguém que nunca viu seu negócio. O que essa solução deveria fazer?"
                value={form.projectDescription}
                onChange={(event) =>
                  updateField(
                    "projectDescription",
                    event.target.value
                  )
                }
              />
            </label>

            <label className="field full">
              <span>
                Qual seria o principal objetivo do projeto?
              </span>
              <textarea
                rows={4}
                placeholder="Qual problema você gostaria de resolver primeiro?"
                value={form.projectObjective}
                onChange={(event) =>
                  updateField(
                    "projectObjective",
                    event.target.value
                  )
                }
              />
            </label>

            <div className="choice-field">
              <span className="field-label">
                O que você espera alcançar? *
              </span>

              <div className="choice-grid">
                {objectives.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.objectives.includes(item)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      toggleOption("objectives", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>
                Como você saberia que o projeto deu certo? *
              </span>
              <textarea
                rows={5}
                placeholder="O que precisaria acontecer para você olhar para a solução e pensar: 'era exatamente disso que eu precisava'?"
                value={form.successDefinition}
                onChange={(event) =>
                  updateField(
                    "successDefinition",
                    event.target.value
                  )
                }
              />
            </label>
          </section>
        )}

        {step === 3 && (
          <section className="form-section">
            <div className="section-heading">
              <span>04 / 05</span>
              <h2>Agora vamos aos detalhes.</h2>
              <p>
                Essas respostas ajudam a entender o que sua
                solução realmente precisa ter.
              </p>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Quais funcionalidades seriam importantes? *
              </span>

              <div className="choice-grid">
                {functionalities.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.functionalities.includes(item)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      toggleOption("functionalities", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>
                Existe alguma função específica que você gostaria
                de ter?
              </span>
              <textarea
                rows={5}
                placeholder="Pode ser algo que não apareceu na lista anterior."
                value={form.specificFunctionality}
                onChange={(event) =>
                  updateField(
                    "specificFunctionality",
                    event.target.value
                  )
                }
              />
            </label>

            <div className="choice-field">
              <span className="field-label">
                Quais canais digitais sua empresa possui? *
              </span>

              <div className="choice-grid">
                {digitalPresenceOptions.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.digitalPresence.includes(item)
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      toggleOption("digitalPresence", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>
                O que você gostaria de melhorar na presença
                digital da empresa? *
              </span>
              <textarea
                rows={5}
                placeholder="Conte o que hoje não funciona tão bem ou o que você gostaria de conquistar."
                value={form.digitalImprovement}
                onChange={(event) =>
                  updateField(
                    "digitalImprovement",
                    event.target.value
                  )
                }
              />
            </label>

            <div className="form-grid">
              <label className="field">
                <span>
                  Existe algum site, sistema ou aplicativo que
                  você gosta?
                </span>
                <textarea
                  rows={5}
                  placeholder="Cole links ou nomes de referências."
                  value={form.references}
                  onChange={(event) =>
                    updateField(
                      "references",
                      event.target.value
                    )
                  }
                />
              </label>

              <label className="field">
                <span>
                  O que você gosta nessas referências?
                </span>
                <textarea
                  rows={5}
                  placeholder="Visual, funcionalidades, organização, facilidade..."
                  value={form.referenceDetails}
                  onChange={(event) =>
                    updateField(
                      "referenceDetails",
                      event.target.value
                    )
                  }
                />
              </label>
            </div>

            <div className="form-divider" />

            <label className="field full">
              <span>
                Por que você acredita que sua empresa seria uma
                boa candidata? *
              </span>
              <textarea
                rows={5}
                placeholder="Conte por que acredita que esse projeto faria sentido para o seu negócio."
                value={form.whyCandidate}
                onChange={(event) =>
                  updateField(
                    "whyCandidate",
                    event.target.value
                  )
                }
              />
            </label>

            <label className="field full">
              <span>
                Por que você decidiu procurar uma solução
                tecnológica agora? *
              </span>
              <textarea
                rows={5}
                placeholder="O que aconteceu ou mudou para você sentir que esse é o momento?"
                value={form.whyNow}
                onChange={(event) =>
                  updateField("whyNow", event.target.value)
                }
              />
            </label>

            <label className="field full">
              <span>
                O que mudaria no seu negócio se esse projeto fosse
                desenvolvido? *
              </span>
              <textarea
                rows={5}
                placeholder="Pense no impacto que essa solução teria no dia a dia."
                value={form.expectedChange}
                onChange={(event) =>
                  updateField(
                    "expectedChange",
                    event.target.value
                  )
                }
              />
            </label>

            <div className="choice-field">
              <span className="field-label">
                Você teria disponibilidade para acompanhar o
                desenvolvimento? *
              </span>

              <div className="choice-grid">
                {[
                  "Sim",
                  "Não",
                  "Depende da disponibilidade",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.availability === item
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      updateField("availability", item)
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>
                Quem será a pessoa responsável por acompanhar o
                projeto? *
              </span>
              <input
                type="text"
                placeholder="Nome da pessoa responsável"
                value={form.responsiblePerson}
                onChange={(event) =>
                  updateField(
                    "responsiblePerson",
                    event.target.value
                  )
                }
              />
            </label>
          </section>
        )}

        {step === 4 && (
          <section className="form-section">
            <div className="section-heading">
              <span>05 / 05</span>
              <h2>Estamos quase lá.</h2>
              <p>
                Só preciso de algumas informações finais antes de
                você enviar sua candidatura.
              </p>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Você autoriza que o projeto seja apresentado no
                meu portfólio profissional? *
              </span>

              <div className="choice-grid">
                {[
                  "Sim, autorizo",
                  "Não autorizo",
                  "Podemos conversar sobre isso",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.portfolioAuthorization === item
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      updateField(
                        "portfolioAuthorization",
                        item
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="choice-field">
              <span className="field-label">
                Autoriza a utilização de imagens do projeto ou da
                empresa para divulgação profissional? *
              </span>

              <div className="choice-grid">
                {[
                  "Sim",
                  "Não",
                  "Podemos conversar sobre isso",
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`choice ${
                      form.imageAuthorization === item
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      updateField(
                        "imageAuthorization",
                        item
                      )
                    }
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="field full">
              <span>
                Existe alguma informação importante que não
                perguntamos?
              </span>
              <textarea
                rows={5}
                placeholder="Compartilhe qualquer detalhe que considere relevante."
                value={form.additionalInformation}
                onChange={(event) =>
                  updateField(
                    "additionalInformation",
                    event.target.value
                  )
                }
              />
            </label>

            <label className="field full">
              <span>
                Por que você quer participar deste projeto? *
              </span>
              <textarea
                rows={7}
                placeholder="Conte um pouco sobre sua motivação e o que essa oportunidade representaria para o seu negócio."
                value={form.whyProject}
                onChange={(event) =>
                  updateField(
                    "whyProject",
                    event.target.value
                  )
                }
              />
            </label>

            <div className="final-notice">
              <div className="final-notice-icon">✦</div>

              <div>
                <strong>Antes de enviar</strong>
                <p>
                  Ao clicar em &quot;Enviar candidatura&quot;, suas
                  respostas serão organizadas em uma mensagem e o
                  WhatsApp será aberto para que você envie as
                  informações diretamente para a responsável pelo
                  projeto.
                </p>
              </div>
            </div>
          </section>
        )}

        <div className="form-navigation">
          {step > 0 ? (
            <button
              type="button"
              className="btn btn-outline"
              onClick={previousStep}
            >
              ← Voltar
            </button>
          ) : (
            <Link href="/" className="btn btn-outline">
              Cancelar
            </Link>
          )}

          {step < steps.length - 1 ? (
            <button
              type="button"
              className="btn btn-gold"
              onClick={nextStep}
            >
              Continuar →
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-gold"
            >
              Enviar candidatura →
            </button>
          )}
        </div>
      </form>
    </main>
  );
}
