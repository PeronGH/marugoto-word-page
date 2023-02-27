import { Head } from "$fresh/runtime.ts";
import WordEntry from "../components/WordEntry.tsx";
import words from "../static/words.json" assert { type: "json" };

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-4xl font-bold">Marugoto Words</h1>
        {words.data.map((w) => <WordEntry word={w}></WordEntry>)}
      </div>
    </>
  );
}
