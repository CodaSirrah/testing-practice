const reverseString = require("./reverseString")

test("function that takes a string and returns it reversed", () => {
  expect(reverseString("London bridge is falling down.")).toBe(".nwod gnillaf si egdirb nodnoL")
})

test("function that takes a string and returns it reversed", () => {
  expect(reverseString("hE sa1d sHe sa1d123456789.")).toBe(".987654321d1as eHs d1as Eh")
})