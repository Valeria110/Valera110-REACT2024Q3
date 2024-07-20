import { describe, expect, it } from 'vitest';
import { calcPagesCount } from './utils.ts';

describe('utils', () => {
  it('should return 1 when resultsCounts < 5', () => {
    expect(calcPagesCount(4)).toBe(1);
  });
  it('should return the correct pages count', () => {
    expect(calcPagesCount(10)).toBe(1);
    expect(calcPagesCount(30)).toBe(3);
    expect(calcPagesCount(44)).toBe(4);
    expect(calcPagesCount(55)).toBe(6);
  });
});
