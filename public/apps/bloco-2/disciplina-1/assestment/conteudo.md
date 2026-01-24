# Especificação do Projeto: SPA Mobile-First - Candidato Marco Madureira

## Resumo do Projeto

O objetivo é desenvolver uma Single Page Application (SPA) responsiva em React para a campanha do candidato fictício a prefeito do Rio de Janeiro, Marco Madureira. O projeto deve adotar estritamente a metodologia **mobile-first**, garantindo otimização inicial para dispositivos móveis com expansão progressiva para telas maiores. A aplicação deve oferecer uma navegação fluida através de links âncoras entre as seções (Biografia, Propostas, Agenda e Contato) sem a necessidade de recarregar a página.

## Requisitos e Exigências Técnicas

### 1. Estrutura dos Componentes

- **Header:** Exibir o nome do candidato e um menu de navegação com links âncoras que realizam rolagem suave (_smooth scroll_) para as respectivas seções.
- **Biografia:**
  - Exibir imagem e texto sobre a trajetória do candidato.
  - **Layout Mobile:** Fluxo vertical.
  - **Layout Desktop:** Fluxo horizontal (imagem ao lado do texto).
- **Propostas:**
  - Apresentar um conjunto de cards (mínimo 4) contendo imagem, título e descrição.
  - Exibir, após os cards, uma lista simples com outras 5 propostas (apenas título).
  - **Layout:** Empilhamento vertical no mobile e distribuição via Flexbox/Grid em telas maiores.
- **Agenda:**
  - Lista de próximos eventos de campanha.
  - **Layout:** Coluna única para mobile; duas ou mais colunas para telas maiores.
- **Footer:**
  - Exibir links para redes sociais (com ícones) e dados de contato.
  - Uso de Flexbox para centralização e responsividade.

### 2. Tecnologia e Estilização

- **React:** Construção da aplicação baseada em múltiplos componentes funcionais.
- **CSS Escopado:** Uso obrigatório de **CSS Modules** ou **CSS-in-JS** para garantir isolamento de estilos e evitar conflitos.
- **Material UI:** Implementação de componentes visuais modernos (ex: botões, cards ou formulários).
- **Layout Engine:** Uso obrigatório e extensivo de **Flexbox** (incluindo `flex-grow`, `flex-shrink`, `flex-basis`, alinhamentos `center`, `flex-start`, `stretch`) e/ou **Grid Layout**.

### 3. Design e UX (Mobile-First)

- **Responsividade:** Desenvolvimento iniciando por telas pequenas (< 576px) e expandindo via _media queries_.
- **Configuração de Viewport:** Inclusão correta da meta tag `viewport` no HTML.
- **Imagens:** Uso de imagens fluidas que não quebrem o layout.
- **Acessibilidade/Preferências:** Implementação de Media Queries Level 5 (`prefers-color-scheme`, `prefers-reduced-motion`) para respeitar as configurações do sistema do usuário.
- **Compatibilidade:** Garantir funcionamento em múltiplos navegadores modernos e dispositivos.
