

import fs from 'node:fs';
import os from 'node:os';
import { resolve } from 'node:path';
import { store, enterTheCommand, message, getCurrentDir } from './utilities.js'
import { stat } from 'node:fs/promises';

export const readFile = async (args) => {
    try {
        const newCurrentPath = resolve(store.CURRENT_PATH, args);
        const isFile = (await stat(newCurrentPath)).isFile();
        // if (isFile) {
        //     const readFileStream = fs.createReadStream(newCurrentPath);
        //     readFileStream.on('data', (chunk) => console.log(chunk.toString() + os.EOL))
        // }
            if (isFile) {
            const streamReadFile = fs.createReadStream(newCurrentPath);
            streamReadFile.pipe(process.stdout);
            streamReadFile.on("end", () => {
                console.log("");
                getCurrentDir(),
                enterTheCommand();
            });
        }
        else {
            console.log(message.IS_NOT_FILE_STR);
        }
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
