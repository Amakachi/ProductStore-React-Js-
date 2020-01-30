const multer = require('multer'); // Used to upload the image to the server side

const fileFilter = function(req,file,cb){
    // filter files
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024*1024*5},
    fileFilter: fileFilter    
});

module.exports = {upload}