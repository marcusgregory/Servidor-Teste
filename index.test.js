const request = require('supertest');
const app = require('./server');

describe('Teste de Rotas', () => {
    it('teste da rota "/"', async () => {
        const res = await request(app)
            .get('/');
        expect(res.body).toStrictEqual({ message: "Olá Mundo!" });
    });
    it('teste da rota "/mensagem1"', async () => {
        const res = await request(app)
            .get('/mensagem1');
        expect(res.body).toStrictEqual({ message: "Mensagem 0" });
    });
    it('teste da rota "/mensagem2"', async () => {
        const res = await request(app)
            .get('/mensagem2');
        expect(res.body).toStrictEqual({ message: "Mensagem 2" });
    });
    it('teste da rota "/mensagem3"', async () => {
        const res = await request(app)
            .get('/mensagem3');
        expect(res.body).toStrictEqual({ message: "Mensagem 3" });
    });
    it('teste da rota "/mensagem4"', async () => {
        const res = await request(app)
            .get('/mensagem4');
        expect(res.body).toStrictEqual({ message: "Mensagem 4" });
    });
    it('teste da rota "/mensagem5"', async () => {
        const res = await request(app)
            .get('/mensagem5');
        expect(res.body).toStrictEqual({ message: "Mensagem 5" });
    });
});