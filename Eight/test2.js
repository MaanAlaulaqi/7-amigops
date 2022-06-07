import fs from 'fs'


var dataSet = []
const data = fs.readFileSync('sample.txt', {encoding: 'utf-8'});

console.log(data);

console.log("YO")

dataSet = data.split(/\r\n\r\n\r\n/) //This another wacky one; /(\r?\n|\r)\d*(\r?\n|\r)/  (check https://regex101.com/r/zQ3nR3/3 for deets)

var temp = []

//Verifying no strings or chars are in the file!

var verificationCounter = 0 //If this is more than 0, then sample.txt contains other characters
for(let i = 0; i < data.length; i++){
// console.log(i + " - " +isNaN(data[i]) + " " + data[i])
if(data[i] != ',' && isNaN(data[i]) && data[i] != '.') verificationCounter++ 
}

console.log(verificationCounter + " # !!")

 if( verificationCounter != 0){
    console.log("Please enter valid numbers, separated by commas")
}else{
    for ( let i = 0; i < dataSet.length; i++){
        temp[i] = [dataSet[i]], [dataSet[i]]
        }
}

/* for(let i = 0; i < temp.length; i++){
    //console.log(temp[[i]])
    temp[[i][0]].forEach(str => {
    temp[[i][0]].push(Number(str))
  })
  
} */


//Sorting!
let uniqueNums = [];
var splitMe
for (let i = 0; i < dataSet.length; i++){
    //uniqueNums = temp[i][0]
    
    //splitMe = uniqueNums[0].split(',')
    splitMe = temp[i][0].split(',')
    console.log("ONE")
    uniqueNums = [...new Set(splitMe)]
    console.log(uniqueNums)
    console.log("TWO")
    
    uniqueNums.sort(function(a, b) {
        return a- b; // ascending order. b - a for descending
      })
      console.log(uniqueNums)
      console.log("AH")
      temp[i][1] = uniqueNums
      console.log(temp[i][0])
      console.log(temp[i][1])
      console.log('wewe')
}




