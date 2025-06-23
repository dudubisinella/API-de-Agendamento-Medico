import request from 'supertest';
import app from '../../src/handler';


describe('GET /agendas', () => {
  it('deve retornar a lista de médicos com suas agendas', async () => {
    const response = await request(app).get('/agendas');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty('nome');
    expect(response.body[0]).toHaveProperty('agendas');
  });
});
