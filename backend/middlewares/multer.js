import multer from 'multer'

const upload=multer({storage})


let storage=multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./public')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

export default upload