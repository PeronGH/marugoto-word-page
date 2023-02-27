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
            show={w.romaji.includes(search) || w.english.includes(search) ||
              w.kana.includes(search) || !!w.kanji?.includes(search)}
            extraClass="mb-4"
          />
        </>
      ))}
    </>
  );
}
