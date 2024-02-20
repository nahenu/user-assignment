import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import ClearHistory from "./components/ClearHistory";
import Skeleton from "./components/Skeleton";
import History from "./components/History";
const UserInfo = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchHistory, setSearchHistory] = useState(() => {
    let list = localStorage.getItem("users");
    if (list) {
      return JSON.parse(localStorage.getItem("users"));
    } else {
      return [];
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setUsers(result.data);
      setFilteredUsers(result.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      const filtered = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [searchTerm, users]);

  const handleSearch = (e) => {
    e.preventDefault();
    const updatedSearchHistory = [...searchHistory, searchTerm].filter((e) => {
      return e.trim().length > 0;
    });
    setSearchHistory(updatedSearchHistory);
    localStorage.setItem("users", JSON.stringify(updatedSearchHistory));
    setSearchTerm("");
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-center mb-6">
        <Search
          handleSearch={handleSearch}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <ClearHistory setSearchHistory={setSearchHistory} />
      </div>
      <div className="flex flex-wrap gap-4">
        <History searchHistory={searchHistory} />
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-medium mb-2 text-center">Users</h2>
            <Skeleton filteredUsers={filteredUsers} />

            {filteredUsers.length > 0 && (
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    {["ID", "Name", "Email", "Phone", "city", "Zipcode"].map(
                      (details) => {
                        return (
                          <th key={details} scope="col" className="px-6 py-3">
                            {details}
                          </th>
                        );
                      }
                    )}
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user.id}
                      </td>
                      {[
                        user.name,
                        user.email,
                        user.phone,
                        user.address.city,
                        user.address.zipcode,
                      ].map((userDetail) => {
                        return (
                          <td key={userDetail} className="px-6 py-4">
                            {userDetail}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
