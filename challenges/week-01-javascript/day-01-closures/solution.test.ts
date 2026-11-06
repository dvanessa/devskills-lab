import { describe, expect, it } from 'vitest';
import { createCounter } from './solution';

describe('Day 01: createCounter', () => {
  it('increments from zero by default', () => {
    const next = createCounter();
    expect(next()).toBe(1);
    expect(next()).toBe(2);
  });
  it('starts from a custom initial value', () => {
    const next = createCounter(5);
    expect(next()).toBe(6);
    expect(next()).toBe(7);
  });
  it('keeps counters independent', () => {
    const a = createCounter(0);
    const b = createCounter(10);
    expect(a()).toBe(1);
    expect(b()).toBe(11);
    expect(a()).toBe(2);
  });
  it('handles negative starting values', () => {
    const next = createCounter(-2);
    expect(next()).toBe(-1);
    expect(next()).toBe(0);
  });
});
