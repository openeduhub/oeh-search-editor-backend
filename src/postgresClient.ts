import dotenv from 'dotenv';

dotenv.config();

export const postgresSomething = process.env.POSTGRES_SOMETHING;

export async function markAsRecommended(id: string): Promise<void> {
    // TODO
}