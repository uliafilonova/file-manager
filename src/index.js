import { homedir } from 'node:os';
import {userCommands}  from './modules/commands.js';
import readlinePromises from 'node:readline/promises';
import {USERNAME, getUserName, getCurrentDir, enterTheCommand, exitTheProgram} from './modules/utilities.js';


const start = () => {
    process.chdir(homedir());
    getUserName();
    getCurrentDir();
    enterTheCommand();
}


const readLineCommands = () => {
    const rl = readlinePromises.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    rl.on('line', async (line) => {
        await userCommands(line, rl);
    })


    rl.on('SIGINT', () => {
        exitTheProgram(USERNAME);
    });


};

start();
readLineCommands();