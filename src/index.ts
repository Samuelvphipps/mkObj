#!/usr/bin/env node

import { program } from "commander";
import { Dictionary } from "./Dictionary";
import * as readline from 'readline/promises';

let dictionary = new Dictionary();

// Defines the CLI
program
    .name('multi-value-dictionary')
    .description('Multi-Value Dictionary CLI')
    .showSuggestionAfterError(true)
    .configureOutput({
        outputError: (str, write) => write(errorColor(str))
    })
    .exitOverride()

// *This section defines the commands that can be used in the CLI    
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

// *This section handles the input from the user and defines the interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

/**
 * Handles the input from the user
 * @param input 
 * @returns 
 */
function handleInput(input: string) {

    if (input.trim() === 'EXIT') {
        rl.close();
        return;
      }
      try {
        if(input.trim() == '-h' || input.trim() == '--help' || input.trim() == 'help') {
            // *Displays the help menu - built in conditionaly to prenent auto error handling via commander.js (bug fix)
            program.outputHelp()
        } else {
            // *Runs commander.js to parse the input
            program.parse(input.trim().split(' '), { from: 'user' })
        }
      } catch {
        console.error('Try again, use -h command for assistance');
      }

    rl.prompt();
}

rl.on('line', handleInput);

// *This redisplays the prompt to the user
rl.prompt();

// *This section defines the error color within the terminal - FN from the commander.js documentation
export function errorColor(error: string) {
    // Add ANSI escape codes to display text in red.
    return `\x1b[31m${error}\x1b[0m`;
  }