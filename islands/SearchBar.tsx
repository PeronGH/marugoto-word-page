export default function SearchBar() {
  return (
    <div class="flex items-center justify-center">
      <div class="flex-1 mr-4">
        <input
          class="w-full px-4 py-2 text-lg text-gray-700 bg-white rounded-full shadow-md focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search..."
        />
      </div>
      <button class="flex-shrink-0 px-4 py-2 text-lg font-medium text-gray-700 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:shadow-outline">
        Search
      </button>
    </div>
  );
}
