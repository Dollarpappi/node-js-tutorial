const { error } = require("console");


function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve, time))
}

async function delayedGreet(name){
    await delayFn(2000);
    console.log(name);
}

delayedGreet("Carl Igbanugo");

async function divideFn(num1, num2){
    try {
        if (num2 ===0) throw new Error("Can not divide by 0");
        return num1/num22;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}

async function mainFn(){
   console.log(await divideFn(10,20));
   console.log(await divideFn(10,0)); 
}

mainFn();