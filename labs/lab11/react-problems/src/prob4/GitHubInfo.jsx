import { GitHubAvatar } from '../shared/GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  const { url, imgURL, alt, followers } = userInfo;

  return (
    <li className="github-list-item">
      <GitHubAvatar imgURL={imgURL} alt={alt} size={50} />
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-profile-link"
      >
        {alt}
      </a>
      {/* Conditional rendering for followers > 10,000 */}
      {followers > 10000 && <span> ({followers} followers)</span>}
    </li>
  );
}