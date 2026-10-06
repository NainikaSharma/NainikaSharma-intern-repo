import reducer, { increment, decrement, selectCounter } from './counterSlice';

test('starts at zero', () => {
  expect(reducer(undefined, { type: 'init' })).toEqual({ value: 0 });
});
test('increments the current value', () => {
  expect(reducer({ value: 4 }, increment())).toEqual({ value: 5 });
});
test('preserves the original lower bound of zero', () => {
  expect(reducer({ value: 0 }, decrement())).toEqual({ value: 0 });
});
test('selects the shared counter value', () => {
  expect(selectCounter({ counter: { value: 5 } })).toBe(5);
});

test('decrements a positive value', () => {
  expect(reducer({ value: 3 }, decrement())).toEqual({ value: 2 });
});
