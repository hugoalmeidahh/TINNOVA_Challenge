# Arquitetura do Projeto

## Visão Geral

Este documento descreve a arquitetura da API de Gerenciamento de Veículos, que foi desenvolvida seguindo os princípios de Clean Architecture e SOLID.

## Estrutura de Camadas

### 1. Camada de Entidade (Entity)
- Localização: `src/app/carManagement/entity/`
- Responsabilidade: Define as interfaces e tipos das entidades do domínio
- Exemplo: `Vehicle.ts` - Define a interface do veículo com suas propriedades
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

### 2. Camada de Repositório (Repository)
- Localização: `src/app/carManagement/repository/`
- Responsabilidade: Implementa a persistência dos dados
- Exemplo: `VehicleRepository.ts` - Implementa as operações CRUD com o banco de dados
  - findAll(): Lista todos os veículos
  - findById(): Busca um veículo por ID
  - create(): Cria um novo veículo
  - update(): Atualiza um veículo existente
  - delete(): Remove um veículo

### 3. Camada de Serviço (Service)
- Localização: `src/app/carManagement/service/`
- Responsabilidade: Implementa a lógica de negócios
- Exemplo: `VehicleService.ts` - Implementa as regras de negócio e validações
  - Validação de ano (entre 1900 e ano atual)
  - Validação de campos obrigatórios
  - Verificação de existência do veículo
  - Tratamento de erros

### 4. Camada de Handler (Controller)
- Localização: `src/app/carManagement/handler/`
- Responsabilidade: Controla as requisições HTTP e respostas
- Exemplo: `VehicleHandler.ts` - Gerencia as requisições e respostas HTTP
  - GET /api/vehicles
  - GET /api/vehicles/:id
  - POST /api/vehicles
  - PUT /api/vehicles/:id
  - DELETE /api/vehicles/:id

### 5. Camada de Rotas (Route)
- Localização: `src/app/carManagement/route/`
- Responsabilidade: Define as rotas da API
- Exemplo: `index.ts` - Define os endpoints e documentação Swagger
  - Documentação completa da API
  - Definição de schemas
  - Mapeamento de rotas para handlers

## Fluxo de Dados

1. Cliente faz uma requisição HTTP
2. A rota recebe a requisição e direciona para o handler apropriado
3. O handler processa a requisição e delega para o serviço
4. O serviço implementa a lógica de negócios e utiliza o repositório
5. O repositório interage com o banco de dados
6. A resposta segue o caminho inverso até o cliente

## Tecnologias Utilizadas

### Backend
- Node.js com TypeScript
- Express para o servidor web
- Prisma como ORM
- PostgreSQL como banco de dados
- Swagger UI para documentação
- CORS para segurança

### Ferramentas de Desenvolvimento
- TypeScript para tipagem estática
- ESLint para linting
- Prettier para formatação de código
- Jest para testes

## Padrões de Projeto

### Repository Pattern
- Abstrai a camada de persistência
- Facilita a troca de implementação do banco de dados
- Centraliza a lógica de acesso a dados

### Service Layer Pattern
- Separa a lógica de negócios da camada de dados
- Implementa regras de validação
- Facilita a manutenção e testes

### Controller Pattern
- Gerencia as requisições HTTP
- Implementa tratamento de erros
- Formata as respostas

## Segurança

- CORS configurado para controle de acesso
- Validação de dados de entrada
- Tratamento de erros padronizado
- Sanitização de dados

## Escalabilidade

- Arquitetura modular permite fácil expansão
- Separação clara de responsabilidades
- Facilidade para adicionar novas funcionalidades
- Suporte a testes automatizados

## Manutenibilidade

- Código organizado e documentado
- Padrões de projeto consistentes
- Tipagem estática com TypeScript
- Documentação Swagger atualizada

## Considerações de Performance

- Conexão com banco de dados otimizada
- Validações eficientes
- Respostas HTTP apropriadas
- Tratamento de erros sem overhead 