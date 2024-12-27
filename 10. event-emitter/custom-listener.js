const EventEmitter = require("events");


class MyCustomEmitter extends EventEmitter{
    constructor(){   
        super();
        this.greeting = "Hello";
    }
    greet(name){
        this.emit("greeting",`${this.greeting},  ${name}`)
        // this.emit(`greetings`, `${this.greeting}, ${name}`);
    }
}

const  myCustomEmitter = new MyCustomEmitter();

myCustomEmitter.on("greeting", (input)=>{
    console.log("Greeting event", input);
});

myCustomEmitter.greet("Ibanugo is the best");