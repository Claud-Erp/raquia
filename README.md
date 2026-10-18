# RAQUIA GRÁFICA — Website Institucional Premium

Landing page premium para gráfica profissional em Luanda, Angola.
Estética: Premium + Minimalista + Editorial + Corporativa.

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Imagens**: next/image (AVIF/WebP)
- **Formulário**: react-hook-form + zod
- **Carrossel**: embla-carousel-react
- **Ícones**: lucide-react
- **Fontes**: Playfair Display (serif) + Inter (sans-serif)

## Estrutura de Pastas

```
src/
├── app/
│   ├── api/quote/route.ts     # API validação backend
│   ├── globals.css            # Design System completo
│   ├── layout.tsx             # Metadata SEO + JSON-LD + fontes
│   ├── page.tsx               # Home (7 secções)
│   ├── robots.ts              # robots.txt dinâmico
│   └── sitemap.ts             # sitemap.xml dinâmico
├── components/
│   ├── layout/                # Header, MobileMenu, Footer, WhatsAppFloat
│   ├── raquia/                # Container, Section, Eyebrow, Heading, Logo, Button
│   ├── sections/              # Hero, Services, Products, About, Portfolio, QuoteCTA, Contact
│   ├── shared/                # Cards, Modals, Lightbox, Stats, RevealOnScroll
│   └── ui/                    # shadcn/ui (50+ componentes)
├── config/                    # 10 ficheiros de configuração editáveis
├── hooks/                     # useScrolled, useActiveSection, useHeroCarousel
└── lib/                       # utils, whatsapp, quote-schema, db
```

## Secções da Home

