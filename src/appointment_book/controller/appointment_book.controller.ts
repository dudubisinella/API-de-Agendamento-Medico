import { Request, Response } from 'express';
import { AppointmentBookService } from '../service/appointment_book.service';

export class AppointmentBookController {
  private appointmentBookService: AppointmentBookService;

  constructor(appointmentBookService: AppointmentBookService) {
    this.appointmentBookService = appointmentBookService;
  }

  getAppointmentBooks = (req: Request, res: Response): Response => {
    const appointmentBooks = this.appointmentBookService.getAppointmentBooks();
    return res.status(200).json(appointmentBooks);
  };
}
