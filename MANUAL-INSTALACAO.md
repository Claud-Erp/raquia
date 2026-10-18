# RAQUIA GRÁFICA — Manual de Instalação

Guia completo para instalar e executar o projecto localmente com **npm**.

---

## Pré-requisitos

Antes de começar, certifica-te que tens instalado:

| Requisito | Versão mínima | Como verificar |
|---|---|---|
| **Node.js** | 18.17+ | `node --version` |
| **npm** | 9.0+ | `npm --version` |

### Instalar Node.js (se não tiveres)

**Windows/macOS**: Descarrega em https://nodejs.org (versão LTS)

**Linux (Ubuntu/Debian)**:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**macOS (Homebrew)**:
```bash
brew install node
```

---

## Passo 1 — Descompactar o projecto

```bash
# Descompacta o ficheiro descarregado
unzip raquia-grafica-projeto.zip

# Entra na pasta do projecto
cd raquia-grafica-projeto
```

---

## Passo 2 — Instalar dependências

```bash
npm install
```

Este comando vai ler o `package.json` e instalar todas as dependências necessárias (Next.js, React, Tailwind, shadcn/ui, etc.). Pode demorar 2-5 minutos.

> ⚠️ Se apareceres avisos (warnings) sobre peer dependencies, é normal. Ignora.

---

## Passo 3 — Configurar variáveis de ambiente

O projecto inclui um ficheiro `.env` com configurações básicas. Verifica o conteúdo:

```bash
cat .env
```

Deve conter:
```
DATABASE_URL="file:./db/custom.db"
```

Se necessário, edita o ficheiro:
```bash
nano .env
```

---

## Passo 4 — Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Verás uma mensagem semelhante a:
```
✓ Ready in 1.5s
- Local: http://localhost:3000
```

---

## Passo 5 — Abrir no browser

Abre o teu browser e vai a:

```
http://localhost:3000
```

A página da RAQUIA GRÁFICA deverá carregar. ✅

---

## Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia servidor de desenvolvimento (porta 3000) |
| `npm run build` | Compila o projecto para produção |
| `npm run start` | Inicia servidor de produção (após build) |
| `npm run lint` | Verifica qualidade do código (ESLint) |
| `npm run db:push` | Sincroniza schema Prisma com a base de dados |
| `npm run db:generate` | Gera cliente Prisma |

---

## Resolução de problemas

### Erro: "EADDRINUSE: address already in use :::3000"

A porta 3000 já está a ser usada. Solução:

```bash
# Encontra o processo na porta 3000
lsof -i :3000

# Mata o processo (substitui PID pelo número encontrado)
kill -9 PID

# Ou usa outra porta
npx next dev -p 3001
```

### Erro: "Cannot find module"

As dependências não foram instaladas correctamente:

```bash
# Remove node_modules e package-lock
rm -rf node_modules package-lock.json

# Reinstala
npm install
```

### Erro: imagens não carregam

As imagens estão na pasta `public/`. Verifica se a pasta existe:

```bash
ls public/
```

Deve conter pastas: `hero/`, `services/`, `products/`, `portfolio/`, `about/`

### Erro: fontes não carregam (Google Fonts)

O projecto usa `next/font/google` que descarrega fontes automaticamente. Certifica-te que tens ligação à internet ao iniciar o servidor pela primeira vez.

### Build de produção falha

```bash
# Limpa cache do Next.js
rm -rf .next

# Reinstala dependências
rm -rf node_modules
npm install

# Tenta novamente
npm run build
```

---

## Build de produção

Para criar uma versão optimizada para produção:

```bash
# 1. Compila o projecto
npm run build

# 2. Inicia servidor de produção
npm run start
```

O servidor de produção estará disponível em `http://localhost:3000`.

---

## Estrutura do projecto após instalação

```
raquia-grafica-projeto/
├── src/                    # Código fonte
│   ├── app/               # Páginas e APIs
│   ├── components/         # Componentes React
│   ├── config/            # Configurações editáveis
│   ├── hooks/             # Hooks personalizados
│   └── lib/               # Utilitários
├── public/                 # Imagens, PDFs, assets
├── prisma/                # Schema base de dados
├── node_modules/          # Dependências (gerado)
├── .next/                 # Build (gerado)
├── package.json           # Dependências e scripts
├── next.config.ts         # Configuração Next.js
├── tsconfig.json          # Configuração TypeScript
└── .env                   # Variáveis de ambiente
```

---

## Configurações a personalizar antes de produção

Antes de colocar o site em produção, edita estes ficheiros:

### 1. Contactos reais (`src/config/site.ts`)
```typescript
whatsapp: "244900000000",        // ← Substituir pelo número real
phone: "+244 900 000 000",      // ← Telefone real
email: "geral@raquiagrafica.ao", // ← Email real
```

### 2. Domínio real (`src/config/seo.ts`)
```typescript
export const siteUrl = "https://raquiagrafica.ao"; // ← Domínio real
```

### 3. Google Search Console (`src/config/seo.ts`)
```typescript
verification: {
  google: "GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE", // ← Código real
},
```

### 4. Endereço real (`src/config/site.ts`)
```typescript
address: {
  street: "Rua Comercial, Edifício Raquia",  // ← Endereço real
  zone: "Maianga",
  // ...
  mapsUrl: "https://maps.google.com/?q=...", // ← Link Google Maps real
},
```

---

## Suporte

Se encontrares algum problema durante a instalação:

1. Verifica a secção **Resolução de problemas** acima
2. Confirma que tens Node.js 18+ e npm 9+ instalados
3. Tenta limpar cache: `rm -rf node_modules .next && npm install`
4. Verifica o ficheiro `worklog.md` para histórico completo do projecto

---

## Requisitos do sistema

| Recurso | Mínimo | Recomendado |
|---|---|---|
| **RAM** | 2GB | 4GB+ |
| **Disco** | 500MB | 1GB |
| **Node.js** | 18.17 | 20 LTS |
| **npm** | 9.0 | 10+ |
| **Browser** | Chrome 90+ / Firefox 88+ / Safari 14+ | Última versão |
