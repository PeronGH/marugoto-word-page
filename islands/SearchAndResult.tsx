import { useState } from "preact/hooks";
import { WordEntryRow } from "../components/WordEntry.tsx";
import { SearchBar } from "../components/SearchBar.tsx";
import words from "../static/words.json" assert { type: "json" };

export default function SearchAndResult() {
  const { data } = words;
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar
        onInput={(s) => {
          setSearch(s);
        }}
      />
      <br />
      {data.map((w) => (
        <>
          <WordEntryRow
            word={w}
            show={w.romaji.toLowerCase().includes(search.toLowerCase()) ||
              w.english.toLowerCase().includes(search.toLowerCase()) ||
              w.kana.includes(search) || !!w.kanji?.includes(search)}
            extraClass="mb-4"
          />
        </>
      ))}
    </>
  );
}
