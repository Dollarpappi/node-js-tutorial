const EventEmitter = require("events");

const myFirstEmitter = new EventEmitter();
// on register a listener
  myFirstEmitter.on("greet", (name)=>{
    console.log(`Hello ${name}`);
  });
//emit is to trigger events
  myFirstEmitter.emit("greet", "Igbanugo Carl"); 