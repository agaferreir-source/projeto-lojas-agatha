"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import "./participar.css";

const WHATSAPP_NUMBER = "5521987103449";

type FormData = {
  // 01 - Sobre você
  nome: string;
  whatsapp: string;
  email: string;
  cidade: string;
  instagramPessoal: string;
  funcao: string;
  tempoNegocio: string;
  decisor: string;

  // 02 - Sobre o negócio
  empresa: string;
  instagramEmpresa: string;
  site: string;
  segmento: string;
  tipoNegocio: string;
  idadeNegocio: string;
  quantidadePessoas: string;
  quantidadeUnidades: string;
  formatoAtendimento: string;
  horarioFuncionamento: string;
  descricaoNegocio: string;

  // 03 - Como funciona hoje
  comoClientesChegam: string;
  comoAtendeClientes: string;
  comoRegistraVendas: string;
  comoGerenciaClientes: string;
  comoControlaEstoque: string;
  comoFazOrcamentos: string;
  comoFazAgendamentos: string;
  comoControlaFinanceiro: string;
  ferramentasUtilizadas: string;
  sistemasUtilizados: string;
  planilhas: string;
  processosManuais: string;

  // 04 - Principais problemas
  maiorProblema: string;
  tarefaMaisTempo: string;
  tarefaRepetitiva: string;
  errosFrequentes: string;
  coisasEsquecidas: string;
  retrabalho: string;
  tarefaEliminar: string;
  informacaoDificilEncontrar: string;
  desorganizacao: string;
  parteMaisIncomoda: string;

  // 05 - Oportunidades de tecnologia
  gostariaAutomatizar: string[];
  processosEliminar: string;
  sistemaProprio: string;
  acoesAutomaticas: string;
  processosWhatsApp: string;
  gostariaDashboard: string;
  gostariaAlertas: string;
  outrasOportunidades: string;

  // 06 - Ideia do projeto
  melhoriaPrincipal: string;
  tiposProjeto: string[];
  outroTipoProjeto: string;
  explicacaoProjeto: string;
  funcionamentoIdeal: string;
  quemUsaria: string;
  dispositivos: string[];
  recursoIndispensavel: string;

  // 07 - Funcionalidades
  funcionalidades: string[];
  outraFuncionalidade: string;
  funcaoEspecifica: string;

  // 08 - Presença digital
  presencaDigital: string[];
  melhoriaDigital: string;

  // 09 - Referências
  referencias: string;
  linksReferencias: string;
  gostaReferencias: string;
  naoGostaReferencias: string;

  // 10 - Impacto no negócio
  mudancaEsperada: string;
  tempoEconomizado: string;
  problemaEliminado: string;
  beneficioEquipe: string;
  beneficioClientes: string;
  impactoVendas: string;
  impactoOrganizacao: string;
  projetoSucesso: string;

  // 11 - Seleção
  boaCandidata: string;
  porQueAgora: string;
  importanciaProjeto: string;
  seNaoResolver: string;
  impactoSolucao: string;
  tentouResolver: string;
  expectativas: string;

  // 12 - Disponibilidade
  disponibilidade: string[];
  responsavelProjeto: string;
  melhorContato: string;
  melhorHorario: string;
  observacoesDisponibilidade: string;

  // 13 - Portfólio e divulgação
  portfolio: string;
  imagens: string;
  nomeEmpresaDivulgacao: string;
  instagramDivulgacao: string;
  receberResultado: string;

  // 14 - Finalização
  informacoesAdicionais: string;
  porQueParticipar: string;
  comoConheceu: string;
  confirmacaoVerdade: string;
  autorizacaoContato: string;
};

const initialForm: FormData = {
  nome: "",
  whatsapp: "",
  email: "",
  cidade: "",
  instagramPessoal: "",
  funcao: "",
  tempoNegocio: "",
  decisor: "",

  empresa: "",
  instagramEmpresa: "",
  site: "",
  segmento: "",
  tipoNegocio: "",
  idadeNegocio: "",
  quantidadePessoas: "",
  quantidadeUnidades: "",
  formatoAtendimento: "",
  horarioFuncionamento: "",
  descricaoNegocio: "",

  comoClientesChegam: "",
  comoAtendeClientes: "",
  comoRegistraVendas: "",
  comoGerenciaClientes: "",
  comoControlaEstoque: "",
  comoFazOrcamentos: "",
  comoFazAgendamentos: "",
  comoControlaFinanceiro: "",
  ferramentasUtilizadas: "",
  sistemasUtilizados: "",
  planilhas: "",
  processosManuais: "",

  maiorProblema: "",
  tarefaMaisTempo: "",
  tarefaRepetitiva: "",
  errosFrequentes: "",
  coisasEsquecidas: "",
  retrabalho: "",
  tarefaEliminar: "",
  informacaoDificilEncontrar: "",
  desorganizacao: "",
  parteMaisIncomoda: "",

  gostariaAutomatizar: [],
  processosEliminar: "",
  sistemaProprio: "",
  acoesAutomaticas: "",
  processosWhatsApp: "",
  gostariaDashboard: "",
  gostariaAlertas: "",
  outrasOportunidades: "",

  melhoriaPrincipal: "",
  tiposProjeto: [],
  outroTipoProjeto: "",
  explicacaoProjeto: "",
  funcionamentoIdeal: "",
  quemUsaria: "",
  dispositivos: [],
  recursoIndispensavel: "",

  funcionalidades: [],
  outraFuncionalidade: "",
  funcaoEspecifica: "",

  presencaDigital: [],
  melhoriaDigital: "",

  referencias: "",
  linksReferencias: "",
  gostaReferencias: "",
  naoGostaReferencias: "",

  mudancaEsperada: "",
  tempoEconomizado: "",
  problemaEliminado: "",
  beneficioEquipe: "",
  beneficioClientes: "",
  impactoVendas: "",
  impactoOrganizacao: "",
  projetoSucesso: "",

  boaCandidata: "",
  porQueAgora: "",
  importanciaProjeto: "",
  seNaoResolver: "",
  impactoSolucao: "",
  tentouResolver: "",
  expectativas: "",

  disponibilidade: [],
  responsavelProjeto: "",
  melhorContato: "",
  melhorHorario: "",
  observacoesDisponibilidade: "",

  portfolio: "",
  imagens: "",
  nomeEmpresaDivulgacao: "",
  instagramDivulgacao: "",
  receberResultado: "",

  informacoesAdicionais: "",
  porQueParticipar: "",
  comoConheceu: "",
  confirmacaoVerdade: "",
  autorizacaoContato: "",
};

const automationOptions = [
  "Atendimento ao cliente",
  "Orçamentos",
  "Agendamentos",
  "Vendas",
  "Cadastro de clientes",
  "Controle de estoque",
  "Financeiro",
  "Cobranças",
  "Envio de mensagens",
  "Relatórios",
  "Organização de informações",
  "Outro processo",
];

const projectTypes = [
  "Site profissional",
  "Sistema personalizado",
  "Automação",
  "Sistema de gestão",
  "Dashboard",
  "Catálogo digital",
  "Área para clientes",
  "Área para funcionários",
  "Ferramenta interna",
  "Integração entre sistemas",
  "Outro",
];

