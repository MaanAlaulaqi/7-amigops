const  wdwd = 10



//  Almost killed my laptop this one
function fib(x){
    if (x == 0) return 0
    if (x == 1) return 1
     var y = fib (x - 1) + fib (x - 2)
     console.log(y)
     return y
}


//HUGE note, the prompt wants the WHOLE series printed out, and not 
//just the final result. I think I'll have to use the Fib function for this

//This one uses Binet's formula, it should be
//a little faster and lighter on the CPU. (note: might replace Math.sqrt(5) withan approximation 2.23606797749979)
//A little bit more precise approximation, for whatever reason: 2.23606797749978969640917366873127623544061835961152572427089
function binet(n) {
    return Math.round((Math.pow((1 + Math.sqrt(5)) / 2, n)
         - Math.pow((1 - Math.sqrt(5)) / 2, n)) / Math.sqrt(5));
}


function fibonacci(n)
{
    var fib;
    for(var i = 0; i <= n; i++)
    {
           
        // Using direct formula
        fib = (Math.pow((1 + Math.sqrt(5)), i) -
               Math.pow((1 - Math.sqrt(5)), i)) /
           (Math.pow(2, i) * Math.sqrt(5));
           
           console.log(parseInt(fib) + " "); 
        
    }
}

fibonacci(wdwd)
console.log(" ") 

console.log(binet(wdwd)) 

