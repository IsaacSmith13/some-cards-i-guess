import Phaser from 'phaser'
import Game from './scenes/game'

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 1280,
  height: 780,
  backgroundColor: '#989898',
  scene: [
    Game
  ]
}

const game = new Phaser.Game(config) // eslint-disable-line no-unused-vars
