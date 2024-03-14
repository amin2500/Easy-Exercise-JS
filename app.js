//1. write a function that takes in two numbers and returns the sum of them.
//2 .write a function that takes in two numbers and returns true if their sum is equal to 100.
//3. write a function that takes in two numbers and returns true if they're less than or equal to 0.
//4. write a function that takes in a string and adds "Hello" to the begining of it.
//5. write a function that takes in a string and returns a secret message if it is equal to "password".
//6. write a function that takes in an array and rerurns the first element.
//7. write a function that takes in an array and return the last element.


// 1.
function sumoftwonumbers(num1,num2){
    return num1+num2
}
console.log(sumoftwonumbers(22,13))

// 2.
function sumoftwonumbersequal100(num1,num2){
   const sum=num1+num2
   if(sum===100){
    return true
   }
   else{
    return false
   }
}
console.log(sumoftwonumbersequal100(50,50))
// 3.

function lessthanorequaltozero(num){
    return num <=0
}
console.log(lessthanorequaltozero(0))

// 4.
function addstring(string){
    return  "Hello" + " " + string
}
console.log(addstring("Amin"))

// 5.
// Method 1
function secretmessage(string){
    if(string==="password"){
        return "secert"
    }
    else{
        return "no secert"
    }
}
console.log(secretmessage("password"))

// Method 2
function secretmessage(string){
    const results= string==="password"?
    "secret":"no secret"
    return results
}

console.log(secretmessage("hi"))

// 6.
function firstelement(array){
    return array[2]
}

console.log(firstelement("Hello"))

// 7.

function lastelement(array){
     return array[array.length -1]
}

console.log(lastelement("Hello"))