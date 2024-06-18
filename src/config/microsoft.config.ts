import { LogLevel } from '@azure/msal-node';

export const microsoftConfig = {
  auth: {
    clientId: '4f28e723-6a1f-49e1-ad9f-6dbb8cf0121f',
    clientSecret: 'cea716d4-764d-4344-8265-d675f7173c45',
    authority: `https://login.microsoftonline.com/5892340e-fedf-463d-a425-3e457d0ce8fb`,
    redirectUri: 'http://localhost:3000/redirect',
  },
  system: {
    loggerOptions: {
      loggerCallback(loglevel, message, containsPii) {
        console.log(message);
      },
      piiLoggingEnabled: false,
      logLevel: LogLevel.Info,
    },
  },
};
