const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = path.join(__dirname, '..', 'public', 'uploads');
      cb(null, uploadPath)
    },
    filename: function (req, file, cb) {
      cb(
        null,
        file.fieldname + '-' + Date.now() + path.extname(file.originalname)
      )  
    },
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000000000000 },
    fileFilter: function (req, file, cb) {
        checkFileTypes(file, cb)
      },
})

function checkFileTypes(file, cb) {
    const filetypes = /jpg|jpeg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      cb(null, true);
    } else {
        cb(new Error('Error: Images Only!'));
    }
  }

module.exports = upload;