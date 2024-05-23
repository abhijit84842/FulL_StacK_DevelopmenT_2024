
// File system Module


/* To Create a New File */
// fs.writeFile(file, data[, options], callback)
/*
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


*/

// Copy file 
// fs.copyFile(src, dest[, mode], callback)
const fs = require('node:fs');
// fs.copyFile("hi.txt" , "./copy file2/copyfile.txt" , (err)=>{
//     if(err){
//         console.error(err.message)
//     }else{
//         console.log("done")
//     }
// })


// Unlink or delete the file...
// fs.unlink(path, callback)
fs.unlink("./copy file/unlink.txt" , (err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("File Deleted Successfully....")
    }
})

// Delete the folder..
// fs.rmdir(path[, options], callback)