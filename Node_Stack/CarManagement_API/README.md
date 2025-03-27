# API de Gerenciamento de Veículos

API REST para gerenciamento de veículos desenvolvida com Node.js, TypeScript, Express, Prisma e PostgreSQL.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Swagger UI
- CORS

## Pré-requisitos

- Node.js (versão 14 ou superior)
- PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/api-vehiclemanagement.git
cd api-vehiclemanagement
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
- Copie o arquivo `.env.example` para `.env`
- Ajuste as variáveis conforme necessário

4. Execute as migrações do banco de dados:
```bash
npx prisma migrate dev
```

## Executando a Aplicação

Para desenvolvimento:
```bash
npm run dev
```

Para produção:
```bash
npm run build
npm start
```

## Documentação da API

A documentação da API está disponível através do Swagger UI em:
```
http://localhost:3000/docs
```

## Endpoints

- GET /api/vehicles - Lista todos os veículos
- GET /api/vehicles/:id - Obtém um veículo específico
- POST /api/vehicles - Cria um novo veículo
- PUT /api/vehicles/:id - Atualiza um veículo existente
- DELETE /api/vehicles/:id - Remove um veículo

## Estrutura do Projeto

```
src/
  ├── app/
  │   └── vehicle/
  │       ├── entity/
  │       ├── repository/
  │       ├── service/
  │       ├── handler/
  │       └── route/
  └── utils/
```

## Modelo de Dados

### Vehicle
```typescript
interface Vehicle {
  id?: number;
  vehicle: string;     // Nome do veículo
  brand: string;       // Marca do veículo
  year: number;        // Ano de fabricação
  description: string; // Descrição do veículo
  sold: boolean;       // Status de venda
  createdAt?: Date;    // Data de criação
  updatedAt?: Date;    // Data de atualização
}
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo desenvolvimento
- `npm run build`: Compila o projeto
- `npm start`: Inicia o servidor em modo produção
- `npm test`: Executa os testes
- `npm run prisma:generate`: Gera o cliente Prisma
- `npm run prisma:migrate`: Executa as migrações do banco de dados

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 