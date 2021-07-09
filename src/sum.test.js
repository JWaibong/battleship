import{capitalize} from './functions.js';


test('works on empty string', () => {
  expect(capitalize("")).toBe("");
});

test('works on all caps string', () => {
  expect(capitalize("ABC")).toBe("ABC");
});

test('works on all lowercase string', () => {
  expect(capitalize("abc")).toBe("Abc");
});

test('works on numbers', () => {
  expect(capitalize("a123")).toBe("A123");
});

test('works on strings starting with numbers', () => {
  expect(capitalize("1123")).toBe("1123");
});

import{analyze} from './functions.js';

test('works on empty array', ()=> {
  expect(analyze([])).toBe(null);
})

test('works on one element array', () => {
  expect(analyze([5])).toStrictEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
})

test('works on multiple element array', () => {
  expect(analyze([1,2,3,4])).toStrictEqual({
    average: 10.0/4,
    min: 1,
    max: 4,
    length: 4
  });
})

test('works on array with negative integers', () => {
  expect(analyze([-1,-2,3,4])).toStrictEqual({
    average: 1,
    min: -2,
    max: 4,
    length: 4
  });
})