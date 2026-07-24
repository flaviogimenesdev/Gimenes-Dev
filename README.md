# Flávio Gimenes — Portfólio (Next.js)

Versão em React/Next.js do portfólio, componentizada e com o mesmo conteúdo e
identidade visual da versão estática.

## Como rodar

```bash
npm install
npm run dev
```

Depois abra **http://localhost:3000**.

> `npm install` apenas baixa as dependências — como o site sobe um servidor
> que fica rodando, o comando para iniciá-lo (`npm run dev`) precisa ser
> digitado em seguida. Não dá para "rodar" um servidor persistente dentro do
> próprio `npm install` sem travar o terminal.

Para gerar a versão de produção:

```bash
npm run build
npm start
```

## Estrutura

```
app/
  layout.js        → fontes, metadata/SEO, JSON-LD, LanguageProvider
  page.js           → composição das seções da home
  globals.css       → design system (tokens, componentes de CSS)
components/
  Navbar.jsx        → nav fixa, menu mobile, seletor de idioma
  Hero.jsx          → hero com CTA e mockup de navegador
  StackStrip.jsx    → faixa de tecnologias
  Services.jsx      → grid de serviços
  Projects.jsx      → cases reais (Zero Grau, Nexus RPG, Ayda)
  Process.jsx       → etapas do processo de trabalho
  About.jsx         → bio e informações
  Testimonials.jsx  → depoimentos (placeholders sinalizados)
  Faq.jsx           → perguntas frequentes (accordion nativo)
  Contact.jsx       → CTA e cartões de contato
  Footer.jsx        → rodapé
  Reveal.jsx        → wrapper de animação ao rolar a página
  Typewriter.jsx    → efeito de digitação do hero
context/
  LanguageContext.jsx → provider de i18n (PT/EN), localStorage + detecção de idioma do navegador
lib/
  translations.js   → dicionário de textos PT/EN (edite aqui para trocar copy)
  icons.jsx         → ícones SVG reutilizados pelos componentes
public/imgs/        → imagens do projeto
```

## Editando conteúdo

- **Textos/traduções:** `lib/translations.js`.
- **Projetos do portfólio:** array `PROJECTS` em `components/Projects.jsx`.
- **Depoimentos:** troque o array `TESTIMONIALS` em `components/Testimonials.jsx`
  e as chaves `testi.*` em `lib/translations.js` pelos depoimentos reais.
- **Cores/tipografia:** variáveis no topo de `app/globals.css`.
