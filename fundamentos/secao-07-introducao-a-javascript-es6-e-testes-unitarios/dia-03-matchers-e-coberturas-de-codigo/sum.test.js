const sum = require('./sum');

describe('testa a função sum', () => {
    it('Espera que sum(4,5) retorne 9', () => {
        expect(sum(4, 5)).toBe(9);
    });

    it('Espera que sum(0, 0) retorne 0', () => {
        expect(sum(0, 0)).toBe(0);
    });

    it('Espera um erro quando sum(4, "5")', () => {
        expect(() => sum(4, '5')).toThrow();
    });

    it('Espera que a mensagem de erro seja "parameters must be numbers"', () => {
        expect(() => sum(4, '5')).toThrow('parameters must be numbers');
    });
});