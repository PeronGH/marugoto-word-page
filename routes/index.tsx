import { Head } from "$fresh/runtime.ts";
import { WordEntryRow } from "../components/WordEntry.tsx";
import words from "../static/words.json" assert { type: "json" };

export default function Home() {
  return (
    <div class="bg-gray-50">
      <Head>
        <title>Marugoto Words</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-4xl font-bold">Marugoto Words</h1>
        <br />
        {words.data.map((w) => (
          <>
            <WordEntryRow word={w}></WordEntryRow>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}
