import { readFile } from "node:fs/promises"
import { resolve } from 'node:path';
import { store, enterTheCommand, message, getCurrentDir } from './utilities.js'
import crypto from 'crypto';


export const printHash = async (arg) => {
    try {
        const hashPath = resolve(store.CURRENT_PATH, arg);
        const reaFile = await readFile(hashPath, 'utf8');
        const hash = crypto.createHash('sha256').update(reaFile);
        const hex = hash.digest('hex');
        console.log(hex);
    } catch (err) {
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
};


