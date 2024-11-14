export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export interface CreateTableUseCase {
    excute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase{
    constructor(
        /*
        * DI
        */
    ) { }
    
    excute({base, limit = 10}: CreateTableOptions) {

        let output_message = '';
        for (let index = 1; index <= limit; index++) {
            output_message += `${base} X ${index} = ${base * index}`;

            if (index < limit) {
                output_message += `\n`;
            }
        }

        return output_message;
    }
}