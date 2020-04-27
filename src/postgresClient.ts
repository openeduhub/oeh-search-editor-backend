import dotenv from 'dotenv';
import { Client } from 'ts-postgres';


dotenv.config();

export const postgresSomething = process.env.POSTGRES_SOMETHING;

export async function markAsRecommended(id: string, marked: boolean): Promise<string | null> {
    const client = new Client({host: 'localhost', user: 'collections', password: 'collections', database: 'search'});
    await client.connect();
    let result: string | null;
    if(marked){
        result = (await client.query('INSERT INTO "collections_references" VALUES ($1,$2,now(),null)', ['EDITORIAL', id])).status;
    } else {
        result = (await client.query('DELETE FROM "collections_references" WHERE collection_uuid = $1 AND reference_uuid = $2', ['EDITORIAL', id])).status;
        await client.query('UPDATE "references" SET last_updated = now() WHERE uuid = $1', [id]);
    }
    return result;
}