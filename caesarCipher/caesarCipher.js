const caesarCipher = (string, value) => {
  let newString =  ""
  const array = []
  const cipherArray = []
  if (typeof value !== "number" || value < 0) {
    value = 1
    }
  let shiftPunc1 = value, shiftPunc2 = value, shiftPunc3 = value, shiftPunc4 = value, shiftDigit = value, shiftAlpha = value

  if (value > 14) {
    shiftPunc1 = value % 14
  } else {
    shiftPunc1 = value
  }

  if (value > 9) {
    shiftDigit = value % 9
  } else {
    shiftDigit = value
  }

  if (value > 6) {
    shiftPunc2 = value % 6
  } else {
    shiftPunc2 = value
  }

  if (value > 25) {
    shiftAlpha = value % 25
  } else {
    shiftAlpha = value
  }

  if (value > 5) {
    shiftPunc3 = value % 5
  } else {
    shiftPunc3 = value
  }

  if (value > 3) {
    shiftPunc4 = value % 3
  } else {
    shiftPunc4 = value
  }

  for (let i = 0; i < string.length; i += 1) {
    array.push(string.charCodeAt(i))
    // Punc1
    if (array[i] <= 47 && array[i] >= 33) {
      if (array[i] + shiftPunc1 >  47) {
        array[i] += (shiftPunc1 - 15)
      } else {
        array[i] += shiftPunc1
      }
    }

    //Punc2
    if (array[i] <= 64 && array[i] >= 58) {
      if (array[i] + shiftPunc2 >  64) {
        array[i] += (shiftPunc2 - 7)
      } else {
        array[i] += shiftPunc2
      }
    }

     //Punc3
     if (array[i] <= 96 && array[i] >= 91) {
      if (array[i] + shiftPunc3 >  64) {
        array[i] += (shiftPunc3 - 6)
      } else {
        array[i] += shiftPunc3
      }
    }

    //Punc4
    if (array[i] <= 123 && array[i] >= 126) {
      if (array[i] + shiftPunc4 >  126) {
        array[i] += (shiftPunc4 - 4)
      } else {
        array[i] += shiftPunc4
      }
    }

      //digit
    if (array[i] <= 57 && array[i] >= 48) {
      if (array[i] + shiftDigit >  57) {
        array[i] += (shiftDigit - 10)
      } else {
        array[i] += shiftDigit
      }
    }

      //Alpha uppercase
    if (array[i] <= 90 && array[i] >= 65) {
      if (array[i] + shiftAlpha >  90) {
        array[i] += (shiftAlpha - 26)
      } else {
        array[i] += shiftAlpha
      }
    }

      //Alpha lowercase
    if (array[i] <= 122 && array[i] >= 97) {
      if (array[i] + shiftAlpha >  122) {
        array[i] += (shiftAlpha - 26)
      } else {
        array[i] += shiftAlpha
      }
    }
    cipherArray.push((array[i]))
    newString += String.fromCharCode(cipherArray[i])
  }
  return newString
  
}

module.exports = caesarCipher