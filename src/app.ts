import { yarg } from "./config/plugins/yargs.plugin";
import fs from "fs";

const { b:base, l:limit, s:show } = yarg;

const filePath = `tabla_del_${base}.txt`;
const header = `
===========================================
        Tabla del ${base}
===========================================
`;

const reults_string = [];
for (let index = 1; index <= limit; index++) {
    
    let result = index * base;
    let message = `${index} X  ${base} = ${result}`;
    reults_string.push(message);
    if (show) {
        console.log(`${message}`);
    }
}

const route = "output";
const content = `${header}\n` + reults_string.join("\n");

fs.mkdirSync(route, { recursive: true });
fs.writeFileSync(`${route}/${filePath}`, content);
console.log("👍 Archivo creado exitosamente");


