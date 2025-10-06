import { describe, test, it, expect } from "vitest";
import { fizzBuzz } from '../fizzbuzz';

describe('fizzBuzz', () => {
  it('returns "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(12)).toBe('Fizz');
  });

  it('returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
    expect(fizzBuzz(25)).toBe('Buzz');
  });

  it('returns "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
    expect(fizzBuzz(60)).toBe('FizzBuzz');
  });

  it('returns the number itself for non-multiples of 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(2)).toBe(2);
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(11)).toBe(11);
  });

  it('handles negative numbers correctly', () => {
    expect(fizzBuzz(-3)).toBe('Fizz');
    expect(fizzBuzz(-5)).toBe('Buzz');
    expect(fizzBuzz(-15)).toBe('FizzBuzz');
    expect(fizzBuzz(-7)).toBe(-7);
  });
});