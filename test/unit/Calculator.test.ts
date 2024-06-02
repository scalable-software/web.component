import { Calculator } from "calculator";

describe("Given Calculator imported", () => {
  it("Then Calculator should exist", () => {
    expect(Calculator).toBeDefined();
  });
  describe("When Calculator.Add(1, 2)", () => {
    it("Then 3 should be returned", () => {
      expect(Calculator.Add(1, 2)).toBe(3);
    });
  });
  describe("When Calculator.Subtract(2,1)", () => {
    it("Then 1 should be returned", () => {
      expect(Calculator.Subtract(2, 1)).toBe(1);
    });
  });
  describe("When Calculator.Multiply(2,2)", () => {
    it("Then 4 should be returned", () => {
      expect(Calculator.Multiply(2, 2)).toBe(4);
    });
  });
  describe("When Calculator.Divide(2,2)", () => {
    it("Then 1 should be returned", () => {
      expect(Calculator.Divide(2, 2)).toBe(1);
    });
  });
});
