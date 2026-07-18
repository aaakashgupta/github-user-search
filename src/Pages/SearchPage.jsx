import React, { useState } from "react";
import { DiGithubAlt } from "react-icons/di";
import { Button, TextInput } from "flowbite-react";
import { useNavigate } from "react-router";
function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    console.log("Handling serach");
    console.log(searchValue);

    if (searchValue.trim() === "") {
      alert("Please enter a username");
      return;
    }

    navigate(`/result/${searchValue}`);
    
  }

  function onChangeFunction(value) {
    setSearchValue(value);
  }
  return (
    <div className=" flex  flex-col items-center justify-center h-125 gap-2">
      <DiGithubAlt size={80} className="text-blue-500 text-4xl" />
      <h1 className="text-3xl font-bold">Github User Hub</h1>
      <h1 className="text-gray-500">Search with Github Username...</h1>
      <div>
        <TextInput
          value={searchValue}
          onChange={(e) => onChangeFunction(e.target.value)}
          className="dark:bg-white bg-white"
          placeholder="Enter your username"
        />
      </div>
      <Button onClick={handleSearch} color={"green"}>
        Search
      </Button>
    </div>
  );
}

export default SearchPage;
