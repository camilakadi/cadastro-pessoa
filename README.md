# Cadastro de Pessoa

Este é um projeto mono-repo utilizando Lerna, que organiza dois principais projetos: Backend e Frontend.

```bash
/cadastro-pessoa
├── /backend
│   ├── /node_modules
│   ├── /src
│   ├── package.json
│   ├── lerna.json
│   └── ...
├── /frontend
│   ├── /node_modules
│   ├── /src
│   ├── package.json
│   ├── lerna.json
│   └── ...
├── package.json
├── lerna.json
└── README.md
```

## Mono-repo

Comandos Gerais
Iniciar Todos os Projetos:

```bash
npm start
```

Testar Todos os Projetos:

```bash
npm test
```

Build de Todos os Projetos:

```bash
npm run build
```

## Backend

O Backend é uma API simples construída em Node.js.

### Endpoints

- `POST /registration`: Endpoint para cadastrar informações.
- `GET /registration`: Endpoint para obter informações cadastradas.

### Testes Unitários

O Backend possui testes unitários implementados usando Jest.

### Comandos Úteis

Iniciar o Backend:

```bash
npm run start:backend
```

Testar o Backend:

```bash
npm run test:backend
```

## Frontend

O Frontend é uma aplicação Vue.js (Vue 3) para o cadastro de pessoas, com suporte para Pessoa Física e Jurídica.

### Testes Unitários

O Frontend possui testes unitários implementados usando Jest.

### Comandos Úteis

Iniciar o Frontend:

```bash
npm run start:frontend
```

Testar o Frontend:

```bash
npm run test:frontend
```
