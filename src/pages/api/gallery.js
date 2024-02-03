import { db } from '@vercel/postgres';

// Define the API route handler
export default async function handler(req, res) {
  try {
    // Connect to the database
    const client = await db.connect();

    // Execute the query to get the last 30 rows from the gallery table
    const result = await client.sql`SELECT src, height, width FROM gallery ORDER BY ID DESC LIMIT 30`;

    // Release the database connection
    client.release();

    // Return the query result as the API response
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
