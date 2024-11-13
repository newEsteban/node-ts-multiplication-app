import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { CreateFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number,
    limit: number,
    show: boolean,
    name: string,
    destination: string,
}

export class ServerApp {
    static async run({base, limit, show, name, destination}: RunOptions) {
        console.log('Server running....');
        const file_content = new CreateTable().excute({ base, limit });
        
        if (show) console.log(file_content);

        const save_file = new CreateFile().excute({ file_content, destination, name });

        (save_file)
            ? console.log("👍 Archivo creado exitosamente")
            : console.error(" ✖️ Archivo  no se pudo guardar");    
        
    }
}