const deviceOptions = [
  "Computador",
  "Notebook",
  "Celular",
  "Tablet",
  "Qualquer dispositivo",
];

const functionalityOptions = [
  "Cadastro de clientes",
  "Cadastro de produtos",
  "Controle de estoque",
  "Registro de vendas",
  "Orçamentos",
  "Ordens de serviço",
  "Financeiro",
  "Contas a receber",
  "Contas a pagar",
  "Relatórios",
  "Dashboard",
  "Login de usuários",
  "Cadastro de funcionários",
  "Permissões de acesso",
  "Integração com WhatsApp",
  "Agendamento",
  "Notificações",
  "Envio automático de mensagens",
  "Upload de fotos",
  "Upload de documentos",
  "Integração com redes sociais",
  "Outra funcionalidade",
];

const digitalOptions = [
  "Instagram",
  "WhatsApp Business",
  "Site",
  "Google / Google Meu Negócio",
  "E-commerce",
  "TikTok",
  "Facebook",
  "Outra presença digital",
  "Não possui presença digital",
];

const availabilityOptions = [
  "Conversar sobre o projeto",
  "Responder dúvidas durante o desenvolvimento",
  "Enviar informações da empresa",
  "Enviar fotos",
  "Enviar documentos ou materiais",
  "Testar o projeto",
  "Dar feedbacks",
];

function formatPhone(value: string) {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 2) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }

  return `(${numbers.slice(0, 2)}) ${numbers.slice(
    2,
    7
  )}-${numbers.slice(7)}`;
}

function formatList(items: string[]) {
  return items.length > 0 ? items.join(", ") : "Não informado";
}

