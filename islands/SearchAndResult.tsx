import { useState } from "preact/hooks";
import { MarugotoWord, WordEntryRow } from "../components/WordEntry.tsx";
import { SearchBar } from "../components/SearchBar.tsx";
import words from "../static/words.json" assert { type: "json" };
import Fuse from "fuse.js";

export default function SearchAndResult() {
  const { data } = words;

  const [isSearching, setIsSearching] = useState(false);

  const [searchResults, setSearchResults] = useState<
    Fuse.FuseResult<MarugotoWord>[]
  >([]);

  const fuse = new Fuse(data, {
    findAllMatches: true,
    keys: ["romaji", "english", "kana", "kanji"],
    threshold: 0.15,
  });

  return (
    <>
      <SearchBar
        onInput={(query) => {
          if (query.length < 1) {
            setIsSearching(false);
            setSearchResults([]);
          } else {
            setIsSearching(true);
            setSearchResults(fuse.search(query));
          }
        }}
      />
      <br />
      <div class="flex flex-col">
        {searchResults.length > 0
          ? (searchResults.map((r) => (
            <WordEntryRow word={r.item} extraClass="mb-4" />
          )))
          : (
            <p class="flex text-xl font-bold text-gray-600 place-self-center">
              {isSearching ? "No results found" : "Please search for a word"}
            </p>
          )}
      </div>
    </>
  );
}
