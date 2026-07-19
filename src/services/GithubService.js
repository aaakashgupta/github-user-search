export const getUserDetail = async (username) => {
  const githubUrl = `https://api.github.com/users/${username}`;
  const response = await fetch(githubUrl);
  const data = await response.json();
  return data;
};

export const getUserRepos = async (username) => {
  const githubUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`;
  const response = await fetch(githubUrl);
  const data = await response.json();
  return data;
};
