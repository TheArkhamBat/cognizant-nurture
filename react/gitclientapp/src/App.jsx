import React, { useState, useEffect } from 'react';
import GitClient from './GitClient';

function App() {
  const [username, setUsername] = useState('techiesyed');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRepos = async () => {
    if (!username.trim()) {
      setError('Please enter a username');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const repoList = await GitClient.getRepositories(username);
      setRepos(repoList);
    } catch (err) {
      setError(err.message);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '600px', margin: '0 auto' }}>
      <h1>GitHub Repository Viewer</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{
            padding: '10px',
            width: '70%',
            marginRight: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={fetchRepos}
          style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      </div>

      {loading && <p>Loading repositories...</p>}
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {!loading && !error && repos.length > 0 && (
        <div>
          <h2>Repositories for {username}</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {repos.map((repo, index) => (
              <li
                key={index}
                style={{
                  padding: '10px',
                  margin: '5px 0',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '5px',
                  border: '1px solid #dee2e6'
                }}
              >
                {repo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
