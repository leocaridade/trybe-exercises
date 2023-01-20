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
    test('testa se encode é uma função', () => {
        expect(typeof(encode)).toBe('function');
    });

    test('Espera que "a, e, i, o, u" retorne "1, 2, 3, 4, 5"', () => {
        expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
    });

    test('Espera que "maluco" retorne "m1l5c4"', () => {
        expect(encode('maluco')).toEqual('m1l5c4');
    });

    test('Espera que "vasco" retorne uma string com o mesmo numero de caracteres', () => {
        expect(encode('vasco').length).toBe(5);
    });
});

describe('testa a função decode', () => {
    test('testa se decode é uma função', () => {
        expect(typeof(decode)).toBe('function');
    });

    test('Espera que "1, 2, 3, 4, 5" retorne "a, e, i, o, u"', () => {
        expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
    });

    test('Espera que "1n1 m1r31" retorne "ana maria"', () => {
        expect(decode('1n1 m1r31')).toEqual('ana maria');
    });

    test('Espera que "vasco" retorne uma string com o mesmo numero de caracteres', () => {
        expect(decode('vasco').length).toEqual(5);
    });
});