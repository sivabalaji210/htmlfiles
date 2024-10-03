function callbacktext()
{
    console.log("i am the call back text")
}
function callbacktext1()
{
    console.log("i am the call back text111")
}

function add(n1,n2,a)
{
    console.log(n1+n2)
a()
}
let a=2
let b=5
add(a,b,callbacktext1)