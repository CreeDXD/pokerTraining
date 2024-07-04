import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDeck } from '../redux/deckSlice'
import { PlayingCard } from '../components/Card_playing_card'

export const AllCards = () => {
  const dispatch = useDispatch()
  const deck = useSelector((state) => state.deck.deck)

  useEffect(() => {
    dispatch(createDeck())
  }, [dispatch])

  return (
    <div style={styles.deck}>
      {deck.map((card, index) => (
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
    flexWrap: 'wrap',
  },
}
