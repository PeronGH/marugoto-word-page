import { useState } from "preact/hooks";
import { WordEntryRow } from "../components/WordEntry.tsx";
import SearchBar from "../islands/SearchBar.tsx";
import words from "../static/words.json" assert { type: "json" };

export default function SearchAndResult() {
  const [displayedWords, setDisplayedWords] = useState(words.data);

  return (
    <>
      <SearchBar
        onInput={(s) => {
          setDisplayedWords(displayedWords.filter((w) =>
            w.romaji.includes(s) || w.english.includes(s)
          ));
        }}
      />
      <br />
      {displayedWords.map((w) => (
        <>
          <WordEntryRow word={w} />
          <br />
        </>
      ))}
    </>
  );
}
