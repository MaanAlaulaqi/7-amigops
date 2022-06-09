import fs from 'fs'
import  path from 'path'

const fileToRead = "C:/Assignment8/"
const samples = path.resolve(fileToRead, "sample.txt")

var dataSet = []
const data = fs.readFileSync(samples).toString()


 /*    fs.readFileSync (samples, 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
            return
        }
        
        console.log(data)
    }).toString */


//console.log(data);

//console.log("YO")

dataSet = data.split(/\r\n\r\n/) 
//console.log("LINE")
//console.log(dataSet)
//console.log(dataSet.length)

if(dataSet.length > 10){
  console.log("Data size capacity exceeded -- \nPlease ensure your list of numbers does not exceed 10 entries")
}else {
    
  var temp = []

  //Verifying no strings or chars are in the file!

  var verificationCounter = 0 //If this is more than 0, then sample.txt contains other characters
  for(let i = 0; i < data.length; i++){
  // console.log(i + " - " +isNaN(data[i]) + " " + data[i])
  if(data[i] != ',' && isNaN(data[i]) && data[i] != '.') verificationCounter++ 
  }

  //console.log(verificationCounter + " # !!")

  if( verificationCounter != 0){
      console.log("Please enter valid numbers, separated by commas")
  }
  else{
    for ( let i = 0; i < dataSet.length; i++){
        temp[i] = [dataSet[i]], [dataSet[i]]
        }


  //Sorting!

    let uniqueNums = [];
    var splitMe
    for (let i = 0; i < dataSet.length; i++){
        //uniqueNums = temp[i][0]
        
        //splitMe = uniqueNums[0].split(',')
        splitMe = temp[i][0].split(',')
        

        //Removing the \r\n from the elements, it's not well optimized
        //Doing it making a new sets helps eliminate any duplicates.
        for(let l =  0; l < splitMe.length; l++) splitMe[l] = splitMe[l].replace(/^\s+|\s+$/gm, '')//.replace('\n', '').replace(' ', '')
        //console.log(splitMe)
        if (splitMe.length > 10){
          console.log("Array size capacity exceeded -- \nPlease ensure your list of numbers does not exceed 10")
          break;
        }// Array doesn't exceed 10 elements

        console.log("\n#"+ (i+1) + " in the array list:")

        uniqueNums = [...new Set(splitMe)] //Removing duplicates
        var uniqueNumsMerge = uniqueNums  
        var uniqueNumsJS = uniqueNums
        //console.log(uniqueNums)
        console.time("\nMerge Sort method: ")
        mergeSort(uniqueNumsMerge)
        console.timeEnd("\nMerge Sort method: ") 
        
        console.time("JS's implement sorting method: ")
        uniqueNumsJS.sort(function(a, b){
            return a - b;
        })
        console.timeEnd("JS's implement sorting method: ")
        
        
        uniqueNums.sort(function(a, b) {
            return a- b; // ascending order. b - a for descending
          })
          //console.log(uniqueNums)
          console.log("")
          temp[i][1] = uniqueNums
          console.log(temp[i][0])
          console.log("")
          console.log("#" + (i+1) + " SORTED: \n")
          console.log(temp[i][1])
          console.log("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")

    }//End of Sorting

  } //End of IF-ELSE (verificationCounter != 0)

}//End of IF-ELSE (dataSet.length > 10) 



//Merge sort is a recursive sorting method 
//Breaking down an array(or anything really) 
//into halves, and more halves, like a binary tree
//It branches back up and concats to one another
//I'll keep both Merge and JS's sorting methods 
//for comparison (I think JS uses TimSort)
function mergeSort(arr){
    var len = arr.length;
    if(len <2)
       return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //Slice em and dice em (no dicing)
    
    return merge(mergeSort(left),mergeSort(right));
 }

 function merge(left, right){
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){ // Left < Right for asc, Left > Right for desc
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //Repaire the slices heh
    return result.concat(left.slice(l)).concat(right.slice(r));
  }