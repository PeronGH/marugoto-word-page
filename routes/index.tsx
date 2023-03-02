import { Head } from "$fresh/runtime.ts";
import SearchAndResult from "../islands/SearchAndResult.tsx";

export default function Home() {
  return (
    <div class="bg-gray-50 min-h-screen">
      <Head>
        <title>Marugoto Words</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <h1 class="text-4xl font-bold">Marugoto Words</h1>
        <br />
        <SearchAndResult />
      </div>
    </div>
  );
}
