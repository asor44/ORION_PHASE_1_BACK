// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import transporter from './mail.config'; // Importez votre configuration de transporter

@Injectable()
export class MailService {
  private transporter = transporter; // Utilisez votre configuration de transporter

  async sendEmail(to: string) {
    const mailOptions = {
      from: 'social@asor44.fr',
      to,
      subject: 'Test',
      text: 'Test',
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail succesfully send :', info.response);
    } catch (error) {
      console.error('Error while sending the E-mail :', error);
    }
  }
}
