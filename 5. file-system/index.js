const { log } = require("console");
const fs = require("fs");
const path = require("path");

//check if folder exist and create a folder
const datafolder = path.join(__dirname, "data");
if (!fs.existsSync(datafolder)) {
    fs.mkdirSync(datafolder);
    console.log("data folder created");   
}
 
//create a file inside the folder
const filePath = path.join(datafolder, "datafile.txt");
if (fs.existsSync(filePath)) {
    console.log("file exists");    
} else {
    fs.writeFileSync(filePath, "my data is secure here");
    console.log("file created succesfully");    
}

//read the content inside the file
const readContentFromFile = fs.readFileSync(filePath, "utf8");
console.log("file content:", readContentFromFile);

//add to line of text to a file
fs.appendFileSync(filePath, "\nThis is new line added to that fill");
console.log("New file content added");

// // //async way of creating a file

// const currentPathRoute = path.join(__dirname, "asyncdata");
// if(!fs.existsSync(currentPathRoute)){
//     fs.mkdir(currentPathRoute);
//     console.log("Async folder created");
// }else{
//   console.log("Folder exist u cant create an async folder again"); 
// }

// const asyncFileRouthPath = path.join(currentPathRoute, "asyncroute.txt");
// if (fs.existsSync(asyncFileRouthPath)) {
//     console.log("Your async file exists");
// }else{
//     fs.writeFileSync(asyncFileRouthPath, "I did it lucky me bro");
//     console.log("async file created successfully");
    
// }

const asyncFilePath = path.join(datafolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, async node js", (err)=>{
    if (err) throw err;
    console.log("Async file is created successfully");
},); 
// //     fs.readFile(asyncFilePath, "utf8", (err, data)=>{
// //         if(err) throw err;
// //         console.log("async file content:", data);

 // //             if (err) throw err;
// //             console.log("New line added to async file");
            
// //             fs.readFile(asyncFilePath, "utf8", (err, updateData)=>{
// //                 if (err) throw err;
// //                 console.log("Updated file content", updateData);
                
// //             })
// //         });
        
// //     })

// // });