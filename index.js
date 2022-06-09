import wordCount from "./One/WordCounter.js"
import fibonacci from "./Two/Fibs.js"

import { fileURLToPath } from 'url'; //quickfix for __dirname not being defined, I'll look into it later
const __filename = fileURLToPath(import.meta.url);

import  express from 'express'
import  path from 'path'
import bodyParser from 'body-parser'
const __dirname = path.dirname(__filename);

const PORT = 666

const app = express()
app.use(bodyParser.json())
app.use(express.json())

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
    //console.log(req.body)
    const textInputted = req.body
    //console.log(textInputted.text)
    const numOfWords = wordCount(textInputted.text) //I need to remember what I label the things in JSON files
    //Catching empty/unacceptable instances?
    var result = ({})
    if(!textInputted.text){ 
        res.json  ({
            error: "Parameter text is missing."
    })} else{
        res.json  ({
            count: numOfWords
        })
    }
    //console.log(result)
   /*  res.json({
        result
    }) */
})

//TWO
app.get(['/fibonacci',':sequenceLength'], (req,res) => {
    //Keeping this here for later
    res.sendFile(path.join(__dirname, 'Two/Two.html')) 
    
    //console.log((req.query))
    const numInputted = req.query.sequenceLength;

    //console.log(numInputted)
    //console.log(isNaN(numInputted))
    //console.log("wee") 
    if(isNaN(numInputted)){ //consider adding a case where query is something else entirely
        res.json ({
            error: "Please enter a valid number."
    })} else {
        var out = fibonacci(numInputted)
        //console.log(out)
        res.json({
            sequence : out
        })
    }

})


app.post('/fibonacci', (req, res) => {
    const numInputted = req.body
    
    if(isNaN(numInputted.sequence)){
        res.json ({
            error: "Please enter a valid number."
        })} else {
            var out = numInputted.sequence
            res.json({
                sequence : fibonacci(out)
            })
        }
    })
  


//Testing stuff
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({
      result: parseInt(a) + parseInt(b)
    });
  });
  