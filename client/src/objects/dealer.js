import { Card } from './card'

export class Dealer {
  constructor (scene) {
    this.dealCards = () => {
      let playerSprite
      let opponentSprite

      const createCard = (i = 0) => {
        if (i < 5) {
          setTimeout(() => {
            const playerCard = new Card(scene)
            playerCard.render(475 + (i * 100), 650, playerSprite)

            const opponentCard = new Card(scene)
            scene.opponentCards.push(opponentCard.render(475 + (i * 100), 125, opponentSprite).disableInteractive())

            createCard(i + 1)
          }, 250)
        }
      }

      if (scene.isPlayerOne) {
        playerSprite = 'cyanCardFront'
        opponentSprite = 'magentaCardBack'
      } else {
        playerSprite = 'magentaCardFront'
        opponentSprite = 'cyanCardBack'
      };

      createCard()
    }
  }
}
