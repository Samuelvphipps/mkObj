#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const Dictionary_1 = require("./Dictionary");
const readline = __importStar(require("readline/promises"));
let dictionary = new Dictionary_1.Dictionary();
commander_1.program
    .name('multi-value-dictionary')
    .description('Multi-Value Dictionary CLI');
commander_1.program
    .command('ADD <key> <member>')
    .action((key, member) => {
    dictionary.add(key, member);
});
commander_1.program
    .command('KEYS')
    .action(() => {
    dictionary.keys().forEach(key => console.log(key));
});
commander_1.program
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
function handleInput(input) {
    if (input.trim() === 'exit') {
        rl.close();
        return;
    }
    try {
        commander_1.program.parse(input.trim().split(' '), { from: 'user' });
    }
    catch (error) {
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
//# sourceMappingURL=index.js.map