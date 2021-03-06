export class Card {
  constructor (scene) {
    this.render = (x, y, sprite) => {
      const card = scene.add.image(x, y, sprite).setScale(0.3, 0.3).setInteractive()
      scene.input.setDraggable(card)
      return card
    }
  }
}
