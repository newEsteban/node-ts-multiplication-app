
import { CreateTable } from './create-table.use-case';
 
describe('create-table-use-case', () => {
    test('debe crear tabla con valor por defecto', () => {
        const createTable = new CreateTable();
        const table = createTable.excute({ base: 6 });
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('6 X 1 = 6');
        expect(table).toContain('6 X 2 = 12');
        expect(rows).toBe(10);
    });

    test('debe crear tabla con valores pasados por parametro', () => {
        const createTable = new CreateTable();

        const options = {
            base: 1,
            limit: 20
        };

        const table = createTable.excute(options);
        const rows = table.split('\n').length;

        expect(table).toContain('1 X 1 = 1');
        expect(table).toContain('1 X 10 = 10');
        expect(table).toContain('1 X 20 = 20');
        expect(rows).toBe(options.limit);

    });
})
