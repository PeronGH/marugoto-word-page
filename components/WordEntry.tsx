export default function WordEntry({ word }: { word: MarugotoWord }) {
  return (
    <div>
      {word.kana}
      <br />
      {word.english}
      <br />
    </div>
  );
}

export type MarugotoWord = {
  kana: string;
  kanji?: string;
  romaji: string;
  english: string;
  level: string;
};
