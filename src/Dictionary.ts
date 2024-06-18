import { errorColor } from "."

/**
 * A dictionary class that stores key-value pairs.
 */
export class Dictionary {
    dictionary: { [key: string]: Set<string> } = {}

    /**
     * returns all keys in the dictionary.
     * @returns 
     */
    keys(): string[] {
        if (Object.keys(this.dictionary).length === 0) {
            console.log('(empty set)')
        }
        return Object.keys(this.dictionary)
    }

    /**
     * returns all members in a collection for a given key.
     * @param key 
     * @returns 
     */
    members(key: string): string[] {
        if (!this.dictionary[key]) {
            console.log(errorColor(') ERROR, key does not exist.'))
        }
        return Array.from(this.dictionary[key])
    }

    /**
     * Adds a key value pair to the dictionary.
     * @param key 
     * @param member 
     */
    add(key: string, member: string): void {
        if (!this.dictionary[key]) {
            this.dictionary[key] = new Set()
            this.dictionary[key].add(member)
            console.log(`) Added`)
            return
        }
        if (this.dictionary[key].has(member)) {
            console.log(errorColor(') ERROR, member already exists.'))
            return
        }
        this.dictionary[key].add(member)
        console.log(`) Added`)
    }

    /** 
     * Removes a key value pair from the dictionary.
     * @param key 
     * @param member 
     */
    remove(key: string, member: string): void {
        if (!this.dictionary[key]) {
            console.log(errorColor(') ERROR, key does not exist.'))
            return
        }
        if (!this.dictionary[key].has(member)) {
            console.log(errorColor(') ERROR, member does not exist.'))
            return
        }
        this.dictionary[key].delete(member)
        if (this.dictionary[key].size === 0) {
            delete this.dictionary[key]
        }
        console.log(') Removed key')
    }

    /**
     * Removes a key and all its members from the dictionary.
     * @param key 
     */
    removeAll(key: string): void {
        if (!this.dictionary[key]) {
            console.log(errorColor(') ERROR, key does not exist.'))
            return
        }
        delete this.dictionary[key]
        console.log(') Removed')
    }
    /**
     * Removes all key value pairs from the dictionary.
     */
    clear(): void {
        this.dictionary = {}
        console.log(') Cleared')
    }

    /** 
     * checks if a key exists 
    */
    keyExists(key: string): string {
        return `${!!this.dictionary[key]}`
    }

    /**
     * Returns whether a member exists within a key.  Returns false if the key does not exist.
     */
    memberExists(key: string, member: string): string {
        if (!this.dictionary[key]) {
            return (') ERROR, key does not exist.')
        }
        return `${this.dictionary[key].has(member)}`
    }

    /**
     * Returns all members in the dictionary.
     */
    allMembers(): string[] {
        let allMembers: string[] = []
        for (let key in this.dictionary) {
            allMembers.push(...Array.from(this.dictionary[key]))
        }
        return allMembers
    }

    /**
     * Returns all keys in the dictionary and all of their members.  Returns nothing if there are none.  Order is not guaranteed.
     */
    items(): string {
        if (Object.keys(this.dictionary).length === 0) {
            return '(empty set)'
        }
        let returnString: string = ''
        Object.entries(this.dictionary).forEach(([key, membersSet], i) => {
            Array.from(membersSet).forEach((member) => {
                returnString += `${i + 1}) ${key}: ${member}\n`
            })
        })
        return returnString.trim()
    }


    /**
     * Returns all keys in alphabetical order
     */
    alphabetize(): {[key: string]: string[]} {
        let alphabetize: {[key: string]: string[]} = {}

        Object.entries(this.dictionary).forEach(([key, membersSet], i) => {
            alphabetize[key] = Array.from(membersSet).sort()
        })
        return alphabetize
    }
}