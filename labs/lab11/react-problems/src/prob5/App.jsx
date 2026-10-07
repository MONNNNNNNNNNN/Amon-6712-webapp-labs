import './App.css';
import { GitHubInfo } from './GitHubInfo.jsx';
import { users } from '../shared/users.js';

export default function App() {
  // Select only users with > 10,000 followers
  const popularUsers = users.filter((user) => user.followers > 10000);

  return (
    <div className="prob5-container">
      <h1>Popular GitHub Repositories</h1>
      <ol>
        {popularUsers.map((user) => (
          <GitHubInfo key={user.url} user={user} />
        ))}
      </ol>
    </div>
  );
}