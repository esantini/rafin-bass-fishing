// This is the entry point for Next.js application.
// You can customize the behavior of your app by modifying this file.

import React from 'react';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
