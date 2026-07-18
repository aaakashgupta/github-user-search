import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getUserDetail } from "../services/GithubService";
import { Button } from "flowbite-react";
function ResultPage() {
  const [userData, setUserData] = useState(undefined);
  const { username } = useParams();

  async function fetchUser() {
    const udata = await getUserDetail(username);
    console.log(udata);
    setUserData(udata);
  }

  //useEffect--> kisi bhi logic ko call kar sakta hai.
  // 3 time pe
  // 1. jab apka component render time
  //2. jab apka componet destroy time
  // 3. jab dependency change tab bhi apka logic call kar sakta

  useEffect(() => {
    //logic
    fetchUser();

    return () => {
      //this destroy logic
    };
  }, [username]);

  if (!userData) {
    return <h1 className="text-center py-4 text-2xl">User is loading..</h1>;
  }

  //server/network
  //network calls to fetch the data of the user with username
  return (
    <div className="min-h-screen gap-2 flex flex-col justify-center items-center">
      <img className="h-24 w-24" src={userData.avatar_url} alt="" />
      <h1 className="text-xl font-bold">
        {userData.name ? userData.name : "User name is not set"}
      </h1>
      <div className="flex justify-around gap-3">
        <div>
          <p>Followers : {userData.followers}</p>
        </div>
        <div>
          {" "}
          <p>Followers : {userData.follwing}</p>
        </div>
        <div>
          <p>Followers : {userData.public_repos}</p>
        </div>
      </div>
      <Button>Go to Offical Repository</Button>
    </div>
  );
}

export default ResultPage;
