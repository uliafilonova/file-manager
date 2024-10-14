
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { store, enterTheCommand, message, getCurrentDir } from './utilities.js'
export const createFile = async (args) => {
    try { 
        const currendAddPath = resolve(store.CURRENT_PATH, args);
        await writeFile(currendAddPath, '', { flag: 'wx' });
        console.log(message.FILE_ADD_STR);
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
