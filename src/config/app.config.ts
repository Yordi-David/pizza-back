import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    port: process.env.PORT,
    nodenv: process.env.NODE_ENV
}));