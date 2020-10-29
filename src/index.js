'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import kitty from './img/kitty.jpg';
import woman from './img/wow_woman.svg';
import font from './fonts/SPLENDOR_rus.ttf';
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