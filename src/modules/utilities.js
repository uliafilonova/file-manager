import { homedir } from 'node:os';

export let USERNAME = '';



export const store = {
    CURRENT_PATH: homedir(),
}

export const message = {
    WELCOME_TO_STR: 'Welcome to the File Manager',
    CURRENT_DIR_STR: 'You are currently in',
    ENTER_COMMAND_STR: 'Enter the command',
    IS_NOT_DIRECTORY_STR: 'Path is not a directory',
    IS_NOT_FILE_STR: 'Path is not a file',
    NOT_FOUND_PATH_STR: 'No such file or directory',
    OPERATION_FAILED_STR: 'Operation failed',
    ERROR_COMMAND_STR: 'Invalid input',
    FILE_ADD_STR: 'The file was successfully added',
    FILE_REMOVE_STR: 'The file was successfully deleted',
}


export const getCurrentDir = () => {
    console.log(`${message.CURRENT_DIR_STR} ${store.CURRENT_PATH}`);
}

export const enterTheCommand = () => {
    console.log(`${message.ENTER_COMMAND_STR}`);
}

export const exitTheProgram = () => {
    console.log(`Thank you for using File Manager, ${USERNAME}, goodbye!`);
    process.exit();
}

export const getUserName = () => {
    process.argv.forEach(val => {
        if (val.startsWith('--username')) {
            USERNAME = val.slice(val.split('').indexOf('=') + 1);
        }
        else USERNAME = 'Anonimus'
    })
    console.log(`${message.WELCOME_TO}, ${USERNAME}!`);
}
