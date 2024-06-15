"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
/**
 * A dictionary class that stores key-value pairs.
 */
class Dictionary {
    constructor() {
        this.dictionary = {};
    }
    keys() {
        return Object.keys(this.dictionary);
    }
    /**
     * Adds a key value pair to the dictionary.
     * @param key
     * @param member
     */
    add(key, member) {
        if (!this.dictionary[key]) {
            this.dictionary[key] = new Set();
            this.dictionary[key].add(member);
            console.log(`) Added`);
            return;
        }
        if (this.dictionary[key].has(member)) {
            throw new Error("Member already exists for key");
        }
        this.dictionary[key].add(member);
        console.log(`) Added`);
    }
}
exports.Dictionary = Dictionary;
//# sourceMappingURL=Dictionary.js.map