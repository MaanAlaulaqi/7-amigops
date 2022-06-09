import fs from 'fs'
import  path from 'path'

 import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

fs.readdir(
    path.resolve(__dirname, 'c:/Assignment8/'),
    (err, files) => {
      if (err) throw err;
      
      for (let file of files) {
        console.log(file);
      }
    }
  ); 



// !!!
//Consider "file upload" style of reading from C:!



var yarHar = []
const fileToRead = path.join(__dirname, 'sample.txt') //'c:/Assignment8/sample.txt' 


//Reading local Sample.txt for now, 
//Prompt requires it to be read from C:/Assignment8/sample.txt
fs.readFile('C:/Assignment8/sample.txt', 'utf-8', (err, data) => { 
    if (err) {
        console.error(err)
        //return
      }
    console.log(data)
}) 


//test array  
//yarHar = [2,3.4,56,76,4.5,4.3,4.4,4.4,5.6,3,2,35,23,5,23,45,25,25,2, 44,44,44,44,44, 55,66,3,5,3,2,2];

var yarHarString = "2,3.4,56,76,4.5,4.3,4.4,4.4,5.6,3,2,35,23,5,23,45,25,25,2, 44,44,44,44,44, 55,66,3,5,3,2,2"


var yarHar = yarHarString.split(',')

//Timer start
console.time("Execution time")

let uniqueNums = [...new Set(yarHar)];
//For some reason, adding the ... before "new Set()" returns the correct array,
//But removing the ... returns it as an object in an array? 

//var begin=Date.now()
//console.log(...new Set(yarHar))
//console.log(uniqueNums)
//var end= Date.now()
// Using console.time seems to be accurate and easier, 


uniqueNums.sort(function(a, b) {
    return a - b; // ascending order. b - a for descending
  });
console.log(uniqueNums)
//Timer end -- Time it took to remove dupes and sort
console.timeEnd("Execution time") 

/* var timeSpent=(end-begin)/1000 + " seconds"
console.log(timeSpent)
console.log(begin - end) */