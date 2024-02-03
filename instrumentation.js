import { sql } from '@vercel/postgres';

// This function is called when the server starts
export function register() {
  initDb();
}

const initDb = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS whitelist
        ( email VARCHAR(255) );
      `;
  } catch (e) {
    console.log('Error Creating whitelist Table', e);
  }
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS gallery
        ( id SERIAL PRIMARY KEY, src VARCHAR(255), width INT, height INT );
      `;
  } catch (e) {
    console.log('Error Creating Gallery Table', e);
  }
  console.log('Tables Created Successfully!');
}
