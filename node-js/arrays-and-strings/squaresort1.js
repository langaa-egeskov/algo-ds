
// using built in Array.prototype.sort()
function squareSort1(numArray) {
  let i = 0
  let square = new Array(numArray.length)
  for (i ; i < numArray.length; i++) {
    square[i] = (numArray[i])**2
  }
  return square.sort((a,b) => (a - b))
 
}



// super bad performance lol
function squareSort2(numArray) {
  // this is a brute force sort in place

  //console.log(`numArray = ${numArray}`)
  
  //let min
 
  for (let nextLowestIndex = 0 ; nextLowestIndex < numArray.length; ++nextLowestIndex) {
    // examine the segment nextLowestIndex to end of array
    // assume the first index in the segment will produce minimum square value
    let min = numArray[nextLowestIndex]

    for (let k = nextLowestIndex+1; k < numArray.length; ++k ) {
      
      // if you find a value with a smaller square, exhange the 2 and reset min
      if (numArray[k]**2< min**2) {
        min = numArray[k]  // now assume this value makes the smallest square
        numArray[k] = numArray[nextLowestIndex]
        numArray[nextLowestIndex] = min
      }
      
    }

    numArray[nextLowestIndex] = min**2
    
  }

  return numArray
}


export {squareSort1, squareSort2}

// console.log(`${squareSort1([5, 4, 3, -1])}`)

// function sort(numArray) {
//     // this is a brute force sort in place

//     console.log(`numArray = ${numArray}`)
    
//     //let min
   
//     for (let nextLowestIndex = 0 ; nextLowestIndex < numArray.length; ++nextLowestIndex) {
//       // examine the segment nextLowestIndex to end of array
//       // assume the first index in the segment is min
//       let min = numArray[nextLowestIndex]

//       for (let k = nextLowestIndex+1; k < numArray.length; ++k ) {
        
//         // if you find a smaller value, exhange the 2
//         console.log(`min=${min} numArray[${k}]=${numArray[k]}`)
//         if (numArray[k] < min) {
//           console.log(`${numArray[k]} is less than ${min} so exchange`)
//           min = numArray[k]
//           numArray[k] = numArray[nextLowestIndex]
//           numArray[nextLowestIndex] = min
          
//           //gotta reset min
//           console.log(`new order is ${numArray}`)
//         }
//         console.log(`k=${k} array=${numArray}`)
//       }
//       console.log(`FOUND MIN value ${min}`)
//       console.log(`finished with index ${nextLowestIndex}`)
//       console.log(`current state of array [${numArray}]`)
      
//     }

//     return numArray
// }


//console.log(squareSort2([11, 3, 2, -3, 7]))