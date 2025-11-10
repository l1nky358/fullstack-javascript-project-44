#!/usr/bin/env node
const runGame = require('../src');
const getGame = require('../src/games/brain-calc');

runGame('brain-calc', getGame);
chmod +x bin/brain-calc.js