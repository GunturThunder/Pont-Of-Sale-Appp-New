const multer = require('multer')

const storage = multer.diskStorage({
    destination : (request, file, cb) =>{
        cb(null, './upload')
    },
    filename: (request, file, cb) => {
        cb(null, file.originalname)
    }
})

const fileFilter = (request, file, cb) => {
    const filemim = file.mimetype.toLowerCase()
    if (filemim === 'image/png' || filemim === 'image/jpeg' || filemim === 'image/jpg' || filemim ==='image/webp' ){
        cb(null, true)
    }
    else{
        cb(new Error('Your File Is Not Supported'), false)
    }
}

    const upload = multer({
        storage : storage,
        limits:{
            fileSize: 5*1024*1024
        },
        fileFilter: fileFilter
    })
    const uploadFIle = upload.single('image')
    module.exports = {
        uploadImage : uploadFIle
}