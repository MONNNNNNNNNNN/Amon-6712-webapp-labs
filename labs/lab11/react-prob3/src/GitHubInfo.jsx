import { GitHubAvatar, GitHubRepoURL } from './GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  return (
    <div className="github-info-card">
      <h2>{userInfo.alt}</h2>
      {/* Set a distinct size for the avatar here */}
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={150} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}