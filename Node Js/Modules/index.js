const fs=require("fs")
console.log("Core Module(Non-Global) and Global(Third-party module) ")          // console is the global module , so no need to import console


// Core module or Non global Module
fs.writeFileSync("hi")

