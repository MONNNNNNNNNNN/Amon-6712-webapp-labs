import '../shared/index.css'


// Component 1: GitHub Avatar
function GitHubAvatar() {
  return (
    <img
      src="https://github.com/MONNNNNNNNNNN.png"
      alt="GitHub Avatar"
      className="github-avatar"
    />
  );
}

// Component 2: GitHub Repository URL
function GitHubRepoURL() {
  return (
    <a
      href="https://github.com/MONNNNNNNNNNN"
      target="_blank"
      rel="noopener noreferrer"
    >
      My GitHub repository
    </a>
  );
}

// Component 3: GitHub Information
function GitHubInfo() {
  return (
    <div className="github-info">
      <h1>My GitHub Information</h1>

      <GitHubAvatar />

      <GitHubRepoURL />
    </div>
  );
}

export default GitHubInfo;