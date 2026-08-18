# De Barros Tattoo

Site institucional do estúdio **De Barros Tattoo**, em Volta Redonda (RJ).

Este não é um projeto de estudo. É o site real do estúdio: eu desenvolvi a aplicação e também sou o tatuador por trás da marca. A ideia era ter um lugar próprio para apresentar o trabalho, a localização e receber pedidos de orçamento, sem depender só de redes sociais.

## O que o site faz

- Apresenta o estúdio, a bio e o portfólio
- Mostra como chegar
- Abre um formulário de orçamento que monta a mensagem e envia para o WhatsApp
- Conteúdo (textos, fotos e links) gerenciado no Prismic, sem precisar alterar código para atualizar o site

## Tecnologias

**Next.js 16 (App Router)** — estrutura da aplicação. A home é um Server Component: busca os dados no Prismic no servidor e só então renderiza a página. Há `loading.tsx` com skeletons enquanto o conteúdo carrega.

**React 19** — interface. Componentes client-side entram só onde precisa de estado no navegador (carrossel do portfólio, modal e formulário).

**TypeScript** — tipagem do código e dos documentos do Prismic (`prismicio-types.d.ts`).

**Tailwind CSS 4** — estilos. As fontes (Archivo Black, DM Sans e IBM Plex Mono) vêm do `next/font`.

**Prismic** — CMS. Hero, bio, imagens do portfólio, mapa, textos e links sociais ficam no painel. O site consome isso com `@prismicio/client` e `@prismicio/next` (preview e revalidação).

**React Hook Form + Zod** — validação do formulário de orçamento. Depois de validar, o site abre o WhatsApp (`wa.me`) com os dados já preenchidos.

**Vercel** — deploy e hospedagem.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

É preciso configurar o repositório do Prismic (`prismic.config.json` e variáveis de ambiente, se houver) para o conteúdo aparecer.
