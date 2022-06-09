import FileSystem from 'fs'
import  path from 'path'


//var yarHar = []
const fileToRead = "C:/Assignment8/"
console.log(path.resolve(fileToRead, "sample.txt"))
var beep = path.resolve(fileToRead, "sample.txt")


FileSystem.readFile(beep, 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
      }
    console.log(data)
})
const ddd = [2,3,4,6,7,4,3,5,3,23,45,43,42,425,65,34,45.23,452,3,4,6,7,4,3,5,3,23,45,43,42,425,65,34,45.23,454,4,4,4,5,6,67,7,3,54,3,443,5,5,45,45,656,56]

console.log("Merge Sort method: ")
console.time("Execution time")
console.log(mergeSort(ddd))
console.timeEnd("Execution time") 

console.log("JS's implement sorting method: ")
console.time("Execution time")
ddd.sort(function(a, b) {
    return a - b; // ascending order. b - a for descending
  })
console.timeEnd("Execution time") 


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