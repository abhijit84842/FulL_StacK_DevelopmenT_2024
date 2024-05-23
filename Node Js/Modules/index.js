// File system Module


/* To Create a New File */
// fs.writeFile(file, data[, options], callback)
const fs = require('node:fs');
fs.writeFile("hello.txt" , "this is file system module", (err)=>{
    if(err){
        console.log("not created")
    }else{
        console.log("Successfully Created..")
    }
})



// Append file
// fs.appendFile(path, data[, options], callback)
fs.appendFile("hello.txt" , " and it is part of Node Js", (err)=>{
    if(err){
        console.log("not created")
    }else{
        console.log("Successfully append ...")
    }
})


// Rename file
// fs.rename(oldPath, newPath, callback)
fs.rename("hello.txt","hi.txt", (err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("file name changed")
    }
})
