const { info, printMessage } = require('./printMessage');
describe('a função printMessage', () => {
    it('Espera que o objeto passado como parâmetro possua a propriedade "personagem"', () => {
        expect(info).toHaveProperty('personagem');
    });
});