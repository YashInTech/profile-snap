import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => setUser(response.data.results[0]))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[500px] bg-white shadow-xl p-5">
        <div className="flex items-center">
          <img
            src={user.picture.large}
            alt="User Profile"
            className="w-40 h-40 border-4 border-gray-300"
          />
          <div className="ml-5">
            <h2 className="text-2xl font-semibold">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600 text-lg capitalize">{user.gender}</p>
            <p className="text-gray-600 text-lg">Phone: {user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
