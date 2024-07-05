import React from 'react'

export const RefreshButton = () => {
  return (
    <div style={styles.box}>
      <button style={styles.button} onClick={() => window.location.reload()}>
        Refresh Page
      </button>
    </div>
  )
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
  },
}
