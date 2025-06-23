import { Request, Response } from 'express'
import { MakeAppointmentService } from '../service/make_appointment.service';
import { MakeAppointmentCreateDto } from '../dtos/make_appointment-create.dto';

export class MakeAppointmentController {
  private makeAppointmentBookService: MakeAppointmentService;

  constructor(makeAppointmentBookService: MakeAppointmentService) {
    this.makeAppointmentBookService = makeAppointmentBookService;
  }

  makeAppointment = (req: Request, res: Response): Response => {
    const { data_horario, medico, paciente }: MakeAppointmentCreateDto = req.body;

    if (!data_horario || !medico || !paciente) {
      return res.status(400).json({ mensagem: 'Dados de agendamento inválidos' });
    }

    const result = this.makeAppointmentBookService.makeAppointment({
      data_horario,
      medico,
      paciente
    });
    return res.status(201).json(result);
  };
}
