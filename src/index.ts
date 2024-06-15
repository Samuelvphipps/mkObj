#!/usr/bin/env node
import { program } from "commander";
import { Dictionary } from "./Dictionary";
import * as readline from 'readline/promises';

let dictionary = new Dictionary();


program
  .name('multi-value-dictionary')
  .description('Multi-Value Dictionary CLI')
  .exitOverride()

program 
    .command('ADD <key> <member>')
    .action((key, member) => {
        dictionary.add(key, member);
    })
    
program
  .command('KEYS')
  .action(() => {
    dictionary.keys().forEach((key, i) => console.log(`${i + 1}) ${key}`)) 
  })

program
  .command('MEMBERS <key>')
  .action((key) => {
    const members: string[] = dictionary.members(key);
    if (members) {
      members.forEach((member, i) => console.log(`${i + 1}) ${member}`));
    }
  })

program
    .command('REMOVE <key> <member>')
    .action((key, member) => {
        dictionary.remove(key, member);
    })

program
    .command('REMOVEALL <key>')
    .action((key) => {
        dictionary.removeAll(key);
    })

program
    .command('CLEAR')
    .action(() => {
        dictionary.clear();
    })

program
    .command('KEYEXISTS <key>')
    .action((key) => {
        console.log(dictionary.keyExists(key));
    })

program
// todo: handle case where key does not exist and a member arg is still added
    .command('MEMBEREXISTS <key> <member>')
    .action((key, member) => {
        console.log(dictionary.memberExists(key, member));
    })

program
    .command('ALLMEMBERS')
    .action(() => {
        let members = dictionary.allMembers();
        members.length > 0 ? members.forEach((member, i) => console.log(`${i + 1}) ${member}`)) 
            :
        console.log('(empty set)');
    })

program
    .command('ITEMS')
    .action(() => {
        console.log(dictionary.items());
    })

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
        console.error('Invalid command');
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