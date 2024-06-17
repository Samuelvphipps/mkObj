#!/usr/bin/env node

import { program } from "commander";
import { Dictionary } from "./Dictionary";
import * as readline from 'readline/promises';

let dictionary = new Dictionary();


program
    .name('multi-value-dictionary')
    .description('Multi-Value Dictionary CLI')
    .showSuggestionAfterError(true)
    .configureOutput({
        outputError: (str, write) => write(errorColor(str))
    })
    .exitOverride()

program 
    .command('ADD <key> <member>')
    .description('Add a member to a collection for a given key')
    .action((key, member) => {
        dictionary.add(key, member);
    })
    
program
    .command('KEYS')
    .description('Get all the keys in the dictionary')
    .action(() => {
    dictionary.keys().forEach((key, i) => console.log(`${i + 1}) ${key}`)) 
    })

program
    .command('MEMBERS <key>')
    .description('Get all members in a collection for a given key')
    .action((key) => {
        const members: string[] = dictionary.members(key);
        if (members) {
            members.forEach((member, i) => console.log(`${i + 1}) ${member}`));
        }
    })

program
    .command('REMOVE <key> <member>')
    .description('Remove specified member from a key')
    .action((key, member) => {
        dictionary.remove(key, member);
    })

program
    .command('REMOVEALL <key>')
    .description('Remove all members from a key')
    .action((key) => {
        dictionary.removeAll(key);
    })

program
    .command('CLEAR')
    .description('Remove all keys and members')
    .action(() => {
        dictionary.clear();
    })

program
    .command('KEYEXISTS <key>')
    .description('Check if key exists')
    .action((key) => {
        console.log(dictionary.keyExists(key));
    })

program
// todo: handle case where key does not exist and a member arg is still added
    .command('MEMBEREXISTS <key> <member>')
    .description('Check if member exists for a key')
    .action((key, member) => {
        console.log(dictionary.memberExists(key, member));
    })

program
    .command('ALLMEMBERS')
    .description('Get all members in the dictionary')
    .action(() => {
        let members = dictionary.allMembers();
        members.length > 0 ? members.forEach((member, i) => console.log(`${i + 1}) ${member}`)) 
            :
        console.log('(empty set)');
    })

program
    .command('ITEMS')
    .description('Get all keys and members in the dictionary')
    .action(() => {
        console.log(dictionary.items());
    })

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});


function handleInput(input: string) {

    if (input.trim() === 'EXIT') {
        rl.close();
        return;
      }
      try {
        if(input.trim() == '-h' || input.trim() == '--help' || input.trim() == 'help') {
            program.outputHelp()
        } else {
            program.parse(input.trim().split(' '), { from: 'user' })
        }
      } catch {
        console.error('Try again, use -h command for assistance');
      }

    rl.prompt();
}

rl.on('line', handleInput);

rl.prompt();

export function errorColor(error: string) {
    // Add ANSI escape codes to display text in red.
    return `\x1b[31m${error}\x1b[0m`;
  }