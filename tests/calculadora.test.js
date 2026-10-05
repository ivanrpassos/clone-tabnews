const calculadora = require("../models/calculadora");

test("should call somar function and return the sum of two numbers", () => {
  expect(calculadora.somar(1, 1)).toBe(2);
});
