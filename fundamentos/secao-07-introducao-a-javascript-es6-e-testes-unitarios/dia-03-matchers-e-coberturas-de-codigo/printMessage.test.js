const { info, printMessage } = require('./printMessage');
describe('a função printMessage', () => {
    it('Espera que o objeto passado como parâmetro possua a propriedade "personagem"', () => {
        expect(info).toHaveProperty('personagem');
    });

    it('Verifica se a funcao contem mensagem de boas vindas', () => {
        expect(printMessage(info)).toMatch(/Boas vindas/);
    });

    it('Testa o retorno da funcao', () => {
        expect(printMessage(info)).toMatch(/Margarida/);
        expect(printMessage(info)).toMatch(info.personagem);
    });
});