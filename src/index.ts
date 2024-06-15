#!/usr/bin/env node
import { program } from "commander";
import { Dictionary } from "./Dictionary";
import * as readline from 'readline/promises';

let dictionary = new Dictionary();


program
  .name('multi-value-dictionary')
  .description('Multi-Value Dictionary CLI');

program 
    .command('ADD <key> <member>')
    .action((key, member) => {
        dictionary.add(key, member);
    });
    
program
  .command('KEYS')
  .action(() => {
    dictionary.keys().forEach(key => console.log(key));
  });

program
  .command('MEMBERS <key>')
  .action((key) => {
    const members = dictionary.members(key);
    if (members) {
      members.forEach(member => console.log(member));
    }
  });

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});


function handleInput(input: string) {

    if (input.trim() === 'exit') {
        rl.close();
        return;
      }
    
      try {
        program.parse(input.trim().split(' '), { from: 'user' });
      } catch (error: any) {
        console.error('Invalid command:', error.message);
      }

    rl.prompt();
}

rl.on('line', handleInput);

rl.prompt();











// const [command, ...args] = input.split(' ');

//     switch (command) {
//         case 'ADD':
//             const [key, member] = args;
//             args.length !== 2 ? console.log(') ERROR, invalid number of arguments.') :
//             dictionary.add(key, member);
//             break;
//         case 'KEYS':
//             console.log(dictionary.keys());
//             break;
//         case 'HELP':
//             console.log('Commands: ADD, KEYS, HELP');
//             break;
//         case 'MEMBERS':
            
//         default:
//             console.log('Invalid command, please try again. To see a list of commands, type HELP.');
//             break;
//     }