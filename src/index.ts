#!/usr/bin/env node
import { program } from "commander";
import { Dictionary } from "./Dictionary";
import * as readline from 'readline/promises';

let dictionary = new Dictionary();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});


function handleInput(input: string) {
    const [command, ...args] = input.split(' ');

    switch (command) {
        case 'ADD':
            const [key, member] = args;
            dictionary.add(key, member);
            break;
        case 'KEYS':
            console.log(dictionary.keys());
            break;
        case 'HELP':
            console.log('Commands: ADD, KEYS, HELP');
            break;
        default:
            console.log('Invalid command, please try again. To see a list of commands, type HELP.');
            break;
    }
    
    rl.prompt();
}

rl.on('line', handleInput);

rl.prompt();