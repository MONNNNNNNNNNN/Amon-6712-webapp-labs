import { GitHubAvatar, GitHubRepoURL } from '../shared/GitHubComponents.jsx';
import './App.css';

export default function App() {
  const userInfo = {
    url: 'https://github.com/MONNNNNNNNNNN',
    imgURL: 'https://github.com/MONNNNNNNNNNN.png',
    alt: 'MONNNNNNNNNNN'
  };

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar imgURL={userInfo.imgURL} alt={userInfo.alt} size={200} />
      <GitHubRepoURL url={userInfo.url} />
    </div>
  );
}