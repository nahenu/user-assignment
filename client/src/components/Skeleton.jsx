const Skeleton = ({ filteredUsers }) => {
  return (
    <>
      {filteredUsers.length === 0 && (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-300 rounded w-48 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-32 mb-4"></div>
          <div className="h-4 bg-gray-300 rounded w-20 mb-4"></div>
        </div>
      )}
    </>
  );
};

export default Skeleton;
