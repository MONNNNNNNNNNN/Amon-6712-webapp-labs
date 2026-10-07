import './App.css';
import { GitHubInfo } from './GitHubInfo.jsx';
import { users } from '../shared/users.js';

export default function App() {
  return (
    <div className="prob4-container">
      <h1>Sample GitHub Repositories</h1>
      <ol>
        {users.map((user) => (
          <GitHubInfo key={user.url} userInfo={user} />
        ))}
      </ol>
    </div>
  );
}