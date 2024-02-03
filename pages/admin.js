import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();
  const { data: session, status, redirect } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return <div>
    Welcome to the Admin page, {session.user.name}!

    <br />
    <button onClick={() => signOut({ callbackUrl: '/login' })}>Log out</button>
  </div>;
}
