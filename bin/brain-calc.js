#!/usr/bin/env node
import readlineSync from 'readline-sync'
import playBrainCalc from '../src/games/calc.js'

playBrainCalc(readlineSync)
