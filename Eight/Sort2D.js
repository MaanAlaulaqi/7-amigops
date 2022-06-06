import FileSystem from 'fs'


var yarHar = []
const fileToRead = "C:\Assignment8\sample.txt"

/* FileSystem.readFileSync('fileToRead', 'utf-8', (err, data) => {
    console.log(data)
}) */

//test array  
yarHar = [2,3.4,56,76,4.5,4.3,4.4,4.4,5.6,3,2,35,23,5,23,45,25,25,2, 44,44,44,44,44, 55,66,3,5,3,2,2];

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
    return a - b;
  });
console.log(uniqueNums)
console.timeEnd("Execution time") 

/* var timeSpent=(end-begin)/1000 + " seconds"
console.log(timeSpent)
console.log(begin - end) */