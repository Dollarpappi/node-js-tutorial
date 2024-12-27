
const path = require("path");


console.log("Directory name:", path.dirname(__filename));

console.log("File name", path.basename(__filename));

console.log("file extension", path.extname(__filename));

const joinPath = path.join("/user", "document", "node", "projects");
console.log("Joined pathe", joinPath);

const resolvePath = path.resolve("user", "document", "node", "projects");
console.log("Resolve path", resolvePath);


const normalizePath = path.normalize("/user/.document/.../node/projects");
console.log("Normalize path:", normalizePath);
const normalize = path.normalize('//user//code/..project/.time..');
console.log(normalize);

const mePath = path.normalize('C:\\temp\\\\foo\\..\\bar..//.///')
console.log("mePath",  mePath);
const normalizedPath = path.normalize('C:\\temp\\\\foo\\..\\bar');
console.log("exra", normalizedPath); 

const normalizedPath1 = path.normalize('/home//user///docs');
console.log(normalizedPath1); 