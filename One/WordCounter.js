//ing = "Hello there! What's your name!    HAHAH HAHAHA    WHAT"
ing = "   HELO EE     EE    GRGRE   EGDSFGDF"
ing = "  wef wefwef  wefwefwe wefwefwefwef gre     ger    rege                  ewgf   "




function wordCount(str){
    x = 0
    //y = str.split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).length
    y = str.split(/[\s]+/).length //Just spaces in a textfield 
    g = str.split(/[\s]+/)    

    for(let i = y; i > 0; i--){
        //console.log(g[i] + " " + i)
        if(g[i]) x++
    }

    return x
}




console.log(wordCount(ing))







// scrath code

/* function wordCount(str){
    console.log(str.split(String.fromCharCode(32)))
    console.log(str.split(String.fromCharCode(32)).length)
    return str.split(/\s+/).length
    //x = str

    //return x
} */
