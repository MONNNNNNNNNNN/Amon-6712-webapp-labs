// src/GitHubComponents.jsx

// 1. GitHubRepoURL accepts a `url` prop and renders a target="_blank" link
export function GitHubRepoURL({ url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="github-link"
    >
      GitHub repository
    </a>
  );
}

// 2. GitHubAvatar accepts `imgURL`, `alt`, and optional `size` (defaults to 50)
export function GitHubAvatar({ imgURL, alt, size = 50 }) {
  return (
    <img 
      src={imgURL} 
      alt={alt} 
      width={size} 
      height={size} 
      className="github-avatar"
    />
  );
}