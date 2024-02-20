const ClearHistory = ({ setSearchHistory }) => {
  const clickHistory = () => {
    localStorage.removeItem("users");
    setSearchHistory([]);
  };
  return (
    <button
      className="px-4 ml-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-400"
      onClick={clickHistory}
    >
      Clear History
    </button>
  );
};

export default ClearHistory;
