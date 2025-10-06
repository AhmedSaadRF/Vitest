import { describe, test, it, expect } from "vitest";
import { max } from "../calculator";
import { add, multiply } from "../calculator";

describe('add', () => {
  it('should correctly add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 5)).toBe(15);
  });

  it('should handle zero', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-2, 3)).toBe(1);
  });

  it('should handle decimal numbers', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(add(1.5, 2.7)).toBeCloseTo(4.2);
  });
});

describe('multiply', () => {
  it('should correctly multiply two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(4, 5)).toBe(20);
  });

  it('should handle zero', () => {
    expect(multiply(0, 5)).toBe(0);
    expect(multiply(5, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(multiply(-2, -3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  it('should handle decimal numbers', () => {
    expect(multiply(0.1, 0.2)).toBeCloseTo(0.02);
    expect(multiply(1.5, 2)).toBe(3);
  });
});

describe('max', () => {
  it('should return the maximum value', () => {
    expect(max(1, 2)).toBe(2);
    expect(max(5, 3)).toBe(5);
    expect(max(-1, -2)).toBe(-1);
  });
});
