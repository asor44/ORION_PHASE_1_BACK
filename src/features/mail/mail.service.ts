// email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import transporter from './mail.config';

@Injectable()
export class MailService {
  // use the transporter from the mail.config.ts file
  private transporter = transporter;

  async sendEmail(to: string, name: string) {
    const mailOptions = {
      from: 'social@asor44.fr',
      to,
      subject: 'Test',
      template: './templates/confirmation.hbs',
      contexte: {
        name: name,
        url: 'http://localhost:3000/auth/confirm',
      },
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
