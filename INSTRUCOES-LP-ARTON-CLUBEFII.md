# Instruções LP Arton × Clube FII

## Contexto
Landing page hospedada no ambiente Clube FII. Parceria exclusiva entre **Clube FII** e **Arton Advisors**. Mesmo modelo de parceria já existente no ambiente — mesclando identidade das duas marcas.

---

## Identidade Visual

### Paleta de cores (Arton — GuiaMarca 2021)

| Token        | Hex       | Uso                            |
|-------------|-----------|--------------------------------|
| `--green-1` | `#2C4D43` | Tom 01 — cor principal Arton   |
| `--green-2` | `#365E51` | Tom 02                         |
| `--green-3` | `#507D6D` | Tom 03                         |
| `--mint`    | `#83C4BB` | Menta — destaques sutis        |
| `--orange`  | `#FF9045` | Laranja Arton — CTAs e acentos |
| `--off-white`| `#FAF9F5` | Fundo alternado suave          |

### Fontes
- **Títulos/Headings:** Raleway (Google Fonts) — substituta digital da Halcyon (fonte proprietária Arton)
- **Corpo/UI:** Inter (Google Fonts)
- Lógica: títulos em Raleway weight 600, subtítulos weight 500, corpo em Inter weight 400/500

### Tom
- Sóbrio, técnico, sofisticado
- **Fundo branco** — não escuro (mudança da v1 para a v2)
- Clube FII aparece em laranja; Arton em verde escuro
- Verde escuro como cor institucional dominante; laranja como acento e CTA

---

## Estrutura das Seções (v2)

### Topbar
- Logo "Clube FII" (laranja) + separador + "ARTON / Advisors" (verde escuro)
- Pill "✦ Parceria Exclusiva"
- CTA fixo: **"Solicitar Contato"**

### 1. Hero
- Mantém proposta de copy da v1
- Headline: "Você domina FIIs. A Arton cuida do restante do seu patrimônio."
- Badge: "Exclusivo para membros Clube FII"
- 2 CTAs: primário "Solicitar Contato" + ghost "Como funciona →"
- Visual direito: grid de 4 stats (>R$10bi / +300 famílias / 40+ especialistas / ANBIMA)

### 2. Barra de Cultura (substituiu a social proof strip de números)
- Fundo: `--green-1` (verde escuro Arton)
- 4 pilares de cultura em grid horizontal:
  1. **Lastro Verdadeiro** — BTG como sponsor, time técnico
  2. **Relacionamentos Reais** — relacionamento como DNA
  3. **Técnica ao Resultado** — rigor e clareza com o cliente
  4. **Coragem para ser Bold** — ousadia dos 18 fundadores
- Cada pilar com ícone, título e descrição curta
- Linha laranja de 3px no topo de cada item

### 3. Carrossel Club Deals (10 cards)
- Fundo: `--off-white`
- 10 produtos em carousel com navegação (botões ‹ ›) e dots
- Cada card: tipo (tag colorida), título, descrição, rentabilidade/retorno, prazo, mínimo
- Hover: borda menta, sombra, barra laranja no rodapé
- Produtos de exemplo:
  1. CRI Premium — Logística AAA
  2. Debênture Incentivada — Energia
  3. Club Deal — Laje Corporativa Faria Lima
  4. CRA Agronegócio — Grãos
  5. FII de Desenvolvimento Residencial
  6. CRI Corporate — Galpão Sul
  7. Club Deal — Hotel Boutique Nordeste
  8. Debênture Estruturada — Saúde
  9. Fundo de Crédito Imobiliário
  10. Offshore — Real Estate EUA

### 4. Pilares (Tabs interativas)
- Fundo: branco
- 4 abas: **Wealth Management | Multi Family Office | Corporate Solutions | Gestão de Recursos**
- Layout: coluna esquerda descritiva + coluna direita com lista de entregáveis
- Tab ativa: sublinhado laranja, texto verde escuro

### 5. A Ponte
- Fundo: `--green-1` (verde escuro) — seção escura para contraste
- Headline: "Por que grandes investidores de FIIs consolidam seu patrimônio na Arton?"
- Dois cards lado a lado:
  - Esq: "Clube FII — O que você já domina" (checklist)
  - Dir: "Arton — O que a Arton adiciona" (lista com +)
- Separados por ícone "+" laranja

### 6. Migração de Imóveis para FIIs
- Fundo: `--off-white`
- Esquerda: copy explicativo + CTA "Falar com Especialista"
- Direita: card visual com 5 etapas numeradas do processo:
  1. Avaliação da rentabilidade real dos imóveis físicos
  2. Comparativo imóvel direto × FII
  3. Planejamento fiscal, patrimonial e sucessório
  4. Montagem de carteira diversificada de FIIs
  5. Migração gradual, respeitando perfil e objetivos

### 7. Nosso Compromisso
- Fundo: branco
- Esquerda: copy sobre "skin in the game" — sócios investem nos mesmos produtos
- Direita: card com citação do CEO Bernardo Assumpção + tags de credencial (Ex-Sócio XP, JP Morgan, etc.)

### 8. Formulário de Leads (CTA Final)
- Fundo: `--off-white`
- Esquerda: benefícios do contato (sigilo, resposta 24h, sem compromisso)
- Direita: formulário com:
  - Nome + Sobrenome
  - E-mail + WhatsApp
  - **Select obrigatório — Valor a ser investido** (mínimo R$5M):
    - R$ 5M – R$ 10M
    - R$ 10M – R$ 50M
    - R$ 50M – R$ 100M
    - Acima de R$ 100M
  - **Select — Melhor período para contato**:
    - Manhã (08h–12h)
    - Tarde (12h–18h)
    - Qualquer horário comercial
  - Notice: "A Arton atende patrimônios a partir de R$ 5 milhões"
  - Botão: **"Solicitar Contato"**

---

## CTAs (variantes aprovadas)
- Principal: **"Solicitar Contato"**
- Alternativas: **"Iniciar Relacionamento"** / **"Falar com Especialista"**
- Topbar: botão verde escuro com "Solicitar Contato"

---

## Regras de design

- Fundo geral: **branco** (#FFFFFF)
- Fundo alternado de seção: `--off-white` (#FAF9F5)
- Seção "A Ponte" (escura): `--green-1` (#2C4D43)
- Seção "Barra de Cultura" (escura): `--green-1` (#2C4D43)
- CTAs sempre em `--orange` (#FF9045)
- Botão topbar em `--green-1` (verde escuro)
- Border-radius: 6px (componentes) / 10px (cards maiores) / 20px (pills/badges)
- Sombra: `0 4px 24px rgba(44,77,67,0.10)`
- Hover nos cards: `translateY(-3px)` + sombra

---

## Arquivos no projeto

| Arquivo | Descrição |
|---------|-----------|
| `lp-clubefii-arton-v2.html` | LP principal (versão atual) |
| `lp-clubefii-arton.html` | LP v1 (referência anterior — fundo escuro) |
| `AF_Arton_GuiaMarca (1).pdf` | Guia de marca oficial Arton (2021) |
| `AF_Arton_RGB_HorizPositivo (1).png` | Logo Arton fundo claro |
| `AF_Arton_RGB_HorizNegativo (1).png` | Logo Arton fundo escuro |

---

## Próximos passos sugeridos
- Substituir logos de texto por imagens PNG reais da Arton e Clube FII
- Inserir imagens reais de pessoas/equipe Arton nas seções apropriadas
- Conectar formulário a CRM/endpoint real
- Validar produtos Club Deals com equipe Arton antes do deploy
- Revisar copy final com time de marketing das duas marcas
