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
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});
function handleInput() {
    commander_1.program
        .version("1.0.0")
        .description("My Multi Value Dictionary");
    commander_1.program
        .command("ADD <key> <member>")
        .description("Add a member to a collection for a given key.")
        .action((key, member) => {
        try {
            dictionary.add(key, member);
            console.log("Added");
        }
        catch (error) {
            console.log(error.message);
        }
    });
    commander_1.program
        .command("KEYS")
        .description("Returns all the keys in the dictionary.")
        .action(() => console.log(dictionary.keys()));
    rl.prompt();
}
rl.on('line', handleInput);
rl.prompt();
//# sourceMappingURL=index.js.map