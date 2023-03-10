export function SearchBar(
  { onInput }: { onInput: (s: string) => void },
) {
  return (
    <div class="flex items-center justify-center">
      <div class="flex-1">
        <input
          style="-webkit-appearance: none;"
          class="w-full px-4 py-2 text-lg text-gray-700 bg-white rounded-full shadow-md focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search..."
          onInput={(e) => onInput(e.currentTarget.value)}
        />
      </div>
    </div>
  );
}
