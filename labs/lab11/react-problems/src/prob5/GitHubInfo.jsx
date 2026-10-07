import { GitHubAvatar } from '../shared/GitHubComponents.jsx';

export function GitHubInfo({ user }) {
  return (
    <li className="popular-user-item">
      <GitHubAvatar imgURL={user.imgURL} alt={user.alt} size={100} />
      <a 
        href={user.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="user-link"
      >
        {user.alt}
      </a>
      <span className="follower-count"> ({user.followers} followers)</span>
    </li>
  );
}