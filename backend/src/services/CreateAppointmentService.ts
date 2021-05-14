import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

interface Request {
    provider: string;
    date: Date;
} 
class CreateAppointmentService {
        
    public async execute({provider, date}: Request): Promise<Appointment> {

        const appointmentsRepository = getCustomRepository(AppointmentsRepository);
        
        const appointmentDate = startOfHour(date);

        const findAppointmentInSamedate = await appointmentsRepository.findByDate(appointmentDate);
        
        if (findAppointmentInSamedate){
            throw Error('Este horário já existe agendamento.');
        }

        const appointment = appointmentsRepository.create({
            provider, 
            date: appointmentDate
        });

        await appointmentsRepository.save(appointment);

        return appointment;
    }
}

export default CreateAppointmentService;