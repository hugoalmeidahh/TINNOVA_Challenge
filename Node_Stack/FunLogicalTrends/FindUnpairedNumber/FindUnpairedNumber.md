# Encontrar Número sem Par | Find Unpaired Number

[Português](#português) | [English](#english)

## Português

Este algoritmo encontra o número que não possui um par em um array de números, onde todos os outros números aparecem exatamente duas vezes.

### Como funciona

1. Utiliza a operação XOR (^) para encontrar o número sem par
2. A operação XOR tem as seguintes propriedades:
   - a ^ a = 0 (um número XOR consigo mesmo é zero)
   - a ^ 0 = a (um número XOR com zero é o próprio número)
   - a ^ b ^ a = b (XOR é associativo e comutativo)

3. Ao aplicar XOR em todos os números:
   - Números com par se cancelam (resultam em 0)
   - O número sem par permanece no resultado final

### Exemplos

```javascript
findUnpairedNumber([9,3,9,3,7,7,9]) // Retorna 9
findUnpairedNumber([1,2,1,2,3])      // Retorna 3
findUnpairedNumber([4,4,5,5,6])      // Retorna 6
```

### Complexidade
- Tempo: O(n), onde n é o tamanho do array
- Espaço: O(1), pois usa apenas uma variável

### Casos de Uso
- Detecção de erros em dados
- Encontrar elementos únicos em conjuntos
- Problemas de correspondência
- Análise de padrões

### Observações
- O algoritmo assume que apenas um número não tem par
- Funciona com números positivos e negativos
- É uma solução eficiente em termos de memória

## English

This algorithm finds the number that doesn't have a pair in an array of numbers, where all other numbers appear exactly twice.

### How it Works

1. Uses the XOR (^) operation to find the unpaired number
2. The XOR operation has the following properties:
   - a ^ a = 0 (a number XOR with itself is zero)
   - a ^ 0 = a (a number XOR with zero is the number itself)
   - a ^ b ^ a = b (XOR is associative and commutative)

3. When applying XOR to all numbers:
   - Paired numbers cancel out (result in 0)
   - The unpaired number remains in the final result

### Examples

```javascript
findUnpairedNumber([9,3,9,3,7,7,9]) // Returns 9
findUnpairedNumber([1,2,1,2,3])      // Returns 3
findUnpairedNumber([4,4,5,5,6])      // Returns 6
```

### Complexity
- Time: O(n), where n is the array size
- Space: O(1), as it uses only one variable

### Use Cases
- Error detection in data
- Finding unique elements in sets
- Matching problems
- Pattern analysis

### Notes
- The algorithm assumes only one number doesn't have a pair
- Works with both positive and negative numbers
- Memory efficient solution

## Como Usar | How to Use

### Executar o código | Run the code
```bash
node FindUnpairedNumber.js
```

### Executar os testes | Run the tests
```bash
node --test FindUnpairedNumber.test.js
```

## Requisitos | Requirements
- Node.js (lts) v23.0.0 ou superior | or higher

## Estrutura do Projeto | Project Structure
```
FindUnpairedNumber/
├── FindUnpairedNumber.js      # Implementação | Implementation
├── FindUnpairedNumber.test.js # Testes | Tests
└── FindUnpairedNumber.md      # Documentação | Documentation
``` 