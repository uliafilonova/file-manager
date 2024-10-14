import { resolve } from 'path';
import { rename } from 'node:fs/promises';
import { store, enterTheCommand, message, getCurrentDir } from './utilities.js'

export const renameFile = async (args) => {
    // if(args){
    //     console.log(message.ERROR_COMMAND_STR);
    //     return;
    // }
    console.log(args);
    const argsArray = [];
    args.split(' ')
        .forEach((arg) => {
            if (!arg) return;
            return argsArray.push(arg.replace(/"/g, '').replace(/\\+/g, '/'));
        });
    if(!argsArray[1]){
        console.log(argsArray[1])
        console.log(message.ERROR_COMMAND_STR);
        return;
    }
    try {
        const pathToFile = resolve(store.CURRENT_PATH, argsArray[0]);
        const newFileName = resolve(store.CURRENT_PATH, argsArray[1]);
        await rename(pathToFile, newFileName);
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.log(message.NOT_FOUND_PATH_STR);
        }
        console.log(message.OPERATION_FAILED_STR);
    }
    finally {
        enterTheCommand();
        getCurrentDir();
    }
};