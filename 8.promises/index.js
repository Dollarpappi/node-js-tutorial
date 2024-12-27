const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");


function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve, time));
}

console.log("Promise lecture started");
delayFn(2000).then(()=> console.log("afer w seconds preomise result"));
console.log("end");

function divideFn(num1, num2){
    return new Promise((resolve, reject)=>{
        if (num1 === 0) {
            reject("can not perform division by 0");
        }else{
            resolve(num1/num2);
        }
    })
}

divideFn(10,0).then(result=> console.log(result)).catch(error,"err");