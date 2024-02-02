// This is the entry point for Next.js application.
// You can customize the behavior of your app by modifying this file.

import React from 'react';
import { SessionProvider } from "next-auth/react";
import { sql } from '@vercel/postgres';

const init = async () => {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS users
        ( username VARCHAR(255), email VARCHAR(255) );
      `;
  } catch (e) {
    console.log('Error Creating Users Table', e);
  }
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS gallery
        ( id SERIAL PRIMARY KEY, src VARCHAR(255), width INT, height INT);
      `;
  } catch (e) {
    console.log('Error Creating Gallery Table', e);
  }
}

init();

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
