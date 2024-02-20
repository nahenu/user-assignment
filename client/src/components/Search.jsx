const Search = ({ handleSearch, setSearchTerm, searchTerm }) => {
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-96 mr-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-400 "
      >
        Search
      </button>
    </form>
  );
};

export default Search;
