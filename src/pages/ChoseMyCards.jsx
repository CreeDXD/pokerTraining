import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChoseTwoCards } from '../redux/deckSlice'
import { PlayingCard } from '../components/Card_playing_card'

export const TwoCardschosen = () => {
  const dispatch = useDispatch()
  const choseCards = useSelector((state) => state.deck.choseCards)

  useEffect(() => {
    dispatch(ChoseTwoCards())
  }, [dispatch])

  return (
    <div style={styles.deck}>
      {choseCards.map((card, index) => (
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
