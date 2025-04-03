# TINNOVA Challenge | Desafio TINNOVA

[English](#english) | [Português](#português)

## English

A comprehensive solution for the TINNOVA Challenge, featuring both backend APIs and frontend applications.

### Project Structure

```
TINNOVA_Challenge/
├── Node_Stack/
│   ├── API_CarManagement/     # Vehicle Management API
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   └── carManagement/
│   │   │   │       ├── entity/      # Database entities
│   │   │   │       ├── repository/  # Data access layer
│   │   │   │       ├── service/     # Business logic
│   │   │   │       ├── handler/     # Request handlers
│   │   │   │       └── route/       # API routes
│   │   │   └── utils/              # Utility functions
│   │   └── prisma/                 # Database schema
│   │
│   ├── CarManagement_UI/          # Vehicle Management Frontend
│   │   ├── src/
│   │   │   ├── components/        # Reusable components
│   │   │   ├── pages/            # Application pages
│   │   │   ├── services/         # API services
│   │   │   ├── types/           # TypeScript definitions
│   │   │   └── utils/           # Utility functions
│   │   └── public/              # Static assets
│   │
│   └── FunLogicalTrends/        # Logical Functions Collection
│       ├── BubbleSort/          # Bubble Sort implementation
│       ├── Factorial/           # Factorial calculation
│       ├── Fibonacci/           # Fibonacci sequence
│       ├── OrderBrackets/       # Bracket validation
│       ├── SumOfMultiples/      # Sum of multiples
│       └── TotalVotesRelationVoters/  # Vote calculation
```

### Technologies Used

#### Backend (API_CarManagement)
- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Swagger

#### Frontend (CarManagement_UI)
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- React Router DOM

#### Logical Functions (FunLogicalTrends)
- Node.js
- TypeScript
- Jest (Testing)

### Developer Notes

#### API Development
- Follow RESTful principles
- Implement proper error handling
- Use TypeScript for type safety
- Document all endpoints with Swagger
- Follow the repository pattern

#### Frontend Development
- Use functional components with hooks
- Implement proper state management
- Follow responsive design principles
- Use TypeScript for type safety
- Implement proper error handling

#### Testing
- Write unit tests for all functions
- Test edge cases
- Maintain good test coverage
- Use Jest for testing

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/TINNOVA_Challenge.git
```

2. Install dependencies for each project:
```bash
# API
cd Node_Stack/API_CarManagement
npm install

# Frontend
cd ../CarManagement_UI
npm install

# Logical Functions
cd ../FunLogicalTrends
npm install
```

3. Set up the database:
```bash
cd Node_Stack/API_CarManagement
npx prisma migrate dev
```

4. Start the development servers:
```bash
# API
cd Node_Stack/API_CarManagement
npm run dev

# Frontend
cd Node_Stack/CarManagement_UI
npm run dev
```

### Contributing

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Português

Uma solução abrangente para o Desafio TINNOVA, incluindo APIs backend e aplicações frontend.

### Estrutura do Projeto

```
TINNOVA_Challenge/
├── Node_Stack/
│   ├── API_CarManagement/     # API de Gerenciamento de Veículos
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   └── carManagement/
│   │   │   │       ├── entity/      # Entidades do banco de dados
│   │   │   │       ├── repository/  # Camada de acesso a dados
│   │   │   │       ├── service/     # Lógica de negócios
│   │   │   │       ├── handler/     # Manipuladores de requisições
│   │   │   │       └── route/       # Rotas da API
│   │   │   └── utils/              # Funções utilitárias
│   │   └── prisma/                 # Schema do banco de dados
│   │
│   ├── CarManagement_UI/          # Frontend de Gerenciamento de Veículos
│   │   ├── src/
│   │   │   ├── components/        # Componentes reutilizáveis
│   │   │   ├── pages/            # Páginas da aplicação
│   │   │   ├── services/         # Serviços da API
│   │   │   ├── types/           # Definições TypeScript
│   │   │   └── utils/           # Funções utilitárias
│   │   └── public/              # Arquivos estáticos
│   │
│   └── FunLogicalTrends/        # Coleção de Funções Lógicas
│       ├── BubbleSort/          # Implementação do Bubble Sort
│       ├── Factorial/           # Cálculo de Fatorial
│       ├── Fibonacci/           # Sequência de Fibonacci
│       ├── OrderBrackets/       # Validação de parênteses
│       ├── SumOfMultiples/      # Soma de múltiplos
│       └── TotalVotesRelationVoters/  # Cálculo de votos
```

### Tecnologias Utilizadas

#### Backend (API_CarManagement)
- Node.js
- TypeScript
- Express
- Prisma
- PostgreSQL
- Swagger

#### Frontend (CarManagement_UI)
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- React Router DOM

#### Funções Lógicas (FunLogicalTrends)
- Node.js
- TypeScript
- Jest (Testes)

### Notas do Desenvolvedor

#### Desenvolvimento da API
- Seguir princípios RESTful
- Implementar tratamento adequado de erros
- Usar TypeScript para segurança de tipos
- Documentar todos os endpoints com Swagger
- Seguir o padrão repository

#### Desenvolvimento Frontend
- Usar componentes funcionais com hooks
- Implementar gerenciamento adequado de estado
- Seguir princípios de design responsivo
- Usar TypeScript para segurança de tipos
- Implementar tratamento adequado de erros

#### Testes
- Escrever testes unitários para todas as funções
- Testar casos de borda
- Manter boa cobertura de testes
- Usar Jest para testes

### Como Começar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/TINNOVA_Challenge.git
```

2. Instale as dependências para cada projeto:
```bash
# API
cd Node_Stack/API_CarManagement
npm install

# Frontend
cd ../CarManagement_UI
npm install

# Funções Lógicas
cd ../FunLogicalTrends
npm install
```

3. Configure o banco de dados:
```bash
cd Node_Stack/API_CarManagement
npx prisma migrate dev
```

4. Inicie os servidores de desenvolvimento:
```bash
# API
cd Node_Stack/API_CarManagement
npm run dev

# Frontend
cd Node_Stack/CarManagement_UI
npm run dev
```

### Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

### Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
