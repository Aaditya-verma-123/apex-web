const USERNAME = "Aaditya-verma-123";

export async function getGithubProfile() {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile.");
  }

  return response.json();
}

export async function getRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories.");
  }

  return response.json();
}