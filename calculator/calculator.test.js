const calculator = require("./calculator")

test("adds a and b together", () => {
  expect(calculator("add", 1, 1)).toBe(2)
})

test("adds a and b together", () => {
  expect(calculator("add", 1168, -54)).toBe(1114)
})

test("subracts b from a", () => {
  expect(calculator("subtract", 64 ,123)).toBe(-59)
})

test("multiplies a and b together", () => {
  expect(calculator("multiply", 7, 7)).toBe(49)
})

test("divides a by b", () => {
  expect(calculator("divide", 80, 10)).toBe(8)
})