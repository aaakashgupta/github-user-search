import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserDetail, getUserRepos } from "../services/GithubService";
import RepoCard from "../components/RepoCard";
import {
  FaUsers,
  FaBook,
  FaMapMarkerAlt,
  FaBuilding,
  FaLink,
} from "react-icons/fa";

function ResultPage() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  async function fetchUser() {
    try {
      const user = await getUserDetail(username);
      const repoData = await getUserRepos(username);

      setUserData(user);
      setRepos(repoData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [username]);

  if (!userData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-900 text-white">
        <h1 className="text-3xl font-bold animate-pulse">Loading Profile...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Profile Card */}

        <div className="bg-slate-800 rounded-3xl shadow-xl p-8">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <img
              src={userData.avatar_url}
              alt={userData.login}
              className="w-48 h-48 rounded-full border-4 border-blue-500 shadow-lg"
            />

            <div className="flex-1">
              <h1 className="text-4xl font-bold">
                {userData.name || "No Name"}
              </h1>

              <p className="text-blue-400 text-xl mt-2">@{userData.login}</p>

              <p className="text-gray-300 mt-5">
                {userData.bio || "No bio available."}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span>{userData.location || "Not Available"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBuilding className="text-blue-400" />
                  <span>{userData.company || "Not Available"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaLink className="text-blue-400" />
                  <span>
                    {userData.blog ? (
                      <a
                        href={userData.blog}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        Website
                      </a>
                    ) : (
                      "Not Available"
                    )}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaUsers className="text-blue-400" />
                  <span>
                    Joined: {new Date(userData.created_at).toDateString()}
                  </span>
                </div>
              </div>

              <a href={userData.html_url} target="_blank" rel="noreferrer">
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition">
                  Visit GitHub Profile
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          <div className="bg-slate-800 rounded-2xl p-6 text-center">
            <FaUsers className="mx-auto text-blue-400" size={35} />

            <h2 className="text-3xl font-bold mt-3">{userData.followers}</h2>

            <p className="text-gray-400">Followers</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center">
            <FaUsers className="mx-auto text-green-400" size={35} />

            <h2 className="text-3xl font-bold mt-3">{userData.following}</h2>

            <p className="text-gray-400">Following</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center">
            <FaBook className="mx-auto text-yellow-400" size={35} />

            <h2 className="text-3xl font-bold mt-3">{userData.public_repos}</h2>

            <p className="text-gray-400">Repositories</p>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center">
            <FaBook className="mx-auto text-pink-400" size={35} />

            <h2 className="text-3xl font-bold mt-3">{userData.public_gists}</h2>

            <p className="text-gray-400">Public Gists</p>
          </div>
        </div>

        {/* Top Repositories */}

        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">
            Top Repositories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default ResultPage;
