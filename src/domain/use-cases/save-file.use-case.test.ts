import { CreateFile } from "./save-file.use-case";
import fs from 'fs';

describe('guardar archivo', () => {

    const options = {
        file_content: "Archivo con contenido customizado",
        destination: "storage",
        name: 'test_seccion_6'
    }

    const file_path = `${options.destination}/${options.name}.txt`;

    afterEach(() => {
        const outputFolderExists = fs.existsSync('outputs');
        if (outputFolderExists) fs.rmSync('outputs', { recursive: true });
        
        const customFolderExists = fs.existsSync(file_path);
        if ( customFolderExists ) fs.rmSync(file_path, { recursive: true }); 
    });

    test('should save file with default values', () => {

        const saveFile = new CreateFile();
        const filePath = 'outputs/table.txt';
        const options = {
            file_content: 'test content',
        }

        const result = saveFile.excute(options);
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toEqual(options.file_content);

    });

    test('Crear archivo por medio de parametros', () => {

        const saveFile = new CreateFile();
       
        const result = saveFile.excute(options);
        const file_exists = fs.existsSync(file_path);
        const fileContent = fs.readFileSync(file_path, { encoding: 'utf8' });

        expect(result).toBeTruthy();
        expect(file_exists).toBeTruthy();
        expect(fileContent).toEqual(options.file_content);
    });

    test('probar creacion de directorio con error', () => {
        const saveFile = new CreateFile();

        const mkdir_spy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
            throw "Esto es un error inyectado para evaluar los errores";
        });
        const result = saveFile.excute(options);    
        expect(result).toBeFalsy();
        mkdir_spy.mockRestore();
    });

    test('probar creacion de archivo con error', () => {
        const saveFile = new CreateFile();

        const file_create_spy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
            throw "Esto es un error inyectado para evaluar los errores en la creacion del archivo";
        });

        const result = saveFile.excute(options);    
        expect(result).toBeFalsy();
        file_create_spy.mockRestore();
    });
});