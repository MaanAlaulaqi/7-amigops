import fs from 'fs'


var dataSet = []
const data = fs.readFileSync('sample.txt', {encoding: 'utf-8'});

//console.log(data);

//console.log("YO")

dataSet = data.split(/(\r\n\r\n)/) //This another wacky one; /(\r?\n|\r)\d*(\r?\n|\r)/  (check https://regex101.com/r/zQ3nR3/3 for deets)
//console.log("LINE")
console.log(dataSet)
//console.log(dataSet.length)

if(dataSet.length > 10){
  console.log("Please ensure your list of numbers does not exceed 10 entries")
}else {
    
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
        //for(let l =  0; l < splitMe.length; l++) splitMe[l] = splitMe[l].replace('\r', '').replace('\n', '').replace(' ', '')
        //console.log(splitMe)
        if (splitMe.length > 10){
          console.log("Please ensure your list of number does not exceed 10")
          break;
        }// Array doesn't exceed 10 elements

        uniqueNums = [...new Set(splitMe)] //Removing duplicates
          
        //console.log(uniqueNums)
        
        
        uniqueNums.sort(function(a, b) {
            return a- b; // ascending order. b - a for descending
          })
          //console.log(uniqueNums)
          console.log("#"+ (i+1) + " in the array list:")
          console.log("")
          temp[i][1] = uniqueNums
          console.log(temp[i][0])
          console.log("")
          console.log("#" + (i+1) + " SORTED: ")
          console.log("")
          console.log(temp[i][1])
          console.log("")
          console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
          console.log("")
    }//End of Sorting

  } //End of IF-ELSE (verificationCounter != 0)

}//End of IF-ELSE (dataSet.length > 10) 


