const form = document.getElementById('uploadForm')

form.addEventListener('submit', async(event) => {
    event.preventDefault()

    app.post('/files', (req, res) =>{
        const files = req.body
        const request   = `INSERT INTO FILES VALUES(
            null,
            '${files.name}',
            '${files.format}'
        )`

        console.log(request)
        db.run(request, (err, result) => {
            if (err) {
                return res.json(err)
            }

        res.json({
            data
    })

  })
})
    })
