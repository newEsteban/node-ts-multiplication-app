import fs from 'fs';

export interface CreateFileUseCase {
    excute: (options: Options) => boolean;
}

export interface Options {
    file_content: string;
    destination?: string;
    name?: string;
}

export class CreateFile implements CreateFileUseCase {
    constructor() {}

    excute({ file_content, destination = 'outputs', name = 'table' }: Options): boolean {
        console.log({ file_content, destination , name });
        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${name}.txt`, file_content);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }

    }
}
