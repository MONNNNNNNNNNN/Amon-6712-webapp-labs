import { GitHubAvatar, GitHubRepoURL } from '../shared/GitHubComponents.jsx';

export function GitHubInfo({ userInfo }) {
  return (
    <div className="github-info-card">
      <h2>{userInfo.alt}</h2>
      <p>Followers: {userInfo.followers}</p>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={150} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}