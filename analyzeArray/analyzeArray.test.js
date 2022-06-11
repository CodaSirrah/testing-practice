const analyzeArray = require("./analyzeArray")

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
  expect(analyzeArray([3, 4, 1, 8, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})

test("test includes negatives", () => {
  expect(analyzeArray([5, 3, 2, 40, 222, -53, 6])).toStrictEqual({
    average: 32.142857142857146,
    min: -53,
    max: 222,
    length: 7,
  })
})