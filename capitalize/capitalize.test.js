const capitalize = require("./capitalize")

test("capitalizes 1st letter of string", () => {
  expect(capitalize("a")).toBe("A")
})

test("capitalize 1st letter of full string", () => {
  expect(capitalize("hello there")).toBe("Hello there")
})