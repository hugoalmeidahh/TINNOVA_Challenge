# Sequência de Fibonacci | Fibonacci Sequence

[Português](#português) | [English](#english)

## Português

A sequência de Fibonacci é uma sequência matemática onde cada número é a soma dos dois números anteriores. A sequência começa com 0 e 1, e cada número subsequente é a soma dos dois números anteriores.

### Como funciona

1. Começamos com os números base: 0 e 1
2. Cada número subsequente é calculado somando os dois números anteriores
3. O processo continua indefinidamente

### Exemplos

Para calcular o 5º número da sequência:
- F(0) = 0
- F(1) = 1
- F(2) = F(1) + F(0) = 1 + 0 = 1
- F(3) = F(2) + F(1) = 1 + 1 = 2
- F(4) = F(3) + F(2) = 2 + 1 = 3
- F(5) = F(4) + F(3) = 3 + 2 = 5

### Complexidade
- Tempo: O(n)
- Espaço: O(1)

### Casos de Uso
- Análise de crescimento populacional
- Modelagem de padrões naturais
- Análise de algoritmos
- Matemática financeira

### Observações
- A sequência começa com 0 e 1
- Cada número é a soma dos dois anteriores
- A sequência cresce exponencialmente
- Os números são sempre inteiros positivos

## English

The Fibonacci sequence is a mathematical sequence where each number is the sum of the two preceding numbers. The sequence starts with 0 and 1, and each subsequent number is the sum of the two previous numbers.

### How it Works

1. Start with base numbers: 0 and 1
2. Each subsequent number is calculated by adding the two previous numbers
3. The process continues indefinitely

### Examples

To calculate the 5th number in the sequence:
- F(0) = 0
- F(1) = 1
- F(2) = F(1) + F(0) = 1 + 0 = 1
- F(3) = F(2) + F(1) = 1 + 1 = 2
- F(4) = F(3) + F(2) = 2 + 1 = 3
- F(5) = F(4) + F(3) = 3 + 2 = 5

### Complexity
- Time: O(n)
- Space: O(1)

### Use Cases
- Population growth analysis
- Natural pattern modeling
- Algorithm analysis
- Financial mathematics

### Notes
- The sequence starts with 0 and 1
- Each number is the sum of the two previous ones
- The sequence grows exponentially
- Numbers are always positive integers

## Como Usar | How to Use

### Executar o código | Run the code
```bash
node Fibonacci.js
```

### Executar os testes | Run the tests
```bash
node --test Fibonacci.test.js
```

## Requisitos | Requirements
- Node.js (lts) v23.0.0 ou superior | or higher

## Estrutura do Projeto | Project Structure
```
Fibonacci/
├── Fibonacci.js      # Implementação | Implementation
├── Fibonacci.test.js # Testes | Tests
└── Fibonacci.md      # Documentação | Documentation
```

## Sequência
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

## Testes
Os testes unitários cobrem os casos básicos da sequência, verificando se a função retorna os valores corretos para diferentes posições na sequência. 