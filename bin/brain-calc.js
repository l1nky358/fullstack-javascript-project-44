#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playBrainCalc from '../src/games/brain-calc.js';

playBrainCalc(readlineSync);
