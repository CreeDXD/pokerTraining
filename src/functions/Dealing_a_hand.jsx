export function DealingAHand() {
  function getRandomCard(deck) {
    const randomIndex = Math.floor(Math.random() * deck.length)
    const card = deck.splice(randomIndex, 1)[0]
    return card
  }

  function generateTwoDifferentRandomCards() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    const ranks = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K',
      'A',
    ]

    // Create a full deck
    const deck = []
    for (let suit of suits) {
      for (let rank of ranks) {
        deck.push([rank, suit])
      }
    }

    // Get two different random cards
    const card1 = getRandomCard(deck)
    const card2 = getRandomCard(deck)

    return [card1, card2]
  }

  return generateTwoDifferentRandomCards()
}
