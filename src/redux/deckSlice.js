import { createSlice } from '@reduxjs/toolkit'

const suitsWithEmojis = [
  {
    suit: 'Hearts',
    emoji: '♥️',
  },
  {
    suit: 'Diamonds',
    emoji: '♦️',
  },
  {
    suit: 'Clubs',
    emoji: '♣️',
  },
  {
    suit: 'Spades',
    emoji: '♠️',
  },
]

const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

const createFullDeck = () => {
  const deck = []
  for (let suit of suitsWithEmojis) {
    for (let rank of ranks) {
      deck.push({ rank, suit: suit.suit, emoji: suit.emoji })
    }
  }
  return deck
}

const deckSlice = createSlice({
  name: 'deck',
  initialState: {
    deck: createFullDeck(),
    drawnCards: [],
  },
  reducers: {
    createDeck: (state) => {
      state.deck = createFullDeck()
    },
    drawTwoCards: (state) => {
      const deck = [...state.deck]
      const drawnCards = []
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * deck.length)
        const card = deck.splice(randomIndex, 1)[0]
        drawnCards.push(card)
      }
      state.drawnCards = drawnCards
    },
  },
})

export const { createDeck, drawTwoCards } = deckSlice.actions

export default deckSlice.reducer
