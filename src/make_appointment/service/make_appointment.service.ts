import { MakeAppointmentCreateDto } from "../dtos/make_appointment-create.dto";

export class MakeAppointmentService {
  makeAppointment(makeAppointmentCreateDto: MakeAppointmentCreateDto) {
    return {
      mensagem: 'Agendamento realizado com sucesso',
      agendamento: makeAppointmentCreateDto,
    };
  }
}
