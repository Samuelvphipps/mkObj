import * as fs from 'fs';
import * as path from 'path';

export class Store {
    private readonly storePath = './store';
    private readonly dictionaryFilePath = path.join(this.storePath, 'dictionary.json');

    saveDictionary(dictionaryData: { [key: string]: Set<string> }): void {
        try {
            // Create the store directory if it doesn't exist
            if (!fs.existsSync(this.storePath)) {
                fs.mkdirSync(this.storePath);
            }

            const data = JSON.stringify(dictionaryData);
            fs.writeFileSync(this.dictionaryFilePath, data);
        } catch (error) {
            console.error('Error saving dictionary:', error);
        }
    }

    loadDictionary(): { [key: string]: Set<string> } {
        try {
            console.log('Loading dictionary');
            if (!fs.existsSync(this.dictionaryFilePath)) {
                console.log('Dictionary file not found, creating a new one');
                this.saveDictionary({});
            }
            const data = fs.readFileSync(this.dictionaryFilePath, 'utf-8');
            const parsedData = JSON.parse(data);
            const mySet: Set<string> = new Set(parsedData);

console.log(mySet);
            return parsedData;
        } catch (error) {
            console.error('Error loading dictionary:', error);
            return {};
        }
    }
}