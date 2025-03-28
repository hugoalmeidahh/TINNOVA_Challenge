# Car Management UI

Interface de usuário para o sistema de gerenciamento de veículos, desenvolvida com React, TypeScript, Tailwind CSS e Shadcn UI.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Router DOM
- React Query
- React Hook Form
- Zod
- Recharts

## Requisitos

- Node.js 18 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/car-management-ui.git
```

2. Instale as dependências:
```bash
cd car-management-ui
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── pages/         # Páginas da aplicação
  ├── services/      # Serviços de API
  ├── types/         # Definições de tipos TypeScript
  ├── utils/         # Funções utilitárias
  ├── App.tsx        # Componente principal
  ├── main.tsx       # Ponto de entrada
  └── index.css      # Estilos globais
```

## Funcionalidades

- Dashboard com gráficos e estatísticas
- Listagem de veículos
- Criação de veículos
- Edição de veículos
- Exclusão de veículos
- Filtros e busca
- Responsividade

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run preview`: Visualiza a build de produção localmente
- `npm run lint`: Executa o linter

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
