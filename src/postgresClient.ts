import { Client } from 'ts-postgres';
import { config } from './config';

async function getClient(){
    const client = new Client(config.db);
    client.connect();
    return client;
}
export async function markAsRecommended(id: string, marked: boolean): Promise<string | null> {
    const client = await getClient();
    let result: string | null;
    if (marked) {
        result = (
            await client.query('INSERT INTO "collections_references" VALUES ($1,$2,now(),null)', [
                'EDITORIAL',
                id,
            ])
        ).status;
    } else {
        result = (
            await client.query(
                'DELETE FROM "collections_references" WHERE collection_uuid = $1 AND reference_uuid = $2',
                ['EDITORIAL', id],
            )
        ).status;
        await client.query('UPDATE "references" SET last_updated = now() WHERE uuid = $1', [id]);
    }
    return result;
}
export async function setDisplayState(id: string, displayed: boolean): Promise<string | null> {
    const client = await getClient();
    return (await client.query('UPDATE "references" SET enabled = $1, last_updated = now() WHERE uuid = $2', [displayed, id])).status;
}
