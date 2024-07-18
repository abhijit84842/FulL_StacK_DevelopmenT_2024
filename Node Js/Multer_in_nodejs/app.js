const express = require('express')
const path = require('path')


const crypto = require('crypto')       
const multer = require('multer')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine" , "ejs")

// Disk Storage in multer..=> The disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/upload')           // where we want to store the file
    },
    filename: function (req, file, cb) {    
        crypto.randomBytes(12 , (err, bytes)=>{               // need a unic name to store the file
            // console.log(bytes.toString("hex"))
            const fn = bytes.toString("hex") + path.extname(file.originalname)

            cb(null, fn)    // fn - file name
        } )             
         
     
    }
  })
  
  const upload = multer({ storage: storage })


app.get("/",(req,res)=>{
   
    res.render("index")
})


// upload file 
app.post("/upload", upload.single("image") ,(req,res)=>{
    console.log(req.file)
    res.redirect("/")
})

app.listen(3000 ,()=>{
    console.log("PORT=>" +3000)
})