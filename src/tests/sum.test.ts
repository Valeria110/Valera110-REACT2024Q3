import { sum } from './sum.ts';
import { expect, it } from 'vitest';

it('should return the sum', () => {
  expect(sum(1, 2)).toBe(3);
});
