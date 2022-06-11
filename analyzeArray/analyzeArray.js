const analyzeArray = (array) => {
  function average() {
   return array.reduce((prev, cur) => prev + cur, 0) / array.length
  }

  function max() {
    let maxValue = array[0]
    array.forEach(num => {
      if (num > maxValue) {
        maxValue = num
      }
    })
    return maxValue
  }

  function min() {
    let minValue = array[0]
    array.forEach(num => {
      if (num < minValue) {
        minValue = num
      }
    })
    return minValue
  }

  return {
    average: average(),
    min: min(),
    max: max(),
    length: array.length
  }
}

module.exports = analyzeArray