export default function ParticiparPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  function updateField<K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  function toggleArrayValue(
    field:
      | "gostariaAutomatizar"
      | "tiposProjeto"
      | "dispositivos"
      | "funcionalidades"
      | "presencaDigital"
      | "disponibilidade",
    value: string
  ) {
    setForm((current) => {
      const currentValues = current[field];

      const newValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      return {
        ...current,
        [field]: newValues,
      };
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);

    const message = `
✦ NOVA INSCRIÇÃO — PROJETO DIGITAL AGATHA PINHEIRO

━━━━━━━━━━━━━━━━━━━━
01 · SOBRE VOCÊ
━━━━━━━━━━━━━━━━━━━━

Nome: ${form.nome}
WhatsApp: ${form.whatsapp}
E-mail: ${form.email}
Cidade: ${form.cidade}
Instagram pessoal: ${form.instagramPessoal || "Não informado"}
Função no negócio: ${form.funcao}
Tempo no negócio: ${form.tempoNegocio}
É responsável pela decisão do projeto?: ${form.decisor}

━━━━━━━━━━━━━━━━━━━━
02 · SOBRE O NEGÓCIO
━━━━━━━━━━━━━━━━━━━━

Empresa/Loja: ${form.empresa}
Instagram: ${form.instagramEmpresa || "Não informado"}
Site: ${form.site || "Não informado"}
Segmento: ${form.segmento}
Tipo de negócio: ${form.tipoNegocio}
Idade do negócio: ${form.idadeNegocio}
Quantidade de pessoas: ${form.quantidadePessoas}
Quantidade de unidades: ${form.quantidadeUnidades}
Formato de atendimento: ${form.formatoAtendimento}
Horário de funcionamento: ${form.horarioFuncionamento}

Descrição do negócio:
${form.descricaoNegocio}

━━━━━━━━━━━━━━━━━━━━
03 · COMO FUNCIONA HOJE
━━━━━━━━━━━━━━━━━━━━

Como os clientes chegam:
${form.comoClientesChegam}

Como atende os clientes:
${form.comoAtendeClientes}

Como registra as vendas:
${form.comoRegistraVendas}

Como gerencia os clientes:
${form.comoGerenciaClientes}

Como controla o estoque:
${form.comoControlaEstoque}

Como faz orçamentos:
${form.comoFazOrcamentos}

Como faz agendamentos:
${form.comoFazAgendamentos}

Como controla o financeiro:
${form.comoControlaFinanceiro}

Ferramentas utilizadas:
${form.ferramentasUtilizadas}

Sistemas utilizados:
${form.sistemasUtilizados}

Planilhas:
${form.planilhas}

Processos manuais:
${form.processosManuais}

━━━━━━━━━━━━━━━━━━━━
04 · PRINCIPAIS PROBLEMAS
━━━━━━━━━━━━━━━━━━━━

Maior problema:
${form.maiorProblema}

Tarefa que mais consome tempo:
${form.tarefaMaisTempo}

Tarefa repetitiva:
${form.tarefaRepetitiva}

Erros frequentes:
${form.errosFrequentes}

Coisas que costumam ser esquecidas:
${form.coisasEsquecidas}

Retrabalho:
${form.retrabalho}

Tarefa que gostaria de eliminar:
${form.tarefaEliminar}

Informação difícil de encontrar:
${form.informacaoDificilEncontrar}

Organização atual:
${form.desorganizacao}

Parte mais incômoda:
${form.parteMaisIncomoda}

━━━━━━━━━━━━━━━━━━━━
05 · OPORTUNIDADES DE TECNOLOGIA
━━━━━━━━━━━━━━━━━━━━

Processos que gostaria de automatizar:
${formatList(form.gostariaAutomatizar)}

Processos que gostaria de eliminar:
${form.processosEliminar}

Gostaria de um sistema próprio?:
${form.sistemaProprio}

Ações que gostaria que acontecessem automaticamente:
${form.acoesAutomaticas}

Processos envolvendo WhatsApp:
${form.processosWhatsApp}

Gostaria de um dashboard?:
${form.gostariaDashboard}

Gostaria de alertas/notificações?:
${form.gostariaAlertas}

Outras oportunidades:
${form.outrasOportunidades}

━━━━━━━━━━━━━━━━━━━━
06 · IDEIA DO PROJETO
━━━━━━━━━━━━━━━━━━━━

Principal melhoria desejada:
${form.melhoriaPrincipal}

Tipo de projeto:
${formatList(form.tiposProjeto)}

Outro tipo:
${form.outroTipoProjeto || "Não informado"}

Explicação da ideia:
${form.explicacaoProjeto}

Como deveria funcionar:
${form.funcionamentoIdeal}

Quem utilizaria:
${form.quemUsaria}

Dispositivos:
${formatList(form.dispositivos)}

Recurso indispensável:
${form.recursoIndispensavel}

━━━━━━━━━━━━━━━━━━━━
07 · FUNCIONALIDADES
━━━━━━━━━━━━━━━━━━━━

Funcionalidades desejadas:
${formatList(form.funcionalidades)}

Outra funcionalidade:
${form.outraFuncionalidade || "Não informado"}

Função específica:
${form.funcaoEspecifica}

━━━━━━━━━━━━━━━━━━━━
08 · PRESENÇA DIGITAL
━━━━━━━━━━━━━━━━━━━━

Presença digital atual:
${formatList(form.presencaDigital)}

O que gostaria de melhorar:
${form.melhoriaDigital}

━━━━━━━━━━━━━━━━━━━━
09 · REFERÊNCIAS
━━━━━━━━━━━━━━━━━━━━

Possui referências?:
${form.referencias}

Links:
${form.linksReferencias || "Não informado"}

O que gosta nessas referências:
${form.gostaReferencias}

O que não gostaria:
${form.naoGostaReferencias}

━━━━━━━━━━━━━━━━━━━━
10 · IMPACTO NO NEGÓCIO
━━━━━━━━━━━━━━━━━━━━

Mudança esperada:
${form.mudancaEsperada}

Tempo que poderia economizar:
${form.tempoEconomizado}

Problema que seria eliminado:
${form.problemaEliminado}

Benefício para a equipe:
${form.beneficioEquipe}

Benefício para os clientes:
${form.beneficioClientes}

Impacto nas vendas:
${form.impactoVendas}

Impacto na organização:
${form.impactoOrganizacao}

Como saberia que o projeto deu certo:
${form.projetoSucesso}

━━━━━━━━━━━━━━━━━━━━
11 · SELEÇÃO DO PROJETO
━━━━━━━━━━━━━━━━━━━━

Por que a loja seria uma boa candidata:
${form.boaCandidata}

Por que isso é importante agora:
${form.porQueAgora}

Importância do projeto:
${form.importanciaProjeto}

O que acontece se não resolver:
${form.seNaoResolver}

Impacto que uma solução poderia gerar:
${form.impactoSolucao}

Já tentou resolver?:
${form.tentouResolver}

Expectativas:
${form.expectativas}

━━━━━━━━━━━━━━━━━━━━
12 · DISPONIBILIDADE
━━━━━━━━━━━━━━━━━━━━

Disponibilidade:
${formatList(form.disponibilidade)}

Responsável pelo projeto:
${form.responsavelProjeto}

Melhor forma de contato:
${form.melhorContato}

Melhor horário:
${form.melhorHorario}

Observações:
${form.observacoesDisponibilidade || "Não informado"}

━━━━━━━━━━━━━━━━━━━━
13 · PORTFÓLIO E DIVULGAÇÃO
━━━━━━━━━━━━━━━━━━━━

Autoriza utilização do projeto em portfólio?:
${form.portfolio}

Pode enviar imagens/materiais?:
${form.imagens}

Nome da empresa para divulgação:
${form.nomeEmpresaDivulgacao}

Instagram para divulgação:
${form.instagramDivulgacao}

Gostaria de receber o resultado final?:
${form.receberResultado}

━━━━━━━━━━━━━━━━━━━━
14 · FINALIZAÇÃO
━━━━━━━━━━━━━━━━━━━━

Informações adicionais:
${form.informacoesAdicionais || "Não informado"}

Por que deseja participar:
${form.porQueParticipar}

Como conheceu o projeto:
${form.comoConheceu}

Confirma que as informações são verdadeiras?:
${form.confirmacaoVerdade}

Autoriza contato para tratar da inscrição?:
${form.autorizacaoContato}

━━━━━━━━━━━━━━━━━━━━

✦ INSCRIÇÃO ENVIADA PELO FORMULÁRIO
Projeto Digital · Agatha Pinheiro
    `.trim();

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <main className="form-page">
        <header className="form-header">
          <div className="form-header-inner">
            <Link href="/" className="form-logo">
              <div className="form-logo-mark">AP</div>
              <div className="form-logo-text">
                <span className="form-logo-name">AGATHA PINHEIRO</span>
                <span className="form-logo-subtitle">
                  PROJETO DIGITAL
                </span>
              </div>
            </Link>
          </div>
        </header>

        <section className="form-success">
          <div className="form-success-symbol">✦</div>

          <div className="section-label">INSCRIÇÃO REGISTRADA</div>

          <h1>
            Obrigada por
            <br />
            participar.
          </h1>

          <p>
            Suas informações foram organizadas e o WhatsApp foi aberto
            para concluir o envio da inscrição.
          </p>

          <p>
            <strong>
              Confira a mensagem no WhatsApp e toque em enviar.
            </strong>
          </p>

          <Link href="/" className="btn btn-gold">
            Voltar para o projeto
            <span>↗</span>
          </Link>
        </section>

        <footer className="form-footer">
          <div className="form-footer-inner">
            <div>
              <div className="form-footer-copy">
                © 2026 Agatha Pinheiro
              </div>
              <div className="form-footer-project">
                PROJETO DIGITAL · INSCRIÇÕES ABERTAS
              </div>
            </div>

            <div className="form-footer-mark">AP</div>
          </div>
        </footer>
      </main>
    );
  }

  return (
    <main className="form-page">
      <header className="form-header">
        <div className="form-header-inner">
          <Link href="/" className="form-back">
            ← Voltar
          </Link>

          <Link href="/" className="form-logo">
            <div className="form-logo-mark">AP</div>

            <div className="form-logo-text">
              <span className="form-logo-name">AGATHA PINHEIRO</span>
              <span className="form-logo-subtitle">
                PROJETO DIGITAL
              </span>
            </div>
          </Link>
        </div>
      </header>

      <section className="form-intro">
        <div className="form-intro-content">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              INSCRIÇÕES ABERTAS · 2026
            </div>

            <h1>
              Quero conhecer
              <br />
              <span>sua loja.</span>
            </h1>

            <p className="form-intro-text">
              Este formulário foi criado para entender de verdade como
              sua loja funciona, quais são seus desafios e onde a
              tecnologia pode ajudar.
            </p>

            <p className="form-intro-text">
              Não precisa saber qual sistema, site ou automação você
              precisa. <strong>Conte o problema.</strong> A partir das
              suas respostas, vou analisar a possibilidade de transformar
              essa necessidade em um projeto.
            </p>
          </div>

          <div className="form-intro-side">
            <div className="form-start">
              <span>✦</span>

              <div>
                <strong>DESENVOLVIMENTO GRATUITO</strong>
                <small>
                  Para os negócios selecionados.
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <form className="application-form" onSubmit={handleSubmit}>
        {/* 01 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">01</span>
              <span className="section-label">SOBRE VOCÊ</span>
            </div>

            <h2>Vamos começar por você.</h2>

            <p>
              Quero saber quem está por trás da loja e quem será meu
              principal contato durante o projeto.
            </p>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>
                Seu nome <span>*</span>
              </label>
              <input
                required
                value={form.nome}
                onChange={(e) =>
                  updateField("nome", e.target.value)
                }
                placeholder="Digite seu nome completo"
              />
            </div>

            <div className="field">
              <label>
                WhatsApp <span>*</span>
              </label>
              <input
                required
                value={form.whatsapp}
                onChange={(e) =>
                  updateField(
                    "whatsapp",
                    formatPhone(e.target.value)
                  )
                }
                placeholder="(21) 99999-9999"
              />
            </div>

            <div className="field">
              <label>
                E-mail <span>*</span>
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) =>
                  updateField("email", e.target.value)
                }
                placeholder="seu@email.com"
              />
            </div>

            <div className="field">
              <label>
                Cidade / Estado <span>*</span>
              </label>
              <input
                required
                value={form.cidade}
                onChange={(e) =>
                  updateField("cidade", e.target.value)
                }
                placeholder="Ex.: Rio de Janeiro - RJ"
              />
            </div>

            <div className="field">
              <label>Instagram pessoal</label>
              <input
                value={form.instagramPessoal}
                onChange={(e) =>
                  updateField(
                    "instagramPessoal",
                    e.target.value
                  )
                }
                placeholder="@seuinstagram"
              />
            </div>

            <div className="field">
              <label>
                Qual é sua função na loja? <span>*</span>
              </label>
              <input
                required
                value={form.funcao}
                onChange={(e) =>
                  updateField("funcao", e.target.value)
                }
                placeholder="Ex.: proprietária, gerente..."
              />
            </div>

            <div className="field">
              <label>
                Há quanto tempo está no negócio? <span>*</span>
              </label>
              <input
                required
                value={form.tempoNegocio}
                onChange={(e) =>
                  updateField(
                    "tempoNegocio",
                    e.target.value
                  )
                }
                placeholder="Ex.: 3 anos"
              />
            </div>

            <div className="field">
              <label>
                Você participa das decisões do negócio? <span>*</span>
              </label>

              <select
                required
                value={form.decisor}
                onChange={(e) =>
                  updateField("decisor", e.target.value)
                }
              >
                <option value="">Selecione</option>
                <option>Sim, sou responsável</option>
                <option>Sim, participo das decisões</option>
                <option>Não, outra pessoa decide</option>
              </select>
            </div>
          </div>
        </section>

        {/* 02 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">02</span>
              <span className="section-label">SOBRE O NEGÓCIO</span>
            </div>

            <h2>Agora quero conhecer sua loja.</h2>

            <p>
              Quanto melhor eu entender o negócio, melhor consigo
              compreender os desafios apresentados.
            </p>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>
                Nome da empresa / loja <span>*</span>
              </label>
              <input
                required
                value={form.empresa}
                onChange={(e) =>
                  updateField("empresa", e.target.value)
                }
                placeholder="Nome da loja"
              />
            </div>

            <div className="field">
              <label>Instagram da empresa</label>
              <input
                value={form.instagramEmpresa}
                onChange={(e) =>
                  updateField(
                    "instagramEmpresa",
                    e.target.value
                  )
                }
                placeholder="@sualoja"
              />
            </div>

            <div className="field">
              <label>Site</label>
              <input
                value={form.site}
                onChange={(e) =>
                  updateField("site", e.target.value)
                }
                placeholder="https://..."
              />
            </div>

            <div className="field">
              <label>
                Segmento <span>*</span>
              </label>
              <input
                required
                value={form.segmento}
                onChange={(e) =>
                  updateField("segmento", e.target.value)
                }
                placeholder="Ex.: moda, alimentação, assistência..."
              />
            </div>

            <div className="field">
              <label>
                Tipo de negócio <span>*</span>
              </label>
              <select
                required
                value={form.tipoNegocio}
                onChange={(e) =>
                  updateField("tipoNegocio", e.target.value)
                }
              >
                <option value="">Selecione</option>
                <option>Loja física</option>
                <option>Loja online</option>
                <option>Loja física e online</option>
                <option>Prestação de serviços</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="field">
              <label>
                Há quanto tempo o negócio existe? <span>*</span>
              </label>
              <input
                required
                value={form.idadeNegocio}
                onChange={(e) =>
                  updateField("idadeNegocio", e.target.value)
                }
                placeholder="Ex.: 5 anos"
              />
            </div>

            <div className="field">
              <label>
                Quantas pessoas trabalham no negócio? <span>*</span>
              </label>
              <input
                required
                value={form.quantidadePessoas}
                onChange={(e) =>
                  updateField(
                    "quantidadePessoas",
                    e.target.value
                  )
                }
                placeholder="Ex.: 4 pessoas"
              />
            </div>

            <div className="field">
              <label>
                Quantas unidades possui? <span>*</span>
              </label>
              <input
                required
                value={form.quantidadeUnidades}
                onChange={(e) =>
                  updateField(
                    "quantidadeUnidades",
                    e.target.value
                  )
                }
                placeholder="Ex.: 1"
              />
            </div>

            <div className="field">
              <label>
                Como atende seus clientes? <span>*</span>
              </label>
              <select
                required
                value={form.formatoAtendimento}
                onChange={(e) =>
                  updateField(
                    "formatoAtendimento",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Somente presencial</option>
                <option>Somente online</option>
                <option>Presencial e online</option>
                <option>Por WhatsApp</option>
                <option>Por telefone</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="field">
              <label>Horário de funcionamento</label>
              <input
                value={form.horarioFuncionamento}
                onChange={(e) =>
                  updateField(
                    "horarioFuncionamento",
                    e.target.value
                  )
                }
                placeholder="Ex.: Segunda a sábado, 9h às 18h"
              />
            </div>

            <div className="field full">
              <label>
                Conte um pouco sobre o seu negócio <span>*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.descricaoNegocio}
                onChange={(e) =>
                  updateField(
                    "descricaoNegocio",
                    e.target.value
                  )
                }
                placeholder="O que sua loja vende ou oferece? Como funciona? Quem são seus clientes?"
              />
            </div>
          </div>
        </section>

        {/* 03 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">03</span>
              <span className="section-label">
                COMO FUNCIONA HOJE
              </span>
            </div>

            <h2>Quero entender sua rotina.</h2>

            <p>
              Não existe resposta certa. Quero entender como as coisas
              realmente acontecem hoje.
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                Como os clientes normalmente chegam até sua loja? <span>*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.comoClientesChegam}
                onChange={(e) =>
                  updateField(
                    "comoClientesChegam",
                    e.target.value
                  )
                }
                placeholder="Instagram, indicação, rua, Google, WhatsApp..."
              />
            </div>

            <div className="field">
              <label>
                Como você atende os clientes atualmente? <span>*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.comoAtendeClientes}
                onChange={(e) =>
                  updateField(
                    "comoAtendeClientes",
                    e.target.value
                  )
                }
                placeholder="Explique como acontece o atendimento."
              />
            </div>

            <div className="field">
              <label>
                Como as vendas são registradas? <span>*</span>
              </label>
              <textarea
                required
                rows={4}
                value={form.comoRegistraVendas}
                onChange={(e) =>
                  updateField(
                    "comoRegistraVendas",
                    e.target.value
                  )
                }
                placeholder="Sistema, caderno, planilha, maquininha..."
              />
            </div>

            <div className="field">
              <label>
                Como você gerencia os clientes?
              </label>
              <textarea
                rows={4}
                value={form.comoGerenciaClientes}
                onChange={(e) =>
                  updateField(
                    "comoGerenciaClientes",
                    e.target.value
                  )
                }
                placeholder="Agenda, contatos do WhatsApp, sistema, planilha..."
              />
            </div>

            <div className="field">
              <label>
                Como controla o estoque?
              </label>
              <textarea
                rows={4}
                value={form.comoControlaEstoque}
                onChange={(e) =>
                  updateField(
                    "comoControlaEstoque",
                    e.target.value
                  )
                }
                placeholder="Explique como sabe o que entrou, saiu e o que está disponível."
              />
            </div>

            <div className="field">
              <label>
                Como faz orçamentos?
              </label>
              <textarea
                rows={4}
                value={form.comoFazOrcamentos}
                onChange={(e) =>
                  updateField(
                    "comoFazOrcamentos",
                    e.target.value
                  )
                }
                placeholder="WhatsApp, papel, sistema, planilha..."
              />
            </div>

            <div className="field">
              <label>
                Como funciona o agendamento?
              </label>
              <textarea
                rows={4}
                value={form.comoFazAgendamentos}
                onChange={(e) =>
                  updateField(
                    "comoFazAgendamentos",
                    e.target.value
                  )
                }
                placeholder="Agenda física, WhatsApp, calendário, sistema..."
              />
            </div>

            <div className="field">
              <label>
                Como controla o financeiro?
              </label>
              <textarea
                rows={4}
                value={form.comoControlaFinanceiro}
                onChange={(e) =>
                  updateField(
                    "comoControlaFinanceiro",
                    e.target.value
                  )
                }
                placeholder="Planilha, sistema, caderno, contador..."
              />
            </div>

            <div className="field">
              <label>
                Quais ferramentas você utiliza no dia a dia?
              </label>
              <textarea
                rows={4}
                value={form.ferramentasUtilizadas}
                onChange={(e) =>
                  updateField(
                    "ferramentasUtilizadas",
                    e.target.value
                  )
                }
                placeholder="WhatsApp, Instagram, Excel, Google, aplicativos..."
              />
            </div>

            <div className="field">
              <label>
                Utiliza algum sistema atualmente?
              </label>
              <textarea
                rows={4}
                value={form.sistemasUtilizados}
                onChange={(e) =>
                  updateField(
                    "sistemasUtilizados",
                    e.target.value
                  )
                }
                placeholder="Se sim, qual? Para que utiliza?"
              />
            </div>

            <div className="field">
              <label>
                Utiliza planilhas?
              </label>
              <textarea
                rows={4}
                value={form.planilhas}
                onChange={(e) =>
                  updateField("planilhas", e.target.value)
                }
                placeholder="Quais planilhas e para qual finalidade?"
              />
            </div>

            <div className="field">
              <label>
                Quais processos ainda são feitos manualmente?
              </label>
              <textarea
                rows={4}
                value={form.processosManuais}
                onChange={(e) =>
                  updateField(
                    "processosManuais",
                    e.target.value
                  )
                }
                placeholder="Conte tudo que depende de papel, mensagens, anotações ou repetição manual."
              />
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">04</span>
              <span className="section-label">
                PRINCIPAIS PROBLEMAS
              </span>
            </div>

            <h2>Onde sua loja mais sofre hoje?</h2>

            <p>
              Essa parte é muito importante. Quero identificar problemas
              reais que poderiam ser melhorados.
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                Qual é hoje o maior problema da sua loja? <span>*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.maiorProblema}
                onChange={(e) =>
                  updateField(
                    "maiorProblema",
                    e.target.value
                  )
                }
                placeholder="Conte o principal problema."
              />
            </div>

            <div className="field">
              <label>
                Qual tarefa mais consome seu tempo?
              </label>
              <textarea
                rows={4}
                value={form.tarefaMaisTempo}
                onChange={(e) =>
                  updateField(
                    "tarefaMaisTempo",
                    e.target.value
                  )
                }
                placeholder="Algo que você faz todos os dias ou frequentemente."
              />
            </div>

            <div className="field">
              <label>
                Existe alguma tarefa muito repetitiva?
              </label>
              <textarea
                rows={4}
                value={form.tarefaRepetitiva}
                onChange={(e) =>
                  updateField(
                    "tarefaRepetitiva",
                    e.target.value
                  )
                }
                placeholder="Descreva."
              />
            </div>

            <div className="field">
              <label>
                Quais erros acontecem com frequência?
              </label>
              <textarea
                rows={4}
                value={form.errosFrequentes}
                onChange={(e) =>
                  updateField(
                    "errosFrequentes",
                    e.target.value
                  )
                }
                placeholder="Erros de cadastro, estoque, valores, informações..."
              />
            </div>

            <div className="field">
              <label>
                Existe algo que costuma ser esquecido?
              </label>
              <textarea
                rows={4}
                value={form.coisasEsquecidas}
                onChange={(e) =>
                  updateField(
                    "coisasEsquecidas",
                    e.target.value
                  )
                }
                placeholder="Tarefas, clientes, cobranças, pedidos..."
              />
            </div>

            <div className="field">
              <label>
                Existe retrabalho?
              </label>
              <textarea
                rows={4}
                value={form.retrabalho}
                onChange={(e) =>
                  updateField("retrabalho", e.target.value)
                }
                placeholder="Alguma coisa que precisa ser feita duas ou mais vezes?"
              />
            </div>

            <div className="field">
              <label>
                Qual tarefa você gostaria de eliminar?
              </label>
              <textarea
                rows={4}
                value={form.tarefaEliminar}
                onChange={(e) =>
                  updateField(
                    "tarefaEliminar",
                    e.target.value
                  )
                }
                placeholder="Se pudesse deixar uma tarefa automática, qual seria?"
              />
            </div>

            <div className="field">
              <label>
                Existe alguma informação difícil de encontrar?
              </label>
              <textarea
                rows={4}
                value={form.informacaoDificilEncontrar}
                onChange={(e) =>
                  updateField(
                    "informacaoDificilEncontrar",
                    e.target.value
                  )
                }
                placeholder="Clientes, vendas, produtos, pagamentos..."
              />
            </div>

            <div className="field">
              <label>
                Como você considera a organização atual?
              </label>
              <textarea
                rows={4}
                value={form.desorganizacao}
                onChange={(e) =>
                  updateField(
                    "desorganizacao",
                    e.target.value
                  )
                }
                placeholder="O que funciona bem e o que poderia ser mais organizado?"
              />
            </div>

            <div className="field">
              <label>
                Qual é a parte mais incômoda da rotina?
              </label>
              <textarea
                rows={4}
                value={form.parteMaisIncomoda}
                onChange={(e) =>
                  updateField(
                    "parteMaisIncomoda",
                    e.target.value
                  )
                }
                placeholder="Aquela tarefa ou situação que mais atrapalha."
              />
            </div>
          </div>
        </section>

        {/* 05 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">05</span>
              <span className="section-label">
                OPORTUNIDADES DE TECNOLOGIA
              </span>
            </div>

            <h2>Onde a tecnologia poderia ajudar?</h2>

            <p>
              Você pode marcar tudo que fizer sentido para a realidade
              da sua loja.
            </p>
          </div>

          <div className="field full">
            <label>
              O que você gostaria de automatizar?
            </label>

            <div className="checkbox-grid">
              {automationOptions.map((option) => (
                <label
                  className={`checkbox-item ${
                    form.gostariaAutomatizar.includes(option)
                      ? "selected"
                      : ""
                  }`}
                  key={option}
                >
                  <input
                    type="checkbox"
                    checked={form.gostariaAutomatizar.includes(
                      option
                    )}
                    onChange={() =>
                      toggleArrayValue(
                        "gostariaAutomatizar",
                        option
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>
                Existe algum processo que gostaria de eliminar?
              </label>
              <textarea
                rows={4}
                value={form.processosEliminar}
                onChange={(e) =>
                  updateField(
                    "processosEliminar",
                    e.target.value
                  )
                }
                placeholder="Conte qual."
              />
            </div>

            <div className="field">
              <label>
                Gostaria de ter um sistema próprio?
              </label>

              <select
                value={form.sistemaProprio}
                onChange={(e) =>
                  updateField(
                    "sistemaProprio",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Talvez</option>
                <option>Não sei</option>
                <option>Não</option>
              </select>
            </div>

            <div className="field">
              <label>
                Que ações você gostaria que acontecessem automaticamente?
              </label>
              <textarea
                rows={4}
                value={form.acoesAutomaticas}
                onChange={(e) =>
                  updateField(
                    "acoesAutomaticas",
                    e.target.value
                  )
                }
                placeholder="Ex.: enviar mensagem para cliente, avisar quando algo estiver pronto..."
              />
            </div>

            <div className="field">
              <label>
                Existe algum processo que gostaria de integrar ao WhatsApp?
              </label>
              <textarea
                rows={4}
                value={form.processosWhatsApp}
                onChange={(e) =>
                  updateField(
                    "processosWhatsApp",
                    e.target.value
                  )
                }
                placeholder="Ex.: confirmações, avisos, cobranças..."
              />
            </div>

            <div className="field">
              <label>
                Gostaria de visualizar informações em um dashboard?
              </label>

              <select
                value={form.gostariaDashboard}
                onChange={(e) =>
                  updateField(
                    "gostariaDashboard",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Talvez</option>
                <option>Não sei</option>
                <option>Não</option>
              </select>
            </div>

            <div className="field">
              <label>
                Gostaria de receber alertas ou notificações?
              </label>

              <select
                value={form.gostariaAlertas}
                onChange={(e) =>
                  updateField(
                    "gostariaAlertas",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Talvez</option>
                <option>Não sei</option>
                <option>Não</option>
              </select>
            </div>

            <div className="field full">
              <label>
                Existe outra oportunidade de tecnologia que você imagina?
              </label>
              <textarea
                rows={5}
                value={form.outrasOportunidades}
                onChange={(e) =>
                  updateField(
                    "outrasOportunidades",
                    e.target.value
                  )
                }
                placeholder="Mesmo que você não saiba se é possível, pode escrever sua ideia."
              />
            </div>
          </div>
        </section>

        {/* 06 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">06</span>
              <span className="section-label">
                IDEIA DO PROJETO
              </span>
            </div>

            <h2>Se pudesse mudar alguma coisa...</h2>

            <p>
              Imagine que a solução já existisse. Como ela funcionaria
              para sua loja?
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                Qual seria a principal melhoria que você gostaria de ter? <span>*</span>
              </label>
              <textarea
                required
                rows={5}
                value={form.melhoriaPrincipal}
                onChange={(e) =>
                  updateField(
                    "melhoriaPrincipal",
                    e.target.value
                  )
                }
                placeholder="Explique com suas palavras."
              />
            </div>
          </div>

          <div className="field full">
            <label>
              Que tipo de projeto você imagina?
            </label>

            <div className="checkbox-grid">
              {projectTypes.map((option) => (
                <label
                  className={`checkbox-item ${
                    form.tiposProjeto.includes(option)
                      ? "selected"
                      : ""
                  }`}
                  key={option}
                >
                  <input
                    type="checkbox"
                    checked={form.tiposProjeto.includes(option)}
                    onChange={() =>
                      toggleArrayValue(
                        "tiposProjeto",
                        option
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>
                Outro tipo de projeto
              </label>
              <input
                value={form.outroTipoProjeto}
                onChange={(e) =>
                  updateField(
                    "outroTipoProjeto",
                    e.target.value
                  )
                }
                placeholder="Se marcou outro, explique."
              />
            </div>

            <div className="field">
              <label>
                Quem utilizaria essa solução?
              </label>
              <input
                value={form.quemUsaria}
                onChange={(e) =>
                  updateField(
                    "quemUsaria",
                    e.target.value
                  )
                }
                placeholder="Você, funcionários, clientes..."
              />
            </div>

            <div className="field full">
              <label>
                Como você imagina que o projeto deveria funcionar?
              </label>
              <textarea
                rows={6}
                value={form.funcionamentoIdeal}
                onChange={(e) =>
                  updateField(
                    "funcionamentoIdeal",
                    e.target.value
                  )
                }
                placeholder="Descreva o passo a passo como você imagina."
              />
            </div>
          </div>

          <div className="field full">
            <label>
              Em quais dispositivos gostaria de utilizar?
            </label>

            <div className="checkbox-grid">
              {deviceOptions.map((option) => (
                <label
                  className={`checkbox-item ${
                    form.dispositivos.includes(option)
                      ? "selected"
                      : ""
                  }`}
                  key={option}
                >
                  <input
                    type="checkbox"
                    checked={form.dispositivos.includes(option)}
                    onChange={() =>
                      toggleArrayValue(
                        "dispositivos",
                        option
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field full">
            <label>
              Qual seria uma função indispensável?
            </label>
            <textarea
              rows={5}
              value={form.recursoIndispensavel}
              onChange={(e) =>
                updateField(
                  "recursoIndispensavel",
                  e.target.value
                )
              }
              placeholder="Se a solução tivesse apenas uma função essencial, qual seria?"
            />
          </div>
        </section>

        {/* 07 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">07</span>
              <span className="section-label">
                FUNCIONALIDADES
              </span>
            </div>

            <h2>O que poderia fazer parte da solução?</h2>

            <p>
              Marque as funcionalidades que poderiam ser úteis para sua
              realidade.
            </p>
          </div>

          <div className="field full">
            <label>Funcionalidades desejadas</label>

            <div className="checkbox-grid">
              {functionalityOptions.map((option) => (
                <label
                  className={`checkbox-item ${
                    form.funcionalidades.includes(option)
                      ? "selected"
                      : ""
                  }`}
                  key={option}
                >
                  <input
                    type="checkbox"
                    checked={form.funcionalidades.includes(option)}
                    onChange={() =>
                      toggleArrayValue(
                        "funcionalidades",
                        option
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>Outra funcionalidade</label>
              <input
                value={form.outraFuncionalidade}
                onChange={(e) =>
                  updateField(
                    "outraFuncionalidade",
                    e.target.value
                  )
                }
                placeholder="Existe algo que não apareceu acima?"
              />
            </div>

            <div className="field">
              <label>
                Explique uma função específica que considera importante
              </label>
              <textarea
                rows={5}
                value={form.funcaoEspecifica}
                onChange={(e) =>
                  updateField(
                    "funcaoEspecifica",
                    e.target.value
                  )
                }
                placeholder="Pode explicar em detalhes."
              />
            </div>
          </div>
        </section>

        {/* 08 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">08</span>
              <span className="section-label">
                PRESENÇA DIGITAL
              </span>
            </div>

            <h2>Como sua loja aparece na internet?</h2>

            <p>
              Quero entender quais canais você já utiliza e o que poderia
              ser melhorado.
            </p>
          </div>

          <div className="field full">
            <label>Onde sua empresa está presente?</label>

            <div className="checkbox-grid">
              {digitalOptions.map((option) => (
                <label
                  className={`checkbox-item ${
                    form.presencaDigital.includes(option)
                      ? "selected"
                      : ""
                  }`}
                  key={option}
                >
                  <input
                    type="checkbox"
                    checked={form.presencaDigital.includes(option)}
                    onChange={() =>
                      toggleArrayValue(
                        "presencaDigital",
                        option
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="field full">
            <label>
              O que você gostaria de melhorar na presença digital?
            </label>

            <textarea
              rows={6}
              value={form.melhoriaDigital}
              onChange={(e) =>
                updateField(
                  "melhoriaDigital",
                  e.target.value
                )
              }
              placeholder="Ex.: site, Instagram, atendimento online, divulgação..."
            />
          </div>
        </section>

        {/* 09 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">09</span>
              <span className="section-label">
                REFERÊNCIAS
              </span>
            </div>

            <h2>Tem algum projeto que você admira?</h2>

            <p>
              Referências ajudam a entender seu gosto e a forma como você
              imagina uma solução.
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                Você possui alguma referência?
              </label>

              <textarea
                rows={4}
                value={form.referencias}
                onChange={(e) =>
                  updateField(
                    "referencias",
                    e.target.value
                  )
                }
                placeholder="Site, sistema, aplicativo, loja ou concorrente..."
              />
            </div>

            <div className="field">
              <label>
                Links das referências
              </label>

              <textarea
                rows={4}
                value={form.linksReferencias}
                onChange={(e) =>
                  updateField(
                    "linksReferencias",
                    e.target.value
                  )
                }
                placeholder="Cole os links aqui, se houver."
              />
            </div>

            <div className="field">
              <label>
                O que você gosta nessas referências?
              </label>

              <textarea
                rows={5}
                value={form.gostaReferencias}
                onChange={(e) =>
                  updateField(
                    "gostaReferencias",
                    e.target.value
                  )
                }
                placeholder="Visual, facilidade, organização, funções..."
              />
            </div>

            <div className="field">
              <label>
                O que você NÃO gostaria que tivesse?
              </label>

              <textarea
                rows={5}
                value={form.naoGostaReferencias}
                onChange={(e) =>
                  updateField(
                    "naoGostaReferencias",
                    e.target.value
                  )
                }
                placeholder="Cores, funções, estilo, excesso de informações..."
              />
            </div>
          </div>
        </section>

        {/* 10 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">10</span>
              <span className="section-label">
                IMPACTO NO NEGÓCIO
              </span>
            </div>

            <h2>O que mudaria depois do projeto?</h2>

            <p>
              Quero entender o impacto que uma solução poderia gerar na
              prática.
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                O que você espera que mude na rotina? <span>*</span>
              </label>

              <textarea
                required
                rows={5}
                value={form.mudancaEsperada}
                onChange={(e) =>
                  updateField(
                    "mudancaEsperada",
                    e.target.value
                  )
                }
                placeholder="Como seria o dia a dia depois da solução?"
              />
            </div>

            <div className="field">
              <label>
                Quanto tempo você acredita que poderia economizar?
              </label>

              <textarea
                rows={4}
                value={form.tempoEconomizado}
                onChange={(e) =>
                  updateField(
                    "tempoEconomizado",
                    e.target.value
                  )
                }
                placeholder="Pode ser uma estimativa."
              />
            </div>

            <div className="field">
              <label>
                Qual problema seria eliminado ou reduzido?
              </label>

              <textarea
                rows={4}
                value={form.problemaEliminado}
                onChange={(e) =>
                  updateField(
                    "problemaEliminado",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Como isso ajudaria sua equipe?
              </label>

              <textarea
                rows={4}
                value={form.beneficioEquipe}
                onChange={(e) =>
                  updateField(
                    "beneficioEquipe",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Como isso poderia ajudar seus clientes?
              </label>

              <textarea
                rows={4}
                value={form.beneficioClientes}
                onChange={(e) =>
                  updateField(
                    "beneficioClientes",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Você acredita que poderia impactar as vendas?
              </label>

              <textarea
                rows={4}
                value={form.impactoVendas}
                onChange={(e) =>
                  updateField(
                    "impactoVendas",
                    e.target.value
                  )
                }
                placeholder="Explique como."
              />
            </div>

            <div className="field">
              <label>
                Como poderia melhorar a organização?
              </label>

              <textarea
                rows={4}
                value={form.impactoOrganizacao}
                onChange={(e) =>
                  updateField(
                    "impactoOrganizacao",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Como você saberia que o projeto deu certo? <span>*</span>
              </label>

              <textarea
                required
                rows={5}
                value={form.projetoSucesso}
                onChange={(e) =>
                  updateField(
                    "projetoSucesso",
                    e.target.value
                  )
                }
                placeholder="Qual resultado faria você dizer: valeu a pena?"
              />
            </div>
          </div>
        </section>

        {/* 11 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">11</span>
              <span className="section-label">
                SELEÇÃO DO PROJETO
              </span>
            </div>

            <h2>Por que sua loja?</h2>

            <p>
              Esta etapa faz parte da análise das inscrições. Seja sincero
              e conte o que torna essa necessidade importante para você.
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                Por que você acredita que sua loja seria uma boa candidata? <span>*</span>
              </label>

              <textarea
                required
                rows={6}
                value={form.boaCandidata}
                onChange={(e) =>
                  updateField(
                    "boaCandidata",
                    e.target.value
                  )
                }
                placeholder="Conte sua situação."
              />
            </div>

            <div className="field">
              <label>
                Por que você quer resolver isso agora?
              </label>

              <textarea
                rows={5}
                value={form.porQueAgora}
                onChange={(e) =>
                  updateField(
                    "porQueAgora",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Qual é a importância desse projeto para o negócio?
              </label>

              <textarea
                rows={5}
                value={form.importanciaProjeto}
                onChange={(e) =>
                  updateField(
                    "importanciaProjeto",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                O que pode acontecer se o problema continuar?
              </label>

              <textarea
                rows={5}
                value={form.seNaoResolver}
                onChange={(e) =>
                  updateField(
                    "seNaoResolver",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Que impacto uma solução poderia gerar?
              </label>

              <textarea
                rows={5}
                value={form.impactoSolucao}
                onChange={(e) =>
                  updateField(
                    "impactoSolucao",
                    e.target.value
                  )
                }
              />
            </div>

            <div className="field">
              <label>
                Você já tentou resolver esse problema antes?
              </label>

              <textarea
                rows={5}
                value={form.tentouResolver}
                onChange={(e) =>
                  updateField(
                    "tentouResolver",
                    e.target.value
                  )
                }
                placeholder="Se sim, o que tentou fazer e por que não funcionou?"
              />
            </div>

            <div className="field">
              <label>
                O que você espera deste projeto?
              </label>

              <textarea
                rows={5}
                value={form.expectativas}
                onChange={(e) =>
                  updateField(
                    "expectativas",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </section>

        {/* 12 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">12</span>
              <span className="section-label">
                DISPONIBILIDADE
              </span>
            </div>

            <h2>Precisaremos trabalhar juntos.</h2>

            <p>
              O desenvolvimento pode exigir conversas, testes e feedbacks
              para que a solução realmente faça sentido.
            </p>
          </div>

          <div className="field full">
            <label>
              Com quais etapas você teria disponibilidade para colaborar?
            </label>

            <div className="checkbox-grid">
              {availabilityOptions.map((option) => (
                <label
                  className={`checkbox-item ${
                    form.disponibilidade.includes(option)
                      ? "selected"
                      : ""
                  }`}
                  key={option}
                >
                  <input
                    type="checkbox"
                    checked={form.disponibilidade.includes(option)}
                    onChange={() =>
                      toggleArrayValue(
                        "disponibilidade",
                        option
                      )
                    }
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>
                Quem será o responsável pelo projeto?
              </label>

              <input
                value={form.responsavelProjeto}
                onChange={(e) =>
                  updateField(
                    "responsavelProjeto",
                    e.target.value
                  )
                }
                placeholder="Nome da pessoa que acompanhará."
              />
            </div>

            <div className="field">
              <label>
                Melhor forma de contato
              </label>

              <select
                value={form.melhorContato}
                onChange={(e) =>
                  updateField(
                    "melhorContato",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>WhatsApp</option>
                <option>Ligação</option>
                <option>E-mail</option>
                <option>Instagram</option>
              </select>
            </div>

            <div className="field">
              <label>
                Melhor horário para contato
              </label>

              <input
                value={form.melhorHorario}
                onChange={(e) =>
                  updateField(
                    "melhorHorario",
                    e.target.value
                  )
                }
                placeholder="Ex.: 14h às 18h"
              />
            </div>

            <div className="field">
              <label>
                Existe alguma observação sobre sua disponibilidade?
              </label>

              <textarea
                rows={4}
                value={form.observacoesDisponibilidade}
                onChange={(e) =>
                  updateField(
                    "observacoesDisponibilidade",
                    e.target.value
                  )
                }
              />
            </div>
          </div>
        </section>

        {/* 13 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">13</span>
              <span className="section-label">
                PORTFÓLIO E DIVULGAÇÃO
              </span>
            </div>

            <h2>Sobre o projeto depois de pronto.</h2>

            <p>
              Como este é um projeto de desenvolvimento, algumas
              informações poderão ser utilizadas para apresentar o
              resultado posteriormente.
            </p>
          </div>

          <div className="form-grid">
            <div className="field">
              <label>
                Autoriza que o projeto seja utilizado no meu portfólio?
              </label>

              <select
                value={form.portfolio}
                onChange={(e) =>
                  updateField(
                    "portfolio",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Não</option>
                <option>Podemos conversar</option>
              </select>
            </div>

            <div className="field">
              <label>
                Poderá enviar imagens ou materiais da empresa?
              </label>

              <select
                value={form.imagens}
                onChange={(e) =>
                  updateField(
                    "imagens",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Não</option>
                <option>Podemos conversar</option>
              </select>
            </div>

            <div className="field">
              <label>
                Nome da empresa para eventual divulgação
              </label>

              <input
                value={form.nomeEmpresaDivulgacao}
                onChange={(e) =>
                  updateField(
                    "nomeEmpresaDivulgacao",
                    e.target.value
                  )
                }
                placeholder="Nome que pode aparecer."
              />
            </div>

            <div className="field">
              <label>
                Instagram para eventual divulgação
              </label>

              <input
                value={form.instagramDivulgacao}
                onChange={(e) =>
                  updateField(
                    "instagramDivulgacao",
                    e.target.value
                  )
                }
                placeholder="@sualoja"
              />
            </div>

            <div className="field full">
              <label>
                Gostaria de receber o resultado final do projeto?
              </label>

              <select
                value={form.receberResultado}
                onChange={(e) =>
                  updateField(
                    "receberResultado",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim</option>
                <option>Não</option>
                <option>Se for possível</option>
              </select>
            </div>
          </div>
        </section>

        {/* 14 */}
        <section className="form-section">
          <div className="section-heading">
            <div className="section-heading-top">
              <span className="section-number">14</span>
              <span className="section-label">
                FINALIZAÇÃO
              </span>
            </div>

            <h2>Chegamos ao final.</h2>

            <p>
              Antes de enviar, quero deixar um espaço para você contar
              qualquer coisa que ainda não apareceu no formulário.
            </p>
          </div>

          <div className="form-grid full">
            <div className="field">
              <label>
                Existe alguma informação importante que não perguntamos?
              </label>

              <textarea
                rows={6}
                value={form.informacoesAdicionais}
                onChange={(e) =>
                  updateField(
                    "informacoesAdicionais",
                    e.target.value
                  )
                }
                placeholder="Conte o que achar importante."
              />
            </div>

            <div className="field">
              <label>
                Por que você quer participar deste projeto? <span>*</span>
              </label>

              <textarea
                required
                rows={6}
                value={form.porQueParticipar}
                onChange={(e) =>
                  updateField(
                    "porQueParticipar",
                    e.target.value
                  )
                }
                placeholder="Conte com suas palavras."
              />
            </div>

            <div className="field">
              <label>
                Como você conheceu o projeto?
              </label>

              <select
                value={form.comoConheceu}
                onChange={(e) =>
                  updateField(
                    "comoConheceu",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Instagram</option>
                <option>WhatsApp</option>
                <option>Indicação</option>
                <option>Google</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="field">
              <label>
                Confirma que as informações preenchidas são verdadeiras? <span>*</span>
              </label>

              <select
                required
                value={form.confirmacaoVerdade}
                onChange={(e) =>
                  updateField(
                    "confirmacaoVerdade",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim, confirmo</option>
              </select>
            </div>

            <div className="field">
              <label>
                Autoriza o contato para tratar desta inscrição? <span>*</span>
              </label>

              <select
                required
                value={form.autorizacaoContato}
                onChange={(e) =>
                  updateField(
                    "autorizacaoContato",
                    e.target.value
                  )
                }
              >
                <option value="">Selecione</option>
                <option>Sim, autorizo</option>
              </select>
            </div>
          </div>

          <div className="final-notice">
            <span>✦</span>

            <div>
              <strong>IMPORTANTE</strong>

              <p>
                A inscrição é gratuita e não garante a seleção.
                Todas as inscrições serão analisadas individualmente,
                considerando a necessidade apresentada e a possibilidade
                de desenvolvimento do projeto.
              </p>
            </div>
          </div>
        </section>

        <div className="form-navigation">
          <div className="form-navigation-info">
            <span>✦</span>

            <p>
              Ao enviar, suas respostas serão organizadas e abertas
              no WhatsApp para conclusão da inscrição.
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-gold"
            disabled={sending}
          >
            {sending
              ? "Preparando inscrição..."
              : "Enviar minha inscrição"}
            <span>↗</span>
          </button>
        </div>
      </form>

      <footer className="form-footer">
        <div className="form-footer-inner">
          <div>
            <div className="form-footer-copy">
              © 2026 Agatha Pinheiro
            </div>

            <div className="form-footer-project">
              PROJETO DIGITAL · INSCRIÇÕES ABERTAS
            </div>
          </div>

          <div className="form-footer-mark">AP</div>
        </div>
      </footer>
    </main>
  );
}
