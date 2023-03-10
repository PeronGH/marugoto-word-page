export function WordEntryRow(
  { word, style, extraClass }: {
    word: MarugotoWord;
    style?: string;
    extraClass?: string;
  },
) {
  return (
    <div
      class={`flex items-center justify-between p-4 bg-white rounded-lg shadow-md ${
        extraClass ?? ""
      }`}
      style={style}
    >
      <div class="flex flex-col mr-4 text-gray-900">
        <p class="text-xl font-bold leading-tight">{word.kanji ?? word.kana}</p>
        <p class="text-lg font-medium text-gray-500 leading-tight">
          {word.romaji}
        </p>
      </div>
      <div class="text-xl font-medium text-gray-500 text-right">
        <p>{word.english}</p>
      </div>
    </div>
  );
}

export type MarugotoWord = {
  kana: string;
  kanji?: string;
  romaji: string;
  english: string;
};
