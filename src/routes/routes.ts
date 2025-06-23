import { Request, Response, Router } from 'express';

import { AppointmentBookController } from '../appointment_book/controller/appointment_book.controller';
import { AppointmentBookService } from '../appointment_book/service/appointment_book.service';
import { MakeAppointmentService } from '../make_appointment/service/make_appointment.service';
import { MakeAppointmentController } from '../make_appointment/controller/make_appointment.controller';

const router = Router();
const appointmentBookServicer = new AppointmentBookService();
const appointmentBookController = new AppointmentBookController(appointmentBookServicer);

const makeAppointmentService = new MakeAppointmentService();
const makeAppointmentController = new MakeAppointmentController(makeAppointmentService);

router.get('/agendas', (req: Request, res: Response): any => {
  return appointmentBookController.getAppointmentBooks(req, res);
});
router.post('/agendamento', (req: Request, res: Response): any => {
  return makeAppointmentController.makeAppointment(req, res);
});

export default router;
