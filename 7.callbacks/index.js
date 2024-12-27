const fs = require("fs");
function person(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function address() {
    console.log("India");
}

person("Igbanugo Carl", address);