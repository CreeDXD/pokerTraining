import React from 'react'

export const PlayingCard = ({ rank, suit, emoji }) => {
  const cardStyle = {
    ...styles.card,
    color: suit === 'Hearts' || suit === 'Diamonds' ? 'red' : 'black',
  }

  return (
    <div style={cardStyle}>
      <div style={styles.rank}>{rank}</div>
      <div style={styles.suit}>{emoji}</div>
    </div>
  )
}

const styles = {
  card: {
    border: '1px solid black',
    borderRadius: '5px',
    width: '100px',
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px',
    fontSize: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  rank: {
    fontSize: '24px',
  },
  suit: {
    fontSize: '40px',
  },
}
