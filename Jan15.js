// Jan 15 Coding Challenge

// for loop
function oddNumsI(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      newArr.push(array[i])
    }
  }
  console.log(newArr)
}

// forEach loop
function oddNumsII(array) {
  let newArr = []
  array.forEach((element, i) => {
    if (array[i] % 2 !== 0) {
      newArr.push(array[i])
    }
  })
  console.log(newArr)
}

