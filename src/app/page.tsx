import React from "react";
import Intro from "./_components/intro";
import Devider from "./_components/devider";
import About from "./_components/about";

export default function Home() {
//  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <Devider />
        <About />
    </main>
  );
}