1. **Hero** (#inicio) — Carrossel 5 slides com autoplay + setas + indicadores
2. **Services** (#servicos) — Carrossel 7 serviços com modais de detalhe
3. **Products** (#produtos) — Grid 8 produtos com modais de detalhe
4. **About** (#sobre) — Split imagem/texto + stats animados + modal institucional
5. **Portfolio** (#portfolio) — Filtros + grid 13 trabalhos + lightbox
6. **QuoteCTA** (#orcamento) — Formulário dark validado + API backend
7. **Contact** (#contactos) — Contactos + mapa + horário + redes sociais

## Configuração Centralizada

Todos os dados editáveis em `src/config/`:

| Ficheiro | Conteúdo |
|---|---|
| `site.ts` | Contactos, endereço, horário, redes sociais, WhatsApp |
| `seo.ts` | Metadata, Open Graph, Schema.org LocalBusiness |
| `navigation.ts` | 7 itens do menu |
| `hero.ts` | 5 slides do carrossel |
| `services.ts` | 7 serviços com detalhes para modais |
| `products.ts` | 8 produtos com detalhes para modais |
| `portfolio.ts` | 13 trabalhos em 6 categorias |
| `company.ts` | Info institucional + stats |
| `quote.ts` | Opções do formulário (serviços, produtos, prazos) |
| `footer.ts` | Links de navegação, serviços, legais |

## Funcionalidades

### Navegação
- Header sticky com efeito ao scrollar (transparente → sólido + backdrop-blur)
- Active state via IntersectionObserver
- Menu mobile hamburger animado com Sheet lateral
- 7 itens de navegação + CTA "Solicitar Orçamento"

### Hero
- Carrossel 5 slides com autoplay (6s, pausa no hover/focus)
- Crossfade de imagens + fade-up do texto
- Setas de navegação (desktop) + indicadores (pontos)
- Respeita prefers-reduced-motion

### Serviços & Produtos
- Carrossel (serviços) com peek controlado em mobile
- Grid responsivo (produtos) 1/2/3/4 colunas
- Cards com altura igual
- Modais de detalhe (lazy-loaded) com imagem, secções e CTAs
- Hover elegante: zoom imagem + borda + seta

### Portfólio
- 7 filtros por categoria com scroll horizontal + snap
- Grid 13 trabalhos com animação stagger
- Lightbox com navegação por setas + teclado (← → Escape)
- Loop infinito + contador

### Formulário de Orçamento
- 12 campos com validação zod (telefone Angola, email, etc.)
- Estados: idle → loading → success/error
- Upload de ficheiro com validação (tipo + tamanho 5MB)
- Tema escuro (inputs com fundo translúcido + texto claro)
- API route para validação backend

### Contactos
- 4 items de contacto (telefone, WhatsApp, email, localização)
- CTA "Iniciar conversa no WhatsApp"
- Placeholder de mapa (preparado para Google Maps embed)
- Horário de funcionamento
- Redes sociais (Instagram, Facebook, LinkedIn)

### Footer
- 4 colunas: Marca + Navegação + Serviços + Contactos
- Links para catálogos PDF (serviços + produtos)
- Barra legal: copyright + Política de Privacidade + Termos

### WhatsApp
- Botão flutuante (aparece após scroll > 400px)
- Pulse animation + tooltip
- href lê de siteConfig (nunca hardcoded)
- Mensagem pré-preenchida

### Animações
- RevealOnScroll (fade-up, fade-in, fade-left, fade-right, scale-in)
- Stagger subtil em SectionHeader, cards, stats
- Microinterações: active:scale nos cards, hover nos CTAs
- Contador animado on-scroll (AnimatedCounter)
- Respeita prefers-reduced-motion

## SEO

- Metadata rica (title, description, keywords, Open Graph, Twitter Cards)
- JSON-LD Schema.org PrintShop (LocalBusiness)
- BreadcrumbList Schema.org
- sitemap.xml dinâmico (12 URLs)
- robots.txt dinâmico
- HTML semântico (header, main, section, footer, address, nav)
- Hierarquia de headings (1× H1 → H2 → H3)
- alt descritivo em todas as imagens
- lang="pt-AO"
- URL canónica
- Preparado para Google Search Console + Business Profile

## Performance

- Fontes: 4 pesos cada (reduzido de 6/5), preload + display:swap
- Imagens: next/image com AVIF/WebP, priority no Hero (LCP), lazy nas outras
- Dynamic imports: DetailModal + Lightbox (lazy-loaded)
- Tree-shaking: optimizePackageImports (lucide-react, framer-motion, radix)
- Compressão gzip/brotli
- Cache headers (assets estáticos: 1 ano immutable)
- Sem overflow horizontal (CLS = 0)

## Segurança

- 5 headers de segurança: CSP, X-Content-Type-Options, HSTS, Referrer-Policy, Permissions-Policy
- API route com validação backend (zod)
- Sem secrets no código cliente
- Todos os target="_blank" com rel="noopener noreferrer"
- React escapa automaticamente conteúdo (XSS protection)

## Acessibilidade

- lang="pt-AO"
- Hierarquia de headings correcta
- aria-label em secções, botões, links
- role="tablist" + aria-selected nos filtros/carrossel
- focus-visible com ring em todos os interactivos
- alt descritivo em imagens
- prefers-reduced-motion respeitado
- Áreas de toque mínimas 44px (WCAG)
- Navegação por teclado completa

## Responsividade

Testado em: 320, 375, 390, 414, 768, 1024, 1440, 1920px

- Mobile-first
- Carrossel com peek controlado em mobile
- Filtros com scroll horizontal + snap
- Botões full-width em mobile
- Áreas de toque 44px mínimo
- Sem overflow horizontal em nenhum breakpoint

## PDFs de Catálogo

- `public/servicos-raquia-grafica.pdf` (159KB) — 7 serviços
- `public/produtos-raquia-grafica.pdf` (164KB) — 8 produtos
- Acessíveis via links "Ver todos os serviços/produtos" (abrem nova aba)

---

## Checklist para Produção

### Configuração
- [ ] Substituir `WHATSAPP_NUMBER` em `src/config/site.ts` pelo número real
- [ ] Substituir `phone`, `email` em `src/config/site.ts` pelos contactos reais
- [ ] Substituir `address` (rua, zona) em `src/config/site.ts` pelo endereço real
- [ ] Substituir `siteUrl` em `src/config/seo.ts` pelo domínio real
- [ ] Substituir `verification.google` em `src/config/seo.ts` pelo código do Google Search Console
- [ ] Actualizar `coordinates` (lat/lng) em `src/config/site.ts` com as coordenadas reais
- [ ] Substituir `mapsUrl` em `src/config/site.ts` pelo link real do Google Maps
- [ ] Actualizar redes sociais em `src/config/site.ts` com os URLs reais

### Imagens
- [ ] Substituir imagem do Hero por fotografia real dos produtos/serviços
- [ ] Substituir imagens dos serviços por fotografias reais
- [ ] Substituir imagens dos produtos por fotografias reais
- [ ] Substituir imagem institucional (About) por fotografia real do atelier
- [ ] Substituir imagens do portfólio por trabalhos reais
- [ ] Regenerar PDFs de catálogo com conteúdo actualizado

### SEO
- [ ] Verificar sitemap.xml em https://search.google.com/search-console
- [ ] Submeter sitemap ao Google Search Console
- [ ] Verificar Schema.org em https://search.google.com/test/rich-results
- [ ] Configurar Google Business Profile
- [ ] Testar Open Graph em https://developers.facebook.com/tools/debug/
- [ ] Testar Twitter Cards em https://cards-dev.twitter.com/validator

### Integração Backend
- [ ] Ligar API `/api/quote` a email (Resend/Nodemailer) ou base de dados (Prisma)
- [ ] Implementar rate limiting real (Redis/Upstash)
- [ ] Configurar storage para uploads de ficheiros (S3/Cloudinary)
- [ ] Adicionar scanning de vírus nos uploads

### Deploy
- [ ] Configurar variáveis de ambiente em produção
- [ ] Configurar HTTPS (certificado SSL)
- [ ] Configurar CDN para assets estáticos
- [ ] Testar Core Web Vitals (PageSpeed Insights)
- [ ] Testar acessibilidade (Lighthouse/Axe)
- [ ] Configurar monitorização (Sentry/analytics)
- [ ] Configurar backups da base de dados

### Conteúdo
- [ ] Revisão de todos os textos (português de Angola)
- [ ] Verificar consistência da marca (RAQUIA GRÁFICA)
- [ ] Adicionar páginas legais reais (Política de Privacidade, Termos)
- [ ] Verificar links internos e externos

### Performance
- [ ] Otimizar imagens (convertê-las para AVIF)
- [ ] Testar Lighthouse (meta: 90+ em todas as métricas)
- [ ] Verificar LCP < 2.5s, CLS < 0.1, INP < 200ms
"# raquiagrafica" 
