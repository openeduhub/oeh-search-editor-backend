import { Client } from 'pg';
import { config } from './config';

async function getClient() {
    const client = new Client(config.db);
    await client.connect();
    return client;
}

export async function markAsRecommended(id: string, marked: boolean): Promise<void> {
    const client = await getClient();
    try {
        if (marked) {
            await client.query('INSERT INTO "collections_references" VALUES ($1,$2,now(),null)', [
                'EDITORIAL',
                id,
            ]);
        } else {
            await client.query(
                'DELETE FROM "collections_references" WHERE collection_uuid = $1 AND reference_uuid = $2',
                ['EDITORIAL', id],
            );
            await client.query('UPDATE "references" SET last_updated = now() WHERE uuid = $1', [
                id,
            ]);
        }
    } finally {
        client.end();
    }
}

export async function setDisplayState(id: string, displayed: boolean): Promise<void> {
    const client = await getClient();
    try {
        await client.query(
            'UPDATE "references" SET enabled = $1, last_updated = now() WHERE uuid = $2',
            [displayed, id],
        );
    } finally {
        client.end();
    }
}
