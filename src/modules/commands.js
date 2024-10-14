

import { exitTheProgram, enterTheCommand, getCurrentDir, message } from './utilities.js';
import { goTo } from './cd.js';
import { listFiles } from './ls.js';
import { readFile } from './cat.js';
import { printEOL, printCPUS, printHomeDir, printUserName, printArch } from './os.js';
import { createFile } from './add.js';
import { removeFile } from './remove.js';
import { printHash } from './hash.js';



export const userCommands = async (line, rl) => {
    try {
        const [command, arg] = line.trim().split(/\s+/);
        if (['up', 'ls', '.exit'].includes(line)) {
            switch (line) {
                case 'up':
                    await goTo('..');
                    break;
                case 'ls':
                    await listFiles();
                    break;
                case '.exit':
                    exitTheProgram();
                    break;

            }
        }
        else if (command === 'os') {
            switch (arg) {
                case '--EOL':
                    printEOL();
                    break;
                case '--cpus':
                    printCPUS();
                    break;
                case '--homedir':
                    printHomeDir();
                    break;
                case '--username':
                    printUserName();
                    break;
                case '--architecture':
                    printArch();
                    break;
                default:
                    console.log(message.ERROR_COMMAND_STR);

            }
            getCurrentDir(),
                enterTheCommand()
        }

        else {
            switch (command) {
                case 'cd':
                    await goTo(arg);
                    break;
                case 'cat':
                    await readFile(arg);
                    break;
                case 'add':
                    await createFile(arg);
                    break;
                case 'rm':
                    await removeFile(arg);
                    break;
                  case 'hash':
                    await printHash(arg);
                    break;
                default:
                    console.log(message.ERROR_COMMAND_STR);
            }
        }
    }
    catch {
    }
    // finally {
    //     getCurrentDir(),
    //     enterTheCommand()
    // }

};







