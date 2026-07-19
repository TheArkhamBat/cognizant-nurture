import React from 'react';

function IndianPlayers() {
  // Declare arrays using destructuring
  const T20players = ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Suryakumar Yadav', 'Hardik Pandya'];
  const RanjiTrophyPlayers = ['Shubman Gill', 'Rishabh Pant', 'Axar Patel', 'Mohammed Shami', 'Jasprit Bumrah'];

  // Merge arrays using spread operator
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Destructuring for odd/even team players
  const [player1, player2, player3, player4, player5] = T20players;
  const oddTeamPlayers = [player1, player3, player5];
  const evenTeamPlayers = [player2, player4];

  return (
    <div style={{ padding: '20px' }}>
      <h2>T20 Players</h2>
      <ul>
        {T20players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Ranji Trophy Players</h2>
      <ul>
        {RanjiTrophyPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players List</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeamPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
