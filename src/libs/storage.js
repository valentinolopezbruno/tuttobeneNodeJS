import multer from "multer";

// configure Multer middleware
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "imagenes")
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + "-" + file.originalname)
  }
});

const upload = multer({ storage: storage });

module.exports = upload;