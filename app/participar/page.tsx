"use client";

import { FormEvent, useState } from "react";
import "./participar.css";
const WHATSAPP_NUMBER = "5521987103449";

type FormData = {
  nome: string;
  whatsapp: string;
  email: string;
  cidade: string;
  instagramPessoal: string;
  funcao: string;

  empresa: string;
  instagramEmpresa: string;
  site: string;
  segmento: string;
  tempoNegocio: string;
  quantidadePessoas: string;
  atendimento: string;
  descricaoNegocio: string;

  sistema: string;
  qualSistema: string;
  usoSistema: string;
  gostaSistema: string;
  incomodaSistema: string;
  maiorDificuldade: string;
  tarefaAutomatizar: string;

  melhoriaTecnologia: string;
  tiposProjeto: string[];
  outroProjeto: string;
  funcionamentoProjeto: string;

  objetivos: string[];
  outroObjetivo: string;
  projetoSucesso: string;

  funcionalidades: string[];
  outraFuncionalidade: string;
  funcaoEspecifica: string;

  presencaDigital: string[];
  melhoriaDigital: string;

  referencias: string;
  gostaReferencias: string;

  boaCandidata: string;
  porQueAgora: string;
  mudariaNegocio: string;

  disponibilidade: string;
  responsavelProjeto: string;

  portfolio: string;
  imagens: string;

  informacoesAdicionais: string;
  porQueParticipar: string;
};

const initialForm: FormData = {
  nome: "",
  whatsapp: "",
  email: "",
  cidade: "",
  instagramPessoal: "",
  funcao: "",

  empresa: "",
  instagramEmpresa: "",
  site: "",
  segmento: "",
  tempoNegocio: "",
  quantidadePessoas: "",
  atendimento: "",
  descricaoNegocio: "",

  sistema: "",
  qualSistema: "",
  usoSistema: "",
  gostaSistema: "",
  incomodaSistema: "",
  maiorDificuldade: "",
  tarefaAutomatizar: "",

  melhoriaTecnologia: "",
  tiposProjeto: [],
  outroProjeto: "",
  funcionamentoProjeto: "",

  objetivos: [],
  outroObjetivo: "",
  projetoSucesso: "",

  funcionalidades: [],
  outraFuncionalidade: "",
  funcaoEspecifica: "",

  presencaDigital: [],
  melhoriaDigital: "",

  referencias: "",
  gostaReferencias: "",

  boaCandidata: "",
  porQueAgora: "",
  mudariaNegocio: "",

  disponibilidade: "",
  responsavelProjeto: "",

  portfolio: "",
  imagens: "",

  informacoesAdicionais: "",
  porQueParticipar: "",
};

