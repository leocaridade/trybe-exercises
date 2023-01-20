const createItem = require('./createItem');
describe('a função createItem', () => {
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 5, 20)).toEqual({ name: 'banana', quantity: 20, unit: 'kg', price: 5 });
  });

  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 3).quantity).toBe(0);
  });

  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(true, 'kg', 5, 18)).toThrow();
  });

  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('morango', 'g', -5)).toThrow();
  });

  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('abacaxi', 'g', 0)).toThrow();
  });
});