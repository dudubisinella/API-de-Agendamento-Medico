// README.md

# 🩺 API de Agendamento Médico

API REST desenvolvida com **Node.js**, **TypeScript**, **Express** e **Serverless Framework**, simulando um sistema de agendamento médico com dois endpoints principais.

---

## 📌 Funcionalidades

- `GET /agendas`: Lista médicos com suas agendas e horários disponíveis.
- `POST /agendamento`: Permite que pacientes agendem uma consulta com um médico.

As respostas são mockadas, sem banco de dados real.

---

## 🚀 Tecnologias

- Node.js 18+
- TypeScript
- Express
- Serverless Framework
- AWS Lambda (via `serverless-offline`)
- Jest + Supertest (para testes)

---

## 📁 Estrutura do Projeto

```
src/
├── controllers/
├── services/
├── routes/
├── utils/
├── handler.ts          # usado para deploy AWS Lambda
tests/
├── integration/
```

---

## ✅ Pré-requisitos

- Node.js 18+
- NPM ou Yarn
- Serverless Framework:
  ```bash
  npm install -g serverless
  ```

---

## 🔧 Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
npm install
```

---

## 👨‍💻 Rodando a aplicação

### 1. 🔄 Modo Serverless (simula AWS Lambda localmente)

```bash
npx serverless offline
```

A API estará disponível em: `http://localhost:3000`

### 2. 🧪 Rodando os testes

```bash
npm run test
```

---

## 📨 Exemplos de Requisição

### `GET /agendas`

```bash
curl http://localhost:3333/agendas
```

### `POST /agendamento`

```bash
curl -X POST http://localhost:3333/agendamento \
  -H "Content-Type: application/json" \
  -d '{
    "agendamento": {
      "medico": "Dr. João Silva",
      "paciente": "Carlos Almeida",
      "data_horario": "2024-10-05 09:00"
    }
  }'
```

---

## 📦 Deploy para AWS (opcional)

> **Requer configuração AWS CLI e permissões**

```bash
serverless deploy
```

---

## 📄 Licença

MIT License
