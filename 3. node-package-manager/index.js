const lodash = require("lodash");

const names = ["carl", "rita", "alex"];
const capitalize = lodash.map(names, lodash.capitalize);
 
console.log(capitalize);
