# Soma dos Múltiplos de 3 ou 5 | Sum of Multiples of 3 or 5

[Português](#português) | [English](#english)

## Português

Este algoritmo calcula a soma de todos os números naturais menores que n que são múltiplos de 3 ou 5. É um problema clássico de programação que combina conceitos de aritmética e lógica de programação.

### Como funciona

1. Para cada número de 1 até n-1:
   - Verifica se o número é múltiplo de 3 OU múltiplo de 5
   - Se for, adiciona à soma total
2. Retorna a soma acumulada

### Exemplos

Para n = 10:
- Múltiplos de 3: 3, 6, 9
- Múltiplos de 5: 5
- Soma total: 3 + 5 + 6 + 9 = 23

Para n = 6:
- Múltiplos de 3: 3
- Múltiplos de 5: 5
- Soma total: 3 + 5 = 8

### Complexidade
- Tempo: O(n)
- Espaço: O(1)

### Casos de Uso
- Cálculos matemáticos
- Problemas de otimização
- Análise de sequências numéricas
- Desafios de programação

### Observações
- O algoritmo considera números menores que n (não inclusivo)
- Números que são múltiplos tanto de 3 quanto de 5 são contados apenas uma vez
- O resultado é sempre um número inteiro positivo

## English

This algorithm calculates the sum of all natural numbers less than n that are multiples of 3 or 5. It's a classic programming problem that combines arithmetic concepts and programming logic.

### How it Works

1. For each number from 1 to n-1:
   - Checks if the number is a multiple of 3 OR a multiple of 5
   - If it is, adds to the total sum
2. Returns the accumulated sum

### Examples

For n = 10:
- Multiples of 3: 3, 6, 9
- Multiples of 5: 5
- Total sum: 3 + 5 + 6 + 9 = 23

For n = 6:
- Multiples of 3: 3
- Multiples of 5: 5
- Total sum: 3 + 5 = 8

### Complexity
- Time: O(n)
- Space: O(1)

### Use Cases
- Mathematical calculations
- Optimization problems
- Numerical sequence analysis
- Programming challenges

### Notes
- The algorithm considers numbers less than n (not inclusive)
- Numbers that are multiples of both 3 and 5 are counted only once
- The result is always a positive integer

## Como Usar | How to Use

### Executar o código | Run the code
```bash
node SumOfMultiples.js
```

### Executar os testes | Run the tests
```bash
node --test SumOfMultiples.test.js
```

## Requisitos | Requirements
- Node.js (lts) v23.0.0 ou superior | or higher

## Estrutura do Projeto | Project Structure
```
SumOfMultiples/
├── SumOfMultiples.js      # Implementação | Implementation
├── SumOfMultiples.test.js # Testes | Tests
└── SumOfMultiples.md      # Documentação | Documentation
```

## Testes
Os testes unitários cobrem:
- Casos básicos (n = 1, 2)
- Casos médios (n = 4, 6, 10)
- Caso grande (n = 1000) 