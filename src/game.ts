import { Engine } from 'excalibur';
import { Paddle } from './paddle';

const game = new Engine({
  width: 800,
  height: 600,
});

game.start();

const paddle = new Paddle(game);
game.add(paddle);

game.input.pointers.primary.on('move', (evt) => {
  paddle.moveTo(evt.worldPos.x);
});