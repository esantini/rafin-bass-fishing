import { useEffect, useState } from 'react';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login() {
  const { data: session } = useSession();
  const [calledPush, setCalledPush] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session && !calledPush) {
      router.push("/admin");
      setCalledPush(true);
    }
  }, [session, router]);

  return (
    <button onClick={() => signIn('google')}>Sign in with Google</button>
  );
}
