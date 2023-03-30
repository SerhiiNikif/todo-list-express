import dotenv from 'dotenv';
dotenv.config();

const PORT: number = Number(process.env.NODE_DOCKER_PORT) || 4000;
const MONGO_URI: string = process.env.MONGO_URI || '';
const JWT_SECRET: string = process.env.JWT_SECRET || '';

export  {
    JWT_SECRET,
    PORT,
    MONGO_URI
}