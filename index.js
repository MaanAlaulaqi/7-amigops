const  app = require('express')()
const path = require('path')
const PORT = 666

app.listen(
    PORT,
    () => console.log(`ALIVE ON http://localhost:${PORT}`)
)

app.get('/WordsCount', (req, res) => {
 /*    res.status(200).send({
        "text": "The text to count the amount of words it has"
    }) */
    res.sendFile(path.join(__dirname, '/One/One.html'))
/*     res.json({
        text: "The text to count the amount of words it has"
    }) */
})
