// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import transporter from './mail.config'; // Importez votre configuration de transporter

@Injectable()
export class MailService {
  private transporter = transporter; // Utilisez votre configuration de transporter

  async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'votre-email@gmail.com',
      to,
      subject,
      text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail succesfully send :', info.response);
    } catch (error) {
      console.error('Error while sending the E-mail :', error);
    }
  }
}
