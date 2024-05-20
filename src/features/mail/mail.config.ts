import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'microsoft',
  host: 'smtp.office365.com',
  port: 587,
  auth: {
    user: 'social@asor44.fr',
    pass: 'Rochettes44!',
  },
});

export default transporter;
