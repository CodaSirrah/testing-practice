const caesarCipher = require("./caesarCipher")

test("test caesar cipher wrapping from z to a", () => {
  expect(caesarCipher("Hello world", 1)).toBe("Ifmmp xpsme")
})

test("test caesar letters and numbers", () => {
  expect(caesarCipher("dzadweawd321123", 8)).toBe("lhilemiel109901")
})

test("test letters numbers and different punctuation", () => {
  expect(caesarCipher("Zebra is my favorite, Tbh I'm not (really sure) if x = [mc]2 or not. {'} zack and Zack went up a hill", 26)).toBe(
    "Afcsb jt nz gbwpsjuf) Uci J$n opu %sfbmmz tvsf& jg y ? WndY0 ps opu+ {$} abdl boe Abdl xfou vq b ijmm")
})