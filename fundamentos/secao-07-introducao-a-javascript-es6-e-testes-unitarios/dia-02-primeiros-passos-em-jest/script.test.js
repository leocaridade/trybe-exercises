const { myRemove, myFizzBuzz, encode, decode } = require('./script');

describe('testa a função myRemove', () => {
    test('Recebe os parametros ([1, 2, 3, 4], 3) e espera retornar o array [1, 2, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    });
    
    test('Recebe os parametros ([1, 2, 3, 4], 3) e não espera retornar o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    });
    
    test('Recebe os parametros ([1, 2, 3, 4], 5) e espera retornar o array [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

describe('testa a função myFizzBuzz', () => {
    it('Espera que 15 retorne fizzbuzz', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
    });

    it('Espera que ao receber o parametro 9, a funcao retorne fizz', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
    });

    it('Espera que ao receber o parametro 20, a funcao retorne buzz', () => {
        expect(myFizzBuzz(20)).toBe('buzz');
    });

    it('Espera que ao receber o parametro 7, a funcao retorne 7', () => {
        expect(myFizzBuzz(7)).toBe(7);
    });

    it('Espera que ao receber o parametro "num", a funcao retorne false', () => {
        expect(myFizzBuzz('num')).toBe(false);
    });
});

describe('testa a função encode', () => {

});

describe('testa a função decode', () => {

});