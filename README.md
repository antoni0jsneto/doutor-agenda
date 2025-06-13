# Dr Agenda

**Dr Agenda** é um sistema moderno e completo para gestão de clínicas, consultórios e profissionais da saúde. Com ele, você pode gerenciar agendamentos online, pacientes, médicos, relatórios e muito mais, tudo de forma simples, rápida e segura.

## 🌐 Demonstração

Acesse a demo online:  
👉 [https://doutor-agenda-green.vercel.app/](https://doutor-agenda-green.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15 (App Router)**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** (componentes de UI)
- **React Hook Form** (formulários)
- **Zod** (validação)
- **BetterAuth** (autenticação)
- **PostgreSQL** (banco de dados)
- **Drizzle ORM** (acesso ao banco)
- **dayjs** (manipulação de datas)
- **react-number-format** (máscaras de input)
- **Radix UI** (acessibilidade e componentes base)
- **Stripe** (pagamentos)
- **Google Cloud** (login OAuth)

---

## 📋 Pré-requisitos

- Node.js **18+**
- Yarn, npm ou pnpm
- Banco de dados PostgreSQL
- Conta no [Google Cloud Console](https://console.cloud.google.com/) (para OAuth)
- Conta no [Stripe](https://dashboard.stripe.com/) (para pagamentos)

---

## 🛠️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/antoni0jsneto/doutor-agenda.git
cd doutor-agenda
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn
# ou
pnpm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto com o seguinte conteúdo:

```env
# Banco de dados
DATABASE_URL=postgresql://usuario:senha@host:porta/nome_do_banco

# Google OAuth
GOOGLE_CLIENT_ID=suaclientid.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=sua_client_secret
GOOGLE_REDIRECT_URI=http://localhost:3000/api/auth/callback/google

# Stripe
STRIPE_SECRET_KEY=sua_stripe_secret_key
STRIPE_WEBHOOK_SECRET=sua_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_stripe_publishable_key

# Outras variáveis conforme necessário
```

#### Como obter as variáveis do Google Cloud

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/).
2. Crie um novo projeto ou selecione um existente.
3. Vá em **APIs & Services > Credentials**.
4. Clique em **Create Credentials > OAuth client ID**.
5. Escolha **Web application** e adicione o URI de redirecionamento (ex: `http://localhost:3000/api/auth/callback/google`).
6. Copie o **Client ID** e **Client Secret** para o `.env.local`.

#### Como obter as variáveis do Stripe

1. Acesse o [Stripe Dashboard](https://dashboard.stripe.com/).
2. Vá em **Developers > API keys** para pegar a **Secret Key** e **Publishable Key**.
3. Para o webhook, crie um endpoint e copie o **Webhook Secret**.

---

### 4. Rode as migrações do banco

```bash
npx drizzle-kit push
```

### 5. Inicie o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🤝 Contribuindo

Contribuições são muito bem-vindas!  
Sinta-se à vontade para abrir issues, enviar pull requests ou sugerir melhorias.

1. Faça um fork do projeto
2. Crie uma branch para sua feature/fix: `git checkout -b minha-feature`
3. Commit suas alterações: `git commit -m 'feat: minha nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

**Dúvidas? Sugestões?**  
Abra uma issue ou entre em contato!

---

**Repositório:** [https://github.com/antoni0jsneto/doutor-agenda](https://github.com/antoni0jsneto/doutor-agenda)  
**Demo:** [https://doutor-agenda-green.vercel.app/](https://doutor-agenda-green.vercel.app/)
