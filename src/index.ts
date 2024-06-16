#!/usr/bin/env node

import { program } from "commander";
import { Dictionary } from "./Dictionary";

// program
//   .name('string-util')
//   .description('CLI to some JavaScript string utilities')
program
.name('multi-value-dictionary')
.description('Multi-Value Dictionary CLI')
.version('0.8.0');

program
.command('ADD <key> <member>')
.description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
.action((key, member) => {
    let dictionary = new Dictionary();
        dictionary.add(key, member);
    })
    
//   .action((key, member) => {
//     // const limit = options.first ? 1 : undefined;
//     console.log(key, member);
//   });






// program 
// program
//   .command('KEYS')
//   .action(() => {
//     dictionary.keys().forEach((key, i) => console.log(`${i + 1}) ${key}`)) 
//   })

// program
//   .command('MEMBERS <key>')
//   .action((key) => {
//     const members: string[] = dictionary.members(key);
//     if (members) {
//       members.forEach((member, i) => console.log(`${i + 1}) ${member}`));
//     }
//   })

// program
//     .command('REMOVE <key> <member>')
//     .action((key, member) => {
//         dictionary.remove(key, member);
//     })

// program
//     .command('REMOVEALL <key>')
//     .action((key) => {
//         dictionary.removeAll(key);
//     })

// program
//     .command('CLEAR')
//     .action(() => {
//         dictionary.clear();
//     })

// program
//     .command('KEYEXISTS <key>')
//     .action((key) => {
//         console.log(dictionary.keyExists(key));
//     })

// program
// // todo: handle case where key does not exist and a member arg is still added
//     .command('MEMBEREXISTS <key> <member>')
//     .action((key, member) => {
//         console.log(dictionary.memberExists(key, member));
//     })

// program
//     .command('ALLMEMBERS')
//     .action(() => {
//         let members = dictionary.allMembers();
//         members.length > 0 ? members.forEach((member, i) => console.log(`${i + 1}) ${member}`)) 
//             :
//         console.log('(empty set)');
//     })

// program
//     .command('ITEMS')
//     .action(() => {
//         console.log(dictionary.items());
//     })

// function handleInput(input: string) {
//     try {
//     program.parse(input.trim().split(' '), { from: 'user' });
//     } catch (error: any) {
//     console.error('Invalid command');
//     }
// }

program.parse();