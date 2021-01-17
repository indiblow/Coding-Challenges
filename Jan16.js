//Jan 16 Coding Challenge

function weird(number) {
  for (let i = 1; i < number; i++) {
    if ((i * 3) % 2 !== 0) {
      console.log([i])
    }
  }
}


