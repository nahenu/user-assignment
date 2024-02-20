const History = ({ searchHistory }) => {
  return (
    <>
      {searchHistory.length > 0 && (
        <div className="w-full h-[23vh] overflow-y-scroll">
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-lg font-medium mb-2">Search History</h2>
            <ul className="list-inside space-y-1">
              {searchHistory.map((term, index) => (
                <li key={index} className="text-sm text-gray-600">
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default History;
