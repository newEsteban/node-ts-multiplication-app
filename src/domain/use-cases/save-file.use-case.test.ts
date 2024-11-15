import { CreateFile } from "./save-file.use-case";
import fs from "fs";

describe('guardar archivo', () => {

    afterEach(() => {
        // clean up
        fs.rmSync('outputs', { recursive: true});
    });

    test('should save file with default values', () => {
        const saveFile = new CreateFile();
        const filePath = 'outputs/test.txt';
        const options = {
            file_content: 'test content',
        }

        const result = saveFile.excute(options);
        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

        expect(result).toBeTruthy();
        expect(checkFile).toBeTruthy();
        expect(fileContent).toContain('test content');

    });


});