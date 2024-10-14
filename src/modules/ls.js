
import { message, store, getCurrentDir, enterTheCommand } from './utilities.js';
import { readdir } from 'node:fs/promises';


export const listFiles = async () => {
    try {
        const files = await readdir(store.CURRENT_PATH, { withFileTypes: true });
        const list = files.reduce((arr, file) => {
            arr.push({
                Name: file.name,
                Type: file.isDirectory() ? 'directory' : 'file',
            });
            return arr
        }, []);

        // list.sort((val1, val2) => val1.Name.localeCompare(val2.Name));
        // list.sort((val1, val2) => val1.Type.localeCompare(val2.Type));

        list.sort((val1, val2) => new Intl.Collator('en').compare(val1.Name, val2.Name));
        list.sort((val1, val2) => new Intl.Collator('en').compare(val1.Type, val2.Type));


        console.table(list);


    } catch {
        console.log(message.OPERATION_FAILED_STR);
    }
    finally {
        getCurrentDir(),
        enterTheCommand()
    }


};