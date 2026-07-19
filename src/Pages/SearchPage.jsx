import React, { useState } from "react";
import { DiGithubAlt } from "react-icons/di";
import { FaSearch, FaUserFriends, FaCodeBranch } from "react-icons/fa";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (searchValue.trim() === "") {
      alert("Please enter a GitHub username");
      return;
    }

    navigate(`/result/${searchValue}`);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex flex-col items-center justify-center px-5">

      {/* Hero Section */}
      <div className="text-center max-w-3xl">

        <DiGithubAlt
          size={90}
          className="mx-auto text-blue-500 mb-5"
        />

        <h1 className="text-5xl font-extrabold mb-4">
          GitHub User Search
        </h1>

        <p className="text-gray-300 text-lg mb-10">
          Search any GitHub developer and explore their profile,
          followers, repositories, and much more.
        </p>

        {/* Search Box */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <TextInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Enter GitHub Username..."
            sizing="lg"
            className="w-80 sm:w-96"
          />

          <Button
            size="lg"
            color="blue"
            onClick={handleSearch}
          >
            <FaSearch className="mr-2" />
            Search
          </Button>

        </div>

      </div>

      {/* Feature Cards */}

      <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-6xl">

        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition duration-300">

          <FaSearch
            size={35}
            className="mx-auto text-blue-400 mb-4"
          />

          <h2 className="text-xl font-bold mb-2">
            Fast Search
          </h2>

          <p className="text-gray-400">
            Instantly search any GitHub username.
          </p>

        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition duration-300">

          <FaUserFriends
            size={35}
            className="mx-auto text-green-400 mb-4"
          />

          <h2 className="text-xl font-bold mb-2">
            User Profile
          </h2>

          <p className="text-gray-400">
            View profile, followers and following.
          </p>

        </div>

        <div className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:scale-105 transition duration-300">

          <FaCodeBranch
            size={35}
            className="mx-auto text-yellow-400 mb-4"
          />

          <h2 className="text-xl font-bold mb-2">
            Repository Details
          </h2>

          <p className="text-gray-400">
            Explore public repositories easily.
          </p>

        </div>

      </div>

    </div>
  );
}

export default SearchPage;