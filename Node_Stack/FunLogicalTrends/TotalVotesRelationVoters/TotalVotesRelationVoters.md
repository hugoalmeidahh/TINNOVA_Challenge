# Cálculo de Relação de Votos | Vote Relation Calculation

[Português](#português) | [English](#english)

## Português

Este algoritmo calcula a relação percentual entre diferentes tipos de votos em uma eleição: votos válidos, votos em branco e votos nulos. É uma ferramenta útil para análise de resultados eleitorais.

### Como funciona

1. Recebe como entrada:
   - Total de eleitores
   - Total de votos válidos
   - Total de votos em branco
   - Total de votos nulos

2. Realiza validações:
   - Verifica se o total de eleitores é maior que zero
   - Confirma se a soma dos votos é igual ao total de eleitores

3. Calcula as porcentagens:
   - Porcentagem de votos válidos = (votos válidos / total) * 100
   - Porcentagem de votos em branco = (votos em branco / total) * 100
   - Porcentagem de votos nulos = (votos nulos / total) * 100

### Exemplos

Para uma eleição com 100 eleitores:
- 80 votos válidos (80%)
- 15 votos em branco (15%)
- 5 votos nulos (5%)

### Complexidade
- Tempo: O(1)
- Espaço: O(1)

### Casos de Uso
- Análise de resultados eleitorais
- Relatórios estatísticos
- Pesquisas eleitorais
- Sistemas de votação

### Observações
- As porcentagens são arredondadas para 2 casas decimais
- O resultado é retornado como um objeto com três propriedades
- A função lança erros para dados inválidos
- A soma das porcentagens sempre será 100%

## English

This algorithm calculates the percentage relation between different types of votes in an election: valid votes, blank votes, and null votes. It's a useful tool for analyzing electoral results.

### How it Works

1. Takes as input:
   - Total number of voters
   - Total valid votes
   - Total blank votes
   - Total null votes

2. Performs validations:
   - Checks if total voters is greater than zero
   - Confirms if sum of votes equals total voters

3. Calculates percentages:
   - Valid votes percentage = (valid votes / total) * 100
   - Blank votes percentage = (blank votes / total) * 100
   - Null votes percentage = (null votes / total) * 100

### Examples

For an election with 100 voters:
- 80 valid votes (80%)
- 15 blank votes (15%)
- 5 null votes (5%)

### Complexity
- Time: O(1)
- Space: O(1)

### Use Cases
- Electoral results analysis
- Statistical reports
- Electoral research
- Voting systems

### Notes
- Percentages are rounded to 2 decimal places
- Result is returned as an object with three properties
- Function throws errors for invalid data
- Sum of percentages will always be 100%

## Como Usar | How to Use

### Executar o código | Run the code
```bash
node TotalVotesRelationVoters.js
```

### Executar os testes | Run the tests
```bash
node --test TotalVotesRelationVoters.test.js
```

## Requisitos | Requirements
- Node.js (lts) v23.0.0 ou superior | or higher

## Estrutura do Projeto | Project Structure
```
TotalVotesRelationVoters/
├── TotalVotesRelationVoters.js      # Implementação | Implementation
├── TotalVotesRelationVoters.test.js # Testes | Tests
└── TotalVotesRelationVoters.md      # Documentação | Documentation
``` 