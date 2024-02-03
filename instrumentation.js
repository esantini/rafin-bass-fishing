import { sql } from '@vercel/postgres';

// This function is called when the server starts
export function register() {
  initDb();
}

const initDb = async () => {
  try {
    const res = await sql`
      CREATE TABLE IF NOT EXISTS whitelist
        ( email VARCHAR(255) );
    `;
    console.log('Whitelist Table Created Successfully!');
  } catch (e) {
    console.error('Error Creating whitelist Table', e);
  }

  try {
    const res = await sql`
      CREATE TABLE IF NOT EXISTS gallery
        ( id SERIAL PRIMARY KEY, src VARCHAR(255), width INT, height INT );
    `;
    console.log('Gallery Table Created Successfully!');
  } catch (e) {
    console.error('Error Creating Gallery Table', e);
  }
};

