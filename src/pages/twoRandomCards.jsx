import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { drawTwoCards } from '../redux/deckSlice'
import { PlayingCard } from '../components/Card_playing_card'

export const TwoRandomCards = () => {
  const dispatch = useDispatch()
  const drawnCards = useSelector((state) => state.deck.drawnCards)

  useEffect(() => {
    dispatch(drawTwoCards())
  }, [dispatch])

  return (
    <div style={styles.deck}>
      {drawnCards.map((card, index) => (
        <PlayingCard
          key={index}
          rank={card.rank}
          suit={card.suit}
          emoji={card.emoji}
        />
      ))}
    </div>
  )
}

const styles = {
  deck: {
    display: 'flex',
    justifyContent: 'center',
  },
}
