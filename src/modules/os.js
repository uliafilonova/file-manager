import cores from 'node:os';
import { EOL, homedir, userInfo, arch } from 'node:os';

export const printEOL = () => {
    console.log(JSON.stringify(EOL));
};

export const printCPUS = () => {
    const infoCpus = cores.cpus();
    const listCpus = infoCpus.reduce((arr, { model, speed }, index) => {
        arr.push([
            index + 1, {
                model,
                speed: `${speed / 1000} GHz`,
            }
        ]
        )
        return arr
    }, []
    )

    console.log(`Cpus numbers: ${infoCpus.length}`);
    console.table(Object.fromEntries(listCpus));
}

export const printHomeDir = () => {
    console.log(homedir());
};

export const printUserName = () => {
    console.log(userInfo().username);
};

export const printArch = () => {
    console.log(arch());
};