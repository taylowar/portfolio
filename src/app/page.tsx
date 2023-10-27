import React from "react";
import { api } from "~/trpc/server";
import Intro from "./_components/intro";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
    </main>
  );
}

