'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import kitty from './img/kitty.jpg';
import woman from './img/circle.svg';
import font from './fonts/Abibas.otf';
import './styles/main.css';

class Game {
	name = `Violin Charades`;
	img = kitty;
	vector = woman;
	font = font;
}

const myGame = new Game();

console.log(`I like ${myGame.name} and ${myGame.img}.`);
console.log(`Also ${myGame.vector}.`);
console.log(`Also ${myGame.font}.`);