function reverseString(string) {
  let array = string.split("")
  let newString = ""
  for (let i = array.length - 1; i >= 0; i -= 1) {
    newString += array[i]
  }
  return newString
}


module.exports = reverseString