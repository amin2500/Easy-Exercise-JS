// Write a function that takes an array of numbers and return the smallest number

function smallestNumber(array){
    let smallestNum
      for(let i = 0; i < array.length; ++i){
        if (smallestNum === undefined){
            smallestNum = array[i]
        }
        else if (smallestNum > array [i]){
            smallestNum = array [i]
        }
      }
      return smallestNum
    
}

console.log(smallestNumber([1,4,3,-1,-5]))