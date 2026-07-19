import React from 'react';

function ListofPlayers() {
  // Array with 11 players and their scores
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 72 },
    { name: 'KL Rahul', score: 45 },
    { name: 'Suryakumar Yadav', score: 90 },
    { name: 'Hardik Pandya', score: 35 },
    { name: 'Ravindra Jadeja', score: 28 },
    { name: 'Jasprit Bumrah', score: 5 },
    { name: 'Mohammed Shami', score: 10 },
    { name: 'Rishabh Pant', score: 65 },
    { name: 'Shubman Gill', score: 55 },
    { name: 'Axar Patel', score: 30 }
  ];

  // Filter players with scores below 70
  const below70Players = players.filter(player => player.score < 70);
  const above70Players = players.filter(player => player.score >= 70);

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>

      <h2>Players with Scores Below 70</h2>
      <ul>
        {below70Players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>

      <h2>Players with Scores Above or Equal to 70</h2>
      <ul>
        {above70Players.map((player, index) => (
          <li key={index}>{player.name}: {player.score}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
