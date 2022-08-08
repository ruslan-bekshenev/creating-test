import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsOptions: CorsOptions = {
  allowedHeaders: [
    'origin',
    'x-requested-with',
    'content-type',
    'accept',
    'authorization',
  ],
  credentials: true,
  origin: ['http://localhost:3000', 'https://localhost:3000'],
};
