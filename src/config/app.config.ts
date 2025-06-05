import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    port: process.env.PORT,
    nodeenv: process.env.NODE_ENV
}));