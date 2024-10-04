
 function abc()
 {
    console.log("i am inside the  function")
 }

 console.log("hai")
 setTimeout(abc,1000)
console.log("hi")
let intervel=setInterval(abc,3000)
function clear(){
    clearInterval(intervel)
    }
setTimeout(clear,8000)
