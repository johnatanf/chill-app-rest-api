const path = require("path");
const fs = require("fs");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "../upload/", `${req.user.id}`);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // recursive: create necessary parent folder if not exist
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload = multer({ storage });

let uploadFile = upload.single("file");

const confirmUploadFile = async (req, res) => {
  res.status(201).json({ message: "File successfully uploaded." });
};

module.exports = {
  uploadFile,
  confirmUploadFile,
};
