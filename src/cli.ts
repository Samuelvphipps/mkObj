import { program } from "commander";

program
  .name('multi-value-dictionary')
  .description('Multi-Value Dictionary CLI');

program 
    .command('ADD <key> <member>')
    .action((key, member) => {
        dictionary.add(key, member);
    });
    
program
  .command('KEYS')
  .action(() => {
    dictionary.keys().forEach(key => console.log(key));
  });

program
  .command('MEMBERS <key>')
  .action((key) => {
    const members = dictionary.members(key);
    if (members) {
      members.forEach(member => console.log(member));
    }
  });
