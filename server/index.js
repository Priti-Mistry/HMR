const express=require('express')
const app= express()

const cors = require('cors')
const multer = require('multer')


app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      return cb(null, "./public/Images")
    },
    filename: function (req, file, cb) {
      return cb(null, `${Date.now()}_${file.originalname}`)
    }
  })
  
  const upload = multer({storage})
  
  app.post('/upload', upload.single('file'), (req, res) => {
    console.log(req.body)
    console.log(req.file.path)
    res.status(200).json("uploaded successful.")
  })

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})