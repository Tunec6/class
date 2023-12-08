const express = require("express");
const app = express();
const fileUpload = require("express-fileupload")
const sqlite3 = require("sqlite3")
const multer = require('multer');
const bodyParser = require("body-parser");
const { eventNames } = require("process");
const form = document.getElementById('uploadForm')
const db = new sqlite3.Database('/file.db')


app.use(express.json());
app.use(bodyParser.json());

app.listen(4000, function(){
    console.log('Сервер зарущен на порту 4000')
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.get('/files', (req, res) =>{
    db.all('SELECT * FROM files', (err,rows) =>{
        res.json(res);
    });
})

app.post('/uploads',function (req, res, next) {
    const file = req.file;
    if (!file) {
        return res.json({ message: 'выберите файл' });
    }
    return res.json({ message: 'готово' });
});


form.addEventListener('submit', async(event) => {
    event.preventDefault()

    app.post('/files', (req, res) =>{
        const files = req.body
        const request   = `INSERT INTO FILES VALUES(
            null,
            '${files.name}',
            '${files.format}'
        )`
    })
})