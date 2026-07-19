import React from "react";
import { FaStar, FaCodeBranch } from "react-icons/fa";

function RepoCard({ repo }) {
  return (
    <div className="w-full bg-slate-800 rounded-xl p-5 shadow-lg">
      <h3 className="text-xl font-bold text-blue-400 mb-2">
        {repo.name}
      </h3>

      <p className="text-gray-300 mb-4">
        {repo.description || "No description available"}
      </p>

      <div className="flex justify-between text-sm text-gray-400 mb-4">
        <span className="flex items-center gap-1">
          <FaStar />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-1">
          <FaCodeBranch />
          {repo.forks_count}
        </span>
      </div>

      <p className="text-blue-300 mb-4">
        {repo.language || "Unknown"}
      </p>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        View Repository
      </a>
    </div>
  );
}

export default RepoCard;