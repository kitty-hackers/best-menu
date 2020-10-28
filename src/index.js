'use strict';

import kitty from './img/kitty.jpg';

class Game {
	name = `Violin Charades`;
	img = kitty;
}

const myGame = new Game();

console.log(`I like ${myGame.name} and ${myGame.img}.`);