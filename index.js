import wordCount from "./One/WordCounter.js"

import { fileURLToPath } from 'url'; //quickfix for __dirname not being defined, I'll look into it later
const __filename = fileURLToPath(import.meta.url);

import  express from 'express'
import  path from 'path'
import bodyParser from 'body-parser'
const __dirname = path.dirname(__filename);

const PORT = 666

const app = express()
app.use(bodyParser.json())

app.listen(
    PORT,
    () => console.log(`ALIVE ON http://localhost:${PORT}`)
)

//ONE
app.get('/WordsCount', (req, res) => {
 /*    res.status(200).send({
        "text": "The text to count the amount of words it has"
    }) */
    res.sendFile(path.join(__dirname, '/One/One.html'))
/*     res.json({
        text: "The text to count the amount of words it has"
    }) */
})

app.post('/WordsCount', (req, res) => {
    const textInputted = req.body;
    console.log(textInputted)
    const numOfWords = wordCount(textInputted.text)
    //Catching empty/unacceptable instances?
    if(!textInputted.text){ 
    res.send({
        error: "Parameter text is missing."
    })} else{
        res.send({
            count: numOfWords
        })
    }
})

//Testing stuff
app.post('/add', (req, res) => {
    const { a, b } = req.body;
    res.send(`The sum is: ${a + b}`)
  })