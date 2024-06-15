
/**
 * A dictionary class that stores key-value pairs.
 */
export class Dictionary {
    dictionary: { [key: string]: Set<string> } = {};

    keys(): string[] {
        return Object.keys(this.dictionary);
    }

    /**
     * Adds a key value pair to the dictionary.
     * @param key 
     * @param member 
     */
    add(key: string, member: string): void {
        if (!this.dictionary[key]) {
            this.dictionary[key] = new Set();
            this.dictionary[key].add(member);
            console.log(`) Added`);
            return 
        }
        if (this.dictionary[key].has(member)) {
            throw new Error("Member already exists for key");
        }
        this.dictionary[key].add(member);
        console.log(`) Added`);
    }
}