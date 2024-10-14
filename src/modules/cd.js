import { resolve, sep } from 'node:path';
import { store, enterTheCommand, message, getCurrentDir } from './utilities.js'
import { stat } from 'node:fs/promises';


export const goTo = async (args) => {
    if (!args){
        getCurrentDir(),
        enterTheCommand()
        return
    } 
    if (sep === "\\" && args.endsWith(':')) {
        args += '\\';
    }
    const newCurrentPath = resolve(store.CURRENT_PATH, args);
    try {
        const isPathDirectory = (await stat(newCurrentPath)).isDirectory();
        if (!isPathDirectory) {
            console.log(message.IS_NOT_DIRECTORY_STR);
            console.log(message.OPERATION_FAILED_STR);
            return
        }
        store.CURRENT_PATH = newCurrentPath;
    } 
    catch (err) {
        if (err.code === 'ENOENT') {
            console.log(message.NOT_FOUND_PATH_STR);
        }
        else {
            console.log(message.OPERATION_FAILED_STR);
        }


    }
    finally {
        getCurrentDir(),
        enterTheCommand()
    }

}

