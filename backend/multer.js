const multer = require('multer')
const path = require('path')

// Storage Configuration
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/') // Destination folder for storing uploaded files
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, Date.now() + path.extname(file.originalname)) // Unique filename
  },
})

// File filter to accept only images
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image'))
    cb(null, true)
  else
    cb(new Error('Only images are allowed'), false)
}

// Initialize multer instance
const uploadDirectory = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
})

module.exports = uploadDirectory