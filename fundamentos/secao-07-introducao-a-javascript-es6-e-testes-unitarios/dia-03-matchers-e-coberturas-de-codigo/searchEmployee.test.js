const searchEmployee = require('./searchEmployee');

describe('função searchEmployee', () => {
    it('verifica se a função existe', () => {
        expect(typeof searchEmployee).toEqual('function');
    });
});