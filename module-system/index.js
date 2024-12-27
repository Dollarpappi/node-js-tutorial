  const firstmodule = require("./first-module");

  console.log(firstmodule.add(20,30));

  try {
     console.log("trying to get active");
     let result = firstmodule.divide(0,10);
     console.log(result);
  } catch (error) {
    console.log("caught an error:", error.message);
    
  }