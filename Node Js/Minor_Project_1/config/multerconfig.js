const multer= require("multer")
const crypto = require("crypto")
const path = require("path")

// The disk storage engine gives you full control on storing files to disk.
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/uploads')
    },
    filename: function (req, file, cb) {
      // use crypto for unic file name
        crypto.randomBytes(12, (err , bytes)=>{
            const fn=bytes.toString("hex") + path.extname(file.originalname)

            cb(null, fn)
        })
   
    }
  })
  
  const upload = multer({ storage: storage })

  // export the upload variable..
  module.exports = upload