const calculateVoteRelation = require('./TotalVotesRelationVoters');

describe('TotalVotesRelationVoters', () => {
    test('deve calcular corretamente as porcentagens para 100 eleitores', () => {
        const result = calculateVoteRelation(100, 80, 15, 5);
        expect(result.validVotesPercentage).toBe('80.00');
        expect(result.blankVotesPercentage).toBe('15.00');
        expect(result.nullVotesPercentage).toBe('5.00');
    });

    test('deve calcular corretamente as porcentagens para 1000 eleitores', () => {
        const result = calculateVoteRelation(1000, 800, 150, 50);
        expect(result.validVotesPercentage).toBe('80.00');
        expect(result.blankVotesPercentage).toBe('15.00');
        expect(result.nullVotesPercentage).toBe('5.00');
    });

    test('deve calcular corretamente quando não há votos brancos ou nulos', () => {
        const result = calculateVoteRelation(100, 100, 0, 0);
        expect(result.validVotesPercentage).toBe('100.00');
        expect(result.blankVotesPercentage).toBe('0.00');
        expect(result.nullVotesPercentage).toBe('0.00');
    });

    test('deve lançar erro quando total de eleitores é zero', () => {
        expect(() => calculateVoteRelation(0, 0, 0, 0))
            .toThrow('Total de eleitores deve ser maior que zero');
    });

    test('deve lançar erro quando soma dos votos não igual ao total', () => {
        expect(() => calculateVoteRelation(100, 80, 15, 10))
            .toThrow('A soma dos votos deve ser igual ao total de eleitores');
    });
}); 