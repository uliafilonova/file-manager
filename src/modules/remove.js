import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { store, enterTheCommand, message, getCurrentDir } from './utilities.js'
export const removeFile = async (args) => {
    try { 
        const currentRemovePath = resolve(store.CURRENT_PATH, args);
        await rm(currentRemovePath);
        console.log(message.FILE_REMOVE_STR);
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

