
import fs from 'fs'


var dataSet = []
const data = fs.readFileSync('sample.txt', {encoding: 'utf-8'});

console.log(data);
console.log("YO")


//if (data.indexOf(/^[0-9]+$/)> -1){ console.log("wee " +data.indexOf(/[a-zA-Z]+/))}
//if (data.match(/^[0-9]+$/)){ console.log("wee " +data.indexOf(/[a-zA-Z]+/))} else

//SELF NOTE
// You're trying to make a 2D array, one dimension will be input, the other dimension will be the sorted result
//You somehow ended up with a 3D array 
//fix it LOL
    dataSet = data.split(/\r\n\r\n\r\n/)
    var temp = [[dataSet],[]]
    console.log("I'm TEMP! " + temp[0][0] + "AHH")

for (let i = 0; i < dataSet.length; i++){
     //temp = [[dataSet[i]],[dataSet[i].split(',')]]
     temp = [[dataSet[i]][i]] = dataSet[i].split(',')
    

    console.log(temp[dataSet[i][i]])
    console.log("Boop!")
}
console.log("I'm TEMP! " + temp[0][0] + " AHH")
console.log(temp[0][0][0].length)

//console.log(isNaN(data[15]) + " " + data[15])
 var verificationCounter = 0 //If this is more than 0, then sample.txt contains other characters
 for(let i = 0; i < data.length; i++){
   // console.log(i + " - " +isNaN(data[i]) + " " + data[i])
    if(data[i] != ',' && isNaN(data[i]) && data[i] != '.') verificationCounter++ 
    if(data[i] == ',') {
       // console.log("COMMA!")

    }
    //console.log("VER# "+ verificationCounter)
    // if((isNaN(dataSet[i]) || dataSet[i] == ',')) console.log(dataSet[i])
 }
console.log(verificationCounter)

 

//Reading local Sample.txt for now, 
//Prompt requires it to be read from C:/Assignment8/sample.txt
fs.readFileSync('sample.txt', 'utf-8', (err, data) => { 
    console.log(data)
    
}) 


console.log(dataSet)

var yarHar = []

var yarHarString = "2,3.4,56,76,4.5,4.3,4.4,4.4,5.6,3,2,35,23,5,23,45,25,25,2, 44,44,44,44,44, 55,66,3,5,3,2,2"

var yarHar = yarHarString.split(',')

/* 
for(let i = yarHarString.length; i > 0; i++){
    console.log(yarHarString.)
} */




//Scratch code below



/* 
console.log(data.length + " "  + data.charCodeAt(1))
//I feel like I'm overcomplicating this..
console.log ('\u0030'+ " " + '\u002c') //
for (let i = 0; i < data.length; i++){
    //console.log(data.charAt(i))
    if (data.charCodeAt(i) == ('\u002C' || '\u0030' || '\u0031' || '\u0032' || '\u0033' || '\u0034' || '\u0035' || '\u0036' || '\u0037' || '\u0038' || '\u0039' ||
                            '0' || '1' || '2' || '3' || 4 || 5 || 6 || 7 || 8 || 9)){
        console.log(data.charAt(i) + " ") 
    }
}
 */


//const fileToRead = path.join(__dirname, 'sample.txt') //'c:/Assignment8/sample.txt' 
