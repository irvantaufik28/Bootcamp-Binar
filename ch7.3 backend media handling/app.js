const express = require("express")
const multer = require("multer")
const app = express()
const cloudinary = require('cloudinary').v2
const fs = require('fs')
const path = require('path')
app.use(express.json())


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, path.join(__dirname, './uploads'))
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname)
    }
})

let upload = multer({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
            return callback(null, true)
        } else {
            callback(null, false)
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    }
})
cloudinary.config({
    cloud_name: 'dnvltueqb',
    api_key: '131712519741951',
    api_secret: 'hj0ZgOKOwG8l5o8vpnSwPtR6US0',
})

async function uploadCloudinary(filePath) {
    let result
    try {
        result = await cloudinary.uploader.upload(filePath, {
            use_filename: true
        })
        fs.unlinkSync(filePath)
        return result.url
    } catch (error) {
        fs.unlinkSync(filePath)
        return null
    }
}


app.post('/profile', upload.single('avatar'), async (req, res) => {

    const url = await uploadCloudinary(req.file.path)
    if (url) {
        return res.json({
            message: 'upload berhasil',
            url: url,
        })
    } else {
        return res.json({
            message: 'Upload gagal'
        })
    }

})

app.post('/photos/upload', upload.array('photos', 3), async (req, res) => {
    let urls = [];
    for (const file of req.files) {
        const url = await uploadCloudinary(file.path)
        if (url) {
            urls.push(url)
        } else {
            return res.json({
                message: 'Upload gagal'
            })
        }
    }

    return res.json({
        message: 'Upload berhasil',
        url: urls
    })
})

app.listen(3000, () => {
    console.log('server running')
})