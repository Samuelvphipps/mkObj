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


function handleInput() {
    program
        .version("1.0.0")
        .description("My Multi Value Dictionary")

    program
        .command("ADD <key> <member>")
        .description("Add a member to a collection for a given key.")
        .action((key, member) => {
            try {
                dictionary.add(key, member);
                console.log("Added");
            } catch (error: any) {
                console.log(error.message);
            }
        });

    program
        .command("KEYS")
        .description("Returns all the keys in the dictionary.")
        .action(() => console.log(dictionary.keys()));

    program.parse(process.argv);
    rl.prompt();
}

rl.on('line', handleInput);

rl.prompt();