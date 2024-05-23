// File system Module

// fs.writeFile(file, data[, options], callback)

const fs = require('node:fs');
fs.writeFile("hello.txt" , "this is file system module", (err)=>{
    if(err){
        console.log("not created")
    }else{
        console.log("Successfully Created..")
    }
})

