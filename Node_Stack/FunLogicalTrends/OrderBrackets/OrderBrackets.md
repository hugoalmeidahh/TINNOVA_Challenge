# Verificação de Parênteses, Colchetes e Chaves | Brackets Check

[Português](#português) | [English](#english)

## Português

Este algoritmo verifica se uma string contendo diferentes tipos de parênteses, colchetes e chaves está corretamente ordenada e balanceada. Uma string é considerada válida se cada símbolo de abertura tem um símbolo de fechamento correspondente do mesmo tipo e na ordem correta.

### Como funciona

1. Utiliza uma pilha (stack) para rastrear os símbolos de abertura
2. Para cada caractere na string:
   - Se for um símbolo de abertura ('(', '[', '{'), adiciona à pilha
   - Se for um símbolo de fechamento (')', ']', '}'), remove o último símbolo de abertura da pilha
3. A string é válida se:
   - A pilha estiver vazia ao final (todos os símbolos foram fechados)
   - O símbolo de fechamento corresponder ao último símbolo de abertura

### Exemplos

#### Casos válidos:
- "()" -> true
- "[]" -> true
- "{}" -> true
- "[({})]" -> true
- "()[]{}" -> true
- "{([()])}" -> true

#### Casos inválidos:
- "[(})]" -> false
- "([{)]}" -> false
- "[()()([({}{}{)])]" -> false
- "[({})()()][" -> false

### Complexidade
- Tempo: O(n), onde n é o comprimento da string
- Espaço: O(n) no pior caso

### Casos de Uso
- Validação de expressões matemáticas
- Verificação de sintaxe em linguagens de programação
- Análise de estruturas de dados aninhadas
- Validação de documentos XML/HTML

### Observações
- O algoritmo verifica três tipos de símbolos: (), [], {}
- A ordem de fechamento deve corresponder à ordem de abertura
- A string vazia é considerada válida

## English

This algorithm checks if a string containing different types of brackets (parentheses, square brackets, and curly braces) is properly ordered and balanced. A string is considered valid if each opening symbol has a corresponding closing symbol of the same type and in the correct order.

### How it Works

1. Uses a stack to track opening symbols
2. For each character in the string:
   - If it's an opening symbol ('(', '[', '{'), add to stack
   - If it's a closing symbol (')', ']', '}'), remove the last opening symbol from stack
3. The string is valid if:
   - The stack is empty at the end (all symbols were closed)
   - The closing symbol matches the last opening symbol

### Examples

#### Valid Cases:
- "()" -> true
- "[]" -> true
- "{}" -> true
- "[({})]" -> true
- "()[]{}" -> true
- "{([()])}" -> true

#### Invalid Cases:
- "[(})]" -> false
- "([{)]}" -> false
- "[()()([({}{}{)])]" -> false
- "[({})()()][" -> false

### Complexity
- Time: O(n), where n is the string length
- Space: O(n) in worst case

### Use Cases
- Mathematical expression validation
- Programming language syntax checking
- Nested data structure analysis
- XML/HTML document validation

### Notes
- The algorithm checks three types of symbols: (), [], {}
- Closing order must match opening order
- Empty string is considered valid

## Como Usar | How to Use

### Executar o código | Run the code
```bash
node OrderBrackets.js
```

### Executar os testes | Run the tests
```bash
node --test OrderBrackets.test.js
```

## Requisitos | Requirements
- Node.js (lts) v23.0.0 ou superior | or higher

## Estrutura do Projeto | Project Structure
```
OrderBrackets/
├── OrderBrackets.js      # Implementação | Implementation
├── OrderBrackets.test.js # Testes | Tests
└── OrderBrackets.md      # Documentação | Documentation
``` 