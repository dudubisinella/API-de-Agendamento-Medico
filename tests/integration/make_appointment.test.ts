import request from 'supertest';
import app from '../../src/handler';

describe('POST /agendamento', () => {
  it('deve agendar uma consulta com sucesso', async () => {
    const payload = {
      agendamento: {
        medico: 'Dr. João Silva',
        paciente: 'Carlos Almeida',
        data_horario: '2024-10-05 09:00'
      }
    };

    const response = await request(app).post('/agendamento').send(payload);
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('mensagem', 'Agendamento realizado com sucesso');
    expect(response.body.agendamento).toMatchObject(payload.agendamento);
  });

  it('deve retornar erro 400 se o payload estiver incompleto', async () => {
    const response = await request(app).post('/agendamento').send({});
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('mensagem', 'Dados de agendamento inválidos');
  });
});
