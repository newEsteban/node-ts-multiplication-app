import yargs, { alias, check, demandOption, describe } from 'yargs';
import { hideBin } from 'yargs/helpers';


export const yarg = yargs(hideBin(process.argv))
    .option({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true, //obliga a que la opcion sea obligatoria
            describe: 'Mulplication table base'
        }
    })
    .option({
        'l': {
            alias: 'limit',
            type: 'number',
            default: 10,
            describe: 'Multiplication table limit',
        }
    })
    .option({
        's': {
            alias: 'show',
            type: 'boolean',
            default: false,
            describe: 'show multiplication table',
        }
    })
    .option({
        'n': {
            alias: 'name',
            type: 'string',
            default: 'table',
            describe: 'File name',
        }
    })
    .option({
        'd': {
            alias: 'destination',
            type: 'string',
            default: './outputs',
            describe: 'File Destination',
        }
    })
    .check((argv, options) => {
        if (argv.b < 1) throw "Error: La base debe ser mayor a uno";
        return true;
    })
    .parseSync();