const projetos = [
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

const objetivos = [
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

const funcionalidades = [
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

const presenca = [
  "Instagram",
  "WhatsApp Business",
  "Site",
  "Google Meu Negócio",
  "Loja virtual",
  "Nenhum desses",
];

function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
    7
  )}`;
}

function toggleArrayValue(
  field: keyof FormData,
  value: string,
  form: FormData,
  setForm: React.Dispatch<React.SetStateAction<FormData>>
) {
  const current = form[field];

  if (!Array.isArray(current)) return;

  const updated = current.includes(value)
    ? current.filter((item) => item !== value)
    : [...current, value];

  setForm({
    ...form,
    [field]: updated,
  });
}

function formatList(items: string[], fallback = "Não informado") {
  return items.length > 0 ? items.join(", ") : fallback;
}

export default function ParticiparPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function updateField(field: keyof FormData, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (sending) return;

    setSending(true);

    const message = `
NOVA INSCRIÇÃO — PROJETO AGATHA

━━━━━━━━━━━━━━━━━━━━━━
01. SOBRE VOCÊ
━━━━━━━━━━━━━━━━━━━━━━

Nome completo:
${form.nome || "Não informado"}

WhatsApp:
${form.whatsapp || "Não informado"}

E-mail:
${form.email || "Não informado"}

Cidade/Estado:
${form.cidade || "Não informado"}

Instagram pessoal:
${form.instagramPessoal || "Não informado"}

Função no negócio:
${form.funcao || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
02. SOBRE O NEGÓCIO
━━━━━━━━━━━━━━━━━━━━━━

Empresa/Loja:
${form.empresa || "Não informado"}

Instagram da empresa:
${form.instagramEmpresa || "Não informado"}

Site atual:
${form.site || "Não informado"}

Segmento:
${form.segmento || "Não informado"}

Tempo de existência:
${form.tempoNegocio || "Não informado"}

Quantidade de pessoas:
${form.quantidadePessoas || "Não informado"}

Atendimento:
${form.atendimento || "Não informado"}

Sobre o negócio:
${form.descricaoNegocio || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
03. COMO FUNCIONA HOJE
━━━━━━━━━━━━━━━━━━━━━━

Sistema/Ferramentas:
${form.sistema || "Não informado"}

Qual sistema/ferramenta:
${form.qualSistema || "Não informado"}

Para que utiliza:
${form.usoSistema || "Não informado"}

O que gosta:
${form.gostaSistema || "Não informado"}

O que mais incomoda:
${form.incomodaSistema || "Não informado"}

Maior dificuldade:
${form.maiorDificuldade || "Não informado"}

Tarefa que poderia ser automatizada:
${form.tarefaAutomatizar || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
04. SOBRE O PROJETO
━━━━━━━━━━━━━━━━━━━━━━

O que gostaria de melhorar através da tecnologia:
${form.melhoriaTecnologia || "Não informado"}

Tipo de projeto:
${formatList(form.tiposProjeto)}

Outro tipo de projeto:
${form.outroProjeto || "Não informado"}

Como gostaria que funcionasse:
${form.funcionamentoProjeto || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
05. OBJETIVO
━━━━━━━━━━━━━━━━━━━━━━

Objetivos:
${formatList(form.objetivos)}

Outro objetivo:
${form.outroObjetivo || "Não informado"}

Como saberia que deu certo:
${form.projetoSucesso || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
06. FUNCIONALIDADES
━━━━━━━━━━━━━━━━━━━━━━

Funcionalidades importantes:
${formatList(form.funcionalidades)}

Outra funcionalidade:
${form.outraFuncionalidade || "Não informado"}

Função específica:
${form.funcaoEspecifica || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
07. PRESENÇA DIGITAL
━━━━━━━━━━━━━━━━━━━━━━

Presença digital:
${formatList(form.presencaDigital)}

O que gostaria de melhorar:
${form.melhoriaDigital || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
08. REFERÊNCIAS
━━━━━━━━━━━━━━━━━━━━━━

Referências:
${form.referencias || "Não informado"}

O que gosta nessas referências:
${form.gostaReferencias || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
09. SOBRE A NECESSIDADE
━━━━━━━━━━━━━━━━━━━━━━

Por que seria uma boa candidata:
${form.boaCandidata || "Não informado"}

Por que procurar uma solução agora:
${form.porQueAgora || "Não informado"}

O que mudaria no negócio:
${form.mudariaNegocio || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
10. DISPONIBILIDADE
━━━━━━━━━━━━━━━━━━━━━━

Disponibilidade:
${form.disponibilidade || "Não informado"}

Responsável pelo projeto:
${form.responsavelProjeto || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
11. PORTFÓLIO / DIVULGAÇÃO
━━━━━━━━━━━━━━━━━━━━━━

Autoriza projeto no portfólio:
${form.portfolio || "Não informado"}

Autoriza utilização de imagens:
${form.imagens || "Não informado"}


━━━━━━━━━━━━━━━━━━━━━━
12. FINALIZAÇÃO
━━━━━━━━━━━━━━━━━━━━━━

Informações adicionais:
${form.informacoesAdicionais || "Não informado"}

Por que quer participar:
${form.porQueParticipar || "Não informado"}

━━━━━━━━━━━━━━━━━━━━━━

Inscrição enviada através do Projeto Agatha.
`.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setSending(false);
      setSent(true);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500);
  }

  if (sent) {
    return (
      <main className="form-page">
        <section className="form-header">
          <div className="form-intro">
            <span className="eyebrow">INSCRIÇÃO PREPARADA</span>

            <h1>
              Sua inscrição
              <br />
              está pronta.
            </h1>

            <p>
              As informações foram organizadas e o WhatsApp foi aberto para
              que você possa enviar sua inscrição.
            </p>

            <div className="final-notice">
              <strong>Importante</strong>
              <span>
                Verifique o WhatsApp e confirme o envio da mensagem. Sua
                inscrição só será recebida após o envio.
              </span>
            </div>

            <div className="form-navigation">
              <button
                type="button"
                className="btn btn-gold"
                onClick={() => {
                  setSent(false);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                VOLTAR AO FORMULÁRIO
              </button>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="form-page">
      {/* INTRODUÇÃO */}
      <section className="form-header">
        <div className="form-intro">
          <a href="/" className="form-back">
            ← VOLTAR PARA O INÍCIO
          </a>

          <span className="eyebrow">PROJETO AGATHA</span>

          <h1>
            Participe
            <br />
            do projeto.
          </h1>

          <p>
            Estou selecionando negócios reais para desenvolver uma solução
            digital personalizada, pensada para as necessidades de cada
            empresa.
          </p>

          <p>
            Conte sobre o seu negócio, os desafios que enfrenta hoje e o que
            gostaria de transformar através da tecnologia.
          </p>

          <a href="#inscricao" className="btn btn-gold">
            QUERO PARTICIPAR ↓
          </a>
        </div>

        <div className="form-header-side">
          <span>01</span>
          <strong>Uma ideia.</strong>
          <strong>Um problema real.</strong>
          <strong>Uma solução criada sob medida.</strong>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <form
        id="inscricao"
        className="application-form"
        onSubmit={handleSubmit}
      >
        {/* 01 */}
        <section className="form-section">
          <div className="section-heading">
            <span>01</span>
            <div>
              <p className="eyebrow">SOBRE VOCÊ</p>
              <h2>Quem está por trás do negócio?</h2>
              <p>
                Primeiro, quero conhecer você e entender qual é o seu papel
                dentro da empresa.
              </p>
            </div>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Nome completo *</span>
              <input
                type="text"
                required
                value={form.nome}
                onChange={(e) => updateField("nome", e.target.value)}
                placeholder="Digite seu nome completo"
              />
            </label>

            <label className="field">
              <span>WhatsApp *</span>
              <input
                type="tel"
                required
                value={form.whatsapp}
                onChange={(e) =>
                  updateField("whatsapp", formatPhone(e.target.value))
                }
                placeholder="(21) 99999-9999"
              />
            </label>

            <label className="field">
              <span>E-mail *</span>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="seuemail@exemplo.com"
              />
            </label>

            <label className="field">
              <span>Cidade / Estado *</span>
              <input
                type="text"
                required
                value={form.cidade}
                onChange={(e) => updateField("cidade", e.target.value)}
                placeholder="Ex.: Rio de Janeiro / RJ"
              />
            </label>

            <label className="field">
              <span>Instagram pessoal</span>
              <input
                type="text"
                value={form.instagramPessoal}
                onChange={(e) =>
                  updateField("instagramPessoal", e.target.value)
                }
                placeholder="@seuinstagram"
              />
            </label>
          </div>

          <div className="field">
            <span>Qual é sua função no negócio? *</span>

            <div className="choice-grid">
              {[
                "Proprietário(a)",
                "Sócio(a)",
                "Gerente",
                "Responsável pelo negócio",
                "Outro",
              ].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="funcao"
                    value={item}
                    required
                    checked={form.funcao === item}
                    onChange={(e) => updateField("funcao", e.target.value)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* 02 */}
        <section className="form-section">
          <div className="section-heading">
            <span>02</span>
            <div>
              <p className="eyebrow">SOBRE O NEGÓCIO</p>
              <h2>Quero conhecer sua empresa.</h2>
              <p>
                Quanto mais eu entender o contexto do negócio, melhor consigo
                enxergar oportunidades.
              </p>
            </div>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Nome da empresa / loja *</span>
              <input
                type="text"
                required
                value={form.empresa}
                onChange={(e) => updateField("empresa", e.target.value)}
                placeholder="Nome da empresa"
              />
            </label>

            <label className="field">
              <span>Instagram da empresa</span>
              <input
                type="text"
                value={form.instagramEmpresa}
                onChange={(e) =>
                  updateField("instagramEmpresa", e.target.value)
                }
                placeholder="@empresa"
              />
            </label>

            <label className="field">
              <span>Site atual</span>
              <input
                type="url"
                value={form.site}
                onChange={(e) => updateField("site", e.target.value)}
                placeholder="https://..."
              />
            </label>

            <label className="field">
              <span>Segmento do negócio *</span>
              <input
                type="text"
                required
                value={form.segmento}
                onChange={(e) => updateField("segmento", e.target.value)}
                placeholder="Ex.: alimentação, beleza, tecnologia..."
              />
            </label>

            <label className="field">
              <span>Quantas pessoas trabalham no negócio? *</span>
              <input
                type="text"
                required
                value={form.quantidadePessoas}
                onChange={(e) =>
                  updateField("quantidadePessoas", e.target.value)
                }
                placeholder="Ex.: 3 pessoas"
              />
            </label>
          </div>

          <div className="field">
            <span>Há quanto tempo o negócio existe? *</span>

            <div className="choice-grid">
              {[
                "Menos de 1 ano",
                "1–3 anos",
                "3–5 anos",
                "Mais de 5 anos",
              ].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="tempoNegocio"
                    value={item}
                    required
                    checked={form.tempoNegocio === item}
                    onChange={(e) =>
                      updateField("tempoNegocio", e.target.value)
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <span>O negócio possui atendimento: *</span>

            <div className="choice-grid">
              {["Físico", "Online", "Físico e online"].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="atendimento"
                    value={item}
                    required
                    checked={form.atendimento === item}
                    onChange={(e) =>
                      updateField("atendimento", e.target.value)
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Conte um pouco sobre o seu negócio. *</span>
            <textarea
              required
              rows={6}
              value={form.descricaoNegocio}
              onChange={(e) =>
                updateField("descricaoNegocio", e.target.value)
              }
              placeholder="O que sua empresa faz, quais produtos ou serviços oferece e como funciona atualmente?"
            />
          </label>
        </section>

        {/* 03 */}
        <section className="form-section">
          <div className="section-heading">
            <span>03</span>
            <div>
              <p className="eyebrow">COMO FUNCIONA HOJE</p>
              <h2>Onde estão os problemas?</h2>
              <p>
                Essa é uma das partes mais importantes da inscrição. Quero
                entender como o negócio funciona na prática.
              </p>
            </div>
          </div>

          <div className="field">
            <span>Você já utiliza algum sistema ou ferramenta? *</span>

            <div className="choice-grid">
              {[
                "Não utilizo",
                "Sim, utilizo um sistema",
                "Utilizo planilhas",
                "Utilizo várias ferramentas diferentes",
                "Utilizo ferramentas, mas ainda faço muita coisa manualmente",
              ].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="sistema"
                    value={item}
                    required
                    checked={form.sistema === item}
                    onChange={(e) => updateField("sistema", e.target.value)}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Qual sistema / ferramenta?</span>
              <input
                type="text"
                value={form.qualSistema}
                onChange={(e) => updateField("qualSistema", e.target.value)}
                placeholder="Nome do sistema, aplicativo ou ferramenta"
              />
            </label>

            <label className="field">
              <span>Para que você utiliza?</span>
              <input
                type="text"
                value={form.usoSistema}
                onChange={(e) => updateField("usoSistema", e.target.value)}
                placeholder="Ex.: vendas, estoque, financeiro..."
              />
            </label>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>O que você gosta nele?</span>
              <textarea
                rows={4}
                value={form.gostaSistema}
                onChange={(e) =>
                  updateField("gostaSistema", e.target.value)
                }
                placeholder="O que funciona bem para você?"
              />
            </label>

            <label className="field">
              <span>O que mais te incomoda?</span>
              <textarea
                rows={4}
                value={form.incomodaSistema}
                onChange={(e) =>
                  updateField("incomodaSistema", e.target.value)
                }
                placeholder="O que poderia ser melhor?"
              />
            </label>
          </div>

          <label className="field">
            <span>Qual é a maior dificuldade que você enfrenta hoje? *</span>
            <textarea
              required
              rows={6}
              value={form.maiorDificuldade}
              onChange={(e) =>
                updateField("maiorDificuldade", e.target.value)
              }
              placeholder="Conte qual é hoje o maior problema na organização ou operação do negócio."
            />
          </label>

          <label className="field">
            <span>
              Existe alguma tarefa que você ou sua equipe fazem repetidamente
              e que poderia ser automatizada?
            </span>
            <textarea
              rows={6}
              value={form.tarefaAutomatizar}
              onChange={(e) =>
                updateField("tarefaAutomatizar", e.target.value)
              }
              placeholder="Ex.: responder clientes, cadastrar vendas, controlar estoque, enviar mensagens, fazer orçamento, agendar clientes, controlar pagamentos..."
            />
          </label>
        </section>

        {/* 04 */}
        <section className="form-section">
          <div className="section-heading">
            <span>04</span>
            <div>
              <p className="eyebrow">SOBRE O PROJETO</p>
              <h2>O que você gostaria de construir?</h2>
              <p>
                Não precisa saber exatamente qual tecnologia precisa. Quero
                entender a ideia e o problema primeiro.
              </p>
            </div>
          </div>

          <label className="field">
            <span>
              Se você pudesse melhorar uma coisa no seu negócio através da
              tecnologia hoje, o que seria? *
            </span>
            <textarea
              required
              rows={6}
              value={form.melhoriaTecnologia}
              onChange={(e) =>
                updateField("melhoriaTecnologia", e.target.value)
              }
              placeholder="Descreva aquilo que mais gostaria de transformar."
            />
          </label>

          <div className="field">
            <span>Que tipo de projeto você imagina?</span>

            <div className="choice-grid">
              {projetos.map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="checkbox"
                    checked={form.tiposProjeto.includes(item)}
                    onChange={() =>
                      toggleArrayValue(
                        "tiposProjeto",
                        item,
                        form,
                        setForm
                      )
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Outro tipo de projeto</span>
            <input
              type="text"
              value={form.outroProjeto}
              onChange={(e) => updateField("outroProjeto", e.target.value)}
              placeholder="Se marcou outro, explique aqui"
            />
          </label>

          <label className="field">
            <span>
              Explique com suas palavras como você gostaria que esse projeto
              funcionasse. *
            </span>
            <textarea
              required
              rows={8}
              value={form.funcionamentoProjeto}
              onChange={(e) =>
                updateField("funcionamentoProjeto", e.target.value)
              }
              placeholder="Imagine a solução funcionando no seu dia a dia. O que você gostaria que ela fizesse?"
            />
          </label>
        </section>

        {/* 05 */}
        <section className="form-section">
          <div className="section-heading">
            <span>05</span>
            <div>
              <p className="eyebrow">OBJETIVO</p>
              <h2>O que precisa mudar?</h2>
              <p>
                Aqui quero transformar a ideia em um objetivo mais concreto.
              </p>
            </div>
          </div>

          <div className="field">
            <span>O que você espera alcançar com esse projeto?</span>

            <div className="choice-grid">
              {objetivos.map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="checkbox"
                    checked={form.objetivos.includes(item)}
                    onChange={() =>
                      toggleArrayValue("objetivos", item, form, setForm)
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Outro objetivo</span>
            <input
              type="text"
              value={form.outroObjetivo}
              onChange={(e) => updateField("outroObjetivo", e.target.value)}
              placeholder="Outro resultado que você gostaria de alcançar"
            />
          </label>

          <label className="field">
            <span>Como você saberia que o projeto deu certo? *</span>
            <textarea
              required
              rows={6}
              value={form.projetoSucesso}
              onChange={(e) =>
                updateField("projetoSucesso", e.target.value)
              }
              placeholder="O que precisaria acontecer para você olhar para o projeto e pensar: valeu a pena?"
            />
          </label>
        </section>

        {/* 06 */}
        <section className="form-section">
          <div className="section-heading">
            <span>06</span>
            <div>
              <p className="eyebrow">FUNCIONALIDADES</p>
              <h2>O que seria importante ter?</h2>
              <p>
                Selecione tudo que fizer sentido para a realidade do seu
                negócio.
              </p>
            </div>
          </div>

          <div className="field">
            <span>Quais funcionalidades você acredita que seriam importantes?</span>

            <div className="choice-grid">
              {funcionalidades.map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="checkbox"
                    checked={form.funcionalidades.includes(item)}
                    onChange={() =>
                      toggleArrayValue(
                        "funcionalidades",
                        item,
                        form,
                        setForm
                      )
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Outra funcionalidade</span>
            <input
              type="text"
              value={form.outraFuncionalidade}
              onChange={(e) =>
                updateField("outraFuncionalidade", e.target.value)
              }
              placeholder="Alguma função que não apareceu na lista"
            />
          </label>

          <label className="field">
            <span>
              Existe alguma função específica que você gostaria de ter?
            </span>
            <textarea
              rows={6}
              value={form.funcaoEspecifica}
              onChange={(e) =>
                updateField("funcaoEspecifica", e.target.value)
              }
              placeholder="Mesmo que você não saiba exatamente como ela deveria funcionar."
            />
          </label>
        </section>

        {/* 07 */}
        <section className="form-section">
          <div className="section-heading">
            <span>07</span>
            <div>
              <p className="eyebrow">PRESENÇA DIGITAL</p>
              <h2>Como sua empresa aparece hoje?</h2>
            </div>
          </div>

          <div className="field">
            <span>Sua empresa possui:</span>

            <div className="choice-grid">
              {presenca.map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="checkbox"
                    checked={form.presencaDigital.includes(item)}
                    onChange={() => {
                      if (item === "Nenhum desses") {
                        setForm((current) => ({
                          ...current,
                          presencaDigital: current.presencaDigital.includes(
                            "Nenhum desses"
                          )
                            ? []
                            : ["Nenhum desses"],
                        }));
                        return;
                      }

                      setForm((current) => ({
                        ...current,
                        presencaDigital: current.presencaDigital
                          .filter((value) => value !== "Nenhum desses")
                          .includes(item)
                          ? current.presencaDigital.filter(
                              (value) => value !== item
                            )
                          : [
                              ...current.presencaDigital.filter(
                                (value) => value !== "Nenhum desses"
                              ),
                              item,
                            ],
                      }));
                    }}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span>O que você gostaria de melhorar na presença digital?</span>
            <textarea
              rows={6}
              value={form.melhoriaDigital}
              onChange={(e) =>
                updateField("melhoriaDigital", e.target.value)
              }
              placeholder="Conte o que você sente que poderia melhorar na presença da empresa na internet."
            />
          </label>
        </section>

        {/* 08 */}
        <section className="form-section">
          <div className="section-heading">
            <span>08</span>
            <div>
              <p className="eyebrow">REFERÊNCIAS</p>
              <h2>O que inspira você?</h2>
              <p>
                Referências ajudam a entender estilo, experiência e expectativas.
              </p>
            </div>
          </div>

          <label className="field">
            <span>
              Existe algum site, sistema ou aplicativo que você gosta e
              gostaria de usar como referência?
            </span>
            <textarea
              rows={5}
              value={form.referencias}
              onChange={(e) => updateField("referencias", e.target.value)}
              placeholder="Cole aqui os links das referências."
            />
          </label>

          <label className="field">
            <span>O que você gosta nessa referência?</span>
            <textarea
              rows={6}
              value={form.gostaReferencias}
              onChange={(e) =>
                updateField("gostaReferencias", e.target.value)
              }
              placeholder="Pode ser o visual, alguma função, facilidade de uso, organização..."
            />
          </label>
        </section>

        {/* 09 */}
        <section className="form-section">
          <div className="section-heading">
            <span>09</span>
            <div>
              <p className="eyebrow">SOBRE A NECESSIDADE</p>
              <h2>Por que este projeto importa?</h2>
            </div>
          </div>

          <label className="field">
            <span>
              Por que você acredita que sua empresa seria uma boa candidata
              para participar deste projeto? *
            </span>
            <textarea
              required
              rows={7}
              value={form.boaCandidata}
              onChange={(e) => updateField("boaCandidata", e.target.value)}
              placeholder="Conte por que acredita que este projeto faria sentido para sua empresa."
            />
          </label>

          <label className="field">
            <span>Por que você decidiu procurar uma solução tecnológica agora? *</span>
            <textarea
              required
              rows={7}
              value={form.porQueAgora}
              onChange={(e) => updateField("porQueAgora", e.target.value)}
              placeholder="O que aconteceu ou mudou para você buscar essa solução neste momento?"
            />
          </label>

          <label className="field">
            <span>O que mudaria no seu negócio se esse projeto fosse desenvolvido? *</span>
            <textarea
              required
              rows={7}
              value={form.mudariaNegocio}
              onChange={(e) => updateField("mudariaNegocio", e.target.value)}
              placeholder="Imagine seu negócio depois da solução funcionando."
            />
          </label>
        </section>

        {/* 10 */}
        <section className="form-section">
          <div className="section-heading">
            <span>10</span>
            <div>
              <p className="eyebrow">DISPONIBILIDADE</p>
              <h2>Vamos construir juntos.</h2>
              <p>
                O desenvolvimento de um projeto real precisa de participação
                e comunicação.
              </p>
            </div>
          </div>

          <div className="field">
            <span>
              Você teria disponibilidade para conversar durante o
              desenvolvimento, testar funcionalidades e fornecer informações
              necessárias? *
            </span>

            <div className="choice-grid">
              {[
                "Sim",
                "Não",
                "Depende da disponibilidade",
              ].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="disponibilidade"
                    value={item}
                    required
                    checked={form.disponibilidade === item}
                    onChange={(e) =>
                      updateField("disponibilidade", e.target.value)
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <label className="field">
            <span>Quem será a pessoa responsável por acompanhar o projeto? *</span>
            <input
              type="text"
              required
              value={form.responsavelProjeto}
              onChange={(e) =>
                updateField("responsavelProjeto", e.target.value)
              }
              placeholder="Nome e função dessa pessoa"
            />
          </label>
        </section>

        {/* 11 */}
        <section className="form-section">
          <div className="section-heading">
            <span>11</span>
            <div>
              <p className="eyebrow">PORTFÓLIO / DIVULGAÇÃO</p>
              <h2>Sobre a apresentação do projeto.</h2>
              <p>
                O projeto poderá fazer parte da experiência profissional da
                desenvolvedora.
              </p>
            </div>
          </div>

          <div className="field">
            <span>
              Você autoriza que o projeto desenvolvido seja apresentado no
              portfólio profissional da desenvolvedora? *
            </span>

            <div className="choice-grid">
              {[
                "Sim, autorizo",
                "Não autorizo",
                "Podemos conversar sobre isso",
              ].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="portfolio"
                    value={item}
                    required
                    checked={form.portfolio === item}
                    onChange={(e) =>
                      updateField("portfolio", e.target.value)
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field">
            <span>
              Autoriza a utilização de imagens do projeto / empresa para
              divulgação profissional? *
            </span>

            <div className="choice-grid">
              {[
                "Sim",
                "Não",
                "Podemos conversar",
              ].map((item) => (
                <label className="choice" key={item}>
                  <input
                    type="radio"
                    name="imagens"
                    value={item}
                    required
                    checked={form.imagens === item}
                    onChange={(e) =>
                      updateField("imagens", e.target.value)
                    }
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        {/* 12 */}
        <section className="form-section form-section-final">
          <div className="section-heading">
            <span>12</span>
            <div>
              <p className="eyebrow">FINALIZAÇÃO</p>
              <h2>Agora quero ouvir você.</h2>
              <p>
                Este é o espaço para contar algo que ainda não apareceu no
                formulário.
              </p>
            </div>
          </div>

          <label className="field">
            <span>
              Conte qualquer outra informação que você considera importante e
              que ainda não foi perguntada.
            </span>
            <textarea
              rows={7}
              value={form.informacoesAdicionais}
              onChange={(e) =>
                updateField("informacoesAdicionais", e.target.value)
              }
              placeholder="Alguma informação, contexto ou detalhe que você gostaria que eu soubesse."
            />
          </label>

          <label className="field">
            <span>Por que você quer participar deste projeto? *</span>
            <textarea
              required
              rows={8}
              value={form.porQueParticipar}
              onChange={(e) =>
                updateField("porQueParticipar", e.target.value)
              }
              placeholder="Conte, com suas palavras, por que essa oportunidade seria importante para você e para o seu negócio."
            />
          </label>

          <div className="final-notice">
            <strong>Antes de enviar</strong>
            <span>
              Ao clicar em “Enviar inscrição”, suas respostas serão
              organizadas em uma mensagem e o WhatsApp será aberto para que
              você envie a inscrição diretamente.
            </span>
          </div>

          <div className="form-navigation">
            <button
              type="submit"
              className="btn btn-gold"
              disabled={sending}
            >
              {sending ? "PREPARANDO INSCRIÇÃO..." : "ENVIAR INSCRIÇÃO →"}
            </button>
          </div>
        </section>
      </form>

      <footer className="form-footer">
        <span>AP</span>
        <p>Projeto Agatha · Digital Solutions</p>
      </footer>
    </main>
  );
}
